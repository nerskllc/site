const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navbar .menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
})

document.querySelectorAll(".navbar .menu li").forEach(n => n.
    addEventListener("click", () =>  {
        hamburger.classList.remove("active");
       menu.classList.remove("active");
    }))
