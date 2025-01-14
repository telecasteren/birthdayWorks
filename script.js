import { birthdayText } from "/textElement.js";

function displayFireworks() {
  const buttonDiv = document.querySelector(".buttonContainer");
  const fireworks = document.querySelector(".pyro");

  const buttonElement = document.createElement("button");
  buttonElement.className = "fireworksBtn";
  buttonElement.innerText = "Happy birthday!🎉";

  const cardElement = document.createElement("div");
  cardElement.className = "cardElement";
  cardElement.style.display = "none";

  const textElement = document.createElement("h1");
  textElement.id = "textElement";
  textElement.innerText = birthdayText;
  cardElement.appendChild(textElement);

  buttonElement.addEventListener("click", () => {
    if (fireworks.style.display === "block") {
      fireworks.style.display = "none";
      buttonDiv.style.margin = "0";
    } else {
      buttonDiv.style.margin = "8%";
      fireworks.style.display = "block";
    }

    if (cardElement.style.display === "none") {
      cardElement.style.display = "block";
    } else {
      cardElement.style.display = "none";
    }
  });

  buttonDiv.appendChild(buttonElement);
  buttonDiv.appendChild(cardElement);
}
displayFireworks();
