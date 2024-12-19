const teclas = document.querySelectorAll("input[type=button]");
const inputTel = document.querySelector("input[type=tel]");

for (let a = 0; a < teclas.length; a++) {
  const t = teclas[a];
  t.onclick = function () {
    inputTel.value = inputTel.value + t.value;
  };

  console.log();
}
