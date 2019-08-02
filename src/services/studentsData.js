import axios from 'axios';

class studentsDataService {

    getStudents() {
        return axios.get('https://www.hatchways.io/api/assessment/students')
                    .then(response => {
                        const students = response.data.students.map(student => {
                            student.tag = []
                            return student;
                        });
                        return students;
                    })
                    .catch(error => {
                        console.log(error);
                    });
    }
}

const studentsData = new studentsDataService();

export default studentsData;