import { useEffect } from "react";
import students from "../../fixtures/Students";
import { useOvermind } from "../../overmind";
import classes from "./StudentList.module.css";
import StudentItem from "./StudentItem";

// The student list sidebar, displaying all the connected students, and showing
// the ones attending the class and the ones not attending.
function StudentList() {
  const {
    state,
    actions: { setAllStudents },
  } = useOvermind();

  useEffect(() => {
    setAllStudents(students);
  }, [setAllStudents]);

  return (
    <div className={classes.studentList}>
      <h3>Participants</h3>
      {state.students.map((student) => {
        return student.isAttending ? (
          <div key={student.id} className={classes.studentItem}>
            <StudentItem student={student} />
          </div>
        ) : null;
      })}
      <h3>Non participants</h3>
      {state.students.map((student) => {
        return !student.isAttending ? (
          <div key={student.id} className={classes.studentItem}>
            <StudentItem student={student} />
          </div>
        ) : null;
      })}
    </div>
  );
}

export default StudentList;
