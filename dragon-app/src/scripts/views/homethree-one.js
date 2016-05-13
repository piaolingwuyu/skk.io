
var homethreeoneTpl = require("../tpl/homethree-one.string");


SPA.defineView('homethree-one',{
	html:homethreeoneTpl,
	
	plugins: ['delegated'],
	
	bindActions:{
		"goto.index":function(){
			
		}
	},
	
	bindEvents: {
		beforeShow: function(){

		}
	}
});
