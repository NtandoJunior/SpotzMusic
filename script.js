document.addEventListener("DOMContentLoaded", function () {
    const hiddenElements = document.querySelectorAll(".hidden");

    // Make all elements visible immediately
    hiddenElements.forEach((el) => {
        el.classList.remove("hidden");
        el.classList.add("show");
    });

    window.addEventListener('scroll', function() {
  const social = document.querySelector('.social-media');
  if (window.scrollY > 50) {
    social.classList.add('scrolled');
  } else {
    social.classList.remove('scrolled');
  }
});

});