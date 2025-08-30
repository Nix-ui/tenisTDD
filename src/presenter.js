import { TenisScorer } from "./tennisScorer.js";

const form = document.getElementById("tennis-form");
const ply1 = document.getElementById("jugador1");
const ply2 = document.getElementById("jugador2");
const div = document.getElementById("resultado-div");
let tenisScorer = new TenisScorer();
let score = tenisScorer.showScore();
ply1.addEventListener("click", () => {
  tenisScorer.player1Scores();
  score = tenisScorer.showScore();
  showScore();
});

ply2.addEventListener("click", () => {
  tenisScorer.player2Scores();
  score = tenisScorer.showScore();
  showScore();
});

function showScore() {
  div.innerHTML = "<h2>" + score + "</h2>";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  showScore();
});
form.addEventListener("reset", (event) => {
  tenisScorer.resetScore();
  score = tenisScorer.showScore();
  showScore();
});
