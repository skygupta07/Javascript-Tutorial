/*
amount of usage depends on type of projects we are working on...
but classes and objects are important for interview...

-> -> prototype in js
a javascript is an entity having state and behaviour (properties and methods)
js objects have a special property called prototype.

we can set prototype using __proto__ 

if object and prototype have same method, object's method will be used....i.e. clash aane par object wali hi jeetegi....
i.e. jo apne hote hai wo sabse jyada apne hote hai...

internally array is object in javascript....

koi aapne prototype banaya now uski jo basic properties hoti hai wo banante ke saath hi usme 
inherit ho jaati hai...

prototype basically are reference to an object....

*/

const student = {
    fullName : "Akash Gupta",
    marks : 94,
    printMarks : function(){
        console.log("student's marks is : ", student.marks );
    }
};

let arr = ["apple", "mango", "papaya"];

arr.push("guava");

console.log(arr[0]);

const employee = {
    calcTax(){
        console.log("10% tax will be deducted");
    },

    epf(){
        console.log("employee provident fund");
    }
};


const emp1 = {
    salary: 10000,
};

const emp2 = {
    salary: 25000,
};

const emp3 = {
    salary: 40000,
}

emp1.__proto__ = employee;


/*
bulk mai similar se objects hum classes ke through banate hai..
class is a program code template for creating objects...

those objects will have some state(variables) and some behaviour(functions) inside it...

---> class mai different functions ko comma (,) se separate karne ki no need...

*/

class audiCar{
    constructor(){
        console.log("exploring a new car");
    }

    price(){
        console.log("affordable");
    }

    mileage(){
        console.log("10 kms per liter");
    }

    setModel(model){
        this.model = model;
    }
}

let a1 = new audiCar();
let r8 = new audiCar();

// constructor ek method hai but uska naam hi constructor hai...
//constructor() method is: 1. automatically invoked by new...     2. initializes object...


class heroBike{
    constructor(brand){
        console.log("exploring racing bikes");
        this.brand = brand;
    }
    color(){
        this.color = "black";
    }

    price(){
        console.log("above 3 lacs");
    }

    engine(){
        console.log("400 cc");
    }
}   


let splendor = new heroBike();

/*
 inheritance in js
inheritance is passing down properties and methods from parent class to child class.

class Parent{

}

class Child extends Parent{

}

if child and parent have same method, child's method will be used...(method overriding)


*/


class Person{
    eat(){
        console.log("eat healthy");
    }

    sleep(){
        console.log("sleep properly");
    }
    work(){
        console.log("work is worship");
    }
}

class Engineer extends Person{
    code(){
        console.log("coding for entire life");
    }

    coffee(){
        console.log("take coffee and start coding again");
    }
}






























