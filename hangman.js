let start = document.getElementById("startgame");
let success = document.getElementById("success");
let fail = document.getElementById("fail");
let victory = document.getElementById("victory");
let lose = document.getElementById("lose");
let popup = document.querySelector(".popup");
let popupwin = document.querySelector(".popupwin");
let popuplose = document.querySelector(".popuplose");
let rightWord = document.querySelector(".right-word");

let letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = letters.split("");
let lettersContainer = document.querySelector(".letters");
let hintspan = document.querySelector(".hint span");

lettersArray.forEach((l) => {
  let spantyping = document.createElement("span");
  let letter = document.createTextNode(l);
  spantyping.appendChild(letter);
  spantyping.classList.add("letter");
  lettersContainer.appendChild(spantyping);
});

let myObject = {
  Arap_country: [
    "egypt",
    "morroco",
    "algeria",
    "moritania",
    "qater",
    "saudia Arabia",
    "united Arap Emirates",
    "djibouti",
    "palestin",
    "somalia",
  ],
  Programing_languages: [
    "python",
    "javaScript",
    "swift",
    "go",
    "prolog",
    "algol",
    "ada",
  ],
  oceans: [
    "pacific Ocean",
    "atlantic Ocean",
    "indian Ocean",
    "antarctic Ocean",
    "arctic Ocean",
  ],
  Arsenal_player: [
    "xhaka Granit",
    "jorginho",
    "mohamed Elneny",
    "olexandr Zinchenko",
    "gabriel Jesus",
    "aaron Ramsdale",
    "gabriel Magalhaes",
    "bukayo Saka ",
    "gabriel Martinelli",
    "martin Odegaard",
    "thomas Partey",
    "ben White",
  ],
  Liverpool_player: [
    "james Milner",
    "jordan Henderson",
    "joel Matip",
    "roberto Firmino",
    "thiago Alcantara",
    "virgil van Dijk",
    "mohamed Salah",
    "trent Alexander Arnold",
    "ibrahima konate",
    "harvey elliott",
    "robertson andrew",
  ],
  Real_Madrid_Player: [
    "Karim Benzema",
    "Toni Kroos",
    "Vinícius Júnior",
    "David Alaba",
    "Eden Hazard",
    "Luka Modric",
    "Gareth Bale",
    "Eder Militao",
    "Ferland Mendy",
    "Thibaut Courtois",
    "Lucas Vazquez",
    "Isco",
    "Dani Carvajal",
    "Marcelo",
    "Rodrygo",
    "Nacho",
    "Alphonse Areola",
    "Federico Valverde",
    "Marco Asensio",
    "Raphael Varane",
    "Casemiro",
    "Andriy Lunin",
    "Martin Odegaard",
    "Brahim Diaz",
    "Miguel Gutierrez",
    "Antonio Blanco",
    "Victor Chust",
    "Sergio Arribas",
    "Hugo Duro",
    "Mariano Diaz",
    "Jovic",
    "Lucas Silva",
  ],
  Best_Football_Coaches: [
    "Carlo Ancellotti",
    "Pep Guardiola",
    "Jurgen Klopp",
    "Hansi Flick",
    "Diego Simeone",
    "Jose Mourinho",
    "Xavi",
    "Lionel Scaloni",
  ],
  premier_League_Team: [
    "Arsenal",
    "Aston Villa",
    "Brentford",
    "Brighton & Hove Albion",
    "Burnley",
    "Chelsea",
    "Crystal Palace",
    "Everton",
    "Leeds United",
    "Leicester City",
    "Liverpool",
    "Manchester City",
    "Manchester United",
    "Newcastle United",
    "Norwich City",
    "Southampton",
    "Tottenham Hotspur",
    "Watford",
    "West Ham United",
    "Wolverhampton Wanderers",
  ],
};

let keys = Object.keys(myObject);

// get property num
let randomKeyNum = Math.floor(Math.random() * keys.length);
// get property name
let randomKeyValue = keys[randomKeyNum];
// getting property array
let randomKeyArray = myObject[randomKeyValue];
// getting random index from the array
let randomValueNum = Math.floor(Math.random() * randomKeyArray.length);
// getting random value from the array //****************************************** */
let randomValue = randomKeyArray[randomValueNum];

// console.log(randomKeyNum);
// console.log(randomKeyValue);
// console.log(randomKeyArray);
// console.log(randomValueNum);
// console.log(randomValue);

hintspan = hintspan.innerHTML = randomKeyValue;

let guessContainerLetters = document.querySelector(".gues-letters");
valueInArray = randomValue.split("");
valueInArray.forEach((letter) => {
  let guessSpan = document.createElement("span");

  guessSpan.classList.add("fullspan");
  if (letter === " ") {
    guessSpan.classList.remove("fullspan");
    guessSpan.classList.add("emptyspan");
  }
  guessContainerLetters.appendChild(guessSpan);
});

let spanArray = document.querySelectorAll(".gues-letters span");
let draw = document.querySelector(".the-draw");
let man = document.querySelector(".man");
let stand = document.querySelector(".stand");
let hang = document.querySelector(".hang");
let robe = document.querySelector(".robe");
let manBody = document.querySelector(".body");
let head = document.querySelector(".head");
let hands = document.querySelector(".hands");
let legs = document.querySelector(".legs");
let wrongtry = 0;
let notSpaceEx = /\S/gi;

let counter = 0;
lettersContainer.addEventListener("click", function (e) {
  let check = false;
  if (e.target.className === "letter") {
    e.target.classList.add("done");
  }

  for (let i = 0; i < valueInArray.length; i++) {
    if (e.target.innerHTML.toLowerCase() == valueInArray[i].toLowerCase()) {
      spanArray[i].innerHTML = e.target.innerHTML;
      console.log("جامد");
      success.play();
      check = true;
      counter++;
      if (counter == valueInArray.join("").match(notSpaceEx).length) {
        lettersContainer.classList.add("gamefinish");
        popupwin.style.display = "flex";
        popupwin.style.animation = "flash";
        popupwin.style.animationDuration = "1s";
        victory.play();
        setTimeout(() => {
          popuplose.style.display = "none";
          window.location.replace(
            window.location.pathname +
              window.location.search +
              window.location.hash
          );
        }, 3000);
      }
    }
  }

  if (check == false) {
    fail.play();
    wrongtry++;
    switch (wrongtry) {
      case 1:
        draw.style.borderBottom = "14px solid #fb5607";
        stand.style.display = "block";
        console.log("Mistake 1");
        break;
      case 2:
        console.log("Mistake 2");
        hang.style.display = "block";
        break;
      case 3:
        console.log("Mistake 3");
        robe.style.display = "block";
        break;
      case 4:
        console.log("Mistake 4");
        manBody.style.display = "block";
        hands.style.display = "block";
        legs.style.display = "block";
        break;
      case 5:
        console.log("Mistake 5");
        head.style.display = "block";
        break;
      case 6:
        console.log("Game Over ");
        manBody.style.animation = "bounceOutDown";
        manBody.style.animationDuration = "4s";
        head.style.opacity = ".4";
        lettersContainer.classList.add("gamefinish");
        popuplose.style.animation = "flash";
        popuplose.style.animationDuration = "2s";
        popuplose.style.display = "flex";
        rightWord.innerHTML = `the word is: ${valueInArray.join("")}`;
        rightWord.style.color = "#ff7";
        rightWord.style.width = "100%";
        rightWord.style.height = "20px";
        rightWord.style.margin = "10px";
        rightWord.style.fontSize = "16px";
        lose.play();
        setTimeout(() => {
          popuplose.style.display = "none";
          // reload code from stackoverflow
          window.location.replace(
            window.location.pathname +
              window.location.search +
              window.location.hash
          );
        }, 4000);

        break;
      default:
        break;
    }
  }
});

// const spans = document.querySelectorAll(".span");
// let spansContent = [];
// const spansArray = Array.from(spans).map((span) => span.textContent);
// console.log(spansArray);

// console.log(spansContent);
