
var sortDetasTpl = require("../tpl/sortDetas.string");
require("./iscroll-probe.js");

SPA.defineView('sortDetas',{
	html:sortDetasTpl,
	
	plugins: ['delegated',{
				name:'avalon',
				options:function(vm){
					vm.livelist = [];
					vm.plainlivelist = [];
				}		
	}],
	
	init:{
		
		vm:null
	},
	
	
/*	modules: [{
		name: 'backsort',
		container: '.index-conter',
		views: ['sort'],
		defaultTag: 'sort'
	  }],*/
	  
	  
	bindActions:{
		"tap.sortsDetas":function(e,data){
			this.hide()
			//this.modules.backsort.launch(data.tag);
		}
		
		
	},
	
	bindEvents: {
		beforeShow: function(){
			var _this = this;
			
			_this.vm = _this.getVM();
			$.ajax({
				type:"get",
				url:"http://www.work.com/dragon-app/src/scripts/views/sortDetas.json",
				async:true,
				success:function(data){
					//console.log(data)
					_this.vm.livelist = data.data;
					_this.vm.plainlivelist = data.data;
				}
			});
			
			var myScroll = new IScroll('#sortiscoll', {
		        probeType: 3,
		        mouseWheel: true
		    });
		    myScroll.scrollBy(0, -35);
		
		    var head = $('.head img'),
		        topImgHasClass = head.hasClass('up');
		    var foot = $('.foot img'),
		        bottomImgHasClass = head.hasClass('down');
		    myScroll.on('scroll', function () {
		        var y = this.y,
		            maxY = this.maxScrollY - y;
		        if (y >= 0) {
		            !topImgHasClass && head.addClass('up');
		            return '';
		        }
		        if (maxY >= 0) {
		            !bottomImgHasClass && foot.addClass('down');
		            return '';
		        }
		    });
		
		    myScroll.on('scrollEnd', function () {
		        if (this.y >= -35 && this.y < 0) {
		            myScroll.scrollTo(0, -35);
		            head.removeClass('up');
		        } else if (this.y >= 0) {
		            head.attr('src', 'http://www.work.com/dragon-app/images/img/ajax-loader.gif');
		            //TODO ajax下拉刷新数据
		
		            setTimeout(function () {
		                myScroll.scrollTo(0, -35);
		                head.removeClass('up');
		                head.attr('src', 'http://www.work.com/dragon-app/images/img/arrow.png');
		            }, 1000);
		        }
		
		        var maxY = this.maxScrollY - this.y;
		        if (maxY > -35 && maxY < 0) {
		            var self = this;
		            myScroll.scrollTo(0, self.maxScrollY + 35);
		            foot.removeClass('down')
		        } else if (maxY >= 0) {
		            foot.attr('src', 'http://www.work.com/dragon-app/images/img/ajax-loader.gif');
		            //ajax上拉加载数据
		            var self = this;
						$.ajax({
							type:"get",
							url:"http://www.work.com/dragon-app/src/scripts/views/sortDetas.json",
							async:true,
							success:function(data){
								_this.vm.plainlivelist.pushArray(data.data);
								_this.vm.livelist = _this.vm.plainlivelist;
								
								//数据加载完成后，调用界面更新方法 
								myScroll.refresh();
				                //myScroll.scrollTo(0, self.y + 35);
				                //foot.removeClass('down');
				                //foot.attr('src', 'http://www.work.com/dragon-app/images/img/arrow.png');
							}
						});
				
		            /*var self = this;
		            setTimeout(function () {
		                $('.foot').before(
		                    '<div class="item">add 1</div>'+
		                    '<div class="item">add 2</div>'+
		                    '<div class="item">add 3</div>'+
		                    '<div class="item">add 4</div>'+
		                    '<div class="item">add 5</div>'
		                );
		                myScroll.refresh();
		
		                myScroll.scrollTo(0, self.y + 35);
		                foot.removeClass('down');
		                foot.attr('src', 'http://www.work.com/dragon-app/images/img/arrow.png');
		            }, 1000);*/
		        }
		    })
			
		}
	}
});
