sap.ui.define(["sap/ui/core/mvc/Controller"], function(BaseController) {
	"use strict";

	return BaseController.extend("generated.app.view.1445915820018_S0", {

		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getTarget("1445915820018_S0").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));
			
			var oModel = new sap.ui.model.json.JSONModel({
				sex: "",
				hasClub: "FALSE",
				firstRec: ""
			});
			this.getView().setModel(oModel, 'search');
		},
		handleRouteMatched: function(oEvent) {
			var params = {};
			if (oEvent.mParameters.data.context || oEvent.mParameters.data.masterContext) {
				this.sContext = oEvent.mParameters.data.context;
				this.sMasterContext = oEvent.mParameters.data.masterContext;

				if (!this.sMasterContext) {
					this.getView().bindElement("/" + this.sContext, params);
				} else {
					this.getView().bindElement("/" + this.sMasterContext, params);
				}

			}

		},
        applyFilter: function(oEvent) {
        	var cb = oEvent.getSource();
        	var oModel = cb.getModel('search');
        	var filters = oModel.getData();
        	
        	var details = this.oView.oParent.oParent.getCurrentDetailPage();
			var table = details.mAggregations.content[0].mAggregations.content[0];
			
			var oBinding = table.getBinding('items');
			
			var oFilterList = [];
			jQuery.each(filters, function(k, v) {
				oFilterList.push(new sap.ui.model.Filter(k, sap.ui.model.FilterOperator.Contains, v));
			});
			
			oBinding.filter(oFilterList);
        }
	});
}, /* bExport= */ true);