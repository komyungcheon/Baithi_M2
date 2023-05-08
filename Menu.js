"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readlineSync = void 0;
var StudentManager_1 = require("./src/StudentManager");
exports.readlineSync = require('readline-sync');
var StudentsManager = new StudentManager_1.StudentManger();
var menuFunction = [
    'Hien thi danh sach sinh vien',
    'Tim theo ten sinh vien',
    'Them sinh vien moi',
    'Chinh sua thong tin cua sinh vien',
    'Xoa sinh vien'
];
function init() {
    var loop = true;
    while (loop) {
        switch (keySelect(menuFunction)) {
            case 0:
                if (StudentsManager.getStudent().length === 0) {
                    console.log("khong co du lieu");
                }
                else
                    console.table(StudentsManager.getStudent());
                break;
            case 1:
                StudentsManager.findStudent();
                break;
            case 2:
                StudentsManager.addStudent();
                break;
            case 3:
                StudentsManager.updateStudent();
                break;
            case 4:
                StudentsManager.deleteStudent();
                break;
            default:
                if (exports.readlineSync.keyInYN("Ban co muon thoat khong?")) {
                    loop = false;
                }
        }
    }
}
init();
function keySelect(data) {
    return exports.readlineSync.keyInSelect(data, 'Select function:');
}
