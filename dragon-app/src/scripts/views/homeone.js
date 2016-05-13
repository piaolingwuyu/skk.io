
var homeoneTpl = require("../tpl/homeone.string");


SPA.defineView('homeone',{
	html:homeoneTpl,
	
	plugins: ['delegated'],
	
	modules: [{
	    name: 'homeContent',
	    container: '.homethree',
	    views: ['homethree-one', 'homethree-two'],
	    defaultTag: 'homethree-one'
	  }],
	
	bindActions:{		
		'tap.homes':function(e,data){
			this.modules.homeContent.launch(data.tag);
			$(e.el).addClass('home-span1').siblings().removeClass()
		},
		'tap.homeback':function(){
			this.hide();
		}
	},
	
	bindEvents: {
		beforeShow: function(){
			var homeSwiper = new Swiper('#homeones-swiper', {
				loop: true,
				pagination: '.swiper-pagination',
				//autoplay: 1000,
				//autoplayDisableOnInteraction : false
			});
		}
	}
});
