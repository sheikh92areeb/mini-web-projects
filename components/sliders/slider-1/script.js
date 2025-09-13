let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let body = document.body;

// Function to update the body background
function updateBackground() {
    let items = document.querySelectorAll('.item');
    let currentItem = items[0]; // First item in the slider
    let bgImage = currentItem.getAttribute('data-bg');
    body.style.backgroundImage = bgImage;
}

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
    updateBackground(); // Update body background
});

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
    updateBackground(); // Update body background
});

// Initialize the body background
updateBackground();