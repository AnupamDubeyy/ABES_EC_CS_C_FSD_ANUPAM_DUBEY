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
//accessing obj properties
console.log(student.name);
console.log(student['name']);

let x = 'name';
console.log(student[x]);

function modifyStudent(obj) {
    obj.name = "ABC";
}
modifyStudent(student);

console.log(student.name);
console.log(student['name']);