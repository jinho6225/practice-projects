var target = document.getElementById('counter')
var targetNum = document.querySelector('.centered')

var counter = 0;
function myFunc() {
  counter++
  targetNum.textContent = counter
}
