
const menuButton = document.getElementById("icon")
const menuMobile = document.getElementById("menuMobile")
menuMobile.style.display = 'none'

function openMenu (){
    menuButton.addEventListener("click", () => {
        if (menuMobile.style.display == 'none'){
            menuMobile.style.display = 'block'
            console.log("Fechar")
            console.log("Foi")
        }
        else{
            menuMobile.style.display ='none'
        }
    })
}


