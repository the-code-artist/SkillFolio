//stars calculator
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section-m1');
  const totalScoreElement = document.getElementById('total-score');
  const submitButton = document.getElementById('submit');
  const averageRatingInput = document.getElementById('average-rating');

  sections.forEach(section => {
      const stars = section.querySelectorAll('.stars i');
      stars.forEach((star, index1) => {
          star.addEventListener('click', () => {
              stars.forEach((star, index2) => {
                  index1 >= index2 ? star.classList.add('active') : star.classList.remove('active');
              });
              updateTotalScore();
          });
      });
  });

  function updateTotalScore() {
      let totalScore = 0;
      let sectionsRated = 0;

      sections.forEach(section => {
          const selectedStars = section.querySelectorAll('.stars i.active').length;
          if (selectedStars > 0) {
              totalScore += selectedStars;
              sectionsRated++;
          }
      });

      const averageScore = sectionsRated > 0 ? (totalScore / sectionsRated).toFixed(2) : 0;
      totalScoreElement.textContent = averageScore;
      averageRatingInput.value = averageScore;
  }

  submitButton.addEventListener('click', () => {
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const averageRating = averageRatingInput.value;

      
      alert(`Name: ${name}\nEmail: ${email}\nAverage Rating: ${averageRating}`);
      
  });
});
//move to top button
// Get the button element
let moveToTopBtn = document.getElementById("moveToTopBtn");

// Show or hide the button based on the scroll position
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // Check if the page is scrolled more than 20px from the top
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        moveToTopBtn.style.display = "block"; // Show the button
    } else {
        moveToTopBtn.style.display = "none"; // Hide the button
    }
}

// Smooth scroll to the top with a fast, dynamic effect
function scrollToTop() {
    const startY = window.scrollY; // Get the current scroll position
    const targetY = 0; // Target position (top of the page)
    const distance = targetY - startY; // Distance to scroll

    function scrollStep(currentTime) {


        // Scroll the page to the calculated position
        window.scrollTo(0, startY + distance);

        // Continue the animation until the progress reaches 1
        if (progress < 1) {
            requestAnimationFrame(scrollStep); // Request the next animation frame
        }
    }

    // Start the animation
    requestAnimationFrame(scrollStep);
}
function fastScrollTo(targetElement) {
  const startY = window.scrollY;
  const targetY = targetElement.getBoundingClientRect().top-100 + window.scrollY;
}