sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/m/library"
], function (BaseController, JSONModel, formatter, mobileLibrary) {
    "use strict";

    // shortcut for sap.m.URLHelper
    var URLHelper = mobileLibrary.URLHelper;

    return BaseController.extend("project1.controller.Detail", {

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
                    "CustomerName": "Walk in customer",
                    "TotalAmount": "600.00",
                    "Currency": "INR",
                    "NavOrderToItems": [
                
                    ]
                }
            });

            this.getRouter().getRoute("Add").attachPatternMatched(this._onObjectMatched, this);

            this.setModel(oViewModel, "Add");

            this.getOwnerComponent().getModel().metadataLoaded().then(this._onMetadataLoaded.bind(this));
        },
        addPress:function(){

            var oViewModel = this.getView().getModel("Add")

            var oItems = oViewModel.getProperty("/order/NavOrderToItems")


            var Simpledata = {
             "ItemId": "",
			"OrderId": "",
			"ItemNo": oItems.length + 1 ,
			"ProductId": "DD5E8EEA5DB91EDE84E70992FD8D9987",
			"Qty": "1",
			"Uom": "PC"

            }

            oItems.push(Simpledata)
            oViewModel.setProperty("/order/NavOrderToItems",oItems)

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
                oViewModel = this.getModel("Add")
               
        },

        /**
         * Set the full screen mode to false and navigate to list page
         */
        
    });

});