function repmat(x, n) {
  // repeat a value n times as an array
  var arr = [];
  var i;
  for (i = 0; i < n; i++) { arr = arr.concat(x); }
  return arr;
}
function range(n) {
  // primitive range() function
  var arr = [];
  var i;
  for (i = 0; i < n; i++) { arr[i] = i + 1; }
  return arr;
}
function meshgrid(N) {
  /* @function
   *
   * @description
   * generate a rectangular 1:N grid in 2-D
   *
   * @param {Number} size of grid
   *
   * @return {Object} with x and y grid parts
  */
  var i;
  var xGrid = [];
  var yGrid = [];

  for (i = 0; i < N; i++) {
    xGrid[i] = range(N);
    yGrid[i] = repmat(i + 1, N);
  }
  return {
    x: xGrid,
    y: yGrid
  };
}
function renderBoard() {
  var N = 8; // no of scares
  var L = 32; // length of side
  var white = '#ffffff';
  var black = '#000000';
  var canvas = document.getElementById('mycanvas');
  var ctx = canvas.getContext('2d');
  var i, j;
  for (i = 0;  i < N; i++) {
    for (j = 0; j < N; j++) {

      if (ctx.fillStyle === white) {
        ctx.fillStyle = black;
      } else {
        ctx.fillStyle = white;
      }

      ctx.fillRect(L * j, L * i, L, L);
    }
    if (ctx.fillStyle === white) {
      ctx.fillStyle = black;
    } else {
      ctx.fillStyle = white;
    }

  }
}

module.exports.meshgrid = meshgrid;