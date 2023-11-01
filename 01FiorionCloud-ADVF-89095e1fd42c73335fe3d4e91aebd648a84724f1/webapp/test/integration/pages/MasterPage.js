sap.ui.define([
    "sap/ui/test/Opa5",
    "sap/ui/test/actions/Press",
    "sap/ui/test/actions/EnterText",
    "sap/ui/test/matchers/Properties",
    "sap/ui/test/matchers/Ancestor",
    "sap/ui/test/matchers/AggregationLengthEquals"
], function(Opa5, Press, EnterText, Properties, Ancestor, AggregationLengthEquals) {
    "use strict";

    Opa5.createPageObjects({
        Master: {
            actions: {
                searchProduct: function() {
                    return this.waitFor({
                        id: "idSearch",
                        viewName: "View1",
                        actions: new EnterText({
                            text: "HT-1000"
                        }),
                        success: function(){
                            Opa5.assert.ok(true, "data entered in search field");
                        },
                        errorMessage: "Was not able to find the control with the id idSearch"
                    });
                },
                clickFirstListItem: function(){
                    return this.waitFor({
                        id: "idList",
                        viewName: "View1",
                        success: function(oList){
                            this.waitFor({
                                controlType: "sap.m.ObjectListItem",
                                matchers: [
                                    new Ancestor(oList),
                                    new Properties({intro: "HT-1000"})
                                ],
                                actions: new Press(),
                                errorMessage: "The list does not have a product with intro as HT-1000"
                            })
                        }
                    });

                }
            },
            assertions: {
                checkIfProductWasFound: function() {
                    return this.waitFor({
                        id: "idList",
                        viewName: "View1",
                        matchers: new AggregationLengthEquals({
                            name: "items",
                            length : 1
                        }),
                        success: function() {
                            Opa5.assert.ok(true, "List Item searched properly");
                        },
                        errorMessage: "Search Functionality is not working"
                    });
                },
                checkPrice: function() {
                    return this.waitFor({
                        id: "idObjHeader",
                        viewName: "View2",
                        matchers: new Properties({number: "956.00"}),
                        success: function() {
                            Opa5.assert.ok(true, "The Object number is displayed Correctly");
                        },
                        errorMessage: "Some issue displaying data on details screen"
                    });
                }
            }
        }
    });
}
);