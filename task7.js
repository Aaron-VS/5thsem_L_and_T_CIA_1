//TASK-7
let students = [
    { name: "Aaron", marks: 85 },
    { name: "John", marks: 35 },
    { name: "Alice", marks: 92 },
    { name: "David", marks: 40 }
];

for (let i = 0; i < students.length; i++) {
    if (students[i].marks < 50) {
        continue;
    }
    console.log(students[i]);
}


for (let i = 0; i < students.length; i++) {
    if (students[i].marks > 90) {
        break;
    }
    console.log(students[i]);
}