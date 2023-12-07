namespace com.anu.fin;

using { com.anu.commons } from './commons';

using { cuid,temporal,managed,Currency } from '@sap/cds/common';

context trans {
    entity order :commons.Amount,cuid {
        // key id: commons.Guid;
        customer : String;
        location : String;        
        created_on : Date;
        created_by : Association to employee; 
    }
    entity employee :managed {
        key id: commons.Guid;
        name : String;
        location : String;
        Gender : commons.Gender
    }
}