import * as ORM from 'Sequelize'
import { Sequelize } from 'sequelize'

export const initLessonModel=(sequelize: Sequelize) => sequelize.define('Lesson', {
    description: ORM.STRING,
    url: ORM.STRING,
    duration: ORM.STRING,
    courseId: ORM.INTEGER,
    gitHubUrl: ORM.STRING,
    seqNo: ORM.INTEGER,    
    tags: ORM.STRING,
    pro: ORM.BOOLEAN
})