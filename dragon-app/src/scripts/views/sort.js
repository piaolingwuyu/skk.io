
var sortTpl = require("../tpl/sort.string");


SPA.defineView('sort',{
	html:sortTpl,
	
	plugins: ['delegated'],
	
	bindActions:{
		"tap.sort":function(){
			var body = document.body;
		 	//var	indexConter = $('.index-conter')
		 	//console.log(indexConter)
			var sort = $('.sort');
			var width = $(body).width();
			var oWidth = width*4/5;
			var oConter = $(".index-conter");
			var mask = $('<div class="mask"></div>');//创建节点
			$(body).append(mask);
			//console.log(oConter);
			SPA.show('sortDetails',{
				ani:{
					name:'popup',
					height:$(body).height(),
					width:oWidth,
					duration:500,  //延迟时间，默认就是100
					autoHide:true,
					autoDirection:true,
					direction:'right',
					position:"center"
					
				}
			},body)
		}
	},
	
	bindEvents: {
		beforeShow: function(){
			
		}
	}
});