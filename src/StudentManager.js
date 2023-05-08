"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentManger = void 0;
var Students_1 = require("./Students");
var Menu_1 = require("./Menu");
var StudentManger = /** @class */ (function () {
    function StudentManger() {
        this.students = [];
    }
    StudentManger.prototype.getStudent = function () {
        return this.students;
    };
    StudentManger.prototype.addStudent = function () {
        var code = Menu_1.readlineSync.question("Nhap ma sinh vien:");
        var name = Menu_1.readlineSync.question("Nhap ten sinh vien:");
        var className = Menu_1.readlineSync.question("Nhap lop cua sinh vien:");
        var hometown = Menu_1.readlineSync.question("Nhap dia chi cua sinh vien:");
        var pointStudent = Menu_1.readlineSync.question("Nhap diem cua sinh vien:");
        var interestStudent = Menu_1.readlineSync.question("Nhap so thich  cua sinh vien:");
        var student = new Students_1.Student(code, name, className, hometown, pointStudent, interestStudent);
        this.students.push(student);
    };
    StudentManger.prototype.findIndexStudentByCode = function (code) {
        return this.students.findIndex(function (item) { return item.getCode() === code; });
    };
    StudentManger.prototype.findStudent = function () {
        var name = Menu_1.readlineSync.question("nhap ten cua sinh vien");
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
    StudentManger.prototype.updateStudent = function () {
        var code = Menu_1.readlineSync.question("Nhap ma sinh vien moi:");
        var indexStudent = this.findIndexStudentByCode(code);
        if (indexStudent !== -1) {
            var name_1 = Menu_1.readlineSync.question("Nhap ten sinh vien moi:");
            var className = Menu_1.readlineSync.question("Nhap lop cua sinh vien moi:");
            var hometown = Menu_1.readlineSync.question("Nhap dia chi cua sinh vien moi:");
            var pointStudent = Menu_1.readlineSync.question("Nhap diem cua sinh vien moi:");
            var interestStudent = Menu_1.readlineSync.question("Nhap so thich  cua sinh vien moi:");
            this.students[indexStudent] = new Students_1.Student(code, name_1, className, hometown, pointStudent, interestStudent);
            console.log("cap nhat thong tin thanh cong");
        }
        else
            console.log('Không tồn tại sinh viên cần update');
    };
    StudentManger.prototype.deleteStudent = function () {
        var code = Menu_1.readlineSync.question("Nhap ma sinh vien can xoa ");
        var indexStudent = this.findIndexStudentByCode(code);
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
