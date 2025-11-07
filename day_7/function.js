// console.log(isODD(3));
console.log(isODDUsingTernary(3));

// function isODD(a) {
//     if (a % 2 !== 0) {
//         return "value is odd";
//     }
//     else {
//         return "value is even";
//     }
// }
function isODDUsingTernary(a) {
    return a % 2 !== 0 ? "value is odd" : "value is even";
}
console.log(isODDUsingTernary, "isODDUsingTernary");

//function as expression
// let funAsExpression = function isODD(a){
//     return a % 2 !== 0 ? "value is odd" : "value is even";
// }
// console.log(funAsExpression());
// console.log("invokation of isODD()",isODD(4));

//arrow function
const arrowFun = (a)=> a % 2 !== 0 ? "value is odd" : "value is even";
console.log("output from arrowFun(4): ", arrowFun(4) );


//IIFE Function (Immediately Invoked Function Expression)
(function iifeFun(){
    console.log("Inside IIFE Function");    
})();