sap.ui.controller("sap.Aero_IT_Demand.prototype.view.Proj_Stage_Details", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf view.Proj_Stage_Details
	 */
	onInit : function() {
		var ProjectList = new sap.ui.model.json.JSONModel();
		ProjectList.loadData("json/ITFCOE_Projects.json", "", false);
		this.getView().setModel(ProjectList, "ProjStageList");
		var ProjectList = ProjectList.getData();

		// FOR Segment Default
		var idForsegmButtons = this.byId("HeaderSegment").getId();
		var idForbtnAll = this.byId("btnAllProjects").getId();
		var idForbtnPipe = this.byId("btnPipeLine").getId();
		var idForbtnJust = this.byId("btnJustification").getId();
		var idForbtnAppr = this.byId("btnApproval").getId();
		var idForbtnReq = this.byId("btnRequirements").getId();
		var idForbtnDesign = this.byId("btnDesign").getId();
		var idForbtnConst = this.byId("btnConstruct").getId();
		var idForbtnWar = this.byId("btnWarranty").getId();

		var ids1 = {
			"HeaderSegment" : idForsegmButtons,
			"btnAllProjects" : idForbtnAll,
			"btnPipeLine" : idForbtnPipe,
			"btnJustification" : idForbtnJust,
			"btnApproval" : idForbtnAppr,
			"btnRequirements" : idForbtnReq,
			"btnDesign" : idForbtnDesign,
			"btnConstruct" : idForbtnConst,
			"btnWarranty" : idForbtnWar
		};
		var proj_stage_model = new sap.ui.model.json.JSONModel(ids1);
		sap.ui.getCore().setModel(ids1, "idProjectStage");

	},
	/**
	 * Similar to onAfterRendering, but this hook is invoked before the
	 * controller's View is re-rendered (NOT before the first rendering!
	 * onInit() is used for that one!).
	 * 
	 * @memberOf view.Proj_Stage_Details
	 */
	// onBeforeRendering: function() {
	//
	// },
	/**
	 * Called when the View has been rendered (so its HTML is part of the
	 * document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * 
	 * @memberOf view.Proj_Stage_Details
	 */
	// onAfterRendering: function() {
	//
	// },
	/**
	 * Called when the Controller is destroyed. Use this one to free resources
	 * and finalize activities.
	 * 
	 * @memberOf view.Proj_Stage_Details
	 */
	// onExit: function() {
	//
	// }
	backToMain : function(oEvt) {
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		var vLinkText = "All_Projects";
		// Write Cases for each Link
		switch (vLinkText) {
		case "All_Projects":
			router.navTo("All_Projects", null, true);
			break;
		default:
			router.navTo("", null, true);
		}
	},

	onClickAllProj : function(oEvt) {
		var aFilters = [];
		var sQuery = "";
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("",
					sap.ui.model.FilterOperator.Contains, sQuery);
			aFilters.push(filter);
		}
		var list = this.byId("ProjectListDataId");
		var binding = list.getBinding("items");
		binding.filter(aFilters, "Application");
	},

	onClickPipeline : function(oEvt) {
		var aFilters = [];
		var sQuery = "Pipeline";
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("stage",
					sap.ui.model.FilterOperator.Contains, sQuery);
			aFilters.push(filter);
		}
		var list = this.byId("ProjectListDataId");
		var binding = list.getBinding("items");
		binding.filter(aFilters, "Application");
	},

	onClickJustification : function(oEvt) {

		var aFilters = [];
		var sQuery = "Justification";
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("stage",
					sap.ui.model.FilterOperator.Contains, sQuery);
			aFilters.push(filter);
		}
		var list = this.byId("ProjectListDataId");
		var binding = list.getBinding("items");
		binding.filter(aFilters, "Application");
	},

	onClickApproval : function(oEvt) {
		var aFilters = [];
		var sQuery = "Approval";
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("stage",
					sap.ui.model.FilterOperator.Contains, sQuery);
			aFilters.push(filter);
		}
		var list = this.byId("ProjectListDataId");
		var binding = list.getBinding("items");
		binding.filter(aFilters, "Application");
	},

	onClickRequirements : function(oEvt) {
		var aFilters = [];
		var sQuery = "Requirements";
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("stage",
					sap.ui.model.FilterOperator.Contains, sQuery);
			aFilters.push(filter);
		}
		var list = this.byId("ProjectListDataId");
		var binding = list.getBinding("items");
		binding.filter(aFilters, "Application");
	},

	onClickDesign : function(oEvt) {
		var aFilters = [];
		var sQuery = "Design";
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("stage",
					sap.ui.model.FilterOperator.Contains, sQuery);
			aFilters.push(filter);
		}
		var list = this.byId("ProjectListDataId");
		var binding = list.getBinding("items");
		binding.filter(aFilters, "Application");
	},

	onClickConstruct : function(oEvt) {
		var aFilters = [];
		var sQuery = "Construct";
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("stage",
					sap.ui.model.FilterOperator.Contains, sQuery);
			aFilters.push(filter);
		}
		var list = this.byId("ProjectListDataId");
		var binding = list.getBinding("items");
		binding.filter(aFilters, "Application");
	},

	onClickWarranty : function(oEvt) {
		var aFilters = [];
		var sQuery = "Warranty";
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("stage",
					sap.ui.model.FilterOperator.Contains, sQuery);
			aFilters.push(filter);
		}
		var list = this.byId("ProjectListDataId");
		var binding = list.getBinding("items");
		binding.filter(aFilters, "Application");
	}

});
