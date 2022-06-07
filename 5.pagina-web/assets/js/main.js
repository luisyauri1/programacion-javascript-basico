let idProgressArticuno = document.getElementById("progress-articuno");
let idTextArticuno = document.getElementById("text-articuno");

let idProgressSuicune = document.getElementById("progress-suicune");
let idTextSuicune = document.getElementById("text-suicune");

let idAttackButton = document.getElementById("attack");
let idAttackSpecialButton = document.getElementById("special-attack");
let idHealButton = document.getElementById("heal");
let idResetButton = document.getElementById("reset");
let idBlockActions = document.getElementById("block-actions");

let liveArticuno = 100;
let liveSuicune = 100;

idAttackButton.addEventListener("click", () => {
  liveArticuno = liveArticuno - Math.round(Math.random() * 15);
  liveArticuno = liveArticuno <= 0 ? 0 : liveArticuno;
  liveSuicune = liveSuicune - Math.round(Math.random() * 15);
  liveSuicune = liveSuicune <= 0 ? 0 : liveSuicune;

  idProgressArticuno.value = liveArticuno;
  idTextArticuno.innerHTML = liveArticuno;
  idProgressSuicune.value = liveSuicune;
  idTextSuicune.innerHTML = liveSuicune;

  if (liveArticuno === 0 && liveSuicune === 0) {
    alert("Empate");
    idBlockActions.style.display = "none";
  } else if (liveArticuno === 0) {
    alert("Gano Suicune");
    idBlockActions.style.display = "none";
  } else if (liveSuicune === 0) {
    alert("Gano Articuno");
    idBlockActions.style.display = "none";
  } else {
  }
});

idAttackSpecialButton.addEventListener("click", () => {
  liveArticuno = liveArticuno - (Math.round(Math.random() * 15) + 10);
  liveArticuno = liveArticuno <= 0 ? 0 : liveArticuno;
  liveSuicune = liveSuicune - (Math.round(Math.random() * 15) + 10);
  liveSuicune = liveSuicune <= 0 ? 0 : liveSuicune;

  idProgressArticuno.value = liveArticuno;
  idTextArticuno.innerHTML = liveArticuno;
  idProgressSuicune.value = liveSuicune;
  idTextSuicune.innerHTML = liveSuicune;

  if (liveArticuno === 0 && liveSuicune === 0) {
    alert("Empate");
    idBlockActions.style.display = "none";
  } else if (liveArticuno === 0) {
    alert("Gano Suicune");
    idBlockActions.style.display = "none";
  } else if (liveSuicune === 0) {
    alert("Gano Articuno");
    idBlockActions.style.display = "none";
  } else {
  }
});

idHealButton.addEventListener("click", () => {
  liveArticuno = liveArticuno + Math.round(Math.random() * 15);
  liveArticuno = liveArticuno >= 100 ? 100 : liveArticuno;
  liveSuicune = liveSuicune + Math.round(Math.random() * 15);
  liveSuicune = liveSuicune >= 100 ? 100 : liveSuicune;

  idProgressArticuno.value = liveArticuno;
  idTextArticuno.innerHTML = liveArticuno;
  idProgressSuicune.value = liveSuicune;
  idTextSuicune.innerHTML = liveSuicune;
});

idResetButton.addEventListener("click", () => {
  liveArticuno = 100;
  liveSuicune = 100;

  idProgressArticuno.value = liveArticuno;
  idTextArticuno.innerHTML = liveArticuno;
  idProgressSuicune.value = liveSuicune;
  idTextSuicune.innerHTML = liveSuicune;
  idBlockActions.style.display = "flex";
});
