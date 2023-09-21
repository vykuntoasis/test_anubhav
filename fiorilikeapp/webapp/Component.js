sap.ui.define(["sap/ui/core/UIComponent"],
function(UIComponent){
    'use strict';
    return UIComponent.extend("anubhav.app.Component",{
            metadata : {
                manifest: "json"
            },
            init : function(){
               UIComponent.prototype.init.apply(this)
               this.oRouter = this.getRouter()
               this.oRouter.initialize()


        //        var salesorg = this.getComponentData().startUpParameteres["sales organization"][0]   passing default value parametes 
        // from the fiori launch pad to app
            },
            // createContent:function(){
            //     var oView = new sap.ui.view({
            //             viewName : "anubhav.app.view.App",
            //             type : 'XML'
        
            //         })
            //         var oView1 = new sap.ui.view({
            //             viewName : "anubhav.app.view.View1",
            //             id:"idAnil",
            //             type : 'XML'
        
            //         })
            //         var oView2 = new sap.ui.view({
            //             viewName : "anubhav.app.view.View2",
            //             id:"idMukesh",
            //             type : 'XML'
        
            //         })                   
                 
            //         var oContainer = oView.byId("idSpidy")
                
            //     oContainer.addPage(oView1)  
            //     // variables while adding to the function no need to add commas""
            //     oContainer.addPage(oView2) 
                   

            //     return oView
            // },
            destroy: function(){
                    UIComponent.prototype.destroy.apply(this)
            }

    })

})