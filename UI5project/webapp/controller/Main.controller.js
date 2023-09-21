sap.ui.define(["ibm/fin/ar/controller/BaseController","ibm/fin/ar/models/models",
"ibm/fin/ar/util/formatter"],
function(BaseController,models,Formatter)
{
  
  return BaseController.extend("ibm.fin.ar.controller.Main",{

           formatter : Formatter,
           onInit:function(){
            
            var oSpiderman = models.createMyJSONModel("models/mockdata/demodata.json")
            var oIronman = models.createMyJSONModel("models/mockdata/demodata2.json")
            var oXMLModel = models.createXMLModel("models/mockdata/mydata.xml")
            var oResourceModel = models.createResourceModel()


            // oSpiderman.setDefaultBindingMode("OneWay")
            //Step 3: Make the model aware to the application
            sap.ui.getCore().setModel(oSpiderman);
            // sap.ui.getCore().setModel(oXMLModel);
            sap.ui.getCore().setModel(oIronman,"iron");
            sap.ui.getCore().setModel(oResourceModel,"i18n");

            this._bindValue();
              
             // oCurr.bindProperty("enabled","/empStr/sherlock")

               
           },
           

           _bindValue : function(){
            var oSalary = this.getView().byId("idSalary")
            // oSalary.bindValue("/empStr/salary") //.bindProperty("enabled","/empStr/sherlock")
            
            var oTable = this.getView().byId("idTable")
            // oTable.bindRows("/empTab")

            oTable.bindAggregation("rows", {
              path: "/empTab" }
              )
          
            // var oCurr = this.getView().byId("idCurr")
            // oCurr.bindProperty("value","/empStr/currency")
           },
           onRowChange:function(oGift){
              
            // var oModel = sap.ui.getCore().getModel()

            // var sRowdata = oModel.getProperty(oGift.getParameter("rowContext").getPath())

            // var copydata = JSON.parse(JSON.stringify(sRowdata))  
            // // convert to string and string againconvert to json
            //   // debugger
            // oModel.setProperty("/empStr",copydata );
            
            var sPath = oGift.getParameter("rowIndex")
             
            var oSimpleform = this.getView().byId("idSimpleform")
             if (sPath != -1 ) {

              var sPath = oGift.getParameter("rowContext").getPath()
              
              
  
              oSimpleform.bindElement(sPath)  
              
             }       
                     


          },
          oCore : sap.ui.getCore(),
           mario : false,
           onChange:function(){
           
            var oSpiderman = sap.ui.getCore().getModel()
            var oIronman = sap.ui.getCore().getModel("iron")                 
            

            this.oCore.setModel(oIronman)

            this.oCore.setModel(oSpiderman,"iron")


           },
           sgIndex : 0,
           onDeleteRow :function(oEvent){
            
            
            var oModel = sap.ui.getCore().getModel()
            var aData = oModel.getProperty("/empTab")
            var sIndex = this.getView().byId("idTable").getSelectedIndices()[0]

            this.sgIndex = sIndex
            
            aData.splice(sIndex, 1)
                      
            
             oModel.setProperty("/empTab",aData)        
             
            

           },
           onMagic:function(){
                  // var oEmpid = this.getView().byId("idEmpid")
                  // oEmpid.setEnabled(true)

                  // var oEmpname = this.getView().byId("idEmpname")
                  // oEmpname.setEnabled(true)

                  // var oSalary = this.getView().byId("idSalary")
                  // oSalary.setEnabled(true)

                  // var oCurr = this.getView().byId("idCurr")
                  // oCurr.setEnabled(true)

                  // var oForm = this.getView().byId("idSimpleform")

                  // var oContent = oForm.getContent()

                  // for (let i = 0; i < oContent.length; i++) {
                  //   const element = oContent[i]

                  //   if(element.getMetadata().getName() === "sap.m.Input"){

                  //     element.setEnabled(true)
                  //   }
                    
                  // }

                  // if (this.mario === true ) {
                  //   this.mario = false
                  // } else{
                  //   this.mario = true
                  // }
                  var oModel = sap.ui.getCore().getModel()
                  var oCurr = this.getView().byId("idCurr").getEnabled()
                  
                  var state = true

                  // if (oCurr === true) {
                  //   state = false
                  // } else {
                  //   state = true
                  // }

                  // var label = this.getView().byId("idBtn").getText()

                  // if (label === "Click Me") {
                  //   state = true
                  //   this.getView().byId("idBtn").setText("Click me again")
                  // } else{
                  //   state = false
                  //   this.getView().byId("idBtn").setText("Click Me")
                  // }

                  var enabled = oModel.getProperty("/empStr/sherlock")
                  if (enabled === true) {
                    state = false
                  } else {
                    state = true
                  }


                  // var oModel = sap.ui.getCore().getModel()
                    console.log(oModel)
                   oModel.setProperty("/empStr/sherlock",state);

                 
                  
           }
           
           
           
          



  })
})