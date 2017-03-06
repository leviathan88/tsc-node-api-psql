import * as ORM from 'sequelize'
import { Sequelize, LoggingOptions } from 'sequelize'

import Config from '../config'
import { initCourseModel } from './../models/initCourseModel'

const options: LoggingOptions = {benchmark: true, logging: console.log}

const sequelize: Sequelize = new ORM(Config.dbUrl, options)

export const CourseModel = initCourseModel(sequelize)