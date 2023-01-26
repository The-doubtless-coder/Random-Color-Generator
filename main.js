const containerEl = document.querySelector(".container");
console.log(containerEl);

// const insideContainerEl = document.querySelector(".color-container");

for (let index = 0; index < 30; index++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}

const allColorContainers = document.querySelectorAll(".color-container");
console.log(allColorContainers);

generateColors();

function generateColors() {
  allColorContainers.forEach((colorContainerEl) => {
    const colorCode = randomColor();
    colorContainerEl.innerText = colorCode;
    colorContainerEl.style.backgroundColor = colorCode;
    // console.log(colorCode);
  });
}

randomColor();

function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let color = "#";

  for (let index = 0; index < colorCodeLength; index++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    color += chars.substring(randomNumber, randomNumber + 1);
    // console.log(color);
  }

  return color;
}
