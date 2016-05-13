
var findTpl = require("../tpl/find.string");


SPA.defineView('find',{
	html:findTpl,
	
	plugins: ['delegated'],
	
	bindActions:{

	},
	
	bindEvents: {
		beforeShow: function(){

		}
	}
});
