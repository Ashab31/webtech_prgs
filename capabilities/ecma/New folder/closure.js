// function test() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() { // displayName() is the inner function, a closure
//         alert(name); // displayName() uses variable declared in the parent function    
//     }
//     displayName();
// }

// test();

function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12