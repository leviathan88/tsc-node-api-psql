import { initRestApi } from './api/api';
import * as express from 'express'

const app = express()

app.set('port', 4000)
initRestApi(app)
app.listen(app.get('port'), ()=>console.log(`server is runnng at ${app.get('port')}`))
