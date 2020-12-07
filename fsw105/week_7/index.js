var employees = [];
function Employee(name,  jobTitle ,salary ,status="full-time"){
    this.name = name;
    this.jobTitle =jobTitle;
    this.salary = salary;
    this.status = status;
   
}

 var worker1 = new Employee("Bob", "janitor", "25,000"  );
 var worker2 = new Employee("Suzie", "teacher", "35,000"  );
 var worker3= new Employee("Frank", "principal" , "45,000" );
 
 Employee.prototype.printEmployeeForm = function(){
    console.log(`${this.name} ${this.jobTitle} ${this.salary} ${this.status} `);
 };
 Employee.prototype.temporary= function() {
     this.status="Contract"
 };
worker1.temporary();
worker1.printEmployeeForm();
worker2.printEmployeeForm();
worker3.printEmployeeForm();
employees.push(worker1, worker2,worker3);

