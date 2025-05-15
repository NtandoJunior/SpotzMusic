document.addEventListener("DOMContentLoaded", function () {
    const hiddenElements = document.querySelectorAll(".hidden");

    // Make all elements visible immediately
    hiddenElements.forEach((el) => {
        el.classList.remove("hidden");
        el.classList.add("show");
    });
});