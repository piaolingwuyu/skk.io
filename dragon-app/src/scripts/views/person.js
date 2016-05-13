
var personTpl = require("../tpl/person.string");


SPA.defineView('person',{
	html:personTpl,
	
	plugins: ['delegated'],
	
	bindActions:{

	},
	
	bindEvents: {
		beforeShow: function(){

		}
	}
});
