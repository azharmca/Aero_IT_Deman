sap.ui.controller("sap.wed.invitation.view.Launch", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf wedding.Launch
	 */
	// onInit: function() {
	//
	// },
	/**
	 * Similar to onAfterRendering, but this hook is invoked before the
	 * controller's View is re-rendered (NOT before the first rendering!
	 * onInit() is used for that one!).
	 * 
	 * @memberOf wedding.Launch
	 */
	// onBeforeRendering: function() {
	//
	// },
	/**
	 * Called when the View has been rendered (so its HTML is part of the
	 * document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * 
	 * @memberOf wedding.Launch
	 */
	// onAfterRendering: function() {
	//
	// },
	/**
	 * Called when the Controller is destroyed. Use this one to free resources
	 * and finalize activities.
	 * 
	 * @memberOf wedding.Launch
	 */
	// onExit: function() {
	//
	// }
	handleNav : function(evt) {
		var navCon = this.getView().byId("navCon");
		var target = evt.getSource().data("target");
		if (target) {
			var curBtn = this.getView().byId("cData").getValue();
			// Target Change
			if (curBtn == "p1") {
				this.getView().byId("cData").setValue("p2");
				// Caption Change
				// var oText = this.getView().byId("idBtn").getText();
				this.getView().byId("idBtn").setText(
						"Swaleha Parveen's Wedding Invitation");
			} else if (curBtn == "p2") {
				this.getView().byId("idBtn").setText(
						"Nusrat Parveen's Wedding Invitation");
				this.getView().byId("cData").setValue("p1");
			}

			navCon.to(this.getView().byId(target), "flip");
		} else {
			navCon.back();
		}
	},

	onNusratWedding : function(oEvt) {
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		router.navTo("NusratWedding", null, true);
	},

	onSwalehaWedding : function(oEvt) {
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		router.navTo("SwalehaWedding", null, true);
	},

	venueDetails : function(oEvt) {
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		router.navTo("Marriage_Venue", null, true);
	}

});
