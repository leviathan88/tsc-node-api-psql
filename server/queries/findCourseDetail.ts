import { CourseModel, LessonModel } from './../models/model';
export const findCourseDetail=(courseId: number) => {
    return CourseModel.findById(courseId, {
        include: [
            {
                model: LessonModel
            }
        ]
    })
}