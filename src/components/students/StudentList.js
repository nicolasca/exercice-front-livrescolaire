import { useEffect } from "react";
import students from "../../fixtures/Students";
import { useOvermind } from "../../overmind";
import classes from "./StudentList.module.css";

function StudentList(props) {
  const {
    state,
    actions: { setAllStudents, addStudent, removeStudent },
  } = useOvermind();

  useEffect(() => {
    setAllStudents(students);
  }, [setAllStudents]);

  return (
    <div className={classes.studentList}>
      <div>
        <h3>Participants</h3>
        <ul>
          {state.students.map((student) => {
            return student.isAttending ? (
              <li key={student.id}>
                {student.firstName} {student.lastName}{" "}
                <span
                  className={classes.sign + " " + classes.minusSign}
                  onClick={() => removeStudent(student)}
                >
                  &#8722;
                </span>
              </li>
            ) : null;
          })}
        </ul>
      </div>
      <div>
        <h3>Non participants</h3>
        <ul>
          {state.students.map((student) => {
            return !student.isAttending ? (
              <li key={student.id}>
                {student.firstName} {student.lastName}{" "}
                <span
                  className={classes.sign + " " + classes.plusSign}
                  onClick={() => addStudent(student)}
                >
                  &#43;
                </span>
              </li>
            ) : null;
          })}
        </ul>
      </div>
    </div>
  );
}

export default StudentList;
