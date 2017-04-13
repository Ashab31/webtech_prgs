//closures

function test() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        alert(name); // displayName() uses variable declared in the parent function    
    }
    displayName();
}

test();

// function makeAdder(x) {
//     return function(y) {
//         return x + y;
//     };
// }

// var add5 = makeAdder(5);
// var add10 = makeAdder(10);

// console.log(add5(2)); // 7
// console.log(add10(2)); // 12

// function testVar() {
//     var a = 30;
//     if (true) {
//         var a = 50;
//         console.log(a);
//     }
//     console.log(a);
// }

// function testLet() {
//     let b = 20;
//     if (true) {
//         let b = 40;
//         console.log(b);
//     }
//     console.log(b);
// }

// testLet();
// testVar();

// for (var i = 0; i < 10; i++) {
//     console.log(i); // i value is 9 at the end
// }
// console.log(i); // i value is 10 at the end

// for (let j = 0; j < 5; j++) {
//     console.log(j);
// }
// console.log(j); // error j not defined
// ----------------------------------------------------------------------------------


// classes AND INHERITANCE

// class User {
//     constructor(username, email, passwrd) {
//         this.username = username;
//         this.email = email;
//         this.passwrd = passwrd;
//     }
//     static countUsers() {
//         console.log('there are 50 users');
//     }
//     register() {
//         console.log(this.username + ' is now registered');
//     }
// }

// // let bob = new User('bob', 'bob@email.com', '12345');

// // bob.register();
// // User.countUsers();

// class member extends User {
//     constructor(username, email, passwrd, mempackage) {
//         super(username, email, passwrd);
//         this.package = mempackage;
//     }

//     getPackage() {
//         console.log(this.username + ' is subscribed to ' + this.package + ' package');
//     }
// }
// let mike = new member('mike', 'mike@gmail.com', '1213', 'standard');

// mike.getPackage();

// mike.register();

// let template = '<h1>Hello</h1><p> this is simple template literal</p>';

// document.getElementById('template').innerHTML = template;

//------------------------------------------------------------------------------------

//Default parameters and spread operators

// function greet($greeting = 'hello hii') {
//     console.log($greeting);
// }
// greet();

// let args = [1, 2, 3];
// let args2 = [4, 5, 6];

// function test() {
//     console.log(args + ',' + args2);
// }

// test(...args, ...args2);

// ------------------------------------------------------------------------------------

//Promises

// let promiseToCleanRoom = new Promise(function(resolve, reject) {
//     // cleaning the room

//     let isClean = false;
//     if (isClean) {
//         resolve('Clean');
//     } else {

//         reject('Not clean');
//     }
// });

// promiseToCleanRoom.then(function(fromResolve) {
//     console.log('the room is ' + fromResolve);
// }).catch(function(fromReject) {
//     console.log('the room is ' + fromReject);
// });

//example2
// let cleanRoom = function() {
//     return new Promise(function(resolve, reject) {
//         resolve('cleaned the room');
//     });
// };

// let removeGarbage = function(msg) {
//     return new Promise(function(resolve, reject) {
//         resolve(msg + ' remove Garbage');
//     });
// };

// let winIcecream = function(msg) {
//     return new Promise(function(resolve, reject) {
//         resolve(msg + ' won Icecream');
//     });
// };

// // cleanRoom().then(function(res) {
// //     return removeGarbage(res);
// // }).then(function(res) {
// //     return winIcecream(res);
// // }).then(function(res) {
// //     console.log(res);
// // })

// Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function() {
//     console.log('all finished');
// })

// Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function() {
//     console.log('one of them is finished');
// })