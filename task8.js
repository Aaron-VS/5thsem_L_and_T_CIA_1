//TASK-8
let students = [
    { name: "Aaron", marks: 85 },
    { name: "John", marks: 78 },
    { name: "Alice", marks: 92 }
];

// Add new student
students.push({ name: "David", marks: 88 });

let highest = students[0];

for (let i = 1; i < students.length; i++) {
    if (students[i].marks > highest.marks) {
        highest = students[i];
    }
}

console.log("Highest Marks Student:");
console.log(highest);