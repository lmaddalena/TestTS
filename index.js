"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash = require("lodash");
console.log("Test Typescript");
console.log("===============");
var s = lodash.padStart("Hello World", 20, " ");
console.log(s);
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
//let user = { firstName: "Jane", lastName: "User"};
var user = new Student("Jane", "M.", "Smith");
console.log(greeter(user));
//# sourceMappingURL=index.js.map