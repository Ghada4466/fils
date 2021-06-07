var x =(2*3)+5;
var y=3*4;

var result = myfun(5,4);
console.log(result);
function myfun(num1,num2){

    var a =num1*num2; // a and b local
    var b =num1*num2;
    return(a+b);

}
console.log(myfun(3,4));
function toc(f){
    return (5/9)*(f-32);
}
console.log("temp is :"+toc(60));