"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash = require("lodash");
var Persons = require("./student");
var zlib = require("zlib");
var fs = require("fs");
console.log("Test Typescript");
console.log("===============");
var s = lodash.padStart("Hello World!!!", 20, " ");
console.log(s);
var p = new Persons.Student("John", "Smith");
console.log(p.GetFullName());
var gzip = zlib.createGzip();
var inp = fs.createReadStream('input.txt');
var out = fs.createWriteStream('input.txt.gz');
inp.pipe(gzip).pipe(out);
//# sourceMappingURL=main.js.map