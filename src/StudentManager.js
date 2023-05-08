"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentManger = void 0;
var Students_1 = require("./Students");
var StudentManger = /** @class */ (function () {
    function StudentManger() {
        this.students = [];
    }
    StudentManger.prototype.getStudent = function () {
        return this.students;
    };
    StudentManger.prototype.addStudent = function (code, name, className, hometown, pointStudent, interestStudent) {
        var student = new Students_1.Student(code, name, className, hometown, pointStudent, interestStudent);
        this.students.push(student);
    };
    StudentManger.prototype.findIndexStudentByCode = function (code) {
        return this.students.findIndex(function (item) { return item.getCode() === code; });
    };
    StudentManger.prototype.findStudent = function (name) {
        var indexStudent = -1;
        for (var i = 0; i < this.students.length; i++) {
            if (name === this.students[i].getName()) {
                indexStudent = i;
            }
        }
        if (indexStudent !== -1) {
            console.table(this.students[indexStudent]);
        }
        else
            console.log("Kh\u00F4ng c\u00F3 d\u1EEF li\u1EC7u ph\u00F9 h\u1EE3p");
    };
    StudentManger.prototype.updateStudent = function (code, student) {
        var indexStudent = this.findIndexStudentByCode(code);
        if (indexStudent !== -1) {
            this.students[indexStudent] = student;
        }
        else
            console.log('Không tồn tại sinh viên cần update');
    };
    StudentManger.prototype.deleteStudent = function (code) {
        var indexStudent = -1;
        for (var i = 0; i < this.students.length; i++) {
            if (code === this.students[i].getCode()) {
                indexStudent = i;
            }
        }
        if (indexStudent !== -1) {
            this.students.splice(indexStudent, 1);
            console.log("xoa thanh cong");
        }
        else
            console.log("khong toan tai sinh vien can xoa");
    };
    return StudentManger;
}());
exports.StudentManger = StudentManger;
