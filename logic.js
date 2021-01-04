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
  let gridRows = prompt("Enter how much rows you want in your grid :");
  let gridCols = prompt("Enter how much columns you want in your grid :");
  makeRows(gridRows,gridCols);
  
    });
}

resetbutton.addEventListener("click", clearGrid);






makeRows(16, 16);



