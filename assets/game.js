//Content for Trivia 
var skiTheme = [{
    question: "Which ski area on average gets the most snow?",
    choices: ["Aspen Mountain", "Mt. Baker", "Park City", "Whistler"],
    wrong: ["Aspen Mountain", "Park City", "Whistler"],
    right: "Mt. Baker",
    image: "https://s-media-cache-ak0.pinimg.com/564x/53/9f/63/539f63fe5d79c3b9cc010407d6e554f8.jpg"
  }, {
    question: "Which ski areas has the most skiable acreage?",
    choices: ["Revelstoke", "Big Sky", "Whistler", "Vail"],
    wrong: ["Revelstoke", "Big Sky", "Whistler", "Vail"],
    right: "Whistler",
    image: "http://www.snow-forecast.com/system/images/25616/large/Whistler-Blackcomb.jpg?1379362085"
  }, {
    question: "Which ski area has the largest vertical change?",
    choices: ["Revelstoke","Jackson Hole", "Beaver Creek", "Telluride"],
    wrong: ["Jackson Hole", "Beaver Creek", "Telluride"],
    right: "Revelstoke",
    image: "http://www.luxuryskitrips.com/images/eagle-pass600/9-revelstoke-mountain-from-heli.jpg"
  }, {
    question: "Which ski area has the best backcountry access?",
    choices: ["Snow Bird", "Telluride", "Whistler", "Jackson Hole"],
    wrong: ["Snow Bird", "Telluride", "Taos"],
    right: "Jackson Hole",
    image: "http://gatlinburg-real-estate-for-sale.com/wp-content/uploads/2014/03/Ski-Conditions-are-Top-Reason-to-Buy-Jackson-Hole-Wyoming-Real-Estate-.png"
  }, {
    question: "Which ski area has the most reasonable day pass?",
    choices: ["Breckenridge", "Taos", "Mt Baker", "Alta"],
    wrong: ["Breckenridge", "Taos", "Alta"],
    right: "Mt Baker",
    image: "http://www.powderhounds.com/site/DefaultSite/filesystem/images/USA/MtBaker/Overview/MtBaker-08.jpg"
  }, {
    question: "Which ski town has the best apre ski scene?",
    choices: ["Killington", "Aspen", "Whistler", "Tahoe"],
    wrong: ["Killington", "Whistler", "Tahoe"],
    right: "Aspen",
    image: "https://www.thelittlenell.com/~/media/Images/3-0,Aspen,Experience/3-1,Sights,and,Culture/sights-culture-thn.ashx?h=545&la=en&w=648"
  }, {
    question: "Which ski area has the best powder?",
    choices: ["Snowbird", "Taos", "Vail", "Telluride"],
    wrong: ["Taos", "Vail", "Telluride"],
    right: "Snowbird",
    image: "http://blog.adambarkerphotography.com//wp-content/uploads/2011/02/barkera_B31I6143.jpg"
  },{
    question: "Which city is a skiers paradise?",
    choices: ["Vancouver", "Salt Lake", "Denver", "Seattle"],
    wrong: ["Vancouver", "Salt Lake", "Seattle"],
    right: "Denver",
    image: "http://us.123rf.com/450wm/tvirbickis/tvirbickis1302/tvirbickis130200809/18144975-denver-colorado-skyline-at-sunrise-day-after-winter-snow-storm-from-city-park-and-denver-museum-of-s.jpg?ver=6" 
  }
];

var answeredCorrect = 0; 
var answeredWrong = 0;
var didNotAnswer = 0;
var indexQ = 0;
var answer = "";
var currentQuestion = skiTheme[indexQ].question;

$(document).ready(function () {
  
  var counter = 30;
//********TIME COUNT FUNCTION********//
  var countDown = function countDown(){
    setInterval(timer, 1000);
    console.log(counter);
  };
//conditions for timer 
  var timer = function timer(){
    if(counter > 0){
     $('#time-remaining').html(counter);
      counter--;
    }
    else {
      stopCountDown();
      $('#time-remaining').html("TIME IS UP");
    }
  };
//reset amount for count down 
  var reset = function reset(){
    counter = 30;
  };
//clear count down
  var stopCountDown = function stopCountDown(){
    clearInterval(countDown);
    reset();
  };
  // $('#start').on('click', countDown());
//********START BUTTON FUNCTION********//
  $('#start').on('click', function (){
     $('#start').css('display' , 'none');
     questions();
     countDown();

  });
//question and choices printed to html 
  var questions = function questions(){
  currentQuestion = skiTheme[indexQ].question;
  $('#question').text(currentQuestion);
  $('#choice').empty();
  $('#choices').html('<ul><li><a class = "question">'+skiTheme[indexQ].choices[0]+'</a></li><li><a class = "question">'+skiTheme[indexQ].choices[1]+'</a></li><li><a class = "question">'+skiTheme[indexQ].choices[2]+'</a></li><li><a class = "question">'+skiTheme[indexQ].choices[3]+'</a></li></ul>');
  clicked();
  };
//event listner 
  var clicked = function clicked(){
    $('.question').on('click', function(){
      clearInterval(countDown);
      reset();
      picked(this.textContent);
    })
  };
//answer checker 
  var picked = function picked(clickedOn){

        if (clickedOn === skiTheme[indexQ].right){
          $('#question').empty();
          $('#time-remaining').empty();
          $('#choices').html('<h2 id = "right-wrong">YUP!</h2><h4 id = "place">'+skiTheme[indexQ].right+'</h4><div id="images"><img src ='+skiTheme[indexQ].image+' alt ='+skiTheme[indexQ].right+'></div>');

          stopCountDown();
          console.log(counter);
          answeredCorrect++;
          console.log(answeredCorrect);

          setTimeout(goodAnswer, 5000);
          
        } 

        else if (counter == 0){
          $('#question').empty();
          $('#time-remaining').empty();
          $('#choices').html('<h2 id = "right-wrong">TIMES UP!</h2><h4 id = "place">'+skiTheme[indexQ].right+'</h4><div id="images"><img src ='+skiTheme[indexQ].image+' alt ='+skiTheme[indexQ].right+'></div>');


          didNotAnswer++;

          setTimeout(timesUp, 5000);

        }

        else {
          $('#question').empty();
          $('#time-remaining').empty();
          $('#choices').html('<h2 id = "right-wrong">NOPE!</h2><h4 id = "place">'+skiTheme[indexQ].right+'</h4><div id="images"><img src ='+skiTheme[indexQ].image+' alt ='+skiTheme[indexQ].right+'></div>');

          answeredWrong++;

          setTimeout(badAnswer, 5000); 
          
        }
  };
//wrong answer output
  var badAnswer = function badAnswer(){
    $('#choices').empty();
    indexQ++;
    if(indexQ > skiTheme.length-1){
      stats();
    } else {
      questions();
      countDown();
    };
  };
//times up output]
  var timesUp = function timesUp(){
    $('#choices').empty();
    indexQ++;
    if(indexQ > skiTheme.length-1){
      stats();
    } else {
      questions();
      countDown();
    };
  };
//right answer output 
  var goodAnswer = function goodAnswer(){
    $('#choices').empty();
    console.log(counter);
    indexQ++;
    console.log(indexQ);
    if(indexQ > skiTheme.length-1){
      stats();
    } else {
      questions();
      console.log(currentQuestion);
      countDown();
    };
  };
//print out of player stats 
  var stats = function stats(){
    $('#choices').html('<ul><li class = "question">Answered Correct: '+answeredCorrect+'</li><li class = "question">Did Not Answer: '+didNotAnswer+'</li><li class = "question">Answered Wrong: '+answeredWrong+'</li></ul>');
  };
});
