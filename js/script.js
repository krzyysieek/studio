const navItems = document.querySelectorAll('.nav-link')
const navArea = document.querySelector('.navbar-collapse')
const navBar = document.querySelector('.navbar-toggler')



const closeNav = () => {
    navArea.classList.remove('show')
    navBar.classList.add('collapsed')
}


navItems.forEach(navItem => {
    navItem.addEventListener('click', closeNav);
  });