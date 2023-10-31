sap.ui.define(['sap/ui/core/format/NumberFormat'],function(NumberFormat){
	return{
		getStatus: function(value){
			switch (value) {
				case "Available":
					return 'Success';
				case "Out of Stock":
					return 'Warning';
				case "Discontinued":
					return 'Error';
				default:
			}
		},

		currencyFormat:function(amount,curr){
               var oCurrencyFormat = NumberFormat.getCurrencyInstance({
				currencyCode : false
			   })

			   return oCurrencyFormat.format(amount,curr) ;
		}
	};
});