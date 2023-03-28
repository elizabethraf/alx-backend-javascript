// If the input is not an array
export default function getListStudentIds(studentArray) {
  // If the input is not an empty array
  if (!Array.isArray(studentArray)) {
    return [];
  }

  // Use map to extract the IDs object in the array
  const idArray = studentArray.map((student) => student.id);

  return idArray;
}
