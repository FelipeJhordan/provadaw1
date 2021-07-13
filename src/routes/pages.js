const router = require('express').Router()
const contactController = require("../controllers/ContactController")
const path = require("path")
router.get("/", (req, res) => {
    res.sendFile(path.resolve("../../public/index.html"))
})

router.get("/contatos/novo", (req, res) => {
    res.sendFile(path.resolve("public/pages/newContact.html"))
})

router.get("/contatos/:id/editar", async (req, res) => {

    if (req.params.id) {
        let contact = await contactController.findById(req.params.id)
        if(contact != null) {
            res.sendFile(path.resolve("public/pages/editContact.html"))
        } else {
            res.sendFile(path.resolve("public/pages/notFound.html"))
        }
    }
})

module.exports = router
