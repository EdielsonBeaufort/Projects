let btnNao = document.querySelector(".btn-nao");
console.log(btnNao);

btnNao.addEventListener("mouseover", function () {
  btnNao.innerText = "Sim";
  btnNao.classList.add("btn-hover");
});

btnNao.addEventListener("mouseout", function () {
  btnNao.innerText = "Não";
  btnNao.classList.add("btn-hover");
});
