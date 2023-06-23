const hamburguesa = document.querySelector(".hamburguesa");
const nav = document.querySelector(".navigator");
const drop = document.querySelector(".drop")

hamburguesa.addEventListener("click", () => {
    hamburguesa.classList.toggle("active");
    nav.classList.toggle("active");

})

drop.addEventListener("click", () => {
    drop.classList.toggle("active");
})