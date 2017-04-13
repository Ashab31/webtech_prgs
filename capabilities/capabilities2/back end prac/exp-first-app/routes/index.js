var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express!!', condition: true, anyArray: [1, 2, 3, 4] });
});

router.get('/test/:id', function(req, res, next) {
    res.render('test', { output: req.params.id })
});

router.post('/test/submit', function(req, res, next) {
    res.redirect('/test/...');
});
module.exports = router;