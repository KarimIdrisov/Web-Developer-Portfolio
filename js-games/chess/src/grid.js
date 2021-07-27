document.addEventListener('DOMContentLoaded', () => {

   const grid = document.querySelector('.grid');


   for (let i = 0; i < 8; i = i + 1) {
      for (let j = 0; j < 8; j = j + 1) {
         const div = document.createElement('div');
         div.classList.add('cell');
         if (((i % 2) + (i * 8 + j)) % 2 === 0) {
            div.classList.add('white');
         }
         div.classList.add('cell');
         div.setAttribute('data-id', i * 8 + j);
         grid.appendChild(div);
      }
   }

   const board = new Board();
   board.drawBoard();

})