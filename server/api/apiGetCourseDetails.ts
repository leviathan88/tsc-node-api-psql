import { onError } from './onError'
import { onSuccess } from './onSuccess'
import * as _ from 'lodash'
import { findCourseDetail } from './../queries/findCourseDetail'
import { Request, Response } from 'express'

export const apiGetCourseDetails=(req: Request, res: Response)=> {
    const courseId = parseInt(req.params.id)
    findCourseDetail(courseId)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(onError, res, "Find course details failed"))
}