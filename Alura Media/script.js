const todasAsTeclas = document.querySelectorAll(".tecla");
function tocarTodosOsSons(idElementAudio) {
  const todosOsSons = document.querySelector(idElementAudio);

  // todosOsSons != null e = a se eu colocasse so tocarOsSons &&
  // Js e inteligente para fazer essa comparação so de você
  // "todosOsSons &&...." Comparação essa que seria "todosOsSons != null"
  if (todosOsSons && todosOsSons.localName === "audio") {
    todosOsSons.play();
  } else {
    console.log("Error");
  }
}

for (let contador = 0; contador < todasAsTeclas.length; contador++) {
  const tecla = todasAsTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocarTodosOsSons(idAudio);
  };
  tecla.onkeydown = function (event) {
    console.log(event.code === "Space");

    if (event.code === "Space" || event.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };
  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
