const nav = document.querySelector('.navigation');
const menu = document.querySelector('.nav-menu');
const burguer = document.querySelector('.hamburguer');
const btn = document.querySelector('.close');


const navLeft = menu.getBoundingClientRect().left;


burguer.addEventListener('click', () => {
    
    if(navLeft < 0) {
        menu.classList.add('show');
        nav.classList.add('show');
        document.body.classList.add('show');
    }
});

btn.addEventListener('click', () => {
    if(navLeft < 0) {
        nav.classList.remove("show");
        menu.classList.remove("show");
        document.body.classList.remove("show");
    }
});


///Fixed Navbar///

const navBar = document.querySelector('.navigation');

const navHeight = navBar.getBoundingClientRect().height;


window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    if(scrollHeight > navHeight){
        navBar.classList.add('fix-nav');

    }else {
        navBar.classList.remove('fix-nav');
    }
});