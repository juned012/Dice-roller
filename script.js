function rollDice() {
  const diceImage = document.getElementById("diceImage");
  const feedBack = document.getElementById("feedBack");

  let diceArray = [
    "./img/1.png",
    "./img/2.png",
    "./img/3.png",
    "./img/4.png",
    "./img/5.png",
    "./img/6.png",
  ];

  const randomIndex = Math.floor(Math.random() * 6);
  diceImage.src = diceArray[randomIndex];
  feedBack.innerText = `You rolled ${randomIndex + 1}😃`;
}
