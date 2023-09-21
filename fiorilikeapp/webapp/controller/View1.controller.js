sap.ui.define(["anubhav/app/controller/BaseController","sap/m/MessageBox","sap/m/MessageToast",
"anubhav/app/util/formatter"],
      
             
    function(BaseController,MessageBox,MessageToast,Formatter)
{
 'use strict';
  return BaseController.extend("anubhav.app.controller.View1",{
    formatter:Formatter,
          onInit:function(){
            
            // this.oRouter = this.getOwnerComponent().getRouter()
            BaseController.prototype.onInit.apply(this)    
           
            
          },
              
           onNext:function(kaven){
            // var oAppcon = this.getView().getParent()

            // oAppcon.to("idMukesh")

            this.getView().getParent().getParent().setLayout(sap.f.LayoutType.TwoColumnsMidExpanded)
            
            this.oRouter.navTo("minion",{
                "kaven": kaven

            }) 
            
            

            //route name mininon
           },

           onAfterRendering:function(){
            $("#idAnil--idBtn").hide(function(){ $(this).fadeIn(5000) })
      },
      
      onOrder:function(){
        // alert("ordr is susccess")
        MessageBox.confirm("Do you like to confirm order",{
            title:"Confirm order?",
            onClose:function(value){
                 
                //  console.log(value)
                if (value === "OK") {
                    MessageToast.show("Your order is successfully plaed, Order no id")
                }else{
                    MessageBox.error("Order was rejected");
                }
            }
        })


      },
      onSearch:function(oEvent){
            var searchVal = oEvent.getParameter("query")
            MessageToast.show(searchVal)

            var oFilter1 = new sap.ui.model.Filter("name",sap.ui.model.FilterOperator.Contains,searchVal)
            var oFilter2 = new sap.ui.model.Filter("type",sap.ui.model.FilterOperator.Contains,searchVal)
                          
           var oFilter = new sap.ui.model.filter({
                    filters:[oFilter1,oFilter2],
                    and:false
           })

            var oList = this.getView().byId("idList")

            oList.getBinding("items").filter(oFilter)
      },
      onItemPress:function(oEvent){
          
        // var oItem = oEvent.getSource().getProperty("title") if we add event at object list item

        var oSelecteditem = oEvent.getParameter("listItem")

        // get the path of selected item

        var sPath = oSelecteditem.getBindingContextPath()
        var sIndex = sPath.split("/")[sPath.split("/").length -  1 ]

        var fruitname = oSelecteditem.getTitle()

        // this.oRouter.navTo("minion",{
        //     "kaven": fruitname

        // }) 
        this.onNext(sIndex)

        
      },
      onShowallitems:function(oEvent){
        var oList = this.getView().byId("idList")

        var aItems = oList.getSelectedItems()
        aItems.forEach(element => {
          console.log(element.getTitle())
        });

      },
      onDelete:function(oEvent){
        var onDeletedItem  = oEvent.getParameter("listItem")
       

        var sPath = onDeletedItem.getBindingContextPath()
        var sIndex = sPath.split("/")[sPath.split("/").length-1]

        var oModel = this.getOwnerComponent().getModel("local")
        var aData = oModel.getProperty("/fruits")

        aData.splice(sIndex,1)

        oModel.setProperty("/fruits",aData)


      }
  })

})