const container = document.getElementById("container");
const resetbutton = document.getElementById("resetbtn");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item grid-item-hover";
    container.addEventListener("mouseover", changeColor);
  };
};

function changeColor(e) {
  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(0,0,0)`;
};

function clearGrid() {
  const gridArray = Array.from(container.childNodes)
    gridArray.forEach((element) => {
      container.removeChild(element);
      container.style.removeProperty('--grid-rows');
      container.style.removeProperty('--grid-cols');
    });
  let gridRows = prompt("How many rows do you want?Don't go over 100!");
  let gridCols = prompt("How many columns do you want?Don't go over 100!");
  if (gridRows > 100) {
    gridRows = 100;
  }
  if (gridCols > 100) {
    gridCols = 100;
  }
  makeRows(gridRows,gridCols);
}

resetbutton.addEventListener("click", clearGrid);





makeRows(16, 16);



