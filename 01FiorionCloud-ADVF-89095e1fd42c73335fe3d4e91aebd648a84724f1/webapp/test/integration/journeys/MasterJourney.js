sap.ui.define([
	"sap/ui/test/opaQunit",
	"anubhav/app/test/integration/arrangements/arrangement",
	"anubhav/app/test/integration/pages/MasterPage"
], function(opaTest, myArrangements, myMasterPage) {
	"use strict";

	QUnit.module("Master Spiderman Begins here");
	
	sap.ui.test.Opa5.extendConfig({
		//code fix -- new myArrangements(),
		arrangements: new myArrangements(),
		viewNamespace: "anubhav.app.view"
	});

	opaTest("Jpurney 1: Check if Search Works", function(Given, When, Then) {
		Given.startMyApp();

		When.Master.searchProduct();

		Then.Master.checkIfProductWasFound();
	});

	opaTest("Jpurney 2: Validate if detail page is loaded properly", function(Given, When, Then) {

		When.Master.clickFirstListItem();

		Then.Master.checkPrice();
	});

});