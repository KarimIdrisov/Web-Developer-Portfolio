document.addEventListener("DOMContentLoaded", () => {

   const grid = document.querySelector('.grid');
   const result = document.querySelector('.result');

   // card options
   const cardArray = [
      {
         name: 'fries',
         img: 'images/fries.png'
      },
      {
         name: 'fries',
         img: 'images/fries.png'
      },
      {
         name: 'cheeseburger',
         img: 'images/cheeseburger.png'
      },
      {
         name: 'cheeseburger',
         img: 'images/cheeseburger.png'
      },
      {
         name: 'hotdog',
         img: 'images/hotdog.png'
      },
      {
         name: 'hotdog',
         img: 'images/hotdog.png'
      },
      {
         name: 'ice-cream',
         img: 'images/ice-cream.png'
      },
      {
         name: 'ice-cream',
         img: 'images/ice-cream.png'
      },
      {
         name: 'milkshake',
         img: 'images/milkshake.png'
      },
      {
         name: 'milkshake',
         img: 'images/milkshake.png'
      },
      {
         name: 'pizza',
         img: 'images/pizza.png'
      },
      {
         name: 'pizza',
         img: 'images/pizza.png'
      },
   ];

   cardArray.sort(() => 0.5 - Math.random());

   let chosenCards = [];
   let chosenCardsId = [];
   const cardsWon = [];

   // create board
   function createBoard() {
      for (let i = 0; i < cardArray.length; i = i + 1) {
         const card = document.createElement('img');
         card.setAttribute('src', 'images/blank.png');
         card.setAttribute('data-id', i);

         card.addEventListener('click', flipCard);

         grid.appendChild(card);
      }
   }

   function checkForMatch() {
      const cards = document.querySelectorAll('img');
      const optionOneId = chosenCardsId[0];
      const optionTwoId = chosenCardsId[1];

      if (chosenCards[0] === chosenCards[1]) {
         alert('You found a match');
         cards[optionTwoId].setAttribute('src', 'images/white.png');
         cards[optionOneId].setAttribute('src', 'images/white.png');
         cardsWon.push(chosenCards);
      } else {
         cards[optionTwoId].setAttribute('src', 'images/blank.png');
         cards[optionOneId].setAttribute('src', 'images/blank.png');
      }

      chosenCards = [];
      chosenCardsId = [];
      result.textContent = cardsWon.length;
      if (cardsWon.length === cardArray.length / 2) {
         result.textContent = "You won";
      }
   }


   // flip card
   function flipCard() {
      const cardId = this.getAttribute('data-id');
      chosenCards.push(cardArray[cardId].name);
      chosenCardsId.push(cardId);

      this.setAttribute('src', cardArray[cardId].img);

      if (chosenCards.length === 2) {
         setTimeout(checkForMatch, 500);
      }

   }

   createBoard();

})