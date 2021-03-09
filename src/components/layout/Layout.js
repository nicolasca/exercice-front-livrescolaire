import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={classes.container}>
      <header>
        <h1>Classe de théâtre en ligne</h1>
      </header>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
