
var homethreetwoTpl = require("../tpl/homethree-two.string");


SPA.defineView('homethree-two',{
	html:homethreetwoTpl,
	
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
