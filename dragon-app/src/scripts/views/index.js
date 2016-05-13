var indexTpl = require("../tpl/index.string");
var _ = SPA.util;

//视图还没显示前
SPA.defineView('index',{
	html:indexTpl,
	
	init: {
		vm: null
	},
	
	//要用点击事件 需要的插件

	plugins: ['delegated',{
				name: 'avalon',
				options: function (vm) {
					vm.keyword = "";

				}
	}],
	
	
	
	modules: [{
		name: 'indexContent',
		container: '.index-conter',
		views: ['home','sort','find','shopping','person','new'],
		defaultTag: 'home'
	  }],
	
	//点击发生的事件
	bindActions: {
		
		
		'tap.common':function(e,data){
			this.modules.indexContent.launch(data.tag);
			$(e.el).addClass('footli1').siblings().removeClass();
		},
		'tap.shopping':function(e,data){
			if(_.storage('111')){
				this.modules.indexContent.launch('shopping');
			}else{
				SPA.open('signin')
			};
			$(e.el).addClass('footli1').siblings().removeClass();
			
		},
		'tap.person':function(e,data){
			if(_.storage('111')){
				this.modules.indexContent.launch('person');
			}else{
				SPA.open('signin')
			};
			$(e.el).addClass('footli1').siblings().removeClass();
			
		},
		
		bindEvents: {
			'beforeShow': function(){
				this.vm = this.getVM()
				$.ajax({
					type:"get",
					url:"./search.json",
					async:true,
					success:function(data){
						consolo.log(data)
					}
				});
				
				
			}
		}
		
		
		
	}


})
