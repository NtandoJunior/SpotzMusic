document.addEventListener("DOMContentLoaded", function () {
  const hiddenElements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("show");
          }
      });
  }, { threshold: 0.2 }); // Triggers when 20% of the element is visible

  hiddenElements.forEach((el) => observer.observe(el));
});