
using { com.anu.fin } from '../db/sample';

service MyService {

     entity OrderSet as projection on fin.trans.order;
     entity EmployeeSet as projection on fin.trans.employee;
    function helloCAP(name :String) returns String
}