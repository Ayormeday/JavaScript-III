/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.

* write out a code example of each explanation above
*/

  
// Principle 1
// "this" keyword can be Global Binding when executed outside a function.
// code example for Window Binding

function myObject(name){
    console.log(this);
    return `My first name is ${name}`
}

myObject("Ayomide");

// Principle 2
// it's binding can be implicit, if we call a method inside an object using the object.method, e.g obj.sayHello(), the "this" become the obj before the dot.
// code example for Implicit Binding
const anotherObj = {
    name: "Ayomide",
    car: "benz",
    iDrive: function (){
        console.log(`my name is ${this.name} and i drive a ${this.car} car`)
        console.log(this);
    },
};
anotherObj.iDrive();

// Principle 3

// constructor binding using the "new" keyword. when the word "new" is called in a function, the "this" takes a new status as what "new" points to.

// code example for New Binding

function MyInfo(myName, myCourse, mySchool){
    this.name = myName;
    this.course = myCourse;
    this.school = mySchool;
    console.log(this);
}

var ayoInfo = new MyInfo('ayomide', 'fullstack web development', 'lambdaschool');
var ryanInfo = new MyInfo('ryan', 'fullstack', 'lambdaschool')

// Principle 4

// explicit binding. by using "call", "bind" and "apply" on a function containing the "this" keyword, it assumes what is set by the .call() or .apply()

// code example for Explicit Binding

function MyInfo(myName, myCourse, mySchool){
    this.name = myName;
    this.course = myCourse;
    this.school = mySchool;
    console.log(this);
    return `${this.name} desires to study ${this.course} at ${this.school}`
}

 let ayoMide = MyInfo.call('banana', 'ayomide', 'data science', 'lambda school');