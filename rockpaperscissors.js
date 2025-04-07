
// all the buttons 
const heading = document.querySelector(".heading");
const rockbtn = document.querySelector(".js-rock-button");
const paperbtn = document.querySelector(".js-paper-button");
const scissorbtn = document.querySelector(".js-scissors-button");
const resetButton = document.querySelector(".reset");
const overlay = document.querySelector(".overlay");
const confirmBox = document.querySelector(".confirm");
const yesButton = document.querySelector(".yes-btn");
const noButton = document.querySelector(".no-btn");
const autoplayButton = document.querySelector(".autoplay");
const inform = document.querySelector(".inform");
// all the variables
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
// autoplay
if (localStorage.getItem("autoplay") == "true") {
  autoplay = true;
} else {
  autoplay = false;
}
let autoplayIntervalId;
// this variable(resetting) to check if page before just reloading is in resetting state or not 
let resetting = localStorage.getItem("resetting") || "false";
/* this variable is for track if the page is reloaded or not , if it is true then the autoPlay() will not suddenly auto play 
it wait for 4 seconds again before playing next move automatically*/
let reload = false;
// all the Animations 
function informAnimation(starting, gap) {


  setTimeout(() => {
    inform.innerHTML = "M|";
    disaAllButnEvents();
  }, starting += gap);
  setTimeout(() => {
    inform.innerHTML = "Ma|";
  }, starting += gap);
  setTimeout(() => {
    inform.innerHTML = "Mak|";
  }, starting += gap);
  setTimeout(() => {
    inform.innerHTML = "Make|";
  }, starting += gap);
  setTimeout(() => {
    inform.innerHTML = "Make |";
  }, starting += gap);
  setTimeout(() => {
    inform.innerHTML = "Make y|";
  }, starting += gap);
  setTimeout(() => {
    inform.innerHTML = "Make yo|";
  }, starting += gap);
  setTimeout(() => {
    inform.innerHTML = "Make you|";
  }, starting += gap);
  setTimeout(() => {
    inform.innerHTML = "Make your|";
  }, starting += gap);
  setTimeout(() => {
    inform.innerHTML = "Make your |";
  }, starting += gap);
  setTimeout(() => {
    inform.innerHTML = "Make your m|";
  }, starting += gap);
  setTimeout(() => {
    inform.innerHTML = "Make your mo|";
  }, starting += gap);
  setTimeout(() => {
    inform.innerHTML = "Make your mov|";
  }, starting += gap);
  setTimeout(() => {
    inform.innerHTML = "Make your move|";
  }, starting += gap);
  setTimeout(() => {
    inform.innerHTML = "Make your move |";
  }, starting += gap);
  setTimeout(() => {
    inform.innerHTML = "Make your move !";
    localStorage.setItem(
      "inform",
      document.querySelector(".inform").innerHTML
    );
    enaAllButnEvents();
  }, starting += gap);
}

function comingAniamtion(playermove, emoji, delay) {
  setTimeout(() => {
    document.querySelector(
      ".inform"
    ).innerHTML = `You picked ${playermove}. Computer picked ${emoji}.`;
  }, delay);

}
function resetAnimation(starting, gap) {
  if (score.wins > 0 || score.losses > 0 || score.ties > 0) {
    setTimeout(() => {
      if (score.wins > 0 && score.losses > 0 && score.ties > 0) {
        score.wins -= 1;
        score.losses -= 1;
        score.ties -= 1;
        resetting = "true";
        localStorage.setItem("resetting", resetting);
      } else if (score.wins > 0 && score.losses > 0) {
        score.wins -= 1;
        score.losses -= 1;
        resetting = "true";
        localStorage.setItem("resetting", resetting);
      } else if (score.ties > 0 && score.losses > 0) {
        score.losses -= 1;
        score.ties -= 1;
        resetting = "true";
        localStorage.setItem("resetting", resetting);
      }
      else if (score.wins > 0 && score.ties > 0) {
        score.wins -= 1;
        score.ties -= 1;
        resetting = "true";
        localStorage.setItem("resetting", resetting);
      }
      else if (score.losses > 0) {
        score.losses -= 1;
        resetting = "true";
        localStorage.setItem("resetting", resetting);
      }
      else if (score.ties > 0) {
        score.ties -= 1;
        resetting = "true";
        localStorage.setItem("resetting", resetting);
      }
      else if (score.wins > 0) {
        score.wins -= 1;
        resetting = "true";
        localStorage.setItem("resetting", resetting);
      }

      document.querySelector(
        ".result"
      ).innerHTML = `<span class="results">Wins: ${score.wins}</span> | <span class="results">Losses: ${score.losses}</span> | <span class="results">Ties: ${score.ties}</span>`;
      localStorage.setItem("score", JSON.stringify(score));
      resetAnimation(starting + gap, gap); // Call the function again
    }, starting);
  }
  else {
    enaAllButnEvents();
    resetting = "false";
    localStorage.setItem("resetting", resetting);
  }
}
function headingAnimation(starting, gap) {
  // let starting = starting;
  // let gap = gap;
  setTimeout(() => {
    heading.innerText = '|'
  }, starting);
  setTimeout(() => {
    heading.innerText = 'L|'
  }, starting += gap);
  setTimeout(() => {
    heading.innerText = 'Le|'
  }, starting += gap);
  setTimeout(() => {
    heading.innerText = 'Let|'
  }, starting += gap);
  setTimeout(() => {
    heading.innerText = 'Let\'s|'
  }, starting += gap);
  setTimeout(() => {
    heading.innerText = 'Let\'s |'
  }, starting += gap);
  setTimeout(() => {
    heading.innerText = 'Let\'s P|'
  }, starting += gap);;
  setTimeout(() => {
    heading.innerText = 'Let\'s Pl|'
  }, starting += gap);
  setTimeout(() => {
    heading.innerText = 'Let\'s Pla|'
  }, starting += gap);
  setTimeout(() => {
    heading.innerText = 'Let\'s Play|'
  }, starting += gap);
  setTimeout(() => {
    heading.innerText = 'Let\'s Play |'
  }, starting += gap);
  setTimeout(() => {
    heading.innerText = 'Let\'s Play R|'
  }, starting += gap);;
  setTimeout(() => {
    heading.innerText = 'Let\'s Play Ro|'
  }, starting += gap);
  setTimeout(() => {
    heading.innerText = 'Let\'s Play Roc|'
  }, starting += gap);
  setTimeout(() => {
    heading.innerText = 'Let\'s Play Rock|'
  }, starting += gap);
  setTimeout(() => {
    heading.innerText = 'Let\'s Play Rock |'
  }, starting += gap);
  setTimeout(() => {
    heading.innerText = 'Let\'s Play Rock P|'
  }, starting += gap);
  setTimeout(() => {
    heading.innerText = 'Let\'s Play Rock Pa|'
  }, starting += gap);
  setTimeout(() => {
    heading.innerText = 'Let\'s Play Rock Pap|'
  }, starting += gap);
  setTimeout(() => {
    heading.innerText = 'Let\'s Play Rock Pape|'
  }, starting += gap);
  setTimeout(() => {
    heading.innerText = 'Let\'s Play Rock Paper|'
  }, starting += gap);
  setTimeout(() => {
    heading.innerText = 'Let\'s Play Rock Paper |'
  }, starting += gap);
  setTimeout(() => {
    heading.innerText = 'Let\'s Play Rock Paper S|'
  }, starting += gap);
  setTimeout(() => {
    heading.innerText = 'Let\'s Play Rock Paper Sc|'
  }, starting += gap);
  setTimeout(() => {
    heading.innerText = 'Let\'s Play Rock Paper Sci|'
  }, starting += gap);
  setTimeout(() => {
    heading.innerText = 'Let\'s Play Rock Paper Scis|'
  }, starting += gap);
  setTimeout(() => {
    heading.innerText = 'Let\'s Play Rock Paper Sciss|'
  }, starting += gap);
  setTimeout(() => {
    heading.innerText = 'Let\'s Play Rock Paper Scisso|'
  }, starting += gap);
  setTimeout(() => {
    heading.innerText = 'Let\'s Play Rock Paper Scissor|'
  }, starting += gap);
  setTimeout(() => {
    heading.innerText = 'Let\'s Play Rock Paper Scissors'
  }, starting += gap);
  // setTimeout(() => {
  //   heading.innerText = 'Let\'s Play Rock Paper Scissors'
  // }, starting+=gap);
}
// ComputerMove logic function 
function ComputerChoice() {
  const randomNum = Math.random();
  if (randomNum >= 0 && randomNum < 1 / 3) {
    computerMove = "🪨";
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerMove = "📃";
  } else {
    computerMove = "✂️";
  }
  return computerMove;
}
// function of disabling all the buttons / event listeners 
function disaAllButnEvents() {
  document.body.removeEventListener("keydown", backSpaceEnter);
  document.body.removeEventListener("keydown", playWithkeys);
  yesButton.setAttribute("disabled", true);
  rockbtn.setAttribute("disabled", true);
  paperbtn.setAttribute("disabled", true);
  scissorbtn.setAttribute("disabled", true);
  resetButton.setAttribute("disabled", true);
  autoplayButton.setAttribute("disabled", true);
  resetButton.setAttribute("disabled", true);
  document.body.removeEventListener("keydown", backSpaceEnter);
  document.body.removeEventListener("keydown", playWithkeys);
  yesButton.setAttribute("disabled", true);
}
// function for enabling all the buttons / event listeners again 
function enaAllButnEvents() {
  yesButton.removeAttribute("disabled");
  document.body.addEventListener("keydown", playWithkeys);
  document.body.addEventListener("keydown", backSpaceEnter);
  rockbtn.removeAttribute("disabled");
  paperbtn.removeAttribute("disabled");
  scissorbtn.removeAttribute("disabled");
  resetButton.removeAttribute("disabled");
  autoplayButton.removeAttribute("disabled");
}
// Playermove logic function
function playerMove(playermove) {
  disaAllButnEvents();


  overlay.style.display = "none";
  // hovering styling reset
  rockbtn.classList.remove("rock-is-toogle", "toggled");
  paperbtn.classList.remove("paper-is-toogle", "toggled");
  scissorbtn.classList.remove("scissors-is-toogle", "toggled");
  const computerMove = ComputerChoice();
  let result = "";
  if (playermove == "🪨") {
    if (computerMove === "🪨") {
      result = "Tie";
    } else if (computerMove === "📃") {
      result = "You Loss";
    } else {
      result = "You Win";
    }

    rockbtn.classList.add("rock-is-toogle");
    paperbtn.classList.remove("paper-is-toogle");
    scissorbtn.classList.remove("scissors-is-toogle");
  } else if (playermove == "📃") {
    if (computerMove === "🪨") {
      result = "You Win";
    } else if (computerMove === "📃") {
      result = "Tie";
    } else {
      result = "You Loss";
    }
    paperbtn.classList.add("paper-is-toogle");
    rockbtn.classList.remove("rock-is-toogle");
    scissorbtn.classList.remove("scissors-is-toogle");
  } else if (playermove == "✂️") {
    if (computerMove === "🪨") {
      result = "You Loss";
    } else if (computerMove === "📃") {
      result = "You Win";
    } else {
      result = "Tie";
    }
    scissorbtn.classList.add("scissors-is-toogle");
    paperbtn.classList.remove("paper-is-toogle");
    rockbtn.classList.remove("rock-is-toogle");
  }

  if (result === "You Win") {
    score.wins += 1;
  } else if (result === "You Loss") {
    score.losses += 1;
  } else {
    score.ties += 1;
  }
  localStorage.setItem("score", JSON.stringify(score));

  // animation
  comingAniamtion(playermove, '🪨', 200);
  comingAniamtion(playermove, '📃', 300);
  comingAniamtion(playermove, '✂️', 400);
  comingAniamtion(playermove, '🪨', 500);
  comingAniamtion(playermove, '📃', 600);
  comingAniamtion(playermove, '✂️', 800);
  comingAniamtion(playermove, '🪨', 1000);
  comingAniamtion(playermove, '📃', 1200);
  comingAniamtion(playermove, '✂️', 1500);
  comingAniamtion(playermove, '🪨', 2000);
  comingAniamtion(playermove, '📃', 2700);
  comingAniamtion(playermove, computerMove, 3000);
  setTimeout(() => {
    document.querySelector(
      ".inform"
    ).innerHTML = `You picked ${playermove}. Computer picked ${computerMove}. ${result}`;

    document.querySelector(
      ".result"
    ).innerHTML = `<span class="results">Wins: ${score.wins}</span> | <span class="results">Losses: ${score.losses}</span> | <span class="results">Ties: ${score.ties}</span>`;
    localStorage.setItem(
      "inform",
      document.querySelector(".inform").innerHTML
    );
    enaAllButnEvents();
  }, 3850);


  document.activeElement.blur();
}

function autoPlay() {
  if (!autoplay) {
    if (!reload) {
      const playermove = ComputerChoice();
      playerMove(playermove);
      document.querySelector(".autoplay").innerHTML = "Stop Auto Play";
    }

    autoplayIntervalId = setInterval(() => {
      const playermove = ComputerChoice();
      playerMove(playermove);
    }, 5000);
    document.querySelector(".autoplay").innerHTML = "Stop Auto Play";
    autoplay = true;
    localStorage.setItem("autoplay", autoplay);
    reload = false;
  } else {
    clearInterval(autoplayIntervalId);
    autoplay = false;
    localStorage.setItem("autoplay", autoplay);
    document.querySelector(".autoplay").innerHTML = "Auto Play";
  }
}
// Reset functionality


resetButton.addEventListener("click", () => {
  overlay.style.display = "block";
  confirmBox.style.display = "flex";
  document.body.addEventListener("keydown", backSpaceEnter);
  document.body.addEventListener("keydown", backspaceEscape);
  autoplay = true;
  autoPlay();

});

// Yes button inside confirm box
yesButton.addEventListener("click", () => {

  scissorbtn.classList.remove("scissors-is-toogle");
  rockbtn.classList.remove("rock-is-toogle");
  paperbtn.classList.remove("paper-is-toogle");

  resetAnimation(0, 2);
  informAnimation(25, 55);
  overlay.style.display = "none";
  confirmBox.style.display = "none";
  autoplay = true;
  autoPlay();
});
// No button inside confirm box
noButton.addEventListener("click", () => {
  overlay.style.display = "none";
  confirmBox.style.display = "none";
});

// system of , resetting score with backspace+enter
function backSpaceEnter(ev) {

  if (ev.key === "Enter") {
    scissorbtn.classList.remove("scissors-is-toogle");
    rockbtn.classList.remove("rock-is-toogle");
    paperbtn.classList.remove("paper-is-toogle");

    resetAnimation(0, 2);
    informAnimation(25, 55);
    overlay.style.display = "none";
    confirmBox.style.display = "none";
    autoplay = true;
    autoPlay();
    document.body.removeEventListener("keydown", backSpaceEnter);
  }
}
function backspaceEscape(ev) {
  if (ev.key === "Escape") {
    overlay.style.display = "none";
    confirmBox.style.display = "none";
    document.body.removeEventListener("keydown", backspaceEscape);
  }
}

// Play with keys
function playWithkeys(event) {
  if (event.key === "r") {
    playerMove("🪨");
    rockbtn.classList.add("rock-is-toogle");
    paperbtn.classList.remove("paper-is-toogle");
    scissorbtn.classList.remove("scissors-is-toogle");
    autoplay = true;
    autoPlay();
  } else if (event.key === "p") {
    playerMove("📃");
    paperbtn.classList.add("paper-is-toogle");
    rockbtn.classList.remove("rock-is-toogle");
    scissorbtn.classList.remove("scissors-is-toogle");
    autoplay = true;
    autoPlay();
  } else if (event.key === "s") {
    playerMove("✂️");
    autoplay = true;
    autoPlay();
  } else if (event.key === "a") {
    autoPlay();
    // reset functionality
  } else if (event.key === "Backspace") {
    overlay.style.display = "block";
    confirmBox.style.display = "flex";
    overlay.style.display = "block";
    confirmBox.style.display = "flex";
    document.body.addEventListener("keydown", backSpaceEnter);
    autoplay = true;
    autoPlay();
  }
}
function forEscape(event) {
  if (event.key === "Backspace") {
    document.body.addEventListener("keydown", backspaceEscape);
  }
}
document.body.addEventListener("keydown", forEscape);
// document.body.addEventListener("keydown", backSpaceEnter);
document.body.addEventListener("keydown", playWithkeys);


// on loading the page 
window.addEventListener("load", () => {
  document.querySelector(
    ".result"
  ).innerHTML = `<span class="results">Wins: ${score.wins}</span> | <span class="results">Losses: ${score.losses}</span> | <span class="results">Ties: ${score.ties}</span>`;
  // console.log(autoplay);
  if (autoplay) {
    autoplay = false;
    reload = true;
    autoPlay();
  }
  document.querySelector(".inform").innerText =
    localStorage.getItem("inform");

  headingAnimation(180, 57);
  if (resetting == "true") {
    resetAnimation(0, 2);
    informAnimation(25, 55);
  }
});

// static things

document.querySelector(".autoplay").addEventListener("click", () => {
  document.querySelector(".autoplay").blur();
});

document.querySelector(".reset").addEventListener("click", () => {
  document.querySelector(".reset").blur();
});
