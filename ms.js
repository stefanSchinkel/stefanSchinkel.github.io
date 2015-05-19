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
