sap.ui.define(["tom/controller/Basecontroller"],
//schafodling template 
// Asynchronous module loading AMD like syntax
function(Basecontroller)
{
 return Basecontroller.extend("tom.controller.Login",
 {
    onInit : function(){
        this.oView = this.getView()
    },
    // oView : this.getView(),

    onLogin:function(){
             var oInpuser = this.oView.byId("idUser")
             
             var oPassword = this.oView.byId("idPassword")

            //  var oInp = sap.ui.getCore().byId("__xmlview0--idUser") 
             // only in case of sapuicore 
             
             var sUser = oInpuser.getValue()
             var sPassword = oPassword.getValue()
             if (sUser === "" || sPassword === "") {
                alert("please enter some value")
                 return
             }
             if (sUser  === sPassword) {
                      document.write("success")
             }else{
                alert("pleaser provide valid credentials")
             }
             
    }
 })
})