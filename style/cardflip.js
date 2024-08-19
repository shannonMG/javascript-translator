

let deck = [
    {
      index: 1,
      directions: "Translate this code snippet to explicit English",
      prompt: "Translate this code snippet to explicit English: const carousel = document.querySelector('.carouselbox');",
      response: "The variable carousel is assigned to the first element in the document with the class name 'carouselbox'."
    },
    {
      index: 2,
      directions: "Translate this action into JavaScript:",
      prompt: " An event listener is being added to the element 'button'. It listens for a click and then runs a function.",
      response: "button.addEventListener('click', function () {});"
    }
  ];
  
  const cardKey = 'cards';
  
  function readLocalStorage() {
    let storedCards = localStorage.getItem(cardKey);
       return storedCards ? JSON.parse(storedCards) : [];
  }
  

  function completedCard(card) {
    let storedCards = readLocalStorage();
    storedCards.push(card);
    localStorage.setItem(cardKey, JSON.stringify(storedCards));
  }
  
  
  function loadAvailableDeck() {
    let storedCards = readLocalStorage();
    let availableDeck = deck.filter(card => {
      return !storedCards.some(storedCard => {
        return storedCard && card && storedCard.index === card.index;
      });
    });
    return availableDeck;
  }
  
  
  function displayCardData(card) {
    const frontElement = document.querySelector('.front');
    const backElement = document.querySelector('.back');
    const directionElement= frontElement.querySelector('h2')
    const promptElement= frontElement.querySelector('p');
    
    directionElement.textContent= card.directions;
    promptElement.textContent= card.prompt;
    backElement.textContent = card.response;
  }
  
 
  let currentCard = null; // Global variable to track the current card

  function loadRandomCard() {
    const availableDeck = loadAvailableDeck();
    if (availableDeck.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableDeck.length);
      currentCard = availableDeck[randomIndex]; // Set the current card
      displayCardData(currentCard); // Display the current card's data
    } else {
      alert("All cards have been completed!");
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
  
    document.querySelector('#next').addEventListener('click', function() {
      loadRandomCard();
    });
  
    document.querySelector('.card').addEventListener('click', function() {
      this.classList.toggle('flip');
    });
    
    document.querySelector('#remove').addEventListener('click', function() {
      if (currentCard) {
        completedCard(currentCard); // Pass the current card to mark it as completed
        loadRandomCard();           // Load a new card after marking the current one
      }
    });
  
    loadRandomCard(); // Load the first random card when the page loads
  });
