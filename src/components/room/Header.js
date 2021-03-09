import { useOvermind } from "../../overmind";
import { ReactComponent as IconStudents } from "../../images/theater-people.svg";
import classes from "./Header.module.css";

function Header() {
  const {
    state,
    actions: { setStudentListOpen },
  } = useOvermind();

  return (
    <header className={classes.headerClass}>
      <h1>Classe de théâtre en ligne</h1>
      <div
        title="Ouvrir/fermer la liste des élèves"
        className={`${classes.iconStudents} ${
          state.isStudentListOpen ? classes.open : ""
        }`}
      >
        {/* In charge of opening/closing the sidebar student list */}
        <IconStudents
          onClick={() => setStudentListOpen(!state.isStudentListOpen)}
        />
      </div>
    </header>
  );
}

export default Header;
