import studentsData from '../services/studentsData';

export const addStudentsData = ( {commit} ) => {
    studentsData.getStudents().then(students => {
        commit('ADD_STUDENTS_DATA', students);
    });
};

export const updateStudentsList = ( {commit}, data ) => {
    commit('UPDATE_STUDENTS_LIST', data);
};

export const addTag = ( {commit}, tag ) => {
    commit('ADD_TAG', tag);
};