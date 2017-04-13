var express = require('express'),
    mongoose = require('mongoose');

var db = mongoose.connect('webtechdevops.centralindia.cloudapp.azure.com:51003/bookAPI');

var app = express();

var port = process.env.PORT || 3000;

var bookRouter = express.Router();
bookRouter.route('/Books')
    .get(function(req, res) {
        // var responsejson = { hello: "this is my api" };
        Book.find(function(err, books) {
            if (err) {
                console.log(err);
            } else {
                res.json(books);
            }
        });
        // res.json(responsejson);
    });

app.use('/api', bookRouter);



app.get('/', function(req, res) {
    res.send('welcome to my API');
});

app.listen(port, function() {
    console.log('Gulp is Running on PORT: ', +port);
});