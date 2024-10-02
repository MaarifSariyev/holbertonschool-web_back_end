import getListStudents from './0-get_list_students';

const getListStudentIds = (students) => {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((student) => student.id);
};

export default getListStudentIds;

console.log(getListStudentIds('hello'));
console.log(getListStudentIds(getListStudents()));
