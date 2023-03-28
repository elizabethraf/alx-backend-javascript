// return the array of student
export default function updateStudentGradeByCity(arrOfStudentObjs, city, newGrades) {
  if (!Array.isArray(arrOfStudentObjs) || typeof city !== 'string' || typeof newGrades !== 'object') {
    return [];
  }

  const updatedStudents = arrOfStudentObjs.reduce((acc, student) => {
    if (student.city === city) {
      const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
      const updatedStudent = { ...student };
      updatedStudent.grade = matchingGrade ? matchingGrade.value : 'N/A';
      acc.push(updatedStudent);
    }
    return students.filter((student) => student.location === city).map((student) => {
    const [newGrade] = newGrades.filter((item) => item.studentId === student.id);
  });

  return { ...student, grade: newGrade ? newGrade.grade : 'N/A' };
}
