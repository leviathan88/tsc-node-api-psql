import { LessonModel } from './../models/model'

export const updateLesson=(lessonId:string, props: any)=>LessonModel.update(props, {
    where: {
        id: lessonId
    }
})