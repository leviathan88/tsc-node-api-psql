import { Request, Response, NextFunction, RequestHandler, ErrorRequestHandler } from 'express'

export const apiErrorHandler=(err: any, req: Request, res: Response, next: NextFunction)=> {

    console.log("API error", err)
    res.status(500).json({
        errorCode: 'ERR-001',
        message: 'Internal Server Error'
    })

}