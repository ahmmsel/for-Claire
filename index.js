const card = document.querySelectorAll('.card');

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener('click', function () {
    card[i].classList.toggle('flipCard');
  });
}