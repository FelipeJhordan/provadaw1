const router = require('express').Router()
const contactController = require("../controllers/ContactController")

router.post("/contacts", contactController.list)
router.post("/contacts/save", contactController.create)
router.get("/contacts/last", contactController.findLast)
router.put("/contacts/edit", contactController.update)
router.get("/contact/:id",async (req, res) => {
    let contact = await contactController.findById(req.params.id)
    if(contact != null) {
        res.json(contact)
    }
})
router.delete("/contacts/remove", contactController.remove)



module.exports = router
