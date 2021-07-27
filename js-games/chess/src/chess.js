const WHITE = 1;
const BLACK = 2;

// simulate chess board
class Board {
   constructor() {
      this.color = WHITE;
      this.field = new Array(8);
      for (let i = 0; i < 8; i = i + 1) {
         this.field[i] = new Array(8).fill(0)
      }

      this.whitePawns = new Array(8).fill(new Piece(WHITE, 'assets/img/pw.svg'));
   }

   getCurrentColor() {
      return this.color;
   }

   getCell(num) {
      return this.field[Math.floor(num / 8)][num % 8];
   }

   drawBoard() {
      const divs = document.querySelectorAll('.cell');

      for (let i = 0; i < 8; i = i + 1) {
         this.field[6][i] = this.whitePawns[i];
         divs[6 * 8 + i].style.background = `url("${this.whitePawns[i].image}") 50% 50% / cover no-repeat`;
         if (i % 2 === 0) {
            divs[6 * 8 + i].style.backgroundColor = "#fff";
         }
      }

      divs.forEach(cell => cell.addEventListener("click", (event) => {
         divs.forEach(div => div.classList.remove('active'))

         if (this.getCell(event.target.getAttribute('data-id')) !== 0) {
            event.target.classList.add('active');
         }
      }))
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
}