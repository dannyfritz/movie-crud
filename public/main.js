$.get("/movies")
  .then((movies) => {
    movies
      .map(createMovieLi)
      .forEach((movieLi) => $("#movie-list").append(movieLi))
  })

$("#movie-list").on("click", ".js-delete", function (event) {
  const $movie = $(this).closest(".movie-li")
  $.ajax({
    method: "DELETE",
    url: `/movies/${$movie.data("id")}`
  })
    .then(() => {
      $movie.remove()
    })
    .catch((reason) => console.error(reason))
})

function createMovieLi (movie) {
  const $li = $("<li class='movie-li'>")
  $li.text(movie.name)
  $li.attr("data-id", movie.id)
  const $delete = $("<button class='js-delete'>")
  $delete.text("Delete")
  $li.append($delete)
  return $li
}

$("#new-movie-form").on("submit", function (event) {
  event.preventDefault()
  const name = $("#movie-name").val()
  $("#movie-name").val("")
  $.ajax({
    method: "POST",
    url: "/movies",
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify({ name }),
    
  })
    .then((movie) => {
      $("#movie-list").append(createMovieLi(movie))
    })
})