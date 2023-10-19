sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/m/library"
], function (BaseController, JSONModel, formatter, mobileLibrary) {
    "use strict";

    // shortcut for sap.m.URLHelper
    var URLHelper = mobileLibrary.URLHelper;

    return BaseController.extend("anubhav.app.zbipodata.controller.Add", {

        formatter: formatter,

        /* =========================================================== */
        /* lifecycle methods                                           */
        /* =========================================================== */

        onInit: function () {
            // Model used to manipulate control states. The chosen values make sure,
            // detail page is busy indication immediately so there is no break in
            // between the busy indication for loading the view's meta data
            var oViewModel = new JSONModel({
                busy : false,
                delay : 0,
                lineItemListTitle : this.getResourceBundle().getText("detailLineItemTableHeading"),
                order:{                    
                    "OrderId": "",
                    "OrderNo": 10,
                    "OrderDate": "2023-09-24T06:05:51",
                    "CustomerName": "Walkincustomer",
                    "TotalAmount": "0",
                    "Currency": "INR",
                    "NavOrderToItems": [
                           
                    ]
                }
            });

            this.getRouter().getRoute("add").attachPatternMatched(this._onObjectMatched, this);

            this.setModel(oViewModel, "AddView");

            this.getOwnerComponent().getModel().metadataLoaded().then(this._onMetadataLoaded.bind(this));
        },

        /* =========================================================== */
        /* event handlers                                              */
        /* =========================================================== */

        /**
         * Event handler when the share by E-Mail button has been clicked
         * @public
         */
      

        
        /**
         * Updates the item count within the line item table's header
         * @param {object} oEvent an event containing the total number of items in the list
         * @private
         */
       

        /* =========================================================== */
        /* begin: internal methods                                     */
        /* =========================================================== */

        /**
         * Binds the view to the object path and expands the aggregated line items.
         * @function
         * @param {sap.ui.base.Event} oEvent pattern match event in route 'object'
         * @private
         */
        _onObjectMatched: function (oEvent) {
          
        },
        addItem:function(){

            var oViewModel = this.getView().getModel("AddView")

            var items = oViewModel.getProperty("/order/NavOrderToItems")



            var simpleData = {
            "ItemId": "",
			"OrderId": "",
			"ItemNo": items.length + 1,
			"ProductId": "",
			"Qty": "1",
			"Uom": "PC"
            }

            items.push(simpleData)

            oViewModel.setProperty("/order/NavOrderToItems",items)


        },
        onSave:function(){
            
            
            var oDataobject = this.getView().getModel()

            var oViewModel = this.getView().getModel("AddView")

            var payload = oViewModel.getProperty("/order")

            payload.OrderNo = parseInt(payload.OrderNo)
            
            payload.OrderDate = JSON.stringify(new(Date))
            
            oDataobject.create("/OrdersSet", payload ,{
                success:function(){
                    

                },
                error:function(){

                    sap.m.MesssageBox.error("some error")
                }
            })
            
        },

        /**
         * Binds the view to the object path. Makes sure that detail view displays
         * a busy indicator while data for the corresponding element binding is loaded.
         * @function
         * @param {string} sObjectPath path to the object to be bound to the view.
         * @private
         */
       

       

        _onMetadataLoaded: function () {
            // Store original busy indicator delay for the detail view
            var iOriginalViewBusyDelay = this.getView().getBusyIndicatorDelay(),
                oViewModel = this.getModel("AddView")
               
        },

        /**
         * Set the full screen mode to false and navigate to list page
         */
       

        /**
         * Toggle between full and non full screen mode.
         */
        
    });

});