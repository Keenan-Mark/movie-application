/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */
const {getMovies} = require('./api.js');

getMovies().then((movies) => {
  console.log('Here are all the movies:');
  movies.forEach(({title, rating, id}) => {
    let html = "";
    html += `<p>id#${id} - ${title} - rating: ${rating}</p>`;
    $('#moviesLayout').append(html);
  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});

$("#submit").click(function () {
  $.ajax({
    type: "POST",
    url: "./api/movies",
    data: {
      title: $("#title").val(),
      rating: $("#rating").val(),
    }
  });
  let html = "";
  html += "<p>" + $('#title').val() + "</p>";
  html += "<p>" + $('#rating').val() + '<button class="delete">X</button>' + "</p>";
  $("#moviesLayout").append(html);
});
