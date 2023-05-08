import {StudentManger} from "./StudentManager";
import {Student} from "./Students";

let studentManager = new StudentManger()
studentManager.addStudent("So1","Toan","C0223G1","Vinh phuc",10,"ban sung")
studentManager.addStudent("So2","hieu","C0223G2","Hung yen",5,"choi co")
studentManager.addStudent("So3","Toan","C0223G3","Ha noi",4,"dua xe")
console.table(studentManager.getStudent());
// studentManager.findStudent("Toan");
let student = new Student("So4","Duc","C0223G9","Ha noi",4,"ban sung")
studentManager.updateStudent("So3",student);
console.table(studentManager.getStudent());
studentManager.deleteStudent("So4");
console.table(studentManager.getStudent());