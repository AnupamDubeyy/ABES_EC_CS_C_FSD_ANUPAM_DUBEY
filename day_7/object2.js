const student = {
    name: "xyz",
    course: "B.Tech",
    branch: "CS",
    section: "C",
    phoneNo: {
        phoneNo1: 9876598765,
        phoneNo2: 9867895678
    },
    address: {
        hno: 23,
        street: "abc",
        city: "ghaziabad",
        state: "UP"
    }
}
const student2 = {
    name: "def",
    course: "B.Tech",
    branch: "cse",
    section: "a",
    phoneNo: {
        phoneNo1: 6758754945,
        phoneNo2: 9867895678
    },
    address: {
        hno: 23,
        street: "abc",
        city: "ghaziabad",
        state: "UP"
    }
}

console.log("Before modification newstudent value of student is: ",student.section);
console.log("Before modification newstudent value of student is: ",student.address.city);

const newStudent = Object.assign({},student);
console.log(newStudent);

newStudent.section = 'A';
newStudent.address.city = "noida";
console.log("After modification newstudent value of student is: ",student.section);
console.log("After modification newstudent value of student is: ",student.address.city);