sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("anubhavopa.opa5.controller.Main", {
            onInit: function () {

            },
            onPress:function(oEvent){
                oEvent.getSource().setText("India")
            }
        });
    });
