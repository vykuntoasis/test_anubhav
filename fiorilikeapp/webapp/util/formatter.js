sap.ui.define([],function()
{

    'use strict';

    return {
        getStatus:function(status){
            switch (status) {
                case "Available":
                    return "Success";

                    case "Discontinued":
                        return "Success";
                        
                        case "Out of Stock":
                            return "Warning";
               
            }
           
    }
}
})