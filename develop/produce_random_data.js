// 随机生成数据脚本

// 依赖
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

// 获取mongodb model
var Post = mongoose.model('Post');
var User = mongoose.model('User');
var Category = mongoose.model('Category');



