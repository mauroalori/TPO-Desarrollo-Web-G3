function modificarDisplayPlatos() {
  //id de los checkbox de cada grupo de platos "filtro-platos-xxxxxx"
  //id de los section de cada grupo de platos  "section-platos-xxxxxx"
  idPlatosCheckboxArray = this.id.split("-");
  idPlatosCheckboxArray.splice(0, 1, "section");
  idPlatosSeccion = idPlatosCheckboxArray.join("-");

  if (this.checked) {
    document.getElementById(idPlatosSeccion).style.display = "block";
  } else {
    document.getElementById(idPlatosSeccion).style.display = "none";
  }
}

function load() {
  const checkboxFiltrado = sessionStorage.getItem("idFiltrado");
  const checkboxs = document.getElementsByName("filtro-platos");
  for (const checkbox of checkboxs) {
    checkbox.addEventListener("change", modificarDisplayPlatos, false);

    checkbox.checked = true;
    if (checkboxFiltrado !== null && checkbox.id !== checkboxFiltrado) {
      checkbox.click();
    }
  }
  sessionStorage.removeItem("idFiltrado");
}

document.addEventListener("DOMContentLoaded", load, false);