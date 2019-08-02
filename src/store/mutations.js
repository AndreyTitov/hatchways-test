export const ADD_STUDENTS_DATA = (state, data) => {
    state.students = data;
    state.studentsList = data;
}

export const UPDATE_STUDENTS_LIST = (state, data) => {
    state.studentsList = data;
}

export const ADD_TAG = (state, tag) => {
    state.students.map(student => {
        if(student.id === tag.id) {
            student.tag.push(tag.value)
        } 
    });
}