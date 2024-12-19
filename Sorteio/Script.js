function Roleta() {
  let btnActive = document.querySelector(".btn-roletar");
  let resultado = document.querySelector(".resultadoSorteio");
  let resultadoEmTexto = document.querySelector(".resultado2");

  btnActive.addEventListener("click", function () {
    let sorteio = Math.round(Math.random() * 10);
    resultado.textContent = "Resultado é: " + sorteio;

    if (sorteio < 5) {
      resultadoEmTexto.textContent = "Você ganhou";
      resultadoEmTexto.style.color = "#32CD32";
    } else {
      resultadoEmTexto.textContent = "Você perdeu";
      resultadoEmTexto.style.color = "red";
    }
  });
}

window.onload = function () {
  Roleta();
};
