//  variables
let button, popUp;

button = document.getElementById('btn');
popUp = document.querySelector('.share-option');

button.addEventListener('click', toggle);

// toggle function

function toggle() {
    if (popUp.style.display !== 'none') {
        popUp.style.display = 'none';
    } else {
        popUp.style.display = 'flex';
    };
};