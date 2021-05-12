import connection from '../models/connection.js';

export const getAllCourse = async (req, res) => {
    const { userId } = req;

    if (!userId) res.status(404).json({ message: 'Unauthorized!' })

    connection.connect((err) => {
        if (err) {
            return res.status(404).json({ message: 'Connect failed!' });
        }

        console.log('connected');

        con.query("SELECT * FROM course", function (err, result, fields) {
            if (err) return res.status(404).json({ message: 'Connect failed!' });
            return res.status(200).json(JSON.stringify(result));
        });
    })
}
export const registerACourse = async (req, res) => {
    const { userId } = req;

    if (!userId) res.status(404).json({ message: 'Unauthorized!' })

    const {course} = req.params;

    connection.connect((err) => {
        if (err) {
            return res.status(404).json({ message: 'Connect failed!' });
        }

        console.log('connected');

        con.query(`INSERT INTO studentcourse (StudentID, CourseID) VALUES ('${userID}', '${course})`, function (err, result, fields) {
            if (err) return res.status(404).json({ message: 'Connect failed!' });
            return res.status(200).json(JSON.stringify(result));
        });
    })
}

export const registeredCourses = async (req, res) => {
    const { userId } = req;

    if (!userId) res.status(404).json({ message: 'Unauthorized!' })

    const {studentId} = req.params;

    connection.connect((err) => {
        if (err) {
            return res.status(404).json({ message: 'Connect failed!' });
        }

        console.log('connected');

        con.query(`SELECT ALL * FROM course, studentcourse WHERE studentcourse.StudentID = "${studentId}" AND studencourse.CourseID = course.CourseID`, function (err, result, fields) {
            if (err) return res.status(404).json({ message: 'Connect failed!' });
            return res.status(200).json(JSON.stringify(result));
        });
    })
}
export const updateCourse = async (req, res) => {
    const { userId } = req;

    if (!userId) res.status(404).json({ message: 'Unauthorized!' })

    const {course} = req.params;
    const {oldCourse} = req.query;
    
    connection.connect((err) => {
        if (err) {
            return res.status(404).json({ message: 'Connect failed!' });
        }

        console.log('connected');

        con.query(`UPDATE studentcourse SET CourseID = "${course}" WHERE CourseID = "${oldCourse}" AND StudentID = "${userId}"`, function (err, result, fields) {
            if (err) return res.status(404).json({ message: 'Connect failed!' });
            return res.status(200).json(JSON.stringify(result));
        });
    })
}