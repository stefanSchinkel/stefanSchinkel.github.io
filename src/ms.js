/*jslint bitwise: true, plusplus: true  */
/*global window */
"use strict";

var MS = {

  repmat: function (x, n) {
    // repeat a value n times as an array
    var arr = [];
    var i;
    for (i = 0; i < n; i++) {
      arr = arr.concat(x);
    }
    return arr;
  },
  range: function (n) {
    // primitive range() function
    var arr = [];
    var i;
    for (i = 0; i < n; i++) {
      arr[i] = i + 1;
    }
    return arr;
  },

  meshgrid: function (N) {
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
      xGrid[i] = MS.range(N);
      yGrid[i] = MS.repmat(i + 1, N);
    }
    return {
      x: xGrid,
      y: yGrid
    };
  },

  renderBoard: function (grid, x) {
    // acquire canvas
    var canvas = document.getElementById('mycanvas');
    var N = grid.length; // no of squares
    var L = canvas.height / N; // length of side
    var ctx = canvas.getContext('2d');

    var i, j;
    for (i = 0;  i < N; i++) {
      for (j = 0; j < N; j++) {
        if (grid[i][j] < x) {
          ctx.fillStyle = '#fff';
        } else {
          ctx.fillStyle = '#000';
        }
        ctx.fillRect(L * j, L * i, L, L);
      }
    }
  },

  munch: function () {
    /* @function
     *
     * @description
     * munching squares of size N
     *
     * @param {Number} N  no of squares per col/row
     * @param {Number} step timeout
     *
    */
    var N = window.N;
    var step = window.step;
    var i, j;
    var mask = [];
    // construct mask
    var grid = MS.meshgrid(N);
    for (i = 0; i < N; i++) {
      mask[i] = MS.repmat(0, N);
      for (j = 0; j < N; j++) {
        mask[i][j] = grid.x[i][j] ^ grid.y[i][j];
      }
    }
    // make index to loop over
    var idx = MS.range(N);
    idx = idx.concat(MS.range(N - 1).reverse());
    idx.pop(); // has to start at 2

    // just for debuggin
    // var div = document.getElementById('feedback');
    // div.innerHTML = idx + idx.length;

    var counter = 0;
    setInterval(function () {
      MS.renderBoard(mask, idx[counter]);
      if (counter === idx.length - 1) {
        counter = 0;
      } else {
        counter++;
      }
    }, step);
  },

};