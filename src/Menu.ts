import {StudentManger} from "./StudentManager";

export let readlineSync = require('readline-sync');
let StudentsManager = new StudentManger();
let menuFunction = [
    'Hien thi danh sach sinh vien',
    'Tim theo ten sinh vien',
    'Them sinh vien moi',
    'Chinh sua thong tin cua sinh vien',
    'Xoa sinh vien'
];
function init() {
    let loop = true;
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
                if (readlineSync.keyInYN("Ban co muon thoat khong?")) {
                    loop = false;
                }
        }
    }
}
init();
function keySelect(data) {
    return readlineSync.keyInSelect(data, 'Select function:');
}
