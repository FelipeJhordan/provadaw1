const router = require('express').Router()

const routerPages = require("./pages")
const routerCrud = require("./crud.js")

router.use(routerPages)
router.use(routerCrud)

module.exports = router
