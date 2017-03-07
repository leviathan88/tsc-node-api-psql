import { databaseErrorHandler } from './databaseErrorHandler'
import { createLesson } from './../queries/createLesson'
import { onError } from './onError'
import { onSuccess } from './onSuccess'
import { Request, Response, NextFunction, RequestHandler, ErrorRequestHandler } from 'express'
import * as _ from 'lodash'

export const apiCreateLesson=(err: any, req: Request, res: Response, next: NextFunction)=> {

    createLesson(req.body)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(databaseErrorHandler, res))
        .catch(_.partial(onError, res, "Could not create lesson"))
}
