//elements
const prevBtns = document.querySelectorAll(".slider__btn--prev");
const nextBtns = document.querySelectorAll(".slider__btn--next");
const reviews = document.querySelectorAll(".review");
let currentReview = 0;
// Functions
//Function to add and remove the hidden class
const displayReview = function () {
  reviews.forEach((review) => {
    if (review.dataset.review == `${currentReview}`) {
      review.classList.remove("hidden");
    } else {
      review.classList.add("hidden");
    }
  });
};
//Function to go to prev review
const prevReview = function () {
  if (currentReview == 0) return;
  currentReview--;
  displayReview();
};
//Function to go to next review
const nextReview = function () {
  console.log("hello");
  if (currentReview == 1) return;
  currentReview++;
  displayReview();
};
// Event listeners
prevBtns.forEach((prevBtn) => {
  prevBtn.addEventListener("click", prevReview);
});
nextBtns.forEach((nextBtn) => {
  nextBtn.addEventListener("click", nextReview);
});
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 37) prevReview();
  if (e.keyCode == 39) nextReview();
});
