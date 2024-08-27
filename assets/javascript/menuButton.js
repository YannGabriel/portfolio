
const menuButton = document.getElementById("icon");
const menuMobile = document.getElementById("menuMobile");
menuMobile.style.display = 'none';

function toggleMenu() { //why this going good with toglle menu, but not with open menu??????????????????????
    if (menuMobile.style.display === 'none') {
        menuMobile.style.display = 'block';
    } else {
        menuMobile.style.display = 'none';
    }
}

menuButton.addEventListener("click", toggleMenu);




