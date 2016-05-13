
var sortDetailsTpl = require("../tpl/sortDetails.string");


SPA.defineView('sortDetails',{
	html:sortDetailsTpl,
	
	plugins: ['delegated',{
				name: 'avalon',
				options: function (vm) {
					vm.livelist = []
				
			}
	
	}],
	
	init: {
		vm: null
	},
	
	bindActions:{
		"tap.sorts":function(){
			SPA.show("sortDetas");
			
		}
	},
	
	bindEvents: {
		
		beforeShow: function(){
			var _this = this;
			_this.vm = _this.getVM();
			var root = this.root;
			//console.log($(root).css('z-index'))
			var zIdex = $(root).css('z-index');
			$('.mask').css('z-index',zIdex-1);
			
			$('.mask').on('tap',function(){
				_this.hide();
				$(this).remove()
			});
			
			$.ajax({
				type:"get",
				url:"http://www.work.com/dragon-app/src/scripts/views/sort.json",
				async:true,
				success:function(data){
					_this.vm.livelist = data.data;
				}
			});
			
			
		}
	}
});
