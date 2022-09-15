const toggleBtn = document.getElementById("toggle");
const secondTog = document.querySelectorAll(".second-tog");
const masterPrice = document.getElementById("master-price");
const basicPrice = document.getElementById("basic-price");
const proffesionalPrice = document.getElementById("proffesional-price");
const changePrice = document.getElementById("change-price");

basicPrice.innerHTML = '$199,99';
masterPrice.innerHTML = '$399,99';
proffesionalPrice.innerHTML = '$249,99';

toggleBtn.addEventListener('click', () => {
    if (toggleBtn.checked) {
        basicPrice.innerHTML = '$19,99'
        proffesionalPrice.innerHTML = '$24,99'
        masterPrice.innerHTML = '$39,99'
    } else {
        basicPrice.innerHTML = '$199,99'
        proffesionalPrice.innerHTML = '$249,99'
        masterPrice.innerHTML = '$399,99'
    }
})