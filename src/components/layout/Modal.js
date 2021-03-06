import classes from "./Modal.module.css";

function Modal({ handleClose, children }) {
  return (
    <div className={classes.modal}>
      <section className={classes.modalMain}>
        {children}
        <button
          className={classes.closeButton}
          type="button"
          onClick={handleClose}
        >
          Close
        </button>
      </section>
    </div>
  );
}

export default Modal;
