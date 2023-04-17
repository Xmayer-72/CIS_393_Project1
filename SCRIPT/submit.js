const gameNameSelect = document.getElementById("gameName");
const addGameInput = document.getElementById("newGameName");

gameNameSelect.addEventListener("change", function() {
  if (gameNameSelect.value === "newGame") {
    addGameInput.disabled = false;
    addGameInput.required = true;
  } else {
    addGameInput.disabled = true;
    addGameInput.required = false;
  }
});