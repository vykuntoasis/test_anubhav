describe('masterdetail', function () {

    it('should load the app',function() {
      expect(browser.getTitle()).toBe('Unit tests for SAPUI5 Walkthrough');
    });
  
     it('check user entered',function(){
      
        element(by.control({
            id: "idSearch",
            viewName: "anubhav.app.view.View1",
            interaction: {
                idSuffix: "I"
            }
        })).sendKeys("AR-FB-1001");

        element(by.control({
          controlType: "sap.m.ObjectListItem",
          viewName: "anubhav.app.view.View1",
          bindingPath: {
              path: "/ProductSet('AR-FB-1001')",
              propertyPath: "ProductID"
          },
          interaction: {
              idSuffix: "intro"
          }
      })).click();

      it('value',function(){
        
        expect( element(by.control({
          controlType: "sap.m.ObjectNumber",
          viewName: "anubhav.app.view.View2",
          properties: {
              number: "4.25"
          },
          interaction: {
              idSuffix: "number"
          }
      })).get()).toEqual("4.25")
      })
      

     })
  });