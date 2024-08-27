
const menuButton = document.getElementById("icon");
const menuMobile = document.getElementById("menuMobile");
menuMobile.style.display = 'none';

function toggleMenu() {
    if (menuMobile.style.display === 'none') {
        menuMobile.style.display = 'block';
    } else {
        menuMobile.style.display = 'none';
    }
}

menuButton.addEventListener("click", toggleMenu);




