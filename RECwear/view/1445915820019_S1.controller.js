sap.ui.define(["sap/ui/core/mvc/Controller"], function(BaseController) {
	"use strict";

	return BaseController.extend("generated.app.view.1445915820019_S1", {

		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getTarget("1445915820019_S1").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));
		},
		handleRouteMatched: function(oEvent) {
			var params = {};
			if (oEvent.mParameters.data.context || oEvent.mParameters.data.masterContext) {
				this.sContext = oEvent.mParameters.data.context;
				this.sMasterContext = oEvent.mParameters.data.masterContext;

				if (!this.sContext) {
					this.getView().bindElement("/" + this.sMasterContext, params);
				} else {
					this.getView().bindElement("/" + this.sContext, params);
				}

			}

		},
		_onPressNpsapmColumnListItem14459206192240GY: function(oEvent) {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("1445932712213_S0");
			console.log(this);
		}
		
		/*handleDetailsPress : function(oEvent) {
			this.nav.to("1445932712213_S0", oEvent);
			//MessageToast.show("Details for product with id " + this.getView().getModel().getProperty("ProductId", oEvent.getSource().getBindingContext()));
		}*/
		
	});
}, /* bExport= */ true);