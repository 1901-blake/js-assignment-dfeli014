/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

/**
 * Object Literal
 */
let obj1 = {
    name: "Dom", 
    age: 24
};

/**
 * Constructor function
 */
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let obj2 = new Person("Jerry", 27);

/**
 * ES6 Class
 */
class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let obj3 = new Person1("Mike", 30);

/**
 * Testing each object creation
 */
console.log(obj1);
console.log(obj2);
console.log(obj3);