import * as lodash from  "lodash";
import * as car from "./car";

console.log("Test Typescript");
console.log("===============");

let s = lodash.padStart("Hello World!", 20, " ");
console.log(s);


class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

//let user = { firstName: "Jane", lastName: "User"};
let user = new Student("Jane", "M.", "Smith");

let myCar = new car.Car("red");

console.log(greeter(user));