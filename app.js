const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const movieRoutes = require("./routes/movies")

const app = express()
const PORT = process.env.PORT || 8080

app.use(morgan("tiny"))
app.use(express.static("public"))
app.use(bodyParser.json())

app.use("/movies", movieRoutes)

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))

module.exports = app