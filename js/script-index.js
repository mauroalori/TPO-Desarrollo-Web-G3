function filtrarRecetasPorImagenes() {
  let idImagenArray = this.id.split("-");
  idImagenArray.splice(0, 1, "filtro");
  let idCheckbox = idImagenArray.join("-");

  if (typeof Storage !== "undefined") {
    sessionStorage.setItem("idFiltrado", idCheckbox);
  } else {
    console.log("Web Storage no soportado.");
  }

  window.location.href = "recetas.html";
}

function load() {
  const imgsFiltro = document.querySelectorAll(".img-filtro");
  for (const imagen of imgsFiltro) {
    imagen.addEventListener("click", filtrarRecetasPorImagenes, false);
    console.log("evento añadido");
  }
  const menuBtn = document.querySelectorAll(".menu-btn");
  const mainNav = document.querySelector(".main-nav");
  menuBtn.forEach((el) => {
    el.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    })
  });
}

document.addEventListener("DOMContentLoaded", load, false);