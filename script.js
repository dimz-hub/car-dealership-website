const btn = document.querySelector("#nav-btn")
const links = document.querySelector("#nav-list")

btn.addEventListener("click", () => {
  links.classList.toggle("show-links")
})