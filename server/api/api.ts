import { apiCreateLesson } from './apiCreateLesson'
import { apiGetCourseDetails } from './apiGetCourseDetails'
import { Application } from 'express'
import { apiGetAllCourses } from './apiGetAllCourses'

export const initRestApi=(app: Application) => {
    app.route('/api/courses').get(apiGetAllCourses)
    app.route('/api/courses/:id').get(apiGetCourseDetails)
    app.route('/api/lesson').post(apiCreateLesson)
}