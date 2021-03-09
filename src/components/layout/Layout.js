import classes from "./Layout.module.css";
import Header from "../room/Header";

function Layout(props) {
  return (
    <div className={classes.container}>
      <Header />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
