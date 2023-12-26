namespace mycappiext.srv;

using { Northwind } from './external/Northwind.csn';

service CatalogService {

entity Products as projection on Northwind.Products;
    

}


