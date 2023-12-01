const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

const linkInicio = document.getElementById("linkInicio");

if (linkInicio) {
  linkInicio.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = linkInicio.getAttribute("href");
  });
}
