import { CourseModel } from './../models/model'

export const findAllCourses=()=>CourseModel.findAll({order: ['seqNo']})