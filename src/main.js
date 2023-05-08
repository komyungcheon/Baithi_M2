"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StudentManager_1 = require("./StudentManager");
var Students_1 = require("./Students");
var studentManager = new StudentManager_1.StudentManger();
studentManager.addStudent("So1", "Toan", "C0223G1", "Vinh phuc", 10, "ban sung");
studentManager.addStudent("So2", "hieu", "C0223G2", "Hung yen", 5, "choi co");
studentManager.addStudent("So3", "Toan", "C0223G3", "Ha noi", 4, "dua xe");
console.table(studentManager.getStudent());
// studentManager.findStudent("Toan");
var student = new Students_1.Student("So4", "Duc", "C0223G9", "Ha noi", 4, "ban sung");
studentManager.updateStudent("So3", student);
console.table(studentManager.getStudent());
studentManager.deleteStudent("So4");
console.table(studentManager.getStudent());