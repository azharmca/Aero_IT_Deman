sap.ui
		.controller(
				"sap.Aero_IT_Demand.prototype.view.All_Projects",
				{

					/**
					 * Called when a controller is instantiated and its View
					 * controls (if available) are already created. Can be used
					 * to modify the View before it is displayed, to bind event
					 * handlers and do other one-time initialization.
					 * 
					 * @memberOf view.All_Projects
					 */
					onInit : function() {
						id_carousel = this.byId("id_Carousel")
						// Project Stage
						var proj_stage_model = new sap.ui.model.json.JSONModel();
						proj_stage_model.loadData("json/proj_stage.json", "",
								false);
						this.getView().setModel(proj_stage_model,
								"ProjectStageModel");
						sap.ui.getCore().setModel(proj_stage_model,
								"ProjectStageModel");

						// Project Status
						var proj_status_model = new sap.ui.model.json.JSONModel();
						proj_status_model.loadData("json/proj_status.json", "",
								false);
						this.getView().setModel(proj_status_model,
								"ProjectStatusModel");
						sap.ui.getCore().setModel(proj_status_model,
								"ProjectStatusModel");

						// Project Type
						var proj_type_model = new sap.ui.model.json.JSONModel();
						proj_type_model.loadData("json/proj_type.json", "",
								false);
						this.getView().setModel(proj_type_model,
								"ProjectTypeModel");
						sap.ui.getCore().setModel(proj_type_model,
								"ProjectTypeModel");

						var BtnSegment = this.byId("segmButtons1");
						var btnAll = this.byId("btnProjStage1");
						BtnSegment.setSelectedButton(btnAll);

						// FOR Segment Default
						var idForsegmButtons = this.byId("segmButtons1")
								.getId();
						var idForbtnITFcoe = this.byId("btnITFcoe1").getId();
						var idForbtnStats = this.byId("btnStats1").getId();
						var idForbtnProjects = this.byId("btnProjStage1")
								.getId();
						var ids1 = {
							"segmButtons1" : idForsegmButtons,
							"btnITFcoe1" : idForbtnITFcoe,
							"btnStats1" : idForbtnStats,
							"btnProjStage1" : idForbtnProjects
						};
						var proj_stage_model = new sap.ui.model.json.JSONModel(
								ids1);
						sap.ui.getCore().setModel(ids1, "idAllProjects");

						// Set Label 192
						 var list_array = sap.ui.getCore().getModel(
								"ProjectStageModel").getData();
						var sum = 0;
						jQuery
								.each(
										list_array.List,
										function(index, value) {
											sum = sum
													+ parseInt(list_array.List[index].Target);
										});
						this.byId("lab_Projects").setText(sum.toString());
					},

					/**
					 * Similar to onAfterRendering, but this hook is invoked
					 * before the controller's View is re-rendered (NOT before
					 * the first rendering! onInit() is used for that one!).
					 * 
					 * @memberOf view.All_Projects
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
					 * @memberOf view.All_Projects
					 */
					// onAfterRendering: function() {
					//
					// },
					/**
					 * Called when the Controller is destroyed. Use this one to
					 * free resources and finalize activities.
					 * 
					 * @memberOf view.All_Projects
					 */
					// onExit: function() {
					//
					// }
					onClickStats : function(oEvt) {
						var router = sap.ui.core.UIComponent.getRouterFor(this);
						var vLinkText = "Tile";
						// Write Cases for each Link
						switch (vLinkText) {
						case "Tile":
							router.navTo("Tile", null, true);
							var ids = sap.ui.getCore().getModel().getProperty(
									"/ids");
							sap.ui.getCore().byId(ids.segmButtons)
									.setSelectedButton(ids.btnStats);
							sap.ui.getCore().byId(ids.btnStats).firePress();
							break;
						default:
							router.navTo("", null, true);
						}
					},

					onClickITFCOE : function(oEvt) {
						var router = sap.ui.core.UIComponent.getRouterFor(this);
						var vLinkText = "Tile";
						// Write Cases for each Link
						switch (vLinkText) {
						case "Tile":
							router.navTo("Tile", null, true);
							var ids = sap.ui.getCore().getModel().getProperty(
									"/ids");
							sap.ui.getCore().byId(ids.segmButtons)
									.setSelectedButton(ids.btnITFcoe);
							sap.ui.getCore().byId(ids.btnITFcoe).firePress();

							// // Irpan
							// var ids1 =
							// sap.ui.getCore().getModel().getProperty(
							// "/idAllProjects");
							// sap.ui.getCore().byId(ids1.segmButtons1)
							// .setSelectedButton(ids1.btnProjStage1);
							// sap.ui.getCore().byId(ids1.btnProjStage1)
							// .firePress();

							// router._oViews["sap.Aero_IT_Demand.prototype.view.Tile"].oController
							// .onInit();
							break;
						default:
							router.navTo("", null, true);
						}
					},

					showProjectStage : function(oEvt) {
						// var oStage_Model = sap.ui.getCore().getModel(
						// "ProjectStageModel").getData();

						var router = sap.ui.core.UIComponent.getRouterFor(this);
						var vLinkText = "Proj_Stage_Details";

						var selectedValue = oEvt.getSource().mProperties.title;
						if (selectedValue == "0- Pipeline") {
							switch (vLinkText) {
							case "Proj_Stage_Details":
								router.navTo("Proj_Stage_Details", null, true);
								var ids = sap.ui.getCore().getModel(
										"idProjectStage");
								sap.ui.getCore().byId(ids.HeaderSegment)
										.setSelectedButton(ids.btnPipeLine);
								sap.ui.getCore().byId(ids.btnPipeLine)
										.firePress();
								break;
							default:
								router.navTo("", null, true);
							}
						} else if (selectedValue == "1- Justification") {
							switch (vLinkText) {
							case "Proj_Stage_Details":
								router.navTo("Proj_Stage_Details", null, true);
								var ids = sap.ui.getCore().getModel(
										"idProjectStage");
								sap.ui
										.getCore()
										.byId(ids.HeaderSegment)
										.setSelectedButton(ids.btnJustification);
								sap.ui.getCore().byId(ids.btnJustification)
										.firePress();
								break;
							default:
								router.navTo("", null, true);
							}
						} else if (selectedValue == "2- Approval") {
							switch (vLinkText) {
							case "Proj_Stage_Details":
								router.navTo("Proj_Stage_Details", null, true);
								var ids = sap.ui.getCore().getModel(
										"idProjectStage");
								sap.ui.getCore().byId(ids.HeaderSegment)
										.setSelectedButton(ids.btnApproval);
								sap.ui.getCore().byId(ids.btnApproval)
										.firePress();
								break;
							default:
								router.navTo("", null, true);
							}
						} else if (selectedValue == "3- Requirements") {
							switch (vLinkText) {
							case "Proj_Stage_Details":
								router.navTo("Proj_Stage_Details", null, true);
								var ids = sap.ui.getCore().getModel(
										"idProjectStage");
								sap.ui.getCore().byId(ids.HeaderSegment)
										.setSelectedButton(ids.btnRequirements);
								sap.ui.getCore().byId(ids.btnRequirements)
										.firePress();
								break;
							default:
								router.navTo("", null, true);
							}
						} else if (selectedValue == "4- Design") {
							switch (vLinkText) {
							case "Proj_Stage_Details":
								router.navTo("Proj_Stage_Details", null, true);
								var ids = sap.ui.getCore().getModel(
										"idProjectStage");
								sap.ui.getCore().byId(ids.HeaderSegment)
										.setSelectedButton(ids.btnDesign);
								sap.ui.getCore().byId(ids.btnDesign)
										.firePress();
								break;
							default:
								router.navTo("", null, true);
							}
						} else if (selectedValue == "5- Construct/Test") {
							switch (vLinkText) {
							case "Proj_Stage_Details":
								router.navTo("Proj_Stage_Details", null, true);
								var ids = sap.ui.getCore().getModel(
										"idProjectStage");
								sap.ui.getCore().byId(ids.HeaderSegment)
										.setSelectedButton(ids.btnConstruct);
								sap.ui.getCore().byId(ids.btnConstruct)
										.firePress();
								break;
							default:
								router.navTo("", null, true);
							}
						} else if (selectedValue == "6- Warranty") {
							switch (vLinkText) {
							case "Proj_Stage_Details":
								router.navTo("Proj_Stage_Details", null, true);
								var ids = sap.ui.getCore().getModel(
										"idProjectStage");
								sap.ui.getCore().byId(ids.HeaderSegment)
										.setSelectedButton(ids.btnWarranty);
								sap.ui.getCore().byId(ids.btnWarranty)
										.firePress();
								break;
							default:
								router.navTo("", null, true);
							}
						} else if (selectedValue == "7- Warranty") {
							switch (vLinkText) {
							case "Proj_Stage_Details":
								router.navTo("Proj_Stage_Details", null, true);
								var ids = sap.ui.getCore().getModel(
										"idProjectStage");
								sap.ui.getCore().byId(ids.HeaderSegment)
										.setSelectedButton(ids.btnWarranty);
								sap.ui.getCore().byId(ids.btnWarranty)
										.firePress();
								break;
							default:
								router.navTo("", null, true);
							}
						}

					},

					showProjectStatus : function(oEvt) {
						var router = sap.ui.core.UIComponent.getRouterFor(this);
						var vLinkText = "Proj_Status_Details";

						var selectedValue = oEvt.getSource().mProperties.title;
						if (selectedValue === "Active") {
							switch (vLinkText) {
							case "Proj_Status_Details":
								router.navTo("Proj_Status_Details", null, true);
								var ids = sap.ui.getCore().getModel(
										"idProjectStatus");
								sap.ui.getCore().byId(ids.HeaderSegment)
										.setSelectedButton(ids.btnActive);
								sap.ui.getCore().byId(ids.btnActive)
										.firePress();
								break;
							default:
								router.navTo("", null, true);
							}
						} else if (selectedValue === "Cancelled") {
							switch (vLinkText) {
							case "Proj_Status_Details":
								router.navTo("Proj_Status_Details", null, true);
								var ids = sap.ui.getCore().getModel(
										"idProjectStatus");
								sap.ui.getCore().byId(ids.HeaderSegment)
										.setSelectedButton(ids.btnCancelled);
								sap.ui.getCore().byId(ids.btnCancelled)
										.firePress();
								break;
							default:
								router.navTo("", null, true);
							}
						} else if (selectedValue === "Completed") {
							switch (vLinkText) {
							case "Proj_Status_Details":
								router.navTo("Proj_Status_Details", null, true);
								var ids = sap.ui.getCore().getModel(
										"idProjectStatus");
								sap.ui.getCore().byId(ids.HeaderSegment)
										.setSelectedButton(ids.btnCompleted);
								sap.ui.getCore().byId(ids.btnCompleted)
										.firePress();
								break;
							default:
								router.navTo("", null, true);
							}
						} else if (selectedValue === "On Hold") {
							switch (vLinkText) {
							case "Proj_Status_Details":
								router.navTo("Proj_Status_Details", null, true);
								var ids = sap.ui.getCore().getModel(
										"idProjectStatus");
								sap.ui.getCore().byId(ids.HeaderSegment)
										.setSelectedButton(ids.btnOnHold);
								sap.ui.getCore().byId(ids.btnOnHold)
										.firePress();
								break;
							default:
								router.navTo("", null, true);
							}
						}

					},
					showProjectType : function(oEvt) {
						var router = sap.ui.core.UIComponent.getRouterFor(this);
						var vLinkText = "Proj_Type_Details";

						var selectedValue = oEvt.getSource().mProperties.title;
						if (selectedValue === "Infrastructure Only") {
							switch (vLinkText) {
							case "Proj_Type_Details":
								router.navTo("Proj_Type_Details", null, true);
								var ids = sap.ui.getCore().getModel(
										"idProjectType");
								sap.ui.getCore().byId(ids.HeaderSegment)
										.setSelectedButton(ids.btnActive);
								sap.ui.getCore().byId(ids.btnActive)
										.firePress();
								break;
							default:
								router.navTo("", null, true);
							}
						} else if (selectedValue === "Program") {
							switch (vLinkText) {
							case "Proj_Type_Details":
								router.navTo("Proj_Type_Details", null, true);
								var ids = sap.ui.getCore().getModel(
										"idProjectType");
								sap.ui.getCore().byId(ids.HeaderSegment)
										.setSelectedButton(ids.btnCancelled);
								sap.ui.getCore().byId(ids.btnCancelled)
										.firePress();
								break;
							default:
								router.navTo("", null, true);
							}
						} else if (selectedValue === "Project") {
							switch (vLinkText) {
							case "Proj_Type_Details":
								router.navTo("Proj_Type_Details", null, true);
								var ids = sap.ui.getCore().getModel(
										"idProjectType");
								sap.ui.getCore().byId(ids.HeaderSegment)
										.setSelectedButton(ids.btnCompleted);
								sap.ui.getCore().byId(ids.btnCompleted)
										.firePress();
								break;
							default:
								router.navTo("", null, true);
							}
						} else if (selectedValue === "SAP Configuration") {
							switch (vLinkText) {
							case "Proj_Type_Details":
								router.navTo("Proj_Type_Details", null, true);
								var ids = sap.ui.getCore().getModel(
										"idProjectType");
								sap.ui.getCore().byId(ids.HeaderSegment)
										.setSelectedButton(ids.btnOnHold);
								sap.ui.getCore().byId(ids.btnOnHold)
										.firePress();
								break;
							default:
								router.navTo("", null, true);
							}
						}

					},
					onPressShowAll : function(oEvt) {
						var router = sap.ui.core.UIComponent.getRouterFor(this);

						if (id_carousel.getActivePage().endsWith(
								"id_proj_stage_list") == true) {
							var vLinkText = "Proj_Stage_Details";
							// Write Cases for each Link
							switch (vLinkText) {
							case "Proj_Stage_Details":
								router.navTo("Proj_Stage_Details", null, true);
								break;
							default:
								router.navTo("", null, true);
							}
						} else if (id_carousel.getActivePage().endsWith(
								"id_proj_status_list") == true) {
							var vLinkText = "Proj_Status_Details";
							// Write Cases for each Link
							switch (vLinkText) {
							case "Proj_Status_Details":
								router.navTo("Proj_Status_Details", null, true);
								break;
							default:
								router.navTo("", null, true);
							}
						} else if (id_carousel.getActivePage().endsWith(
								"id_proj_type_list") == true) {
							var vLinkText = "Proj_Type_Details";
							// Write Cases for each Link
							switch (vLinkText) {
							case "Proj_Type_Details":
								router.navTo("Proj_Type_Details", null, true);
								break;
							default:
								router.navTo("", null, true);
							}
						}

					},

					changePage : function(oEvt) {
						if (oEvt.mParameters.newActivePageId
								.endsWith("id_proj_status_list") == true) {
							var list_array = sap.ui.getCore().getModel(
									"ProjectStatusModel").getData();
							var sum = 0;
							jQuery
									.each(
											list_array.List,
											function(index, value) {
												sum = sum
														+ parseInt(list_array.List[index].Target);
											});
							this.byId("lab_Projects").setText(sum.toString());
						} else if (oEvt.mParameters.newActivePageId
								.endsWith("id_proj_stage_list") == true) {
							var list_array = sap.ui.getCore().getModel(
									"ProjectStageModel").getData();
							var sum = 0;
							jQuery
									.each(
											list_array.List,
											function(index, value) {
												sum = sum
														+ parseInt(list_array.List[index].Target);
											});
							this.byId("lab_Projects").setText(sum.toString());
						} else if (oEvt.mParameters.newActivePageId
								.endsWith("id_proj_type_list") == true) {
							var list_array = sap.ui.getCore().getModel(
									"ProjectTypeModel").getData();
							var sum = 0;
							jQuery
									.each(
											list_array.List,
											function(index, value) {
												sum = sum
														+ parseInt(list_array.List[index].Target);
											});
							this.byId("lab_Projects").setText(sum.toString());
						}
					}

				});
