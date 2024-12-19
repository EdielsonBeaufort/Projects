let genericList = ["Java", "Ruby", "GoLang"];
let btn = document.querySelector("button");
console.log(genericList);
console.log(genericList[0]);
console.log(genericList[1]);
console.log(genericList[2]);

// Criei um botão que adiciona o "eu" na lista que eu criei.
// Mas tem que dar um console.log para ver
btn.addEventListener("click", function () {
  genericList.push("eu");
});
