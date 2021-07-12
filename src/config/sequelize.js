const dbConfig = require("./db.js")
const Sequelize = require("sequelize")


const sequelize = new Sequelize(dbConfig)
const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db
