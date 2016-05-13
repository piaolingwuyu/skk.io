
var newTpl = require("../tpl/new.string");


SPA.defineView('new',{
	html:newTpl,
	
	init: {
		vm: null
	},
	
	plugins: ['delegated',{
				name: 'avalon',
				options: function (vm) {
					vm.keyword = "";
				}
	}],
	
	bindActions:{

	},
	
	bindEvents: {
		'beforeShow': function(){
			this.vm = this.getVM()
			/*$.ajax({
				type:"get",
				url:"./search.json",
				async:true,
				data:{
					keyword:this.vm.keyword
				},
				success:function(data){
					
				}
			});*/
			
			
		}
		}
});
