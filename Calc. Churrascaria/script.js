// Carne - 400g por pessoa | Passou de 6 horas = 650g
// Cerveja - 1200ml por pessoa |  Passou de 6 horas = 2000ml
// Bebidas em Geral - 1000ml por pessoa | - Passou de 6 horas = 1500

// Crianças valem por 0.5 (Meia Pessoa)

let adultos = document.querySelector(".adultos");
let criancas = document.querySelector(".criancas");
let duracao = document.querySelector(".duracao");
let btnCalc = document.querySelector(".btn-calc");
let resultado = document.querySelector(".resultado");
let carne = 400;
let cerveja = 1200;

btnCalc.addEventListener("click", function () {
  let v = resultado;
  let x = adultos.value;
  let y = criancas.value;
  let d = duracao.value;
  let qntTotalCarne = qCarne(d) * x + (qCarne(d) / 2) * y;
  let qntTotalCerveja = qCerveja(d) * x;
  let qntTotalBebida = qBebida(d) * x + (qBebida(d) / 2) * y;

  v.innerHTML = `<p>${qntTotalCarne / 1000} KG de Carne `;
  v.innerHTML += `<p>${Math.ceil(qntTotalCarne / 350)} L de Cerveja `;
  v.innerHTML += `<p>${Math.ceil(qntTotalCarne / 1000)} L de Bebida `;

  // console.log(qntTotalBebida, qntTotalCarne, qntTotalCerveja);
});

function qCarne(u) {
  if (u >= 6) {
    return 650;
  } else {
    return 450;
  }
}
function qCerveja(u) {
  if (u >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}
function qBebida(u) {
  if (u >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}
console.log(cerveja * 2);
onload = qCarne();
