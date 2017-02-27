const low = require("lowdb")
const fileAsync = require("lowdb/lib/storages/file-async")
const db = low("db/data.json", {
  storage: fileAsync
})

function getMovies () {
  return db.get("movies").value()
}

function getMovieById (id) {
  return db.get("movies")
    .find({ id })
    .value()
}

function addMovie (body) {
  body.id = Math.random()
  return db.get("movies")
    .push(body)
    .write()
    .then(() => body.id)
}

function deleteMovieById (id) {
  return db.get("movies")
    .remove({ id: parseFloat(id) })
    .write()
}

module.exports = {
  getMovies,
  getMovieById,
  addMovie,
  deleteMovieById,
}