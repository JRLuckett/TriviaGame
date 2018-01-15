//Content for Trivia
var skiTheme = [{
    question: "Which ski area on average gets the most snow?",
    choices: ["Aspen Mountain", "Mt. Baker", "Park City", "Whistler"],
    wrong: ["Aspen Mountain", "Park City", "Whistler"],
    right: "Mt. Baker",
    image: "http://www.snow-forecast.com/system/images/18281/large/Mount-Baker.jpg?1334933189"
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
    image: "http://www.powderhounds.com/site/DefaultSite/filesystem/images/Canada/Revelstoke/Overview/Revelstoke-08.jpg"
  }, {
    question: "Which ski area has the best backcountry access?",
    choices: ["Snow Bird", "Telluride", "Whistler", "Jackson Hole"],
    wrong: ["Snow Bird", "Telluride", "Taos"],
    right: "Jackson Hole",
    image: "http://abodejacksonhole-83d6.kxcdn.com/wp-content/uploads/2015/03/things1.jpg"
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
    image: "https://www.thelittlenell.com/~/media/thelittlenell/images/3-0-aspen-experience/3-1-sights-and-culture/sights-culture-thn.ashx?h=545&la=en&w=648"
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
    image: "http://media.thedenverchannel.com/photo/2012/10/07/Snow-Covered-Mount-Evans-With-State-Capital-Dome.-15798020_260223_ver1.0_640_480.jpg"
  }
];

var answeredCorrect = 0;
var answeredWrong = 0;
var didNotAnswer = 0;
var indexQ = 0;
var answer;
var currentQuestion = skiTheme[indexQ].question;
var timeSet;
$(document).ready(function() {

  var counter = 10;
//********TIME COUNT FUNCTION********//
  var countDown = function countDown(){
    timeSet = setInterval(timer, 1000);
  };
//conditions for timer
  var timer = function timer(){
    if(counter > 0){
     $('#time-remaining').html(counter);
      counter--;
    }
    else {
      $('#question').empty();
      $('#time-remaining').html('TIME IS UP!');
      $('#choices').html('<h4 id = "place">'+skiTheme[indexQ].right+'</h4><div id="images"><img src ='+skiTheme[indexQ].image+' alt ='+skiTheme[indexQ].right+'></div>');

      stopCountDown();

      didNotAnswer++;

      setTimeout(timesUp, 2000);
    }
  };
//reset amount for count down
  var reset = function reset(){
    counter = 10;
  };
//clear count down
  var stopCountDown = function stopCountDown(){
    clearInterval(timeSet);
    reset();
  };
//restart game
   function startOver(){
    $('#choices').empty();
    $('#question').empty();
    $('#time-remaining').empty();
    answeredCorrect = 0;
    answeredWrong = 0;
    didNotAnswer = 0;
    indexQ = 0;
    questions();
  };
  // $('#start').on('click', countDown());
//********START BUTTON FUNCTION********//
  $('#start').on('click', function (){
     $('#start').css('display' , 'none');
     questions();
  });
//restart trivia game
  $(document).on('click', '#start-over', function(){
    console.log('hey');
    startOver();
  });
//question and choices printed to html
  var questions = function questions(){
    currentQuestion = skiTheme[indexQ].question;
    $('#question').text(currentQuestion);
    $('#choice').empty();
    $('#choices').html('<ul><li class = "question"><a>'+skiTheme[indexQ].choices[0]+'</a></li><li class = "question"><a >'+skiTheme[indexQ].choices[1]+'</a></li><li class = "question"><a>'+skiTheme[indexQ].choices[2]+'</a></li><li class = "question"><a>'+skiTheme[indexQ].choices[3]+'</a></li></ul>');
    clicked();
    countDown();
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

          answeredCorrect++;

          setTimeout(goodAnswer, 2000);

        }

        else {
          $('#question').empty();
          $('#time-remaining').empty();
          $('#choices').html('<h2 id = "right-wrong">NOPE!</h2><h4 id = "place">'+skiTheme[indexQ].right+'</h4><div id="images"><img src ='+skiTheme[indexQ].image+' alt ='+skiTheme[indexQ].right+'></div>');

          stopCountDown();

          answeredWrong++;

          setTimeout(badAnswer, 2000);

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
    };
  };
//right answer output
  var goodAnswer = function goodAnswer(){
    $('#choices').empty();

    indexQ++;

    if(indexQ > skiTheme.length-1){
      stats();
    } else {
      questions();

    };
  };
//print out of player stats
  var stats = function stats(){
    $('#choices').html('<ul><li class = "question">Answered Correct: '+answeredCorrect+'</li><li class = "question">Did Not Answer: '+didNotAnswer+'</li><li class = "question">Answered Wrong: '+answeredWrong+'</li><li id = "start-over">Start Over</li></ul>');
  };
});
