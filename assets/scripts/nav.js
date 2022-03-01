const nav = document.querySelector('.navWrapper');

function fixedNav() {
  let navTop = nav.offsetTop;
  if (navTop >= 55) {
    nav.classList.add('navSticky');
  } else {
    nav.classList.remove('navSticky');
  }
}

fixedNav();
window.addEventListener('scroll', fixedNav);
