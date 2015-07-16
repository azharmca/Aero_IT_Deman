sap.ui.controller("sap.Aero_IT_Demand.prototype.view.FilterList",
		{

			/**
			 * Called when a controller is instantiated and its View controls
			 * (if available) are already created. Can be used to modify the
			 * View before it is displayed, to bind event handlers and do other
			 * one-time initialization.
			 * 
			 * @memberOf view.FilterList
			 */
			onInit : function() {

				var fcode_model = new sap.ui.model.json.JSONModel(
						"json/it_fcode.json");
				var fcode_model1 = new sap.ui.model.json.JSONModel(
						"json/it_fcode.json");
				this.getView().setModel(fcode_model, "ChartModel");

				this.getView().setModel(fcode_model1, "SelectModel");

				// var coreModel = new sap.ui.model.json.JSONModel();
				// coreModel.loadData("json/it_fcode.json","",false);

				sap.ui.getCore().setModel(fcode_model1, "SelectModel");
				sap.ui.getCore().setModel(fcode_model, "ChartModel");

			},

			/**
			 * Similar to onAfterRendering, but this hook is invoked before the
			 * controller's View is re-rendered (NOT before the first rendering!
			 * onInit() is used for that one!).
			 * 
			 * @memberOf view.FilterList
			 */
			// onBeforeRendering: function() {
			//
			// },
			/**
			 * Called when the View has been rendered (so its HTML is part of
			 * the document). Post-rendering manipulations of the HTML could be
			 * done here. This hook is the same one that SAPUI5 controls get
			 * after being rendered.
			 * 
			 * @memberOf view.FilterList
			 */
			onAfterRendering : function() {
				/* Adding ALL ITEMS to Select */
				// var oController = this;
				// jQuery.sap.delayedCall(1000, this, function() {
				// var oSelect = oController.byId("ProductList");
				// var itemx = new sap.ui.core.Item({
				// key : "X",
				// text : "All Items"
				// });
				// oSelect.addItem(itemx);
				// // oSelect.selectedItems(itemx);
				// });
			},
			/**
			 * Called when the Controller is destroyed. Use this one to free
			 * resources and finalize activities.
			 * 
			 * @memberOf view.FilterList
			 */
			// onExit: function() {
			//
			// }
			onSelectItem : function(oEvt) {
				var selectedValue = oEvt.getSource().getSelectedItems();
				// .getText();
				var mData = this.getView().getModel("SelectModel").getData();
				var newData = [];
				var newData1 = [];
				var oAll = false;

				$.each(selectedValue, function() {
					var mText = this.getTitle();
					$.each(mData.IT_FCODE, function(vIndex) {
						if (mText == "") {
							oAll = true;
							return true;
						}
						if (mText == "All Items") {
							oAll = true;
							return true;
						}
						if (mText == this.fcode) {
							newData.push(this);
							return false;
						}
					});
				});
				if (oAll == true || selectedValue.length == 0) {
					$.each(mData.IT_FCODE, function(vIndex1) {
						newData1.push(this);
					});
					this.getView().getModel("ChartModel").setData({
						"IT_FCODE" : newData1
					});
				} else {
					this.getView().getModel("ChartModel").setData({
						"IT_FCODE" : newData
					});
				}
			},

			showGraph : function(evt) {
				var oApp = sap.ui.getCore().byId("splitApp");
		   		oApp.toDetail("Chart1");
			}

		});
