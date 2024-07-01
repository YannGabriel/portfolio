var icon = document.getElementById("icon");

icon.onclick = function() {
    document.body.classList.toggle("light-theme");
    
    var images = document.querySelectorAll("img[data-light-src]");
    images.forEach(function(image) {
        if (document.body.classList.contains("light-theme")) {
            image.src = image.getAttribute("data-light-src");
        } else {
            image.src = image.getAttribute("data-dark-src");
        }
    });

    
}