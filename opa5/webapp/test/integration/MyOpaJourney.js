sap.ui.define(['sap/ui/test/opaQunit','sap/ui/test/Opa5','sap/ui/test/matchers/PropertyStrictEquals'],
function(opaQnit,opa5,PropertyStrictEquals){
'use strict';

  var myArrangement = new opa5({
    launcMyApp:function(){
        return this.iStartMyAppInAFrame("../../index.html")
    },
    terminateMyApp:function(){
        return this.iTeardownMyAppFrame("../../index.html")
    }
  })

  var myAction = new opa5({
    clickOnMyButton : function(){
        return this.waitFor({
            viewName:"Main",
            id:"idBtn",
            success:function(oBtn){
                oBtn.firePress();
            },
            errorMessage:"There was a button with id idBtn,which is not found"
        })
    }
  })


  var myAssertion = new opa5({
    checkIfTextchanged:function(){
        return this.waitFor({
         viewName:"Main",
         id:"idBtn",
         matchers:new PropertyStrictEquals({
            name:"text",
            value:"India"
         }),
         success:function(){
            QUnit.assert.ok(true,"my text button changed to India")

         },
         errorMessage: "Button text did not changed"
        })
    }
   
  })

  opa5.extendConfig({
    arrangements: myArrangement,
    actions:myAction,
    assertions:myAssertion,
    viewNamespace:"anubhavopa.opa5.view",
    timeout:10
    
  })

  opaQnit("A simplet test case",function(Given,When,Then){
                Given.launcMyApp();

                When.clickOnMyButton();

                Then.checkIfTextchanged();

                Given.terminateMyApp();
  })

})