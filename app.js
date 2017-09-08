$(document).ready(function(){
  $.get('https://omdb-api.now.sh/?t=rambo', function(data){
    console.log(data);
  })
})
