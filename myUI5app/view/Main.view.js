sap.ui.jsview("tom.view.Main",
// js view came from sap.ui.core.mvc LIBRARY
{
        getControllerName : function(){
            return "tom.controller.Main"
        },
        
        createContent : function(Controller){
            var oInp = new sap.m.Input("idSpidy",{
                submit : [Controller.enableBtn,Controller]
                // only explicity need to declare for js views not xml views
            })

            var oSpiderman = new sap.m.Button("idanubhav",{
                text : "Click Me"
                // press : Controller.myFunction
         })
        //  oSpiderman.placeAt("spidy");
        //  var oInp = new sap.m.Input({
             
        //  })
        //  oInp.placeAt("ironman")
        return [oSpiderman,oInp]
        }
})