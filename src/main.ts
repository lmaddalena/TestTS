import * as lodash from  "lodash";
import * as Persons from "./student";
import * as zlib from "zlib";
import * as fs from "fs";

console.log("Test Typescript");
console.log("===============");

let s = lodash.padStart("Hello World!!!", 20, " ");
console.log(s);

let p = new Persons.Student("John", "Smith");
console.log(p.GetFullName());

let gzip = zlib.createGzip();
let inp = fs.createReadStream('input.txt');
let out = fs.createWriteStream('input.txt.gz');

inp.pipe(gzip).pipe(out);
console.log(__dirname);
