//CLOSUR=child access to the parent state then it for a closur
//LEXICAL ENVIRONMENT: It means scope inner scope + outer scope =lexical environment
function Outer() {
   let a=10 
    function Inner() {

     return a+20   }
    return Inner
}
var closur = Outer()
console.log(closur())








