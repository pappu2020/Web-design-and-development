window.addEventListener("load", () => {
    let homeBurger = document.getElementById("homeBurger");
    
    let contentPositionhomeBurger = homeBurger.getBoundingClientRect().top;

    let screenPositionForhomeBurger = window.innerHeight;

    if (contentPositionhomeBurger< screenPositionForhomeBurger) {
        homeBurger.classList.add("homeBurgerAnimClass");
    }

    else {
        homeBurger.classList.remove("homeBurgerAnimClass");
    }
})

window.addEventListener("load", () => {
    let burger = document.getElementById("burger");

    let contentPositionburger = burger.getBoundingClientRect().top;

    let screenPositionForburger = window.innerHeight;

    if (contentPositionburger < screenPositionForburger) {
        burger.classList.add("burgerAnimClass");
    }

    else {
        burger.classList.remove("burgerAnimClass");
    }
})