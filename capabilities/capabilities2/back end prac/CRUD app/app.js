var express = require('express'),
    mongoose = require('mongoose');

//Connecting to Database
var db = mongoose.connect('webtechdevops.centralindia.cloudapp.azure.com:51003/bookAPI');

//Creating a schema
Schema = mongoose.Schema; // Instance of Schema

//collection = bookModel(CCCC)
var bookModel = new Schema({
    title: { type: String },
    author: { type: String },
    genre: { type: String },
    read: { type: Boolean, default: false }
});

var book = mongoose.model('book', bookModel);

var app = express(); //created the reference to express

var port = process.env.PORT || 3000; // specifying port 

//Creating router instance which is used to create a set of routes
var bookRouter = express.Router();

bookRouter.route('/Books')
    .get(function(req, res) {

        book.find({}, function(err, books) {
            if (err)
                console.log(err);
            else
                res.json(books);
        });
    });

//Inserting into the database

var book1 = new book({
    author: 'Amish',
    genre: 'Fiction',
    read: true
});
//saving the data
book1.save(function(err) {
    if (err) throw err;
    console.log("book1 is created succesfully");
});

var book2 = new book({
    title: 'Indian Girl',
    author: 'Chetan Bhagat',
    genre: 'Fiction',
    read: false
});
//saving the data 
book2.save(function(err) {
    if (err) throw err;
    console.log("book2 is created");
});

var book3 = new book({
    title: 'Love Story',
    author: 'Eric Segal',
    genre: 'Fantasy',
    read: true
});
//saving the data 
book3.save(function(err) {
    if (err) throw err;
    console.log("book3 is created");
});

var book4 = new book({
    title: 'Half Girlfriend',
    author: 'Chetan Bhagat',
    genre: 'Fantasy',
    read: true
});
//saving the data 
book4.save(function(err) {
    if (err) throw err;
    console.log("book4 is created");
});

//Update

book.findById('58ea9f80c9341f7dd4ecbe28', function(err, Book) {
    if (err) throw err;

    //change the users location
    Book.title = 'Revolution2020';

    //save the users
    Book.save(function(err) {
        if (err) throw err;

        console.log("updated");
    });
});

//Deleted

// book.findById('58ea9f80c9341f7dd4ecbe26', function(err, books) {
//     if (err) throw err;
//     books.remove(function(err) {
//         if (err) throw err;

//         console.log('Book successfully deleted!');
//     });
// });

//defining the routes

app.use('/api', bookRouter);

app.get('/', function(req, res) {
    res.send('Welcome');
});

app.listen(port, function() {
    console.log('Gulp is Running on the port : ' + port);
});