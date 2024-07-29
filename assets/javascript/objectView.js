


// animações da página
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


