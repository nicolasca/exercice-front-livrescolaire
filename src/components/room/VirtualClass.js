import StudentList from "../students/StudentList";
import classes from "./VirtualClass.module.scss";
import { useOvermind } from "../../overmind";
import Student from "../students/StudentForm";
import Modal from "../layout/Modal";
import AttendingStudent from "./AttendingStudent";

function VirtualClass() {
  const {
    state,
    actions: { setDisplayStudentForm },
  } = useOvermind();

  return (
    <>
      <div className={classes.room}>
        <div
          className={`${classes.displayTeacherStudents} ${
            state.isStudentListOpen ? classes.open : classes.close
          }`}
        >
          <div className={classes.teacher}>
            <img src="./assets/teacher.png" alt="Professeur" />
          </div>
          {state.students.map((student) => {
            return student.isAttending ? (
              <AttendingStudent student={student} />
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
          state.isStudentListOpen ? classes.open : classes.close
        }`}
      >
        <StudentList />
      </div>
    </>
  );
}

export default VirtualClass;
