import { Application } from 'express'

import { apiGetAllCourses } from './apiGetAllCourses'

export const initRestApi=(app: Application) => {
    app.route('/api/courses').get(apiGetAllCourses)
}