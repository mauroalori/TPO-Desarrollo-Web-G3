function modificarDisplayPlatos(){
    //id de los checkbox de cada grupo de platos "filtro-platos-xxxxxx"
    //id de los section de cada grupo de platos  "section-platos-xxxxxx"
    let idPlatosCheckboxArray = this.id.split("-");
    idPlatosCheckboxArray[0]="section";
    idPlatosSeccion = idPlatosCheckboxArray.join("-");

    if(this.checked){
        document.getElementById(idPlatosSeccion).style.display="block";
    }
    else{
        document.getElementById(idPlatosSeccion).style.display="none";
    }
}

function load(){
    const checkboxs = document.getElementsByName("filtro-platos");
    for (const checkbox of checkboxs) {
        checkbox.addEventListener('change', modificarDisplayPlatos, false);
        checkbox.checked = true;
        console.log(checkbox);
    }
    
}

document.addEventListener("DOMContentLoaded", load, false);