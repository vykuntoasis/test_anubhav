sap.ui.define([
    'anubhav/app/util/formatter'
], function(formatter) {
    'use strict';
    //define unit tests here
    QUnit.module("This is the start of Formatter module");

    function callCurrencyFormatter(assert, price, unit, expected){
        var obtainedValue = formatter.currencyFormat(price, unit);
        assert.strictEqual(obtainedValue, expected, "Formatter is formatting currency correctly");
    }

    QUnit.test("Tesing formatting to EURos", function(assert){
        callCurrencyFormatter.call(this, assert, 530, "EUR", "€530.00");
    });
    QUnit.test("Tesing formatting to EURos upto 4 digits", function(assert){
        callCurrencyFormatter.call(this, assert, 4589, "EUR", "€4,589.00");
    });
    QUnit.test("Tesing formatting to EURos with -ve value", function(assert){
        callCurrencyFormatter.call(this, assert, 50, "EUR", "€50.00");
    });

});