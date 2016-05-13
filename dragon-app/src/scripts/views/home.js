require("../lib/swiper-3.3.1.min.js");
var homeTpl = require("../tpl/home.string");



SPA.defineView('home',{
	html:homeTpl,

	plugins: ['delegated',{
				name: 'avalon',
				options: function (vm) {
					vm.livelist = [];
					vm.twolivelist = [];
					
				}
	}],
	
	init: {
		vm: null,
		homeSwiper:null,
		homeLifeSwiper:null
	},
	
	bindActions:{
		'tap.ajax':function(){
			SPA.show('homeone')
		}
	},
	
	bindEvents: {
		beforeShow: function(){
			// 保存view对象
			var _this = this;

			// 获得一个vm对象
			_this.vm = _this.getVM();
 
			$.ajax({
				type:"Get",
				url:"http://www.work.com/dragon-app/src/scripts/views/index.json",
				dataType : "json",
				async:true,
				success:function(data,status){
 
					var dataFormat = function (arr) {
					    var newArr = [];
					    for (var i = 0; i < Math.ceil(arr.length/3); i++) {
					      newArr[i] = [];
					      newArr[i].push(arr[i*3]);
					      newArr[i].push(arr[i*3+1]);
					      newArr[i].push(arr[i*3+2]);
					    }
					    return newArr;
					};
					
					//_this.vm.livelist = data.data;
					_this.vm.twolivelist = dataFormat(data.data);
					
				}
			});
			
			_this.homeSwiper = new Swiper('#home-swiper', {
				loop: true,
				pagination: '.swiper-pagination',
				autoplay: 1000,
				autoplayDisableOnInteraction : false,
			});
			_this.homeLifeSwiper = new Swiper('#home-life-swiper', {
				loop: false,

			});
			
			
			
		}
	}
});

/*    */