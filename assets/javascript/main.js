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

    console.log("Theme toggled, current class:", document.body.classList);
}

const myObserverN = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showN');
        } else {
            entry.target.classList.remove('showN');
        }
    });
});

const elementsN = document.querySelectorAll('.hiddenN');
elementsN.forEach((element) => myObserverN.observe(element));
