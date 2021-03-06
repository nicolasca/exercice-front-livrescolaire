import classes from "./Student.module.css";
import { useFormik } from "formik";
import { useOvermind } from "../../overmind";

function Student({ student }) {
  const {
    actions: { editStudent },
  } = useOvermind();

  const validate = (values) => {
    const errors = {};
    if (!values.lastName) {
      errors.lastName = "Champ obligatoire";
    }
    if (!values.firstName) {
      errors.firstName = "Champ obligatoire";
    }
    if (!values.email) {
      errors.email = "Champ obligatoire";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      id: student.id,
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
      age: student.age,
    },
    validate,
    onSubmit: (values) => {
      editStudent(values);
    },
  });

  const { getFieldProps } = formik;

  return (
    <div>
      <h3>Informations sur l'élève</h3>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <input type="hidden" name="id" value={student.id} />
        <div>
          <label htmlFor="lastName">Nom</label>
          <input type="text" id="lastName" {...getFieldProps("lastName")} />
          {formik.errors.lastName && formik.touched.lastName ? (
            <span className={classes.error}> {formik.errors.lastName}</span>
          ) : null}
        </div>
        <div>
          <label htmlFor="firstName">Prénom</label>
          <input type="text" id="firstName" {...getFieldProps("firstName")} />
          {formik.errors.firstName && formik.touched.firstName ? (
            <span className={classes.error}> {formik.errors.firstName}</span>
          ) : null}
        </div>
        <div>
          <label htmlFor="email">Email</label>{" "}
          <input type="email" id="email" {...getFieldProps("email")} />
          {formik.errors.email && formik.touched.email ? (
            <span className={classes.error}> {formik.errors.email}</span>
          ) : null}
        </div>
        <div>
          <label htmlFor="age">Age</label>{" "}
          <input type="number" id="age" {...getFieldProps("age")} />{" "}
        </div>

        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}

export default Student;
