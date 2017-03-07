import { Response } from 'express'
const hri = require('human-readable-ids').hri

export const databaseErrorHandler=(res: Response, err: any)=> {
    const id = hri.random()
    console.error('Database error ocurred', id, err)

    res.status(500).json({
        code: 'ERR-002',
        message: `Error ocurred, error code: ${id}`
    })
}