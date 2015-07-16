sap.ui.controller("sap.Aero_IT_Demand.prototype.view.Proj_Status_Details", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf view.Proj_Status_Details
	 */
	onInit : function() {
		var fcode_model = new sap.ui.model.json.JSONModel(
				"json/ITFCOE_Projects.json");
		this.getView().setModel(fcode_model, "ProjectStatusDeails");
		sap.ui.getCore().setModel(fcode_model, "ProjectStatusDeails");

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
		sap.ui.getCore().setModel(ids1, "idProjectStatus");

	},
	/**
	 * Similar to onAfterRendering, but this hook is invoked before the
	 * controller's View is re-rendered (NOT before the first rendering!
	 * onInit() is used for that one!).
	 * 
	 * @memberOf view.Proj_Status_Details
	 */
	// onBeforeRendering: function() {
	//
	// },
	/**
	 * Called when the View has been rendered (so its HTML is part of the
	 * document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * 
	 * @memberOf view.Proj_Status_Details
	 */
	// onAfterRendering: function() {
	//
	// },
	/**
	 * Called when the Controller is destroyed. Use this one to free resources
	 * and finalize activities.
	 * 
	 * @memberOf view.Proj_Status_Details
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

	// Active Segment selection
	onClickActive : function(oEvt) {
		var aFilters = [];
		var sQuery = "Active";
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("proj_status",
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

	onClickCCancelled : function(oEvt) {
		var aFilters = [];
		var sQuery = "Cancelled";
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("proj_status",
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

	onClickCompleted : function(oEvt) {
		var aFilters = [];
		var sQuery = "Completed";
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("proj_status",
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

	onClickOnHold : function(oEvt) {
		var aFilters = [];
		var sQuery = "On Hold";
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("proj_status",
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
