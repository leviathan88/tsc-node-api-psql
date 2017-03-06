import * as ORM from 'Sequelize'
import { Sequelize } from 'sequelize'

export const initCourseModel=(sequelize: Sequelize) => sequelize.define('Course', {
    description: ORM.STRING,
    url: ORM.STRING,
    longDescription: ORM.STRING,
    iconUrl: ORM.STRING,
    courseListIcon: ORM.STRING,
    seqNo: ORM.INTEGER,
    comingSoon: ORM.BOOLEAN,
    isNew: ORM.BOOLEAN,
    isOngoing: ORM.BOOLEAN
})