const nav = document.querySelector('.jNavWrapper');

function fixedNav() {
  let navTop = nav.offsetTop;
  if (navTop >= 55) {
    nav.classList.add('jNavSticky');
  } else {
    nav.classList.remove('jNavSticky');
  }
}

fixedNav();
window.addEventListener('scroll', fixedNav);
