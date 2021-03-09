import { useOvermind } from "../../overmind";
import { ReactComponent as PlusSign } from "../../images/plus-sign.svg";
import { ReactComponent as MinusSign } from "../../images/minus-sign.svg";
import { ReactComponent as EditSign } from "../../images/edit.svg";
import classes from "./StudentItem.module.css";

function StudentItem({ student }) {
  const {
    actions: { setDisplayStudentForm, addStudent, removeStudent },
  } = useOvermind();
  return (
    <div className={classes.student}>
      <span>
        {student.firstName} {student.lastName}{" "}
      </span>
      <div className={classes.actions}>
        <div className={classes.editSign}>
          <EditSign onClick={() => setDisplayStudentForm(student)} />
        </div>
        {student.isAttending ? (
          <div
            className={classes.minusSign}
            onClick={() => removeStudent(student)}
          >
            <MinusSign />
          </div>
        ) : (
          <div className={classes.plusSign}>
            <PlusSign onClick={() => addStudent(student)} />
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentItem;
