import StudentList from "../students/StudentList";
import { useState } from "react";
import classes from "./VirtualClass.module.scss";
import { useOvermind } from "../../overmind";
import Student from "../students/StudentForm";
import Modal from "../layout/Modal";

function VirtualClass() {
  const [studentListOpen, setStudentListOpen] = useState(false);

  const {
    state,
    actions: { setDisplayStudentForm },
  } = useOvermind();

  return (
    <>
      <div className={classes.room}>
        <button
          onClick={() => {
            setStudentListOpen(!studentListOpen);
          }}
        >
          Open
        </button>
        <div
          className={`${classes.displayTeacherStudents} ${
            studentListOpen ? classes.open : classes.close
          }`}
        >
          <div className={classes.teacher}></div>
          {state.students.map((student) => {
            return student.isAttending ? (
              <div key={student.id} className={classes.studentCard}>
                {student.firstName} {student.lastName}
              </div>
            ) : null;
          })}
        </div>
        {state.displayStudentForm && (
          <Modal handleClose={() => setDisplayStudentForm(null)}>
            <Student
              saveStudent={() => setDisplayStudentForm(null)}
              student={state.displayStudentForm}
            />
          </Modal>
        )}
      </div>
      <div
        className={`${classes.studentList} ${
          studentListOpen ? classes.open : classes.close
        }`}
      >
        <StudentList />
      </div>
    </>
  );
}

export default VirtualClass;
