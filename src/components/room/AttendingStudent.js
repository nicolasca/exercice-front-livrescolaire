import classes from "./Attending.module.css";

// Show an attending student as a card in the room. It displays an image with the name
function AttendingStudent({ student }) {
  return (
    <div key={student.id} className={classes.studentCard}>
      {/* Here should be the video or an avatar of the student. For the exercice 
        we keep it simple with a static neutral image, to avoid any debate
        about my personal choice for an image of a student */}
      <img src="./assets/avatar-neutral.png" alt="Vidéo d'un ou d'une élève" />
      <span>
        {student.firstName} {student.lastName}
      </span>
    </div>
  );
}

export default AttendingStudent;
