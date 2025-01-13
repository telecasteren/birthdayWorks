function displayFireworks() {
  const buttonDiv = document.querySelector(".buttonContainer");
  const fireworks = document.querySelector(".pyro");

  buttonElement = document.createElement("button");
  buttonElement.className = "fireworksBtn";
  buttonElement.innerText = "Happy birthday!🎉";

  const cardElement = document.createElement("div");
  cardElement.className = "cardElement";
  cardElement.style.display = "none";

  const textElement = document.createElement("h1");
  textElement.id = "textElement";
  textElement.innerText = `
  Kjære Gard,
  Du er en kunstnerisk sjel med et blikk for detaljer - for det vakre og det såre, det fine og det vonde.
  Vi håper du vil fortsette å fange øyeblikkene som kommer, og vise verden slik du ser den.
  Glad i deg,
  hilsen Oda, Emilie og Tele
  `;
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
