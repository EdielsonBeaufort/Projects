// let paragraphSite = document.querySelector("p");
// let titleText = document.querySelector("h1");
// titleText.innerHTML = "Jogo Alura Gaming";
// paragraphSite.innerHTML = "Escolha algum número entre 'x' & 'y'";
// ================ Forma Acima não otimizada ===================
let listNumbers = [];
let maxNumber = 10;
let randomNumber = generatorRandomNumber();
let containerInput = document.querySelector(".container__input");
let newGame = document.getElementById("reiniciar");
let attempt = 1;

function initialMenssage() {
  TextOptimization("h1", "Jogo Alura Gaming");
  TextOptimization("p", "Escolha algum número entre 1 & 10");
}

function TextOptimization(tag, texto) {
  let myText = document.querySelector(tag);
  myText.innerHTML = texto;
}
function checkAnswer() {
  if (randomNumber == containerInput.value) {
    let attemptOrAttempts = attempt > 1 ? "Attempts" : "Attempt";
    TextOptimization("h1", "You Win, Congratulations");
    TextOptimization("p", `You win after ${attempt} ${attemptOrAttempts}`);
    newGame.removeAttribute("disabled");
  } else {
    TextOptimization("h1", "Try Again");
    attempt++;
    clearText();
  }
}

function generatorRandomNumber() {
  let random = parseInt(Math.random() * maxNumber + 1);
  if (listNumbers == 3) {
    [];
  }
  if (listNumbers.includes(random)) {
    return generatorRandomNumber();
  } else {
    console.log(listNumbers);
    listNumbers.push(random);
    return random;
  }
}

function clearText() {
  containerInput = document.querySelector("input");
  containerInput.value = " ";
}

newGame.addEventListener("click", function () {
  attempt = 1;
  randomNumber = generatorRandomNumber();
  clearText();
  initialMenssage();
  newGame.setAttribute("disabled", true);
});

TextOptimization("h1", "Jogo Alura Gaming");
TextOptimization("p", "Escolha algum número entre 1 & 10");

// ===========================================================
// Outros desafios propostos pela Alura

// function mutiplier(a) {
//   return a * 2;
// }
// let resultadoDobro = mutiplier(70);
// console.log(resultadoDobro);

// function exibirNome(meuNome) {
//   console.log(`${meuNome} Olá mundo`);
// }
// exibirNome("edizin");

// let btn = document.querySelector(".container__botao");
// btn.addEventListener("click", function () {
//   console.log("ola mundo");
// });
