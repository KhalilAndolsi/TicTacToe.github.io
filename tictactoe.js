let title = document.getElementById("playerTitle");
let scorePlayerOne = document.querySelector(".header div div.playerOne p");
let scorePlayerTwo = document.querySelector(".header div div.playerTwo p");

scorePlayerOne.innerHTML = 0;
scorePlayerTwo.innerHTML = 0;

let playerNow = "tic";
title.innerHTML = playerNow + " play now";
document.addEventListener("click", function (event) {
  try {
    if (event.target.className === "btn") {
      event.target.classList.add(playerNow);
      if (playerNow === "tac") {
        playerNow = "tic";
      } else {
        playerNow = "tac";
      }
      title.innerHTML = playerNow + " play now";
      function winner(t1, t2, t3, pt) {
        if (
          document.getElementById(`bt${t1}`).className.slice(4, 7) === pt &&
          document.getElementById(`bt${t2}`).className.slice(4, 7) === pt &&
          document.getElementById(`bt${t3}`).className.slice(4, 7) === pt
        ) {
          title.innerHTML = `${pt} is winner`;
          if (pt === "tic") {
            scorePlayerOne.innerHTML = parseInt(scorePlayerOne.innerHTML) + 1;
          } else {
            scorePlayerTwo.innerHTML = parseInt(scorePlayerTwo.innerHTML) + 1;
          }
          document.getElementById(`bt${t1}`).style.backgroundColor = "#f44336";
          document.getElementById(`bt${t2}`).style.backgroundColor = "#f44336";
          document.getElementById(`bt${t3}`).style.backgroundColor = "#f44336";
          for (let i = 0; i < 9; i++) {
            if (document.querySelectorAll("span")[i].className === "btn") {
              document.querySelectorAll("span")[i].className = "";
            }
          }
        }
      }
      // tic is winner
      winner(1, 2, 3, "tic");
      winner(4, 5, 6, "tic");
      winner(7, 8, 9, "tic");
      winner(1, 5, 9, "tic");
      winner(7, 5, 3, "tic");
      winner(1, 4, 7, "tic");
      winner(2, 5, 8, "tic");
      winner(3, 6, 9, "tic");
      // tac is winner
      winner(1, 2, 3, "tac");
      winner(4, 5, 6, "tac");
      winner(7, 8, 9, "tac");
      winner(1, 5, 9, "tac");
      winner(7, 5, 3, "tac");
      winner(1, 4, 7, "tac");
      winner(2, 5, 8, "tac");
      winner(3, 6, 9, "tac");
      // toe
      function toe() {
        let r = 0;
        for (let i = 0; i < 9; i++) {
          if (document.querySelectorAll("span")[i].className.length > 3) {
            r += 1;
          }
        }
        if (r === 9) {
          title.innerHTML = "toe";
          //
          document.getElementById(`bt1`).style.backgroundColor = "#666";
          document.getElementById(`bt2`).style.backgroundColor = "#666";
          document.getElementById(`bt3`).style.backgroundColor = "#666";
          //
          document.getElementById(`bt4`).style.backgroundColor = "#666";
          document.getElementById(`bt5`).style.backgroundColor = "#666";
          document.getElementById(`bt6`).style.backgroundColor = "#666";
          //
          document.getElementById(`bt7`).style.backgroundColor = "#666";
          document.getElementById(`bt8`).style.backgroundColor = "#666";
          document.getElementById(`bt9`).style.backgroundColor = "#666";
        }
      }
      toe();
    }
  } catch {
    undefined;
  }
});

// start game button
let startButton = document.querySelector("button.startBtn");
startButton.onclick = function () {
  startButton.remove();
  document.styleSheets[0].cssRules[13].style.removeProperty("content");
};

let restartButton = document.querySelector("button.restartBtn");

restartButton.onclick = function () {
  let span = document.querySelectorAll("span");
  for (let i = 0; i < 9; i++) {
    span[i].className = "";
    span[i].classList.add("btn");
    span[i].style.backgroundColor = "#d6d6d6";
  }
};
