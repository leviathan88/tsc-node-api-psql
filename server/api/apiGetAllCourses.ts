import { onSuccess } from './onSuccess'
import { onError } from './onError'
import { Request, Response } from 'express'
import * as _ from 'lodash'
import { findAllCourses } from '../queries/findAllCourses'

export const apiGetAllCourses = (req: Request, res: Response) => {
    findAllCourses()
        .then(_.partial(onSuccess, res))
        .catch(_.partial(onError, res, "Find all courses failed"))
}