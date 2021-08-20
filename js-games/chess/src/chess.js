const WHITE = 1;
const BLACK = 2;

function getRowCol(num) {
   return [Math.floor(num / 8), num % 8];

}

// simulate chess board
class Board {
   constructor() {
      this.color = WHITE;
      this.field = new Array(8);
      for (let i = 0; i < 8; i = i + 1) {
         this.field[i] = new Array(8).fill(0)
      }

      this.whitePawns = new Array(8).fill(new Pawn(WHITE, 'assets/img/pw.svg'));
   }

   getCurrentColor() {
      return this.color;
   }

   getCell(num) {
      return this.field[Math.floor(num / 8)][num % 8];
   }

   movePiece(figure, row, col, row1, col1) {
      this.field[row1][col1] = this.getCell(figure.getAttribute('data-id'));
      this.field[row][col] = null;

      this.redrawBoard();
   }

   redrawBoard() {
      const divs = document.querySelectorAll('.cell');

      for (let i = 0; i < 8; i = i + 1) {
         for (let j = 0; j < 8; j = j + 1) {
            if (this.field[i][j]) {
               divs[i * 8 + j].style.background = `url("${this.field[i][j].image}") 50% 50% / cover no-repeat`;
               if (((i % 2) + (i * 8 + j)) % 2 === 0) {
                  divs[6 * 8 + i].style.backgroundColor = "#fff";
               }
            } else {
               if (((i % 2) + (i * 8 + j)) % 2 === 0) {
                  divs[i * 8 + j].style.backgroundColor = '#fff';
               } else {
                  divs[i * 8 + j].style.backgroundColor = '#000'
               }
            }
         }
      }
   }

   initBoard() {
      const divs = document.querySelectorAll('.cell');

      for (let i = 0; i < 8; i = i + 1) {
         this.field[6][i] = this.whitePawns[i];
         divs[6 * 8 + i].style.background = `url("${this.whitePawns[i].image}") 50% 50% / cover no-repeat`;
         if (i % 2 === 0) {
            divs[6 * 8 + i].style.backgroundColor = "#fff";
         }
      }
   }
}

// basic Piece
class Piece {
   constructor(color, src) {
      this.color = color;
      this.image = src;
   }

   getColor() {
      return this.color;
   }

}

class Pawn extends Piece {
   constructor(color, src) {
      super(color, src);
   }

   canMove(board, row, col, row1, col1) {

      if (row1 === row) {
         return false;
      }

      let direction = 0
      let startRow = 0;

      if (this.color === WHITE) {
         direction = -1;
         startRow = 6
      } else {
         direction = 1;
         startRow = 1;
      }

      if (row + direction === row1 && board.field[row1][col1] === 0 && col1 === col) {
         return true;
      }

      if (row === startRow && row + 2 * direction === row1 && board.field[row + direction][col] === 0 && col1 === col) {
         return true;
      }

      return false;

   }
}

function main() {
   const board = new Board();
   let activeFigure;
   board.initBoard();
   const divs = document.querySelectorAll('.cell');

   // Choose figure and check move 
   divs.forEach(cell => cell.addEventListener("click", (event) => {

      if (event.target !== activeFigure && activeFigure) {
         const figure = board.getCell(activeFigure.getAttribute('data-id'));
         const [row, col] = getRowCol(activeFigure.getAttribute('data-id'));

         const [row1, col1] = getRowCol(event.target.getAttribute('data-id'));


         if (figure.canMove(board, row, col, row1, col1)) {
            board.movePiece(activeFigure, row, col, row1, col1);
         } else {
            activeFigure = undefined;
         }
      }

      divs.forEach(div => div.classList.remove('active'));

      if (board.getCell(event.target.getAttribute('data-id'))) {
         event.target.classList.add('active');
         activeFigure = event.target;
      }
   }))
}