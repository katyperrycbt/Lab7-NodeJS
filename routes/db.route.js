import express from 'express';
import { getAllCourse, registerACourse, registeredCourses, updateCourse } from '../controllers/db.controller.js';

const router = express.Router();

router.get('/all', getAllCourse);
router.put('/register/:course', registerACourse);
router.get('/:studentId', registeredCourses);
router.patch('/update/:course', updateCourse);

export default router;