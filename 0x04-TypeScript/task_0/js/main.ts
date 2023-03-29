interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
  location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");

studentsList.forEach((student: Student) => {
  const row = table.insertRow();
  const nameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);

  nameCell.innerHTML = student.firstName;
  locationCell.innerHTML = student.location;
});

document.body.appendChild(table);

