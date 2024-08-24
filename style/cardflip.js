

let deck = [
    {
      index: 1,
      directions: "Translate this code snippet to explicit English",
      prompt: "const carousel = document.querySelector('.carouselbox');",
      response: "The variable carousel is assigned to the first element in the document with the class name 'carouselbox'."
    },
    {
      index: 2,
      directions: "Translate this action into JavaScript:",
      prompt: " An event listener is being added to the element 'button'. It listens for a click and then runs a function.",
      response: "button.addEventListener('click', function () {});"
    },
    {
      index: 3,
      directions: "Translate this action into JavaScript:",
      prompt: "The variable carousel is assigned to the first element in the document with the class name 'carouselbox'.",
      response: "const carousel = document.querySelector('.carouselbox');"
    },
    {
      index: 4,
      directions: "Translate this code snippet to explicit English",
      prompt: "button.addEventListener('click', function () {});",
      response: "An event listener is being added to the element 'button'. It listens for a click and then runs a function."
    },
    {
      index: 5,
      directions: "Translate this code snippet to explicit English",
      prompt: "let isLoggedIn = user !== null;",
      response: "The variable isLoggedIn is being assigned a value of true if the user is not null, and false otherwise."
    },
    {
      index: 6,
      directions: "Translate this code snippet to explicit English",
      prompt: "const fruits = ['apple', 'banana', 'cherry'];",
      response: "The variable fruits is being assigned an array containing three strings: 'apple', 'banana', and 'cherry'."
    },
    {
      index: 7,
      directions: "Translate this code snippet to explicit English",
      prompt: "document.getElementById('submit').disabled = true;",
      response: "The element with the ID 'submit' is being disabled, meaning the user won't be able to interact with it."
    },
    {
      index: 8,
      directions: "Translate this code snippet to explicit English",
      prompt: "if (score >= 75) { console.log('Pass'); }",
      response: "If the variable score is 75 or greater, the message 'Pass' is logged to the console."
    },
    {
      index: 9,
      directions: "Translate this code snippet to explicit English",
      prompt: "for (let i = 0; i < 5; i++) { console.log(i); }",
      response: "This loop will print the numbers 0 through 4 to the console, incrementing i by 1 each time."
    },
    {
      index: 10,
      directions: "Translate this action into JavaScript",
      prompt: "Create a function named greet that logs 'Hello, World!' to the console when called.",
      response: "function greet() { console.log('Hello, World!'); }"
    },
    {
      index: 11,
      directions: "Translate this action into JavaScript",
      prompt: "Select all elements with the class item and store them in a variable named items.",
      response: "const items = document.querySelectorAll('.item');"
    },
    {
      index: 12,
      directions: "Translate this action into JavaScript",
      prompt: "Check if the age variable is greater than or equal to 18, and if so, log 'Adult' to the console.",
      response: "if (age >= 18) { console.log('Adult'); }"
    },
    {
      index: 13,
      directions: "Translate this action into JavaScript",
      prompt: "Add a class named hidden to an element with the ID 'menu'.",
      response: "document.getElementById('menu').classList.add('hidden');"
    },
    {
      index: 14,
      directions: "Translate this action into JavaScript",
      prompt: "Declare a constant named PI and assign it the value 3.14159.",
      response: "const PI = 3.14159;"
    },
    {
      index: 15,
      directions: "Translate this code snippet to explicit English",
      prompt: "let name = 'John';",
      response: "The variable name is being assigned the string value 'John'."
    },
    {
      index: 16,
      directions: "Translate this code snippet to explicit English",
      prompt: "const isActive = false;",
      response: "The variable isActive is being assigned the boolean value false."
    },
    {
      index: 17,
      directions: "Translate this code snippet to explicit English",
      prompt: "let score = 0;",
      response: "The variable score is being initialized with the value 0."
    },
    {
      index: 18,
      directions: "Translate this code snippet to explicit English",
      prompt: "array.pop();",
      response: "The last element of the array is being removed."
    },
    {
      index: 19,
      directions: "Translate this code snippet to explicit English",
      prompt: "document.querySelector('h1').innerText = 'Hello';",
      response: "The inner text of the first h1 element on the page is being set to 'Hello'."
    },
    {
      index: 20,
      directions: "Translate this action into JavaScript",
      prompt: "Create a variable named age and set it to 30.",
      response: "let age = 30;"
    },
    {
      index: 21,
      directions: "Translate this action into JavaScript",
      prompt: "Select an element with the ID 'header' and store it in a variable named headerElement.",
      response: "const headerElement = document.getElementById('header');"
    },
    {
      index: 22,
      directions: "Translate this action into JavaScript",
      prompt: "Declare a variable price and assign it the value 19.99.",
      response: "let price = 19.99;"
    },
    {
      index: 23,
      directions: "Translate this action into JavaScript",
      prompt: "Create a function named logMessage that logs 'Message received' to the console.",
      response: "function logMessage() { console.log('Message received'); }"
    },
    {
      index: 24,
      directions: "Translate this action into JavaScript",
      prompt: "Add a click event listener to an element with the class 'btn'.",
      response: "document.querySelector('.btn').addEventListener('click', function() {});"
    },
    {
      index: 25,
      directions: "Translate this code snippet to explicit English",
      prompt: "const result = 5 * 10;",
      response: "The variable result is being assigned the value of 5 multiplied by 10."
    },
    {
      index: 26,
      directions: "Translate this code snippet to explicit English",
      prompt: "let isComplete = task === 'done';",
      response: "The variable isComplete is being assigned a value of true if the task equals 'done', and false otherwise."
    },
    {
      index: 27,
      directions: "Translate this code snippet to explicit English",
      prompt: "array.shift();",
      response: "The first element of the array is being removed."
    },
    {
      index: 28,
      directions: "Translate this code snippet to explicit English",
      prompt: "document.body.style.margin = '0';",
      response: "The margin of the webpage's body is being set to 0."
    },
    {
      index: 29,
      directions: "Translate this action into JavaScript",
      prompt: "Create a constant named MAX_USERS and set it to 100.",
      response: "const MAX_USERS = 100;"
    },
    {
      index: 30,
      directions: "Translate this action into JavaScript",
      prompt: "Select all elements with the tag name 'p' and store them in a variable named paragraphs.",
      response: "const paragraphs = document.querySelectorAll('p');"
    },
    {
      index: 31,
      directions: "Translate this action into JavaScript",
      prompt: "Check if the value of quantity is less than 10, and if so, log 'Low stock' to the console.",
      response: "if (quantity < 10) { console.log('Low stock'); }"
    },
    {
      index: 32,
      directions: "Translate this action into JavaScript",
      prompt: "Add the class 'highlight' to an element with the ID 'title'.",
      response: "document.getElementById('title').classList.add('highlight');"
    },
    {
      index: 33,
      directions: "Translate this action into JavaScript",
      prompt: "Create a variable named message and assign it the value 'Success'.",
      response: "let message = 'Success';"
    },
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
      const cardElement= document.querySelector('.card');
      cardElement.classList.remove('flip');
      displayCardData(currentCard); // Display the current card's data
    } else {
      window.location.href = './congratulations.html';
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
      const confirmRemoveModal = new bootstrap.Modal(document.getElementById('confirmRemoveModal'));
      confirmRemoveModal.show();
    
    });

    document.querySelector('#confirmRemoveButton').addEventListener('click', function() {
      if (currentCard) {
          completedCard(currentCard); // Pass the current card to mark it as completed
          console.log('hiding modal now');

          $('#confirmRemoveModal').hide();
          $('.modal-backdrop').hide();
          
          loadRandomCard();           // Load a new card after marking the current one
  
          
      }
  });
  
    loadRandomCard(); // Load the first random card when the page loads
  });
