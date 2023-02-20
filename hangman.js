let start = document.getElementById("startgame");
let success = document.getElementById("success");
let fail = document.getElementById("fail");
let popup = document.querySelector(".popup");
let popup1 = document.querySelector(".popup1");
let popup2 = document.querySelector(".popup2");

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
  Arap_World: [
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
        popup1.style.display = "flex";
        setTimeout(() => {
          popup2.style.display = "none";
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
        console.log("Mistake 1");
        break;
      case 2:
        console.log("Mistake 2");
        stand.style.display = "block";
        break;
      case 3:
        console.log("Mistake 3");
        hang.style.display = "block";
        break;
      case 4:
        console.log("Mistake 4");
        robe.style.display = "block";
        break;
      case 5:
        console.log("Mistake 5");
        manBody.style.display = "block";
        hands.style.display = "block";
        break;
      case 6:
        console.log("Mistake 6");
        legs.style.display = "block";
        break;
      case 7:
        console.log("Mistake 7");
        head.style.display = "block";

        break;
      case 8:
        console.log("Game Over X");
        manBody.classList.add("mandied-body");
        head.style.opacity = ".4";
        lettersContainer.classList.add("gamefinish");
        popup2.style.display = "flex";
        popup2.style.transition = "all 0.4s";
        popup2.style.display = "flex";

        setTimeout(() => {
          popup2.style.display = "none";

          // reload code from stack overflow
          window.location.replace(
            window.location.pathname +
              window.location.search +
              window.location.hash
          );
        }, 3000);

        break;
      default:
        break;
    }
  }
});
