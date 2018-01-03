"use strict";
exports.__esModule = true;
var lodash = require("lodash");
var Persons = require("./student");
console.log("Test Typescript");
console.log("===============");
var s = lodash.padStart("Hello World!", 20, " ");
console.log(s);
var p = new Persons.Student("John", "Smith");
console.log(p.GetFullName());

//# sourceMappingURL=../maps/main.js.map
