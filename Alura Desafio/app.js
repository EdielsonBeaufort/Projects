// let question = prompt("What are you favorite city ?");
// let btns = document.querySelectorAll(".button");
// ============================================
// function checkAnswer(a) {
//   question;
//   console.log("testando");
// }
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     console.log("deu certo também");
//   });
// });
// ============================================
// function exibirPrompt() {
//     let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito:')
//     alert(`Estive em ${nomeDaCidade} e lembrei de você`)
// }
// ============================================

// ============================================
function checkAnswer() {
  let primeiroNumero = parseInt(prompt("Digite o primeiro número"));
  let segundoNumero = parseInt(prompt("Digite o segundo número"));
  let resultado = primeiroNumero + segundoNumero;
  alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`);
}
