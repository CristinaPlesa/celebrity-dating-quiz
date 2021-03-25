$(document).ready(function() {
  $("form#userInput").submit(function(event){
    const userHoroscope = $("#horoscope").val();
    if(userHoroscope=== "Taurus"|| userHoroscope==="Aries"|| userHoroscope==="Gemini"){
      $(".Celebrities").hide();
      $("#John").toggle(); 
    } else if (userHoroscope==="Cancer"||userHoroscope==="Leo"||userHoroscope==="Virgo"){
      $(".Celebrities").hide();
      $("#Tod").toggle(); 
    } else if (userHoroscope==="Libra" || userHoroscope==="Scorpio" || userHoroscope==="Sagittarius"){
      $(".Celebrities").hide();
      $("#Jenny").toggle();
    } else {
      $(".Celebrities").hide();
      $("#Emelie").toggle();
    }
    event.preventDefault();

  })
})