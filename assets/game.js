//Content for Trivia 
var skiTheme = [{
    question: "Which ski area on average gets the most snow?",
    choices: ["Aspen Mountain", "Mt. Baker", "Park City", "Whistler"],
    wrong: ["Aspen Mountain", "Park City", "Whistler"],
    right: "Mt Baker",
    image: "http://snowbrains.com/wp-content/uploads/2014/12/chinookpass.jpg"
  }, {
    question: "Which ski areas has the most skiable acreage?",
    choices: ["Revelstoke", "Big Sky", "Whistler", "Vail"],
    wrong: ["Revelstoke", "Big Sky", "Whistler", "Vail"],
    right: "Whistler"
  }, {
    question: "Which ski area has the largest vertical change?",
    choices: ["Revelstoke","Jackson Hole", "Beaver Creek", "Telluride"],
    wrong: ["Jackson Hole", "Beaver Creek", "Telluride"],
    right: "Revelstoke"
  }, {
    question: "Which ski area has the best backcountry access?",
    choices: ["Snow Bird", "Telluride", "Whistler", "Jackson Hole"],
    wrong: ["Snow Bird", "Telluride", "Taos"],
    right: "Jackson Hole"
  }, {
    question: "Which ski area has the most reasonable day pass?",
    choices: ["Breckenridge", "Taos", "Mt Baker", "Alta"],
    wrong: ["Breckenridge", "Taos", "Alta"],
    right: "Mt Baker"
  }, {
    question: "Which ski town has the best aprè ski scene?",
    choices: ["Killington", "Aspen", "Whistler", "Tahoe"],
    wrong: ["Killington", "Whistler", "Tahoe"],
    right: "Aspen"
  }, {
    question: "Which ski area has the best powder?",
    choices: ["Snow Bird", "Taos", "Vail", "Telluride"],
    wrong: ["Taos", "Vail", "Telluride"],
    right: "Snow Bird"
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
var answer;
var currentQuestion = skiTheme[indexQ].question;

$(document).ready(function () {
  
  var counter = 30;
//********TIME COUNT FUNCTION********//
  var countDown = function countDown(){
    setInterval(timer, 1000);
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
  };
  // $('#start').on('click', countDown());
//********START BUTTON FUNCTION********//
  $('#start').on('click', function (){
     $('#start').css('display' , 'none');
     questions(); 
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
          answer = $(this).text;
          picked();
        })
  };
//answer checker 
  var picked = function picked(){

        if (answer == skiTheme[indexQ].right){

          stopCountDown();

          answeredCorrect++;

          var timeOut = setTimeout(goodAnswer, 5000);
          
        } 

        else if (answer == ""){

          stopCountDown();

          didNotAnswer++;

          var timeOut = setTimeout(timesUP, 5000);

        }

        else {

          stopCountDown();

          answeredWrong++;

          var timeOut = setTimeout(badAnswer, 5000); 
          
        }
  };
//wrong answer output
  var badAnswer = function badAnswer(){
    $('section').html('<h2 id = "right-wrong">NOPE!</h2><h4 id = "place">'+skiTheme[indexQ].right+'</h4><img src ='+skiTheme[indexQ].image+'  alt ='+skiTheme[indexQ].right+'>');
    reset();
    indexQ++;
    if(indexQ > skiTheme.length-1){
      stats();
    } else {
      questions();
    };
  };
//times up output
  var timesUP = function timesUP(){
    $('section').html('<h2 id = "right-wrong">TIMES UP!</h2><h4 id = "place">'+skiTheme[indexQ].right+'</h4><img src ='+skiTheme[indexQ].image+'  alt ='+skiTheme[indexQ].right+'>');
    reset();
    indexQ++;
    if(indexQ > skiTheme.length-1){
      stats();
    } else {
      questions();
    };
  };
//right answer output 
  var goodAnswer = function goodAnswer(){
    $('section').html('<h2 id = "right-wrong">YUP!</h2><h4 id = "place">'+skiTheme[indexQ].right+'</h4><img src ='+skiTheme[indexQ].image+'  alt ='+skiTheme[indexQ].right+'>');
    reset();
    indexQ++;
    if(indexQ > skiTheme.length-1){
      stats();
    } else {
      questions();
    };
  };
//print out of player stats 
  var stats = function stats(){
    $('section').html('<ul><li class = "question">Answered Correct: '+answeredCorrect+'</li><li class = "question">Did Not Answer: '+didNotAnswer+'</li><li class = "question">Answered Wrong: '+answeredWrong+'</li></ul>');
  };
});
