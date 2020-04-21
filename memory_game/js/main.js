console.log("Up and running!");

let cards = [
{
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
},
{
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
},
{
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
},
{
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
}
];

let cardsInPlay = [];
let cardId = [0,1,2,3];

function checkForMatch() 
{
let cardId = this.setAttribute('src', cards[cardId].cardImage);

if (cardsInPlay.length === 2) 
 {
	if (cardsInPlay[0] === cardsInPlay[1]) 
	{
	console.log("You found a match!"); 
	} 
	else 
		{
	console.log("Sorry Try Again.");
		}
}
}


function flipCard() {
let cardId = this.getAttribute('data-id');
console.log("User flipped" + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].Suit);
cardsInPlay.push(cards[cardId].rank);

checkForMatch();

function createBoard () {
	for (let i = 0; i < cards.length; i++) {
	let cardElement = document.createElement('img');
	cardElement.setAttribute("images/back.png");
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard)
	cardElement.appendChild('game-board');
	
	}
};

createBoard();