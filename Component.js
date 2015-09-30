jQuery.sap.declare("sap.wed.invitation.Component");
// jQuery.sap.require("sap.Aero_IT_Demand.prototype.Formatter");
// jQuery.sap.includeStyleSheet("css/TimeSheet.css");
jQuery.sap.require("sap.ui.core.routing.History");
jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
jQuery.sap.require("sap.m.MessageBox");

sap.ui.core.UIComponent.extend("sap.wed.invitation.Component",
		{
			metadata : {
				routing : {
					config : {
						viewType : "XML",
						viewPath : "sap.wed.invitation.view",
						targetControl : "fioriContent",
						targetAggregation : "pages",
						clearTarget : false
					},
					routes : {
						"Launch" : {
							pattern : "",
							view : "Launch"
						},
						"NusratWedding" : {
							pattern : "NusratWedding",
							view : "NusratWedding"
						},
						"Marriage_Venue" : {
							pattern : "Marriage_Venue",
							view : "Marriage_Venue"
						},
						"SwalehaWedding" : {
							pattern : "SwalehaWedding",
							view : "SwalehaWedding"
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
					viewName : "sap.wed.invitation.view.Home",
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
