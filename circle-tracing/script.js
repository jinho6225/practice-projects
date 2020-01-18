
const tg = document.getElementById("target");

tg.addEventListener('click', moveCircle)

function moveCircle() {
  var arr = document.querySelectorAll('.square')
  var target = document.getElementById('target')
  var length = arr.length
  for (let i = 0; i < length; i++) {
    if (arr[i].childElementCount === 1) {
      arr[i].removeChild(target)
      var index = Math.floor(Math.random() * (length - 0)) + 0
      arr[index].appendChild(target)
      return;
    }
  }
}
