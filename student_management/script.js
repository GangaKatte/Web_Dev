let students = [];

function addStudent() {
    let name = document.getElementById("studentName").value.trim();
    let age = document.getElementById("studentAge").value.trim();
    let studentClass = document.getElementById("studentClass").value.trim();

    if (name === "" || age === "" || studentClass === "") {
        alert("All fields are required!");
        return;
    }

    students.push({ name, age: Number(age), class: studentClass });
    displayStudents();
    clearForm();
}

function displayStudents() {
    let tableBody = document.getElementById("studentTable");
    tableBody.innerHTML = "";

    students.forEach((student, index) => {
        let row = `<tr>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.class}</td>
            <td class="action-buttons">
                <button class="edit-btn" onclick="editStudent(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function editStudent(index) {
    let student = students[index];
    document.getElementById("studentName").value = student.name;
    document.getElementById("studentAge").value = student.age;
    document.getElementById("studentClass").value = student.class;
    students.splice(index, 1);
    displayStudents();
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

function clearForm() {
    document.getElementById("studentName").value = "";
    document.getElementById("studentAge").value = "";
    document.getElementById("studentClass").value = "";
}

function sortTable(column) {
    if (column === 1) {
        students.sort((a, b) => a.age - b.age);
    } else {
        students.sort((a, b) => a[Object.keys(students[0])[column]].localeCompare(b[Object.keys(students[0])[column]]));
    }
    displayStudents();
}
