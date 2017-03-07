import { apiErrorHandler } from './api/apiErrorHandler'
import { initRestApi } from './api/api'
import * as express from 'express'

const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.set('port', 4000)

initRestApi(app)
app.use(apiErrorHandler)

app.listen(app.get('port'), ()=>console.log(`server is runnng at ${app.get('port')}`))
