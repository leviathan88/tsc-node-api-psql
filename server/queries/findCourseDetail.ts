import { CourseModel, LessonModel } from './../models/model'

export const findCourseDetail=(courseId: number) => CourseModel.findById(courseId, {
    include: [
        {
            model: LessonModel
        }
    ]
})
