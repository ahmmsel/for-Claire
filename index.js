const card = document.querySelectorAll('.card');

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener('click', function () {
    card[i].classList.toggle('flipCard');
  });
}

let imageArr = document.querySelectorAll('.img');
let prevX = 0;
let prevY = 0;
let moveX = 0;
let moveY = 0;

document.addEventListener('mousemove', (e) => {
  effect(e);
});

function effect(e) {
  moveX = e.pageX - prevX;
  moveY = e.pageY - prevY;
  moveImage(moveX, moveY);
  prevX = e.pageX;
  prevY = e.pageY;
  console.log(e.pageX)
}

function moveImage(x, y) {
  imageArr.forEach((img) => {
    let move = 5 + (Math.random() * 15);

    img.style.left = (img.offsetLeft - x / move) + 'px';
    img.style.top = (img.offsetTop - y / move) + 'px';
  });
}