const container = document.querySelector("#container");

const resizeBtn =document.querySelector("#resizeBtn");

function createGrid(size) {
  const squareSize = 640 / size;
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }
}

createGrid(16);

resizeBtn.addEventListener("click", () => {
  const newSize = prompt("How many squares per side?");

  if (newSize < 1 || newSize > 100) {
    return;
  }

  container.innerHTML = "";

  createGrid(newSize) ;
    
});