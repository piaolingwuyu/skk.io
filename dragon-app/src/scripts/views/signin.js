
var signinTpl = require("../tpl/signin.string");

var _ = SPA.util;

SPA.defineView('signin',{
	html:signinTpl,
	
	init:{
		vm:null
	},
	
	plugins: ['delegated',{
			name:'avalon',
			options:function(vm){
				vm.value = ""
			}
	}],
	
	bindActions:{		
		'goto.register':function(e,data){
			var body = document.body;
			var height = $(body).height();
			var oHeight = height*4/5;
			SPA.show("register",{
				ani:{
					name:"actionSheet",
					"autoHide": false,
					"distance": oHeight,
					"duration": 200, 
					"showMask": true
				}
			})
		},
		"signin-back":function(e,data){
			this.hide();
		}
	},
	
	bindEvents: {
		beforeShow: function(){
			this.vm = this.getVM();
			this.vm.value = "";
			var number = $(".yo-input").val();
			var number2 = this.vm.value;
			console.log(number)
			console.log(number2)

			_.storage("111",true);
		}
	}
});


