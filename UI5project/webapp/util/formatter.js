sap.ui.define(["sap/ui/core/format/NumberFormat"],
function(NumberFormat)
{
      'use strict';
      return {
        changeNametoUC:function(inp){
             
            return inp.toUpperCase();
        },
        formatCurrency : function(amount,curr){
              var oCurrencyformat = NumberFormat.getCurrencyInstance({
                    currencyCode : false
              })

              return oCurrencyformat.format(amount,curr)
        },
        getStat :function(inp){

            switch (inp){
                case 'E':
                    return 'Employed'
                    break
                 case 'T':
                    return 'Terminated'
                    break   
                    default :
                    break;
            }
              
           
        },
        getStatcolor:function(inp){
            switch (inp){
                case 'E':
                    return 'Success'
                    break
                 case 'T':
                    return 'Error'
                    break   
                    default :
                    break;
            }
              

        }
      }
})
