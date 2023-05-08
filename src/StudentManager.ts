import {Student} from "./Students";

export class StudentManger {
    students: Student [] = []

    constructor() {
    }

    getStudent() {
        return this.students
    }

    addStudent(code: string, name: string, className: string, hometown: string, pointStudent: number, interestStudent: string) {
        let student = new Student(code, name, className, hometown, pointStudent, interestStudent)
        this.students.push(student);
    }

    findIndexStudentByCode(code:string) {
        return this.students.findIndex(item => item.getCode() === code);
    }

    findStudent(name: string) {
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

    updateStudent(code: string, student: Student) {
        let indexStudent = this.findIndexStudentByCode(code)
        if (indexStudent !== -1) {
            this.students[indexStudent] = student
        } else console.log('Không tồn tại sinh viên cần update')
    }

    deleteStudent(code: string) {
        let indexStudent = -1
        for (let i = 0; i < this.students.length; i++) {
            if (code === this.students[i].getCode()) {
                indexStudent = i;
            }
        }
        if(indexStudent !== -1){
            this.students.splice(indexStudent,1)
            console.log("xoa thanh cong")
        }
        else console.log(`khong toan tai sinh vien can xoa`)
    }
}

