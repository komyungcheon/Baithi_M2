import {Student} from "./Students";
import {readlineSync} from "../Menu";

export class StudentManger {
    students: Student [] = []

    constructor() {
    }

    getStudent() {
        return this.students;
    }

    addStudent() {
        let code = readlineSync.question(`Nhap ma sinh vien:`)
        let name = readlineSync.question(`Nhap ten sinh vien:`)
        let className = readlineSync.question(`Nhap lop cua sinh vien:`)
        let hometown = readlineSync.question(`Nhap dia chi cua sinh vien:`)
        let pointStudent = readlineSync.question(`Nhap diem cua sinh vien:`)
        let interestStudent = readlineSync.question(`Nhap so thich  cua sinh vien:`)
        let student = new Student(code, name, className, hometown, pointStudent, interestStudent)
        this.students.push(student);
    }

    findIndexStudentByCode(code:string) {
        return this.students.findIndex(item => item.getCode() === code);
    }
    findStudent() {
        let name   = readlineSync.question("nhap ten cua sinh vien");
        let indexStudent = -1
        for (let i = 0; i < this.students.length; i++) {
            if (name === this.students[i].getName()) {
                indexStudent = i
            }
        }
        if (indexStudent !== -1) {
            console.table(this.students[indexStudent])
        } else console.log(`Không có dữ liệu phù hợp`)

    }

    updateStudent() {
        let code = readlineSync.question(`Nhap ma sinh vien moi:`)
        let indexStudent = this.findIndexStudentByCode(code)
        if (indexStudent !== -1) {
            let name = readlineSync.question(`Nhap ten sinh vien moi:`)
            let className = readlineSync.question(`Nhap lop cua sinh vien moi:`)
            let hometown = readlineSync.question(`Nhap dia chi cua sinh vien moi:`)
            let pointStudent = readlineSync.question(`Nhap diem cua sinh vien moi:`)
            let interestStudent = readlineSync.question(`Nhap so thich  cua sinh vien moi:`)
            this.students[indexStudent] = new Student(code,name,className,hometown,pointStudent,interestStudent)
            console.log("cap nhat thong tin thanh cong")
        } else console.log('Không tồn tại sinh viên cần update')
    }

    deleteStudent() {
        let code = readlineSync.question("Nhap ma sinh vien can xoa ")
        let indexStudent = this.findIndexStudentByCode(code)
        if(indexStudent !== -1){
            this.students.splice(indexStudent,1)
            console.log("xoa thanh cong")
        }
        else console.log(`khong toan tai sinh vien can xoa`)
    }
}

