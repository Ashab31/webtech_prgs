function myfunc() {
    console.log('function was called');
}

var mystring = 'String!';

module.exports.myfunc = myfunc;
module.exports.mystring = mystring;