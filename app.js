$(document).ready(function(){
  var searchForm = document.querySelector('form');
  var inputBox = document.querySelector('input');

  searchForm.addEventListener("submit", function(event){
    event.preventDefault();
    var searchTerm = inputBox.value;


    $.get('https://omdb-api.now.sh/?t='+searchTerm, function(data){
      console.log(data);
      document.querySelector('img').src=data.Poster;
    })
  })
})
