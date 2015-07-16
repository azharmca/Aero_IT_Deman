sap.ui.controller("sap.Aero_IT_Demand.prototype.view.Proj_Type_Details", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf view.Proj_Type_Details
	 */
	onInit : function() {
		var fcode_model = new sap.ui.model.json.JSONModel(
				"json/ITFCOE_Projects.json");
		this.getView().setModel(fcode_model, "ProjectTypeDetails");
		sap.ui.getCore().setModel(fcode_model, "ProjectTypeDetails");

		// FOR Segment Default
		var idForsegmButtons = this.byId("HeaderSegment").getId();
		var idForbtnAll = this.byId("btnAll").getId();
		var idForbtnAct = this.byId("btnActive").getId();
		var idForbtnCanc = this.byId("btnCancelled").getId();
		var idForbtnComp = this.byId("btnCompleted").getId();
		var idForbtnHold = this.byId("btnOnHold").getId();

		var ids1 = {
			"HeaderSegment" : idForsegmButtons,
			"btnAll" : idForbtnAll,
			"btnActive" : idForbtnAct,
			"btnCancelled" : idForbtnCanc,
			"btnCompleted" : idForbtnComp,
			"btnOnHold" : idForbtnHold
		};
		var proj_stage_model = new sap.ui.model.json.JSONModel(ids1);
		sap.ui.getCore().setModel(ids1, "idProjectType");
	},
	/**
	 * Similar to onAfterRendering, but this hook is invoked before the
	 * controller's View is re-rendered (NOT before the first rendering!
	 * onInit() is used for that one!).
	 * 
	 * @memberOf view.Proj_Type_Details
	 */
	// onBeforeRendering: function() {
	//
	// },
	/**
	 * Called when the View has been rendered (so its HTML is part of the
	 * document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * 
	 * @memberOf view.Proj_Type_Details
	 */
	// onAfterRendering: function() {
	//
	// },
	/**
	 * Called when the Controller is destroyed. Use this one to free resources
	 * and finalize activities.
	 * 
	 * @memberOf view.Proj_Type_Details
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

	// All Segment Selection
	onClickAll : function(oEvt) {
		var aFilters = [];
		var sQuery = "";
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("",
					sap.ui.model.FilterOperator.Contains, sQuery);
			aFilters.push(filter);
		}
		var list = this.byId("ProjectListId");
		var binding = list.getBinding("items");
		binding.filter(aFilters, "Application");

		// objTotalCompleted.setNumber(allCompleted);
		// objTotalActive.setNumber(allActive);
		// objTotalPipeline.setNumber(allPipeline);
	},

	// Infrasctructure Only Segment selection
	onClickInfrastructure : function(oEvt) {
		var aFilters = [];
		var sQuery = "Infrastructure Only";
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("proj_type",
					sap.ui.model.FilterOperator.Contains, sQuery);
			aFilters.push(filter);
		}
		var list = this.byId("ProjectListId");
		var binding = list.getBinding("items");
		binding.filter(aFilters, "Application");

		// objTotalCompleted.setNumber(apacCompleted);
		// objTotalActive.setNumber(apacActive);
		// objTotalPipeline.setNumber(apacPipeline);
	},

	// Program Segment selection
	onClickProgram : function(oEvt) {
		var aFilters = [];
		var sQuery = "Program";
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("proj_type",
					sap.ui.model.FilterOperator.Contains, sQuery);
			aFilters.push(filter);
		}
		var list = this.byId("ProjectListId");
		var binding = list.getBinding("items");
		binding.filter(aFilters, "Application");

		// objTotalCompleted.setNumber(apacCompleted);
		// objTotalActive.setNumber(apacActive);
		// objTotalPipeline.setNumber(apacPipeline);
	},

	// Project Segment selection
	onClickProject : function(oEvt) {
		var aFilters = [];
		var sQuery = "Project";
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("proj_type",
					sap.ui.model.FilterOperator.Contains, sQuery);
			aFilters.push(filter);
		}
		var list = this.byId("ProjectListId");
		var binding = list.getBinding("items");
		binding.filter(aFilters, "Application");

		// objTotalCompleted.setNumber(apacCompleted);
		// objTotalActive.setNumber(apacActive);
		// objTotalPipeline.setNumber(apacPipeline);
	},

	// Project Segment selection
	onClickSAPConfig : function(oEvt) {
		var aFilters = [];
		var sQuery = "SAP Configuration";
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("proj_type",
					sap.ui.model.FilterOperator.Contains, sQuery);
			aFilters.push(filter);
		}
		var list = this.byId("ProjectListId");
		var binding = list.getBinding("items");
		binding.filter(aFilters, "Application");

		// objTotalCompleted.setNumber(apacCompleted);
		// objTotalActive.setNumber(apacActive);
		// objTotalPipeline.setNumber(apacPipeline);
	}

});
