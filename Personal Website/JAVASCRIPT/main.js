const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navigation-links');
    
    burger.addEventListener('click',() => {
        //Toggle Nav
        nav.classList.toggle('nav-active');
    });
}

navSlide();