const updateStudentGradeByCity = (students, city, newGrades) => {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeEntry = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeEntry ? gradeEntry.grade : 'N/A'
      };
    });
};

export default updateStudentGradeByCity;
