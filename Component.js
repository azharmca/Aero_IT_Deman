jQuery.sap.declare("sap.Aero_IT_Demand.prototype.Component");
// jQuery.sap.require("sap.Aero_IT_Demand.prototype.Formatter");
// jQuery.sap.includeStyleSheet("css/TimeSheet.css");
jQuery.sap.require("sap.ui.core.routing.History");
jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
jQuery.sap.require("sap.m.MessageBox");

sap.ui.core.UIComponent.extend("sap.Aero_IT_Demand.prototype.Component",
		{
			metadata : {
				routing : {
					config : {
						viewType : "XML",
						viewPath : "sap.Aero_IT_Demand.prototype.view",
						targetControl : "fioriContent",
						targetAggregation : "pages",
						clearTarget : false
					},
					routes : {
						"main" : {
							pattern : "",
							view : "Tile"
						},
						"ITFcoe" : {
							pattern : "ITFcoe",
							view : "ITFcoe"
						},
						"Tile" : {
							pattern : "Tile",
							view : "Tile"
						},
						"Proj_Stage" : {
							pattern : "Proj_Stage",
							view : "Proj_Stage"
						},
						"Proj_Status" : {
							pattern : "Proj_Status",
							view : "Proj_Status"
						},
						"Proj_Type" : {
							pattern : "Proj_Type",
							view : "Proj_Type"
						},
						"ITFCOE_Projects" : {
							pattern : "ITFCOE_Projects",
							view : "ITFCOE_Projects"
						},
						"All_Projects" : {
							pattern : "All_Projects",
							view : "All_Projects"
						},
						"Proj_Stage_Details" : {
							pattern : "Proj_Stage_Details",
							view : "Proj_Stage_Details"
						},
						"Proj_Status_Details" : {
							pattern : "Proj_Status_Details",
							view : "Proj_Status_Details"
						},
						"Proj_Type_Details" : {
							pattern : "Proj_Type_Details",
							view : "Proj_Type_Details"
						}
					}
				}
			},
			init : function() {
				sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
				this._oRouter = this.getRouter();
				this.routeHandler = new sap.m.routing.RouteMatchedHandler(
						this._oRouter);
				this._oRouter.initialize();
			},
			createContent : function() {
				// Gateway service model
				// var url = "proxy/sap/opu/odata/sap/ZTIMESHEET_GW_SRV/";
				// oDataModel = new sap.ui.model.odata.ODataModel(url);
				// sap.ui.getCore().setModel(oDataModel);
				sIdSelected = "";
				this.oView = new sap.ui.view({
					height : "100%",
					viewName : "sap.Aero_IT_Demand.prototype.view.Main",
					type : "XML",
					viewData : {
						component : this
					}
				});

				var i18nModel = new sap.ui.model.resource.ResourceModel({
					bundleUrl : "i18n/messagebundleTS.properties"
				});
				sap.ui.getCore().setModel(i18nModel, "i18n");
				this.oView.setModel(i18nModel, "i18n");
				return this.oView;
			},
			destroy : function() {
				if (this.routeHandler) {
					this.routeHandler.destroy();
				}
				sap.ui.core.UIComponent.destroy.apply(this, arguments);
			}
		});
