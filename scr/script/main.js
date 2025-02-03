new Swiper(".card-wrapper", {
  // Optional parameters
  spaceBetween: 40,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});
// //sign in
// function disableScroll() {
//   document.body.style.overflow = "hidden";
// }

// // Function to enable scrolling
// function enableScroll() {
//   document.body.style.overflow = "auto";
// }
// function openSignIn() {
//   document.querySelector(".sign-in-click").style.display = "flex";
//   disableScroll();
// }
// //click outslide the content of the sign-in page

// document
//   .querySelector(".sign-in-click")
//   .addEventListener("click", function (event) {
//     if (event.target !== this) return;
//     enableScroll();
//     this.style.display = "none";
//   });
document.addEventListener("DOMContentLoaded", function () {
  const signInButton = document.getElementById("openSignIn");
  const overlay = document.getElementById("overlay");
  const signInContainer = document.getElementById("signInContainer");

  function openSignIn() {
    // Show modal and overlay
    overlay.style.display = "block";
    signInContainer.style.display = "flex";

    // Disable scrolling
    document.body.style.overflow = "hidden";
  }

  function closeSignIn() {
    // Hide modal and overlay
    overlay.style.display = "none";
    signInContainer.style.display = "none";

    // Enable scrolling
    document.body.style.overflow = "auto";
  }

  // Event listener for "Sign In" button to open modal
  signInButton.addEventListener("click", openSignIn);

  // Event listener for clicking on the overlay to close modal
  overlay.addEventListener("click", closeSignIn);

  // Optional: Close modal on 'Escape' key press
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeSignIn();
    }
  });
});
