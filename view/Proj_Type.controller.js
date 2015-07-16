sap.ui
		.controller(
				"sap.Aero_IT_Demand.prototype.view.Proj_Type",
				{

					/**
					 * Called when a controller is instantiated and its View
					 * controls (if available) are already created. Can be used
					 * to modify the View before it is displayed, to bind event
					 * handlers and do other one-time initialization.
					 * 
					 * @memberOf view.Proj_Type
					 */
					onInit : function() {

						var proj_type_model = new sap.ui.model.json.JSONModel();
						proj_type_model.loadData("json/proj_type.json", "",
								false);
						this.getView().setModel(proj_type_model,
								"ProjectTypeModel");
						sap.ui.getCore().setModel(proj_type_model,
								"ProjectTypeModel");

						var proj_type_sel_model = new sap.ui.model.json.JSONModel();
						proj_type_sel_model.loadData("json/proj_type.json", "",
								false);
						this.getView().setModel(proj_type_sel_model,
								"ProjectTypeSelectModel");
						sap.ui.getCore().setModel(proj_type_sel_model,
								"ProjectTypeSelectModel");

						var oVizFrame4 = this.getView().byId("idoVizFrame4");
						var oDataset4 = new sap.viz.ui5.data.FlattenedDataset({
							'dimensions' : [ {
								'name' : 'Type',
								'value' : "{ProjectTypeModel>title}"
							} ],

							'measures' : [ {
								'name' : 'Total',
								'value' : '{ProjectTypeModel>type}'
							} ],
							'data' : {
								'path' : "ProjectTypeModel>/List"
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
												'uid' : "Type",
												'type' : "Dimension",
												'name' : "title"
											}) ]
								});

						oVizFrame4.setDataset(oDataset4);
						oVizFrame4.setModel(proj_type_model);
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
					 * @memberOf view.Proj_Type
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
					 * @memberOf view.Proj_Type
					 */
					onAfterRendering : function() {
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
					 * @memberOf view.Proj_Type
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
						var mData = this.getView().getModel(
								"ProjectTypeSelectModel").getData();
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
							this.getView().getModel("ProjectTypeModel")
									.setData({
										"List" : newData1
									});
						} else {
							this.getView().getModel("ProjectTypeModel")
									.setData({
										"List" : newData
									});
						}
					}

				});
