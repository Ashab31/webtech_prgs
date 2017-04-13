//rest operator is to combine the args, declared in function declaration
//spread operator is to spread the args, declared in function call.

let displayColors = function(msg, ...colors) {

    console.log(msg);
    console.log(colors);
    console.log(arguments.length); // ...colors will be counted as 1 arg only

    for (let i in colors) {
        console.log(colors[i]);
    }
}

//let msg = 'list of colors';

displayColors('hi', 'red');
displayColors('heloo', 'red', 'blue');
displayColors('hwu', 'red', 'blue', 'green');

//----------------------------------------------------------------------------------------------