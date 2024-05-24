let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 5000);

(function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  function showNextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  setInterval(showNextSlide, 5000);

  // Smooth scroll for the down arrow
  document
    .querySelector(".down-arrow")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
})();

document.querySelector(".down-arrow").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#next-section").scrollIntoView({
    behavior: "smooth",
  });
});

// Add click event listener to the glass icon
document
  .querySelector(".grid-item.interactive .overlay img")
  .addEventListener("click", function () {
    // Open a new page with the larger image and description
    window.open("larger_image.html", "_blank");
  });

// Add click event listener to the magnifying glass icon
document
  .querySelector(".grid-item.interactive .overlay .magnifying-glass")
  .addEventListener("click", function () {
    // Get the image element
    var image = document.querySelector(".grid-item.interactive img");

    // Change the image source
    image.src = "immages/Rectangle 82.png"; // Replace "new_image.jpg" with the path to your new image
  });

// Add click event listener to the magnifying glass icon
document
  .querySelector(".grid-item.interactive .overlay .magnifying-glass")
  .addEventListener("click", function () {
    // Replace the image source with your desired image path
    var imageSrc = "immages/Rectangle 82.png";

    // Open a new page with the larger image
    window.open(
      "larger_image.html?src=" + encodeURIComponent(imageSrc),
      "_blank"
    );
  });

function submitForm() {
  // Get selected values from each form
  var material = document.querySelector('input[name="material"]:checked').value;
  var shape = document.querySelector('input[name="shape"]:checked').value;
  var stone = document.querySelector('input[name="stone"]:checked').value;

  // Construct URL with selected options
  var checkoutURL =
    "checkout.html?material=" +
    material +
    "&shape=" +
    shape +
    "&stone=" +
    stone;

  // Redirect to the checkout page
  window.location.href = checkoutURL;
}

// Select all input fields
const materialInput = document.getElementById("material");
const shapeInput = document.getElementById("shape");
const stoneInput = document.getElementById("stone");

// Select the display elements
const materialDisplay = document.getElementById("material-display");
const shapeDisplay = document.getElementById("shape-display");
const stoneDisplay = document.getElementById("stone-display");

// Add event listeners to inputs
materialInput.addEventListener("change", updateSelectedMaterial);
shapeInput.addEventListener("change", updateSelectedShape);
stoneInput.addEventListener("change", updateSelectedStone);

// Function to update selected material
function updateSelectedMaterial() {
  materialDisplay.textContent = materialInput.value;
}

// Function to update selected shape
function updateSelectedShape() {
  shapeDisplay.textContent = shapeInput.value;
}

// Function to update selected stone
function updateSelectedStone() {
  stoneDisplay.textContent = stoneInput.value;
}
