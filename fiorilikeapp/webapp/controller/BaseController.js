sap.ui.define(["sap/ui/core/mvc/Controller"],
function(Controller)
{
      'use strict' ;
      return Controller.extend("anubhav.app.controller.BaseController",{
            onInit:function(){
                  

                  this.oRouter = this.getOwnerComponent().getRouter()
                  
                  

            }
        
      })

})