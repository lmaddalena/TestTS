"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.FirstName = firstName;
        this.LastName = lastName;
    }
    Student.prototype.GetFullName = function () {
        return this.FirstName + " " + this.LastName;
    };
    return Student;
}());
exports.Student = Student;
//# sourceMappingURL=C:/Users/l.maddalena/Source/Repos2/TestTS/maps/student.js.map