sap.ui.define([
    'sap/ui/test/Opa5'
], function(Opa5) {
    'use strict';
    return Opa5.extend("anubhav.app.test.integration.arrangements.arrangement", {
        startMyApp: function () {
            return this.iStartMyAppInAFrame("../runAppMockServer.html#Nishan-nainsukha");
        }
    });    
});