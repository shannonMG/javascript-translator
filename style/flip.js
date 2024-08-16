// flip.js

document.getElementById('flip-button').addEventListener('click', function() {
    const card = document.querySelector('.card');
    card.classList.toggle('flip');
});
