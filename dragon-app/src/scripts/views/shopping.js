
var shoppingTpl = require("../tpl/shopping.string");


SPA.defineView('shopping',{
	html:shoppingTpl,
	
	plugins: ['delegated'],
	
	bindActions:{		
		
	},
	
	bindEvents: {
		beforeShow: function(){
			
		}
	}
});
