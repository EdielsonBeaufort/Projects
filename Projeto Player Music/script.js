// let buttons = document.querySelectorAll(".btn");
// let btnProsse = document.querySelector(".btn-prosse");
let audioMusica = document.querySelector(".audio_mp3");

function resume() {
  audioMusica.play();
}
function pause() {
  audioMusica.pause();
}
function volBaixo() {
  audioMusica.volume -= 0.1;
}
function volAlto() {
  audioMusica.volume += 0.1;
}
function avancar() {
  audioMusica.currentTime += 15;
}
function voltar() {
  audioMusica.currentTime -= 15;
}
function mute() {
  audioMusica.muted = !audioMusica.muted;
}
