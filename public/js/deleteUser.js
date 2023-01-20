window.onload = () => {
  let form = document.querySelector(".form");

  //
  form.addEventListener("submit", (event) => {
    form.submit();
    alert("Se Borro el Usuario");
  });
};
