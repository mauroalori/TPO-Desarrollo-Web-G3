function validarFormulario() {
  const nombre = document.querySelector("#nombre").value.trim();
  const email = document.querySelector("#email").value.trim();
  const comentario = document.querySelector("#comentario").value.trim();
  const checkboxs = document.querySelectorAll("[name='opcion-platos']");

  // Verificar si el campo de nombre está en blanco
  if (nombre === "") {
    alert("El campo de nombre debe estar completo");
    return false;
  }

  // Verificar si el campo de nombre solo contiene caracteres alfabéticos y espacios
  for(let i=0; i<nombre.length; i++){
    const charCodeLetra = nombre.charCodeAt(i);
    if(!((charCodeLetra >= 65 && charCodeLetra <= 90) || (charCodeLetra >= 97 && charCodeLetra <= 122) || charCodeLetra === 32)){
        alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
        return false;
    }
  }

  // Verificar si el campo de email está en blanco
  if (email === "") {
    alert("El campo de email debe estar completo");
    return false;
  }

  // Verificar si el campo de nombre solo contiene caracteres alfabéticos, numeros, '@' y '.'
  for(let i=0; i<email.length; i++){
    const charCodeLetra = email.charCodeAt(i);
    if(!((charCodeLetra >= 65 && charCodeLetra <= 90) || (charCodeLetra >= 97 && charCodeLetra <= 122) || (charCodeLetra >= 48 && charCodeLetra <= 57) || charCodeLetra === 64 || charCodeLetra === 46)){
        alert("El campo 'email' solo puede contener caracteres alfabéticos, numeros, puntos y @.");
        return false;
    }
  }

  // Verificar si el campo de comentario está en blanco
  if (comentario === "") {
    alert("No ingresó su mensaje.");
    return false;
  }

  // Verificar que se haya seleccionado al menos una de las opciones del checkbox
  let alMenosUno = false;
  for(let i=0; i<checkboxs.length; i++){
    if(checkboxs[i].checked){
      alMenosUno=true;
      break;
    }
  }
  if(!alMenosUno){
    alert("Debe seleccionar al menos una preferencia.");
    return false;
  }

  //En caso de pasar todas las validaciones con exito se envia el formulario
  alert("Formulario enviado :)");
  return true;
}
