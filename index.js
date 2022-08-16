let cols,
  rows,
  w = 40,
  grid = [],
  current,
  stack = [];

function setup() {
  createCanvas(800, 800);
  cols = floor(width / w);
  rows = floor(height / w);

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      let cell = new Cell(i, j);
      grid.push(cell);
    }
  }
  current = grid[0];
  stack.push(current);
  // frameRate(15);
}

function draw() {
  background(51);
  for (let i = 0; i < grid.length; i++) {
    grid[i].show();
  }

  current.visited = true;
  current.highlight();
  // STEP 1
  let next = current.checkNeighbors();
  if (next) {
    next.visited = true;

    // STEP 2
    stack.push(next);

    // STEP 3
    removeWalls(current, next);

    // STEP 4
    current = next;
  } else if (stack.length > 0) {
    current = stack.pop();
  } else {
    console.log("DONE");
    noLoop();
  }
}

function removeWalls(a, b) {
  let x = a.i - b.i;
  if (x == 1) {
    a.walls[3] = false; // left of a
    b.walls[1] = false; // right of b
  } else if (x == -1) {
    a.walls[1] = false; // right of a
    b.walls[3] = false; // left of b
  }

  let y = a.j - b.j;
  if (y == 1) {
    a.walls[0] = false; // top of a
    b.walls[2] = false; // bottom of b
  } else if (y == -1) {
    a.walls[2] = false; // bottom of a
    b.walls[0] = false; // top of b
  }
}
