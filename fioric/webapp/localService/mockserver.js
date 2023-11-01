sap.ui.define([
	"sap/ui/core/util/MockServer",
	"sap/base/Log"
	
], (MockServer, log) => {
	"use strict";

	return {
		init: () => {
			// create
			var oMockServer = new MockServer({
				// rootUri : sap.ui.require.toUrl("anubhav/app") + "/sap/opu/odata/IWBEP/GWSAMPLE_BASIC/"
                rootUri : "/sap/opu/odata/IWBEP/GWSAMPLE_BASIC/"
			});
			// const oMockServer = new MockServer({
			// 	rootUri:  "/sap/opu/odata/IWBEP/GWSAMPLE_BASIC/"
            //     // rootUri : "/"
			// });

			// const oUriParameters = new UriParameters(window.location.href);

			// configure mock server with a delay
			// MockServer.config({
			// 	autoRespond: true,
			// 	autoRespondAfter: oUriParameters.get("serverDelay") || 500
			// });

			// simulate
			// const sPath = sap.ui.require.toUrl("anubhav/app/localService");
			// oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");

			oMockServer.simulate("../localService/metadata.xml",{
				sMockdataBaseUrl:"../localService/mockdata",
					bGenarateMissingMockData: true
				
			})

			// start
			oMockServer.start();
			log.info("running app in movck serve")
		}
	};
});