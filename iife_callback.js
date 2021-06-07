const empid=(function(){

let count =0;
return function(){   //closure
    ++count;
    return 'emp${count} is '+count;
};

})();
console.log("new emplyee");
console.log("ghada: "+empid());
console.log("nour: "+empid());

//callbacks
console.log("\n")
function fullname(first ,last ,callback){
    console.log("my name is  "+first +" "+ last );
    callback(last);

}
var greet = function(ln){
    console.log("welcome " +ln);


};
var age = function (ab){
    console.log("famous name: "+ln);
};
fullname("ghada","alrashed",greet);
fullname("ghada","riri",age);
