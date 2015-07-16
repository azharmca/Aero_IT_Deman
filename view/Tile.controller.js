sap.ui.controller("sap.Aero_IT_Demand.prototype.view.Tile", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf view.Tile
	 */
	onInit : function() {

		// var list_model = new sap.ui.model.json.JSONModel(
		// "json/stats_list.json");
		// this.getView().setModel(list_model, "ListModel");
		// sap.ui.getCore().setModel(list_model, "ListModel");

		var list_model = new sap.ui.model.json.JSONModel();
		list_model.loadData("json/stats_list.json", "", false);
		this.getView().setModel(list_model, "ListModel");
		sap.ui.getCore().setModel(list_model, "ListModel");

		var list_model = new sap.ui.model.json.JSONModel();
		list_model.loadData("json/it_fcode.json", "", false);
		this.getView().setModel(list_model, "StatModel");
		sap.ui.getCore().setModel(list_model, "StatModel");

		var list_array = sap.ui.getCore().getModel("ListModel").getData();
		var sum = 0;
		jQuery.each(list_array.List, function(index, value) {
			// var val =
			// list_array.List[index].description;
			sum = sum + parseInt(list_array.List[index].projects);
		});
		this.byId("lab_Projects").setText(sum.toString());

		// FOR Segment Default
		var idForsegmButtons = this.byId("segmButtons").getId();
		var idForbtnITFcoe = this.byId("btnITFcoe").getId();
		var idForbtnStats = this.byId("btnStats").getId();
		var ids = {
			"segmButtons" : idForsegmButtons,
			"btnITFcoe" : idForbtnITFcoe,
			"btnStats" : idForbtnStats
		};
		sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel());
		sap.ui.getCore().getModel().setProperty("/ids", ids);
	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the
	 * controller's View is re-rendered (NOT before the first rendering!
	 * onInit() is used for that one!).
	 * 
	 * @memberOf view.Tile
	 */
	// onBeforeRendering: function() {
	//
	// },
	/**
	 * Called when the View has been rendered (so its HTML is part of the
	 * document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * 
	 * @memberOf view.Tile
	 */
	onAfterRendering : function() {
		var no_of_items = this.byId("id_Demo_List").getItems().length;
		this.byId("id_Demo_List").$().css("height","100vh"); 
		var cal = this.byId("id_Demo_List").$().css("height") / no_of_items;
		$(".listTitTxtS1").css("height", cal);
	},
	/**
	 * Called when the Controller is destroyed. Use this one to free resources
	 * and finalize activities.
	 * 
	 * @memberOf view.Tile
	 */
	// onExit: function() {
	//
	// }
	onClickStats : function(oEvt) {
		var list_model = new sap.ui.model.json.JSONModel();
		list_model.loadData("json/stats_list.json", "", false);
		this.getView().setModel(list_model, "ListModel");
		sap.ui.getCore().setModel(list_model, "ListModel");

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

		// var list_model = new sap.ui.model.json.JSONModel();
		// list_model.loadData("json/it_fcode.json", "", false);
		// this.getView().setModel(list_model, "StatModel");
		// sap.ui.getCore().setModel(list_model, "StatModel");

		var list_array = sap.ui.getCore().getModel("ListModel").getData();
		var sum = 0;
		jQuery.each(list_array.List, function(index, value) {
			// var val =
			// list_array.List[index].description;
			sum = sum + parseInt(list_array.List[index].projects);
		});
		this.byId("lab_Projects").setText(sum.toString());
	},

	onClickITFCOE : function(oEvt) {
		var list_model = new sap.ui.model.json.JSONModel();
		list_model.loadData("json/it_fcode.json", "", false);
		this.getView().setModel(list_model, "ListModel");
		sap.ui.getCore().setModel(list_model, "ListModel");

		var ITFCOE = "ITFCOE";
		var oList_Model = sap.ui.getCore().getModel("ListModel");
		oList_Model.setProperty("/ITFCOE", ITFCOE);

		var list_array = sap.ui.getCore().getModel("ListModel").getData();
		var sum = 0;
		jQuery.each(list_array.List, function(index, value) {
			// var val =
			// list_array.List[index].description;
			sum = sum + parseInt(list_array.List[index].description);
		});
		this.byId("lab_Projects").setText(sum.toString());
	},

	onClickProjects : function(oEvt) {
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		var vLinkText = "All_Projects";
		// Write Cases for each Link
		switch (vLinkText) {
		case "All_Projects":
			router.navTo("All_Projects", null, true);
			var ids = sap.ui.getCore().getModel("idAllProjects");
			sap.ui.getCore().byId(ids.segmButtons1).setSelectedButton(
					ids.btnProjStage1);
			sap.ui.getCore().byId(ids.btnProjStage1).firePress();
			break;
		default:
			router.navTo("", null, true);
		}

	},

	showITFcoe : function(oEvt) {

		var oList_Model = sap.ui.getCore().getModel("ListModel").getData();
		if (oList_Model.ITFCOE == "ITFCOE") {
			var router = sap.ui.core.UIComponent.getRouterFor(this);
			var vLinkText = "ITFCOE_Projects";
			// Write Cases for each Link

			var selectedValue = oEvt.getSource().mProperties.title;
			if (selectedValue === "APAC") {
				switch (vLinkText) {
				case "ITFCOE_Projects":
					router.navTo("ITFCOE_Projects", null, true);
					var ids = sap.ui.getCore().getModel("idITFCOE_Projects");
					sap.ui.getCore().byId(ids.HeaderSegment).setSelectedButton(
							ids.btnApac);
					sap.ui.getCore().byId(ids.btnApac).firePress();
					break;
				default:
					router.navTo("", null, true);
				}
			} else if (selectedValue === "BUILD") {
				switch (vLinkText) {
				case "ITFCOE_Projects":
					router.navTo("ITFCOE_Projects", null, true);
					var ids = sap.ui.getCore().getModel("idITFCOE_Projects");
					sap.ui.getCore().byId(ids.HeaderSegment).setSelectedButton(
							ids.btnBuild);
					sap.ui.getCore().byId(ids.btnBuild).firePress();
					break;
				default:
					router.navTo("", null, true);
				}
			} else if (selectedValue === "C&PS") {
				switch (vLinkText) {
				case "ITFCOE_Projects":
					router.navTo("ITFCOE_Projects", null, true);
					var ids = sap.ui.getCore().getModel("idITFCOE_Projects");
					sap.ui.getCore().byId(ids.HeaderSegment).setSelectedButton(
							ids.btnCP);
					sap.ui.getCore().byId(ids.btnCP).firePress();
					break;
				default:
					router.navTo("", null, true);
				}
			} else if (selectedValue === "EIT") {
				switch (vLinkText) {
				case "ITFCOE_Projects":
					router.navTo("ITFCOE_Projects", null, true);
					var ids = sap.ui.getCore().getModel("idITFCOE_Projects");
					sap.ui.getCore().byId(ids.HeaderSegment).setSelectedButton(
							ids.btnEIT);
					sap.ui.getCore().byId(ids.btnEIT).firePress();
					break;
				default:
					router.navTo("", null, true);
				}
			} else if (selectedValue === "EMEA") {
				switch (vLinkText) {
				case "ITFCOE_Projects":
					router.navTo("ITFCOE_Projects", null, true);
					var ids = sap.ui.getCore().getModel("idITFCOE_Projects");
					sap.ui.getCore().byId(ids.HeaderSegment).setSelectedButton(
							ids.btnEMEA);
					sap.ui.getCore().byId(ids.btnEMEA).firePress();
					break;
				default:
					router.navTo("", null, true);
				}
			} else {
				switch (vLinkText) {
				case "ITFCOE_Projects":
					router.navTo("ITFCOE_Projects", null, true);
					var ids = sap.ui.getCore().getModel("idITFCOE_Projects");
					sap.ui.getCore().byId(ids.HeaderSegment).setSelectedButton(
							ids.btnAll);
					sap.ui.getCore().byId(ids.btnAll).firePress();
					break;
				default:
					router.navTo("", null, true);
				}
			}

		} else {
			var selectedValue = oEvt.getSource().mProperties.title;
			if (selectedValue == "IT Fcoe") {
				var router = sap.ui.core.UIComponent.getRouterFor(this);
				var vLinkText = "ITFcoe";
				// Write Cases for each Link
				switch (vLinkText) {
				case "ITFcoe":
					router.navTo("ITFcoe", null, true);
					break;
				default:
					router.navTo("", null, true);
				}

			} else if (selectedValue == "Project Stage") {
				var router = sap.ui.core.UIComponent.getRouterFor(this);
				var vLinkText = "Proj_Stage";
				// Write Cases for each Link
				switch (vLinkText) {
				case "Proj_Stage":
					router.navTo("Proj_Stage", null, true);
					break;
				default:
					router.navTo("", null, true);
				}
			} else if (selectedValue == "Project Status") {
				var router = sap.ui.core.UIComponent.getRouterFor(this);
				var vLinkText = "Proj_Status";
				// Write Cases for each Link
				switch (vLinkText) {
				case "Proj_Status":
					router.navTo("Proj_Status", null, true);
					break;
				default:
					router.navTo("", null, true);
				}
			} else if (selectedValue == "Project Type") {
				var router = sap.ui.core.UIComponent.getRouterFor(this);
				var vLinkText = "Proj_Type";
				// Write Cases for each Link
				switch (vLinkText) {
				case "Proj_Type":
					router.navTo("Proj_Type", null, true);
					break;
				default:
					router.navTo("", null, true);
				}
			}

		}

	},
});
