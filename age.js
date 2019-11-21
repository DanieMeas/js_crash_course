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

