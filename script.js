// Botón para cambiar entre modo claro y oscuro
var boton = document.getElementById("boton-modo");

boton.addEventListener("click", function () {
  document.body.classList.toggle("oscuro");

  if (document.body.classList.contains("oscuro")) {
    boton.textContent = "Modo claro";
  } else {
    boton.textContent = "Modo oscuro";
  }
});
