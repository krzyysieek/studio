const navItems = document.querySelectorAll('.nav-link')
const navArea = document.querySelector('.navbar-collapse')
const navBar = document.querySelector('.navbar-toggler')
const cookieBox = document.querySelector('.cookies-box')
const cookieBtn = document.querySelector('.accept-btn')

const executeCodes = () => {
    cookieBox.classList.add('show')
};

const closeCookies = () => {
    cookieBox.classList.remove('show')
}

const closeNav = () => {
    navArea.classList.remove('show')
    navBar.classList.add('collapsed')
}


navItems.forEach(navItem => {
    navItem.addEventListener('click', closeNav);
  });

  window.addEventListener("load", executeCodes)
  cookieBtn.addEventListener('click', closeCookies)