//Challenge 1: Your age in days

function ageInDays() {
  var birthYear = prompt('What year were you born in?');
  var ageinDayss =(2019-birthYear)*365;
  var h1 = document.createElement('h1');
  var textAnswer = document.createTextNode('You are ' + ageinDayss + ' days old');
  h1.setAttribute('id', 'ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);

}
function reset() {
  document.getElementById('ageInDays').remove();
}

//challenge 2: Cat Generator
function generateCat() {
  var image = document.createElement('img');
  var div = document.getElementById('flex-cat-gen');
  image.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
  div.appendChild(image);

}

//Challenge 2: Rock, Paper, Scissor 
function rpsGame(yourChoice) {
  console.log(yourChoice);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randToRpsInt());
  console.log('computerChoice:',botChoice);
  results = decideWinner(humanChoice, botChoice); //may return an array.
  console.log(results);
  //message = finalMessage(results); //{message:"you won", 'color': 'green'} an object.
  //rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ['rock', 'paper', 'scissors'][number];
}
function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
    'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
    'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
  };

  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}
console.log()
