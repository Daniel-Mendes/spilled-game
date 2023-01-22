let header = document.querySelector("header");
let sticky = header.offsetTop;

if (window.location.pathname === "/") {
  window.onscroll = function() {sticker()};
  function sticker() {
    if (window.pageYOffset >= sticky) {
      header.classList.add("sticky")
    } else {
      header.classList.remove("sticky");
    }
  }
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(element => {
  observer.observe(element);
});