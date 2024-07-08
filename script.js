let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
    navbar.classList.toggle("active");
})

window.onscroll = () => {
    navbar.classList.remove("active");
}
function submitDone() {
    document.getElementById("#submit-button").innerHTML = "DONE";
  }