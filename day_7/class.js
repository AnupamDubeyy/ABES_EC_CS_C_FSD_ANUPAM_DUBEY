class Student {
    constructor(rollNo, name, course, branch) {
        this.rollNo = rollNo,
            this.name = name,
            this.couse = course,
            this.branch = branch
    }
}

const student1 = new Student(1, "a", "b.tech", "cse");
const student2 = new Student(1, "s", "m.tech", "cse");
console.log(student1);
console.log(student2);

