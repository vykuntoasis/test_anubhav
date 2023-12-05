namespace com.anu.fin;

context trans {
    entity order  {
        key id: Int16;
        customer : String;
        location : String;
        total : Decimal(10,2);
        currency : String;
        created_on : Date;
        created_by : String; 
    }
}