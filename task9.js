//TASK-9
let students = [
    { name: "Aaron", marks: 85 },
    { name: "John", marks: 78 },
    { name: "Alice", marks: 92 },
    { name: "David", marks: 67 }
];

// Remove last student
students.pop();

// Sort by marks
students.sort((a, b) => a.marks - b.marks);

console.log(students);