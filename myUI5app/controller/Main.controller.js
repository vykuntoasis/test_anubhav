sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function (Controller){

        return Controller.extend("tom.controller.Main",{
                // onInit: function () {
                //         // var object = this.getView().getContent() 
                        
                //         // Button,text controls added to the content and content added to the JSVIEW
                // },
                    myFunction : function(){
                            
                            // step 1 get the object of input
                                //      HTML object
                        //     var oControl = document.getElementById("idSpidy");
                                   // ui5 object
                        //     var oNishan = sap.ui.getCore();

                        //     var oControl = oNishan.byId("idSpidy")
                        //     var oObject =  this.getView().byId("idSpidy"); It will refere to only the button content
                            var oKuldeep = sap.ui.getCore().byId("idSpidy")    
                                                   

                            var sVal = oKuldeep.getValue();

                        //     oKuldeep.setEnabled(false)

                            alert(sVal)                           
                        
                    },
                    enableBtn:function(){

                        var oBtn = sap.ui.getCore().byId("idanubhav")

                        oBtn.attachPress(this.myFunction) 
                        

                    }
        }
        )


})