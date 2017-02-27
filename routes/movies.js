const router = require("express").Router()
const api = require("../db/api")

router.get("/", function (reqeust, response) {
  console.log(api.getMovies())
  response.json(api.getMovies())
})

module.exports = router