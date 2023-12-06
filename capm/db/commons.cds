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
    GROSS_AMOUNT : AmountT;
    NET_AMOUNT: AmountT;
    TAX_AMOUNT : AmountT
}


type Guid: String(32);

