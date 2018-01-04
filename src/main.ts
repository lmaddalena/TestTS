import * as lodash from  "lodash";
import * as Persons from "./student";

console.log("Test Typescript");
console.log("===============");

let s = lodash.padStart("Hello World!!!", 20, " ");
console.log(s);

let p = new Persons.Student("John", "Smith");
console.log(p.GetFullName());