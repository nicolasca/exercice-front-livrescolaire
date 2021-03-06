import { createHook } from "overmind-react";

export const config = {
  state: {
    students: [],
  },
  actions: {
    // Initialize the list of all the students.
    // For the purpose of the demo, all of them are set attending
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
        }
      });
    },
  },
};

export const useOvermind = createHook();
