import { onError } from './onError'
import { databaseErrorHandler } from './databaseErrorHandler'
import { onSuccess } from './onSuccess'
import { Request, Response } from 'express'
import { deleteLesson } from '../queries/deleteLesson'
import * as _ from 'lodash'

export const apiDeleteLesson = (req: Request, res: Response) => {
    const lessonId = req.params.id
    deleteLesson(lessonId)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(databaseErrorHandler, res))
        .catch(_.partial(onError, res, "Could not update lesson"))
}