export default function getStudentIdsSum(studentArray) {
  // Use reduce to add up all the student IDs in the array
  const idSum = studentArray.reduce((acc, student) => acc + student.id, 0);
  
  return idSum;
}
