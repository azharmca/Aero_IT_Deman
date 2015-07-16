sap.ui
		.controller(
				"sap.Aero_IT_Demand.prototype.view.ITFcoe",
				{

					/**
					 * Called when a controller is instantiated and its View
					 * controls (if available) are already created. Can be used
					 * to modify the View before it is displayed, to bind event
					 * handlers and do other one-time initialization.
					 * 
					 * @memberOf view.ITFcoe
					 */
					onInit : function() {

						var fcode_model = new sap.ui.model.json.JSONModel(
								"json/it_fcode.json");
						this.getView().setModel(fcode_model, "ChartModel");
						sap.ui.getCore().setModel(fcode_model, "ChartModel");

						var fcode_model1 = new sap.ui.model.json.JSONModel(
								"json/it_fcode.json");
						this.getView().setModel(fcode_model1, "SelectModel");
						sap.ui.getCore().setModel(fcode_model1, "SelectModel");

						var oVizFrame4 = this.getView().byId("idoVizFrame4");
						var oDataset4 = new sap.viz.ui5.data.FlattenedDataset({
							'dimensions' : [ {
								'name' : 'IT Fcode',
								'value' : "{ChartModel>title}"
							} ],

							'measures' : [ {
								'name' : 'Total',
								'value' : '{ChartModel>description}'
							} ],
							'data' : {
								'path' : "ChartModel>/List"
							}
						});

						var feedPrimaryValues4 = new sap.viz.ui5.controls.common.feeds.FeedItem(
								{
									'uid' : "primaryValues",
									'type' : "Measure",
									'values' : [ "Total" ]
								}), feedAxisLabels4 = new sap.viz.ui5.controls.common.feeds.FeedItem(
								{
									'uid' : "axisLabels",
									'type' : "Dimension",
									'values' : [ new sap.viz.ui5.controls.common.feeds.AnalysisObject(
											{
												'uid' : "IT Fcode",
												'type' : "Dimension",
												'name' : "title"
											}) ]
								});

						oVizFrame4.setDataset(oDataset4);
						oVizFrame4.setModel(fcode_model);
						oVizFrame4.addFeed(feedPrimaryValues4);
						oVizFrame4.addFeed(feedAxisLabels4);
						oVizFrame4.setVizType('column');

						oVizFrame4.setVizProperties({
							plotArea : {
								dataLabel : {
									visible : true,
									formatString : "#,##0"
								}
							},
							legend : {
								title : {
									visible : false
								}
							},

							title : {
								visible : true,
								text : ' '
							}
						});
					},
					/**
					 * Similar to onAfterRendering, but this hook is invoked
					 * before the controller's View is re-rendered (NOT before
					 * the first rendering! onInit() is used for that one!).
					 * 
					 * @memberOf view.ITFcoe
					 */
					// onBeforeRendering: function() {
					//
					// },
					/**
					 * Called when the View has been rendered (so its HTML is
					 * part of the document). Post-rendering manipulations of
					 * the HTML could be done here. This hook is the same one
					 * that SAPUI5 controls get after being rendered.
					 * 
					 * @memberOf view.ITFcoe
					 */
					onAfterRendering : function() {
						/* Adding ALL ITEMS to Select */
						 var oController = this;
						jQuery.sap.delayedCall(1000, this, function() {
							var oSelect = this.byId("idoSelect1");
							var itemx = new sap.ui.core.Item({
								key : "X",
								text : "All Items"
							});
							oSelect.addItem(itemx);
							// oSelect.selectedItems(itemx);
						});
					},
					/**
					 * Called when the Controller is destroyed. Use this one to
					 * free resources and finalize activities.
					 * 
					 * @memberOf view.ITFcoe
					 */
					// onExit: function() {
					//
					// }
					backToMain : function(oEvt) {
						var router = sap.ui.core.UIComponent.getRouterFor(this);
						var vLinkText = "Tile";
						// Write Cases for each Link
						switch (vLinkText) {
						case "Tile":
							router.navTo("Tile", null, true);
							break;
						default:
							router.navTo("", null, true);
						}
					},

					onSelectItem : function(oEvt) {
						var selectedValue = oEvt.getSource().getSelectedItems();
						// .getText();
						var mData = this.getView().getModel("SelectModel")
								.getData();
						var newData = [];
						var newData1 = [];
						var oAll = false;

						$.each(selectedValue, function() {
							var mText = this.getText();
							$.each(mData.List, function(vIndex) {
								if (mText == "") {
									oAll = true;
									return true;
								}
								if (mText == "All Items") {
									oAll = true;
									return true;
								}
								if (mText == this.title) {
									newData.push(this);
									return false;
								}
							});
						});
						if (oAll == true || selectedValue.length == 0) {
							$.each(mData.List, function(vIndex1) {
								newData1.push(this);
							});
							this.getView().getModel("ChartModel").setData({
								"List" : newData1
							});
						} else {
							this.getView().getModel("ChartModel").setData({
								"List" : newData
							});
						}
					}

				});
