sap.ui.define(['anubhav/app/util/formatter'],function(formatter){
       
    'use strict';

    QUnit.module("This is start of formatter module");


    function callCurrencyFormatter(assert,price,unit,expected){

        var obtainedValue = formatter.currencyFormat(price,unit);

        assert.strictEqual(obtainedValue,expected,"Formatter is formatting currency correclty")
    }

    QUnit.test("Testign formatting to EURos",function(assert){
            
          callCurrencyFormatter.call(this,assert,530,"EUR","€530.00")
    })

    QUnit.test("Testign formatting to EURos up to 4 digits",function(assert){
            
        callCurrencyFormatter.call(this,assert,4589,"EUR","€4,589.00")
  })
  QUnit.test("Testign formatting to EURos with negative vauess",function(assert){
            
    callCurrencyFormatter.call(this,assert,50,"EUR","€50.00")
})


})