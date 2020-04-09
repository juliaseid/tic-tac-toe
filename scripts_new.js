function Square () {
  this.coordinates = coordinates;
  this.move = move;
}

function Game () {
  this.grid = grid;
  this.turn = 1;
  this.result = null;
}

Game.prototype.grid = function() {
  for (row=1; row<4; row++) {
  col = 1;    
  for (col=1; col<4; col++) {
  box = [row, col];
  var boxStr = box.toString()
  grid.push(boxStr); 
  }
  return grid
  };
};

Game.prototype.result = function() {
  
}
