// function favouriteFood(name){
//     if(name=="amy"){
//         var fav="pizza";
//     } else{
//         var fav="uncertain";
//     }
//     return fav;
// }
// var _this = this;
// function favourite(name :any){
//     let fav;
//     if(name=="amy"){
//          fav="pizza";
//     } else{
//          fav="uncertain";
//     }
//     return fav;
// }
// function favourite(name :any){
//     if(name=="amy"){
//          fav="pizza";
//     } else{
//          fav="uncertain";
//     }
//     return fav;
//     let fav;// hoisting is not done for let
// }
{
    var age = 0;
    setInterval(function() {
        _this.age++; // this properly refers to the Person object
    }, 1000);
    console.log("age" + age); // very, very old!
}
var values = [25, 50, 75, 100];
// equivalent to
// console.log(Math.max(25, 50, 75, 100));
console.log(Math.max.apply(Math, values));