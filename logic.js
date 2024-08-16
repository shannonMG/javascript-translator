let deck = [
   
    {index: 1,
     prompt: "Translate this code snippet to explicit English to explain what is being executed: const carousel = document.querySelector('.carouselbox');",
     response: 'The variable carousel is being assigned to the first element in the document with the class name of "carouselbox"'
     },
   

     {index: 2,
     prompt: "Translate this action into JavaScript: An event listener is being added to the element 'button'.  It listens for a click and then runs a function. ",  
     response: "button.addEventListener('click' , function () {};"
     };
    ];

const cardKey = 'cards';

function readLocalStorage() {
    let storedCards = localStorage.getItem(cardKey);
    return storedCards ? JSON.parse(storedCards): [];
}


function completedCard(card) {
    let storedCards = readLocalStorage();
    storedCards.push(card);
    localStorage.setItem(cardKey, JSON.stringify(storedCards));
}

function loadAvailableDeck(){
    let storedCards = readLocalStorage();
    let availableDeck = deck.filter(card => {
    return !storedCards.some(storedCard => storedCard.index === card.index);
        });
    
    availableDeck.map(card => card.index);


    };

