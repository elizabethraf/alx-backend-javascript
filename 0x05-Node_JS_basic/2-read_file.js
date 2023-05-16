const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.trim().split('\n');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const validLines = lines.filter((line) => line.trim() !== '');

    const numberOfStudents = validLines.length;

    console.log(`Number of students: ${numberOfStudents}`);

    const fields = ['Math', 'English', 'Science'];
    fields.forEach((field) => {
      const studentsInField = validLines.filter((line) => line.includes(field));
      const numberOfStudentsInField = studentsInField.length;
      const studentNamesInField = studentsInField.map((line) => line.split(',')[0]);
      console.log(`Number of students in ${field}: ${numberOfStudentsInField}. List: ${studentNamesInField.join(', ')}`);
    });
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = countStudents;
