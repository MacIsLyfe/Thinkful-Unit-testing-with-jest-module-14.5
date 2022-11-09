function findLowestScoringStudent(students) {
    let student = students[0];
    if(!student){
      student = null;
      return student;
    }
    for (let i = 1; i < students.length; i++) {
        if (students[i].score < student.score) {
            student = students[i];
        }
    }
    return student;
}

module.exports = findLowestScoringStudent;