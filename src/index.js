/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */
const {getMovies} = require('./api.js');
const apiURL = "./api/movies";
$(".hide").css("display", "none");
$("#loadingHeader").text("Loading...");

getMovies().then((movies) => {
  console.log('Here are all the movies:');
  movies.forEach(({title, rating, id}) => {
    let html = "";
    $("#newTitle").empty();
    $("#newTitle").append("Keenan & Mark's Movie Project");
    $("#loadingHeader").css("display", "none");
    $("#load").css("display", "none");
    $("#hideMe").css("display", "none");
    $(".hide").css("display", "block");
    html += `<p>id#${id} - ${title} - rating: ${rating}</p>`;
    $("#moviesLayout").append(html);
  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});

$("#submit").click(function () {
  $.ajax({
    type: "POST",
    url: apiURL,
    data: {
      title: $("#title").val(),
      rating: $("#rating").val(),
    }
  });
  let html = "";
  html += "<p>" + $('#title').val() + " " + " - rating: " +
      $('#rating').val() + " " + " " +
      '<button class="delete">X</button>' + "</p>";
  $("#moviesLayout").append(html);
});
