// Select Sign In and Sign Out buttons
let SIn = document.querySelector(".SIn");
let SOut = document.querySelector(".SOut");

// Function to change background and update active content
function changeBg(bg, title) {
  const two = document.querySelector(".two");
  const content = document.querySelector(".content");
  two.style.background = `url("./assets/Movies/${bg}")`;
  two.style.backgroundSize = "cover";
  two.style.backgroundPosition = "center";

  document.querySelectorAll(".content").forEach((content) => {
    content.classList.remove("active");
    if (content.classList.contains(title)) {
      content.classList.add("active");
    }
  });
}

// Toggle Sign In and Sign Out sections
SIn.addEventListener("click", function () {
  document.querySelector(".signin").style.display = "block";
  document.querySelector(".register").style.display = "none";
});
SOut.addEventListener("click", function () {
  document.querySelector(".signin").style.display = "none";
  document.querySelector(".register").style.display = "block";
});
