$(document).ready(function(){

  document.querySelector('form').addEventListener("submit", function(event){
    event.preventDefault();
    var searchTerm = document.querySelector('input').value


    $.get('https://omdb-api.now.sh/?t='+searchTerm, function(data){
      console.log(data);
    })
  })

})
