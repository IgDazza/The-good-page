const hamburguesa = document.querySelector(".hamburguesa");
const nav = document.querySelector(".navigator");

hamburguesa.addEventListener("click", () => {
    hamburguesa.classList.toggle("active");
    nav.classList.toggle("active");

})