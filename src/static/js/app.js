let header = document.getElementsByTagName("header")[0];
let sticky = header.offsetTop;
window.onscroll = function() {sticker()};
function sticker() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky");
  }
}