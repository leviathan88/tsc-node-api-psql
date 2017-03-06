import { CourseModel } from './models/model'

CourseModel.findAll().then(res=>console.log(JSON.stringify(res)))

console.log('run server run')