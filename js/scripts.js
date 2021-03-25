$(document).ready(function() {
  $("form#userInput").submit(function(event){
    const userHoroscope = $("#horoscope").val();
    event.preventDefault();
    if(userHoroscope==="Taurus"){
      alert("You picked Taurus!");
    }
  })
})