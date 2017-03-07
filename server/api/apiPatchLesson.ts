import { databaseErrorHandler } from './databaseErrorHandler'
import { updateLesson } from './../queries/updateLesson'
import { onError } from './onError'
import { onSuccess } from './onSuccess'
import * as _ from 'lodash'
import { findCourseDetail } from './../queries/findCourseDetail'
import { Request, Response } from 'express'

export const apiPatchLesson=(req: Request, res: Response)=> {
    const lessonId = req.params.id
    updateLesson(lessonId, req.body)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(databaseErrorHandler, res))
        .catch(_.partial(onError, res, "Could not update lesson"))
}