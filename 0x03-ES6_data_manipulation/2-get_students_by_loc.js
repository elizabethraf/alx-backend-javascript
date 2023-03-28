export default function getStudentsByLocation(studentArray, city) {
  // Use filter to find all students located in the given city
  const matchingStudents = studentArray.filter((student) => student.location === city);

  return matchingStudents;
}
