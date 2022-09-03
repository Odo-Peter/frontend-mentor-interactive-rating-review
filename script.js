const reviews = document.querySelectorAll('.ratings');
const rating = document.querySelector('#rating-proper');
const submitButton = document.querySelector('#submit-btn');

const reviewPage = document.querySelector('.container1');
const thankYouPage = document.querySelector('.container2');

let individualRating;

function reviewState(e) {
  individualRating = e.target.id;
  rating.innerHTML = individualRating;

  e.target.style.color = 'var(--white)';
  e.target.style.backgroundColor = 'var(--paragraph-color)';
}
function submit() {
  reviewPage.style.display = 'none';
  thankYouPage.style.display = 'block';
}

reviews.forEach((review) => {
  review.addEventListener('click', reviewState);
});

submitButton.addEventListener('click', submit);
