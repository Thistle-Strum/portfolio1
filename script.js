
const menuButton = document.querySelector('.menuButton')
let menuOpen = false;
menuButton.addEventListener('click', function() {
    menuButton.classList.toggle('open');
    console.log("jello")
});

