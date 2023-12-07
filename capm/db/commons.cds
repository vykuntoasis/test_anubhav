namespace com.anu.commons;



type Gender : String(1) enum{
      male = 'M';
      female = 'F';
      undisclosed = 'U';
};

using { Currency } from '@sap/cds/common';


type AmountT : Decimal(10,2) @(
    Semantics.amount.currencyCode : 'CURRENCY_CODE',
    sap.unit : 'CURRENCY_CODE'
);

aspect Amount : {
    CURRENCY : Currency;
    GROSS_AMOUNT : AmountT @(title : '{i18n>Grossamount}');
    NET_AMOUNT: AmountT @(title : '{i18n>Netamount}');
    TAX_AMOUNT : AmountT @(title : '{i18n>Taxamount}');
}


type Guid: String(32);

