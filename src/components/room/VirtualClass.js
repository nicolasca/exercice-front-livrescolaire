import ConnectedStudents from "../students/StudentList";
import classes from "./VirtualClass.module.scss";
import { useOvermind } from "../../overmind";
import Student from "../students/Student";
import { useState } from "react";
import Modal from "../layout/Modal";

function VirtualClass() {
  const { state } = useOvermind();
  const [displayStudent, setDisplayStudent] = useState(null);

  return (
    <>
      <div className={classes.room}>
        <h2>Prof et élèves</h2>
        <div className={classes.studentsList}>
          {state.students.map((student) => {
            return student.isAttending ? (
              <div
                key={student.id}
                className={classes.studentCard}
                onClick={() => setDisplayStudent(student)}
              >
                {student.firstName} {student.lastName}
              </div>
            ) : null;
          })}
        </div>
        {displayStudent && (
          <Modal handleClose={() => setDisplayStudent(null)}>
            <Student student={displayStudent} />
          </Modal>
        )}
      </div>
      <div>
        <ConnectedStudents />
      </div>
    </>
  );
}

export default VirtualClass;
