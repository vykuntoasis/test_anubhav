sap.ui.define(["anubhav/app/controller/BaseController",
"sap/ui/model/Filter","sap/ui/model/FilterOperator","sap/m/MessageBox"],
    function(BaseController,Filter,FilterOperator,MessageBox)
{
 'use strict';
  return BaseController.extend("anubhav.app.controller.View2",{
    onInit:function(){
      // this.oRouter = this.getOwnerComponent().getRouter()
      BaseController.prototype.onInit.apply(this)
      //Route matched handler
      this.oRouter.getRoute("minion").attachMatched(this.herculis,this)
      // similar to PBO
    },
    herculis:function(oEvent){
      var myVar = oEvent.getParameter("arguments").kaven;

      console.log("aa gaya - it has come + kaven ka value " + myVar)

      var fruitrelativepath = "local>/fruits/" + myVar

      this.getView().bindElement(fruitrelativepath)
    },
    
    onBack:function(){
        // var oAppcon = this.getView().getParent()

        // oAppcon.to("idAnil")
        this.oRouter.navTo("home")
        debugger

    },
    onBeforeRendering:function(){

        // this.getView().byId("idZkas").setVisible(false)
        
    },
    onAfterRendering:function(){
          $("#idMukesh--idZkas").hide(function(){ $(this).fadeIn(5000) })
    },
    myField:null,
    oPopupCities:null,
    oPopupSuppliers:null,
    onFilter:function(oEvent){
      
      if (this.oPopupSuppliers == null ) {
        
      this.oPopupSuppliers = new sap.ui.xmlfragment("suppliers","anubhav.app.fragments.popup",this)
      var oResource = this.getOwnerComponent().getModel("i18n")
      var setTitle = oResource.getResourceBundle().getText("XTIT_SUPPLIERS")
      this.oPopupSuppliers.setTitle("suppliers")
      this.oPopupSuppliers.setMultiSelect(true)
      this.getView().addDependent(this.oPopupSuppliers)
      this.oPopupSuppliers.bindAggregation("items",{
             path:'local>/suppliers',
             template : new sap.m.ObjectListItem({
              
              intro: "{local>city}",
              title: "{local>name}",
              number: "{local>sinceWhen}",
              numberUnit: "{local>contactPerson}",
              icon: "sap-icon://supplier"
             })
      })
      }else{
        this.oPopupCities.getBinding("items").filter([])
      }
      
      this.oPopupSuppliers.open();
    },
    onRequest:function(oEvent){
           
      this.myField = oEvent.getSource()
      if (this.oPopupCities == null ) {
        
      this.oPopupCities = new sap.ui.xmlfragment("cities","anubhav.app.fragments.popup",this)
      this.oPopupCities.setTitle("Cities")
      this.getView().addDependent(this.oPopupCities)
      this.oPopupCities.bindAggregation("items",{
             path:'local>/cities',
             template : new sap.m.StandardListItem({
              description:"{local>famousFor}",
              title:"{local>name}"
             })
      })
      }else{
        this.oPopupCities.getBinding("items").filter([])
      }
      
      this.oPopupCities.open();


    },
    isSupplierPopup:function(sId){
      if (sId.indexOf("suppliers") !=-1 ) {
        return true;     
        
      }else{
        return false
      }
    },    
    onConfirm:function(oEvent){
            var sId = oEvent.getSource().getId()
            
             if (this.isSupplierPopup(sId)) {
              var aItems = oEvent.getParameter("selectedItems")
              if(aItems.length === 0){

                return 
              }
                var aFilter = [];

              for (let index = 0; index < aItems.length; index++) {
                const element = aItems[index];

                aFilter.push(new Filter("name",FilterOperator.EQ,element.getTitle()))
                
              }

              var oFilter = new Filter({
                filters : aFilter,
                and : false
              })

              this.getView().byId("idTable").getBinding("items").filter(oFilter)         
                           
            
             } else {
              var oSelectedItem = oEvent.getParameter("selectedItem")

             this.myField.setValue(oSelectedItem.getTitle())
              
             }
        
    },
    onSearch:function(oEvent){
      debugger
      var sId = oEvent.getSource().getId()
      var oFilter = new Filter("name",FilterOperator.Contains,oEvent.getParameter("value"))
      if (this.isSupplierPopup(sId)) {
        this.oPopupSuppliers.getBinding("items").filter([oFilter])
      } else {
        this.oPopupCities.getBinding("items").filter([oFilter])
      }

    },
    onCancel:function(oEvent){
           
    },
    onSave:function(){
      var that = this
      MessageBox.confirm("Do you want to save",{
        onClose:function(status){
              that.onClose(status)
        }

        
      })
    },
    onClose:function(status){
              if (status === "OK") {
                MessageBox.show("Your order has been saved")
              } else {
                
              } 
    },
    onTabSelect:function(oEvent){
      this.getView().getParent().getParent().setLayout(sap.f.LayoutType.ThreeColumnsMidExpanded)
            this.oRouter.navTo("end",{
              supplierId : "test"
            })
    }

  })

})