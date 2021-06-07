function Employee(name , designation , brith){
    this.name = name;
    this.designation =designation;
    this.brith= brith;
}
Employee.prototype.calculateAge = function(){
console.log('this Age is :'+(2021-this.brith));
}
console.log(Employee.prototype);
let emp1 = new Employee("ghada",'dev',1998);
console.log(emp1);
emp1.calculateAge();