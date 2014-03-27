/*--------------------------------------------------------
I want to learn it, get it, read it, understand it, 
and memorize it, so that I can understand 
all the other cool things written 
in JavaScript for years to come.
---------------------------------------------------------*/

$(document).ready(function(){

   /*---New Game on load---*/
      $("#feedback").text("Make your Guess!")
   	  $("#userGuess").empty();
   	  $("#count").val(0);

   
     /*---Getting random number---*/
          var max = 100;
          var secretNumber = Math.floor((Math.random()*100)+1) 
          var userGuesses = 0;
          $("form").on("submit", function(e){
            e.preventDefault();
          });

      $("#guessButton").on('click', function(e){
           window.setTimeout( checkNumbers, 100 );
      });

        function checkNumbers(){
           var guessNumber = parseInt( $("#userGuess").val());
           if(isNaN(guessNumber)){
              return false;
           }

           var diff = Math.abs(guessNumber - secretNumber);
           userGuesses++ ;
         $("#count").text(userGuesses);
   	     $("#userGuess").val();
   	     $("#guessBox").hide();
         console.log(guessNumber);
         console.log(secretNumber);
         

   	      //var playGame = function playGame(){
            if (guessNumber === secretNumber){
              $("#feedback").text("Congrats, you guessed!");
              $("#guessList").append(guessNumber + " ");

            } else if (diff <= 10){
                    $("#feedback").text("Burning big time");
                    $("#guessList").append(guessNumber + " ");

            } else if (diff <= 20){
                   $("#feedback").text("You're getting warmer");
                   $("#guessList").append(guessNumber + " ");

            } else if (diff <= 30){
                   $("#feedback").text("You're getting cold");
                   $("#guessList").append(guessNumber + " ");
                    

            } else if (diff <= 40){
                   $("#feedback").text("You're cold!");
                   $("#guessList").append(guessNumber + " ");
                    

            } else {
                   $("#feedback").text("Ice Ice baby!");
                   $("#guessList").append(guessNumber + " ");
                   
                   
            }   



      };

      

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    $(".new").click(function(){
      window.location.reload();
    });

  	
});


