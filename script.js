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
    const duration = 500; // Duration of the scroll (in milliseconds)
    const startTime = performance.now(); // Get the current time

    function scrollStep(currentTime) {
        const elapsed = currentTime - startTime; // Time elapsed since the start of the animation
        const progress = Math.min(elapsed / duration, 1); // Calculate the progress of the animation (0 to 1)
        const easing = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress; // easeInOutQuad easing function

        // Scroll the page to the calculated position
        window.scrollTo(0, startY + distance * easing);

        // Continue the animation until the progress reaches 1
        if (progress < 1) {
            requestAnimationFrame(scrollStep); // Request the next animation frame
        }
    }

    // Start the animation
    requestAnimationFrame(scrollStep);
}

document.querySelectorAll('.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetID = this.getAttribute('href');
      const targetElement = document.querySelector(targetID);
      fastScrollTo(targetElement);
  });
});

function fastScrollTo(targetElement) {
  const startY = window.scrollY;
  const targetY = targetElement.getBoundingClientRect().top-100 + window.scrollY;
  const distance = targetY - startY;
  const duration = 500; // milliseconds
  const startTime = performance.now();

  function scrollStep(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easing = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress; 

      window.scrollTo(0, startY + distance * easing);

      if (progress < 1) {
          requestAnimationFrame(scrollStep);
      }
  }

  requestAnimationFrame(scrollStep);
}


const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
// if anyone clicks on bar(menu bar) then bar variable is activated
if (bar) {
  // if anyone clicks on bar(menu bar) then event will happen (click) as a result will display inline func and we add a class list
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
