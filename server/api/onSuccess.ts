import { Response } from 'express'

export const onSuccess=(res: Response, data:any)=>res.status(200).json({payload: data})