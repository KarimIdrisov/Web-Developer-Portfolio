const WHITE = 1;
const BLACK = 2;

// simulate chess board
class Board {
   constructor() {
      this.color = WHITE;
      this.field = new Array(8).fill(new Array(8).fill(0));
   }

   getCurrentColor() {
      return this.color;
   }

   getCell(row, col) {
      return this.field[row][col];
   }


}

// basic Piece
class Piece {
   constructor(color) {
      this.color = color;
   }

   getColor() {
      return this.color;
   }

}

class Pawn extends Piece {
   constructor(color) {
      super(color);
   }
}

const board = new Board();
console.log(board.field);