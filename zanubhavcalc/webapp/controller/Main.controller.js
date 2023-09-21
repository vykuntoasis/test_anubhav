sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("com.anubhavtrainings.zanubhavcalc.controller.Main", {
            onInit: function () {
                var oModel = new JSONModel();
                oModel.setData({
                    chartType : "bar",
                    allTypes : [{value : "bar"},
                    {value : "column"},
                    {value : "pie"},
                    {value : "donut"}

                ]             
                })

                this.getView().setModel(oModel,"local")

            },
            onChangeChart:function(oEvent){
                  var oViz = this.getView().byId("idVizFrame");
                  debugger;
                  var selectedKey = oEvent.getSource().getSelectedKey()

                  oViz.setVizType(selectedKey)

            }
        });
    });
