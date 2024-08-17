document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").classList.add("visible");
});

document
  .getElementById("scrollArrowDown")
  .addEventListener("click", function () {
    const isMobile = window.matchMedia("only screen and (max-width: 600px)").matches;
    window.scrollBy({
      top: isMobile ? window.innerHeight : window.innerHeight * 0.85,
      behavior: "smooth",
    });
  });

document.getElementById("scrollArrowUp").addEventListener("click", function () {
  window.scrollBy({
    top: -window.innerHeight * 0.85,
    behavior: "smooth",
  });
});

const items = document.querySelectorAll(".list-item");
const descriptions = document.querySelectorAll(".description > div");
items.forEach((item) => {
  item.addEventListener("click", function () {
    // Remove active class from all items and descriptions
    items.forEach((item) => item.classList.remove("active"));
    descriptions.forEach((desc) => desc.classList.remove("active"));

    // Add active class to the clicked item and corresponding description
    this.classList.add("active");
    const descId = this.getAttribute("data-description");
    document.getElementById(descId).classList.add("active");
  });
});

window.addEventListener("scroll", function () {
  const button = document.getElementById("scrollArrowUp");
  if (this.window.scrollY > 100) {
    button.classList.add("makeVisible");
  } else {
    button.classList.remove("makeVisible");
  }
});
