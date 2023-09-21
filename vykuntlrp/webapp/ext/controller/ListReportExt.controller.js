sap.ui.define([
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/comp/smartfilterbar/SmartFilterBar",
    "sap/m/ComboBox"
], function(MessageToast,Filter, SmartFilterBar, ComboBox) {
    'use strict';

    return {
        NavtoSalesOrder: function(oEvent) {
            // MessageToast.show("Custom handler invoked.");
            // this.oCrossAppNav = sap.ushell.Container.getService("CrossApplicationNavigation")

            // var hrefforProductdisplay = this.oCrossAppNav.hrefForExternal({
            //     target :{ semanticObject : "SalesOrder" , action : "manage"}
            // })
        },
        getCustomAppStateDataExtension: function (oCustomData) {
            //the content of the custom field will be stored in the app state, so that it can be restored later, for example after a back navigation.
            //The developer has to ensure that the content of the field is stored in the object that is passed to this method.
            if (oCustomData) {
                var oCustomField1 = this.oView.byId("idDescription");
                if (oCustomField1) {
                    oCustomData.Description = oCustomField1.getSelectedKey();
                }
            }
        },
        restoreCustomAppStateDataExtension: function (oCustomData) {
            //in order to restore the content of the custom field in the filter bar, for example after a back navigation,
            //an object with the content is handed over to this method. Now the developer has to ensure that the content of the custom filter is set to the control
            if (oCustomData) {
                if (oCustomData.Description) {
                    var oComboBox = this.oView.byId("idDescription");
                    oComboBox.setSelectedKey(
                        oCustomData.Description
                    );
                }
            }
        },
        onBeforeRebindTableExtension: function(oEvent) {
            var oBindingParams = oEvent.getParameter("bindingParams");
            oBindingParams.parameters = oBindingParams.parameters || {};

            var oSmartTable = oEvent.getSource();
            var oSmartFilterBar = this.byId(oSmartTable.getSmartFilterId());
            if (oSmartFilterBar instanceof SmartFilterBar) {
                var oCustomControl = oSmartFilterBar.getControlByKey("idDescription");
                if (oCustomControl instanceof ComboBox) {

                    var vCategory = oCustomControl.getSelectedKey();
                    // switch (vCategory) {
                        // case "0" :
                        //   
                        	oBindingParams.filters.push(new Filter("Description", "Contains", vCategory ));
                        // 	break;
                        // case "1" :
                        // 	oBindingParams.filters.push(new Filter("Supplier", "EQ", "OTHERS"));
                        // 	break;
                        // default:
                        //     break;
                    }
                }
            },
            onInitSmartFilterBarExtension:function(oEvent){
                var oView = this.getView()
                var oSmartFilter = oView.byId("listReportFilter")

                var oFilter = oSmartFilter.getControlByKey("CustomerID")
                // debugger
                oFilter.setEnabled(false)
            }
        }

});