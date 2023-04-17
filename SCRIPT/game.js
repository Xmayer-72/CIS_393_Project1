console.log("Game JS loaded")

let gameName = window.location.search.substring(1);

let gameLocations = document.getElementsByClassName("content");
gameLocations[0].children[0].textContent = gameName;

document.title = "GCBF | " + gameName;