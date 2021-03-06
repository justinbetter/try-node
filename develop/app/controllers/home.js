var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Post = mongoose.model('Post');

module.exports = function (app) {
  app.use('/posts', router);
};

router.get('/', function (req, res, next) {
  Post.find().populate('author').populate('category').exec(function (err, posts) {
    if (err) return next(err);
    res.render('blog/index', {
      Posts: posts
    });
  });
});