let randomNumber = Math.floor(Math.random() * 10 + 1);

function checkGuess() {
  const userGuess = document.getElementById("guess").value;

  if (userGuess == randomNumber) {
    document.getElementById("result").innerHTML = "Tebrikler! Doğru tahmin!";
  } else {
    document.getElementById("result").innerHTML =
      "Üzgünüm, yanlış tahmin. Doğru sayı " + randomNumber;

    if (userGuess > 10 || userGuess < 1) {
      alert("Lütfen 1-10 arası bir sayı giriniz");
      document.getElementById("result").innerHTML = "";
    } else {
      document.getElementById("guess").disabled = true;
    }
  }
}
function restartGame() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("guess").value = "";
  randomNumber = Math.floor(Math.random() * 10 + 1);
  document.getElementById("guess").disabled = false;
}
