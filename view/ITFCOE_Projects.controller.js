sap.ui.controller("sap.Aero_IT_Demand.prototype.view.ITFCOE_Projects", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf view.ITFCOE_Projects
	 */
	onInit : function() {
		objTotalCompleted = this.byId("objCompletedNo");
		objTotalActive = this.byId("objActiveNo");
		objTotalPipeline = this.byId("objPipeLineNo");
		allCompleted = 0;
		allActive = 0;
		allPipeline = 0;
		apacCompleted = 0;
		apacActive = 0;
		apacPipeline = 0;
		buildCompleted = 0;
		buildActive = 0;
		buildPipeline = 0;
		CPSCompleted = 0;
		CPSActive = 0;
		CPSPipeline = 0;
		EITCompleted = 0;
		EITActive = 0;
		EITPipeline = 0;
		EMEACompleted = 0;
		EMEAActive = 0;
		EMEAPipeline = 0;

		var ProjectList = new sap.ui.model.json.JSONModel();
		ProjectList.loadData("json/ITFCOE_Projects.json", "", false);
		this.getView().setModel(ProjectList, "ItFcoeProjects");
		var ProjectList = ProjectList.getData();

		// //Get the Count for Completed,Pipeline and Design projects
		jQuery.each(ProjectList.Projects, function(index, value) {
			if (ProjectList.Projects[index].type == "apac") {
				switch (ProjectList.Projects[index].stage) {
				case "Completed":
					apacCompleted = apacCompleted + 1;
					break;
				case "Active":
					apacActive = apacActive + 1;
					break;
				case "Pipeline":
					apacPipeline = apacPipeline + 1;
					break;
				}
			}
			if (ProjectList.Projects[index].type == "Build") {
				switch (ProjectList.Projects[index].stage) {
				case "Completed":
					buildCompleted = buildCompleted + 1;
					break;
				case "Active":
					buildActive = buildActive + 1;
					break;
				case "Pipeline":
					buildPipeline = buildPipeline + 1;
					break;
				}
			}
			if (ProjectList.Projects[index].type == "C&PS") {
				switch (ProjectList.Projects[index].stage) {
				case "Completed":
					CPSCompleted = CPSCompleted + 1;
					break;
				case "Active":
					CPSActive = CPSActive + 1;
					break;
				case "Pipeline":
					CPSPipeline = CPSPipeline + 1;
					break;
				}
			}

			if (ProjectList.Projects[index].type == "EIT") {
				switch (ProjectList.Projects[index].stage) {
				case "Completed":
					EITCompleted = EITCompleted + 1;
					break;
				case "Active":
					EITActive = EITActive + 1;
					break;
				case "Pipeline":
					EITPipeline = EITPipeline + 1;
					break;
				}
			}

			if (ProjectList.Projects[index].type == "EMEA") {
				switch (ProjectList.Projects[index].stage) {
				case "Completed":
					EMEACompleted = EMEACompleted + 1;
					break;
				case "Active":
					EMEAActive = EMEAActive + 1;
					break;
				case "Pipeline":
					EMEAPipeline = EMEAPipeline + 1;
					break;
				}
			}

			switch (ProjectList.Projects[index].stage) {
			case "Completed":
				allCompleted = allCompleted + 1;
				break;
			case "Active":
				allActive = allActive + 1;
				break;
			case "Pipeline":
				allPipeline = allPipeline + 1;
				break;
			}
		});
		objTotalCompleted.setNumber(allCompleted);
		objTotalActive.setNumber(allActive);
		objTotalPipeline.setNumber(allPipeline);

		// FOR Segment Default
		var idForsegmButtons = this.byId("HeaderSegment").getId();
		var idForbtnAll = this.byId("btnAll").getId();
		var idForbtnApac = this.byId("btnApac").getId();
		var idForbtnBuild = this.byId("btnBuild").getId();
		var idForbtnCP = this.byId("btnCP").getId();
		var idForbtnEIT = this.byId("btnEIT").getId();
		var idForbtnEMEA = this.byId("btnEMEA").getId();
		var ids1 = {
			"HeaderSegment" : idForsegmButtons,
			"btnAll" : idForbtnAll,
			"btnApac" : idForbtnApac,
			"btnBuild" : idForbtnBuild,
			"btnCP" : idForbtnCP,
			"btnEIT" : idForbtnEIT,
			"btnEMEA" : idForbtnEMEA
		};
		var proj_stage_model = new sap.ui.model.json.JSONModel(ids1);
		sap.ui.getCore().setModel(ids1, "idITFCOE_Projects");
	},
	/**
	 * Similar to onAfterRendering, but this hook is invoked before the
	 * controller's View is re-rendered (NOT before the first rendering!
	 * onInit() is used for that one!).
	 * 
	 * @memberOf view.ITFCOE_Projects
	 */
	// onBeforeRendering: function() {
	//
	// },
	/**
	 * Called when the View has been rendered (so its HTML is part of the
	 * document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * 
	 * @memberOf view.ITFCOE_Projects
	 */
	// onAfterRendering: function() {
	//
	// },
	/**
	 * Called when the Controller is destroyed. Use this one to free resources
	 * and finalize activities.
	 * 
	 * @memberOf view.ITFCOE_Projects
	 */
	// onExit: function() {
	//
	// }
	backToMain : function(oEvt) {
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		var BtnSegment = this.byId("HeaderSegment");
		var btnAll = this.byId("btnAll");
		BtnSegment.setSelectedButton(btnAll);
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

		objTotalCompleted.setNumber(allCompleted);
		objTotalActive.setNumber(allActive);
		objTotalPipeline.setNumber(allPipeline);
	},

	// APAC Segment selection
	onClickApac : function(oEvt) {
		var aFilters = [];
		var sQuery = "apac";
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("type",
					sap.ui.model.FilterOperator.Contains, sQuery);
			aFilters.push(filter);
		}
		var list = this.byId("ProjectListId");
		var binding = list.getBinding("items");
		binding.filter(aFilters, "Application");

		objTotalCompleted.setNumber(apacCompleted);
		objTotalActive.setNumber(apacActive);
		objTotalPipeline.setNumber(apacPipeline);

	},

	// Build Segment selection
	onClickBuild : function(oEvt) {
		var aFilters = [];
		var sQuery = "Build";
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("type",
					sap.ui.model.FilterOperator.Contains, sQuery);
			aFilters.push(filter);
		}
		var list = this.byId("ProjectListId");
		var binding = list.getBinding("items");
		binding.filter(aFilters, "Application");

		objTotalCompleted.setNumber(buildCompleted);
		objTotalActive.setNumber(buildActive);
		objTotalPipeline.setNumber(buildPipeline);

	},

	// C&PS Selection
	onClickCPS : function(oEvt) {
		var aFilters = [];
		var sQuery = "C&PS";
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("type",
					sap.ui.model.FilterOperator.Contains, sQuery);
			aFilters.push(filter);
		}
		var list = this.byId("ProjectListId");
		var binding = list.getBinding("items");
		binding.filter(aFilters, "Application");

		objTotalCompleted.setNumber(CPSCompleted);
		objTotalActive.setNumber(CPSActive);
		objTotalPipeline.setNumber(CPSPipeline);
	},

	// EIP Selection
	onClickEit : function(oEvt) {
		var aFilters = [];
		var sQuery = "EIT";
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("type",
					sap.ui.model.FilterOperator.Contains, sQuery);
			aFilters.push(filter);
		}
		var list = this.byId("ProjectListId");
		var binding = list.getBinding("items");
		binding.filter(aFilters, "Application");

		objTotalCompleted.setNumber(EITCompleted);
		objTotalActive.setNumber(EITActive);
		objTotalPipeline.setNumber(EITPipeline);
	},

	// EMEA Selection
	onClickEmea : function(oEvt) {
		var aFilters = [];
		var sQuery = "EMEA";
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("type",
					sap.ui.model.FilterOperator.Contains, sQuery);
			aFilters.push(filter);
		}
		var list = this.byId("ProjectListId");
		var binding = list.getBinding("items");
		binding.filter(aFilters, "Application");

		objTotalCompleted.setNumber(EMEACompleted);
		objTotalActive.setNumber(EMEAActive);
		objTotalPipeline.setNumber(EMEAPipeline);
	},
});
