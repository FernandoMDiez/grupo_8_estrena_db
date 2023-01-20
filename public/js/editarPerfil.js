window.onload = () => {
  let form = document.querySelector(".form");

  //pongo el foco en el enombre de perfil
  form.namePerfil.focus();

  //
  form.addEventListener("submit", (event) => {
    let errores = [];
    let campoNombre = document.querySelector(".np");
    let dError = document.querySelector(".error");

    dError.innerHTML = "";
    if (campoNombre.value == "") {
      errores.push("El nombre no puede estar vacio");
    }

    if (errores.length > 0) {
      event.preventDefault();
      errores.forEach((error) => {
        dError.innerHTML += error;
      });
    } else {
      form.submit();
      alert("Se Actulizo el Perfil");
    }
  });
};
