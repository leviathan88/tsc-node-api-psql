import { LessonModel } from './../models/model'

export const deleteLesson=(lessonId:string)=>LessonModel.destroy({
    where: {
        id: lessonId
    }
})