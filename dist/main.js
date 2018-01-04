"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash = require("lodash");
var Persons = require("./student");
console.log("Test Typescript");
console.log("===============");
var s = lodash.padStart("Hello World!!!", 20, " ");
console.log(s);
var p = new Persons.Student("John", "Smith");
console.log(p.GetFullName());
//# sourceMappingURL=main.js.map