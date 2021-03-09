import { createHook } from "overmind-react";

export const config = {
  state: {
    students: [],
    displayStudentForm: null,
  },
  actions: {
    // Initialize the list of all the students.
    // For the purpose of the demo, half of them are set attending
    // to avoid to add them all by hand in the interface
    setAllStudents({ state }, studentsToAdd) {
      const halfArray = Math.floor(studentsToAdd.length / 2);
      for (let i = 0; i < halfArray; i++) {
        studentsToAdd[i].isAttending = true;
      }
      state.students = studentsToAdd;
      // state.attendingStudents = students.slice(0, halfArray);
      // state.nonAttendingStudents = students.slice(halfArray);
    },
    addStudent({ state }, studentToAdd) {
      state.students.forEach((student) => {
        if (student.id === studentToAdd.id) {
          student.isAttending = true;
        }
      });
    },
    removeStudent({ state }, studentToRemove) {
      state.students.forEach((student) => {
        if (student.id === studentToRemove.id) {
          student.isAttending = false;
        }
      });
    },
    editStudent({ state }, studentNewInformation) {
      state.students.forEach((student) => {
        if (student.id === studentNewInformation.id) {
          student.firstName = studentNewInformation.firstName;
          student.lastName = studentNewInformation.lastName;
          student.email = studentNewInformation.email;
        }
      });
    },
    setDisplayStudentForm({ state }, studentToDisplay) {
      // This strange set is because overmind a special rule for the state tree path, that can throw a Error: proxy-state-tree
      state.displayStudentForm = studentToDisplay
        ? { ...studentToDisplay }
        : null;
    },
  },
};

export const useOvermind = createHook();
