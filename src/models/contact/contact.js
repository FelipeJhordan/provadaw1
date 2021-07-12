const { Model, DataTypes } = require("sequelize")
const db = require("./../configs/sequelize")
const sequelize = db.sequelize
class User extends Model { }

User.init({
    name: {
        type: DataTypes.STRING
    },
    nickname: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        validate: {isEmail: true}
    },
    whatsapp: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    modelName: "contacts"
})

module.exports = User
