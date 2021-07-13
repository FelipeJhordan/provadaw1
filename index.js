const express = require("express")
const db = require("./src/config/sequelize")
const routes = require("./src/routes/index")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(routes)

// db.sequelize.sync({ alter: true }).then(() => {
//     console.log("Deu certo a criação/alteração do banco.")
// })

var server = app.listen(3000, () => {
    console.log("Servidor está funcionando na porta " + server.address().port + " no host " + server.address().address)
})
