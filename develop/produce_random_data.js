
var loremipsum = require('lorem-ipsum'),
	slug = require('slug'),
  	config = require('./config/config'),
  	glob = require('glob'),
  	mongoose = require('mongoose');

mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});


var Post = mongoose.model('Post');
var Category = mongoose.model('Category');
var User = mongoose.model('User');

User.findOne(function(error,user){
	if (error) {
		return console.log('can not find User');
	}
	console.log(user);
	Category.find(function(error,categories){
		if (error) {
			return console.log('can not find categories');
		}
		console.log(categories);

		categories.forEach(function(category){
			var title = loremipsum({count:1 , units:"sentence"});
			var post = new  Post({
				title: loremipsum({count:1 , units:"sentence"}),
			    content: loremipsum({count: 30, units:"sentence" }),
			    slug: slug(title),
			    category: category,
			    author: user,
			    published: true,
			    meta: {favorite: 0},
			    comment: [],
			    created: new Date				

			});

			post.save(function(error,post){
					console.log("saved post :",post.slug);
			});

		});

	});

});




