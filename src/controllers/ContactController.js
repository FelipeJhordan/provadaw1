const db = require("../config/sequelize")
const Contact = require("../models/contact/contact")

const { Op } = db.Sequelize

exports.create = (req, res) => {
    console.log(req.body)
    Contact.create({...req.body}).then((post) => {
        res.send(post)
    }).catch((err) => {
        console.log("Erro" + err)
    })
}

exports.list = async (req, res) => {
    try {
        let query = {}
        console.log(query)
        if (req.body.name !== '') query["name"] =  {[Op.like]: '%' + req.body.name + '%'}
        if (req.body.nickname !== '') query["nickname"] = { [Op.like]: '%' + req.body.nickname + '%'}
        console.log(req.body.name !== '')
         Contact.findAll({ where: query }).then(posts => {
            res.json(posts)
        }
        )
    } catch( e) {
        console.log(e)
        res.send(e)
    }
}

exports.update = (req, res) => {
    let contact = {...req.body}
    Contact.update(
        {
            name: contact.name,
            nickname: contact.nickname,
            email: contact.email,
            whatsapp: contact.whatsapp
        }, {
        where: {
            id: contact.id
        }
    }
    ).then(() => {
        res.send({ "message": "ok" })
    })
}

exports.remove = (req, res) => {
    console.log(req.body)
    console.log("entr")
    Contact.destroy({
        where: {
            id: req.body.id
        }
    }).then(affectRows => {
        res.send({ qtdRowsAffect: affectRows })
    })
}

exports.findById = async (id) => {
    return await Contact.findByPk(id)
}
