var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Post = mongoose.model('Post');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Post.find(function (err, Posts) {
    if (err) return next(err);
    res.render('blog/index', {
      title: 'Generator-Express MVC',
      Posts: Posts
    });
  });
});


router.get('/about', function (req, res, next) {
    res.render('blog/index', {
      title: 'About me',
    });
});

router.get('/contact', function (req, res, next) {
    res.render('blog/index', {
      title: 'Contact me',
    });
});