require('./lib/spa.min.js');


require('./views/guide.js');
require('./views/index.js');
require('./views/home.js');
require('./views/sort.js');
require('./views/find.js');
require('./views/shopping.js');
require('./views/person.js');
require('./views/sortDetails.js');
require('./views/signin.js');
require('./views/register.js');
require('./views/sortDetas.js');
require('./views/homeone.js');
require('./views/homethree-one.js');
require('./views/homethree-two.js');
require('./views/new.js');
//打开为第一个页面
SPA.config({
	indexView: 'guide'
});