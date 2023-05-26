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

function loadRecetas(tipo) {
  const baseUrl = 'https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=';
  const frios = $.ajax({
    url: baseUrl + tipo,
    context: document.body
  }).done(function(result) {
    const html = ({ label, image, ingredients }) => `
      <div class="recipe">
      <h3>${label}</h3>
        <img src="${image}" />
        <ul>
          ${ingredients.map(i => `<li>${i}</li>`)}
        </ul>

      </div>
    `;
    $(`#${tipo}`).html(result.hits.slice(0,2).map(({ recipe }) => html({ label: recipe.label, image: recipe.image, ingredients: recipe.ingredientLines })));
  });
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
  loadRecetas('caliente');
  loadRecetas('frio');
  loadRecetas('dulce');
}

document.addEventListener("DOMContentLoaded", load, false);