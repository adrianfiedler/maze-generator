let cols, rows, w = 40, grid = [];


class Cell {
  constructor(i, j) {
    this.i = i;
    this.j = j;
  }

  show () {
    let x = this.i * w;
    let y = this.j * w;
  }
}

function setup () {
  createCanvas(400, 40);
  cols = floor(width / w);
  rows = floor(height / w);

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      let cell = new Cell(i, j);
      grid.push(cell);
    }
  }
}

function draw () {
  background(51);
  for (let i = 0; i < CSSRuleList.length; i++) {
    cells[i].show();
  }
}

