// const buttonClick = document.querySelector(".contentBtn");
const result = document.getElementById("bgImage2");
// const deleteButton = document.querySelector(".cancelBtn");
const firstDiv = document.getElementById("bgImage");
// const overlayDiv = document.getElementById("overlay");

const mainContain = document.getElementById("container");

// buttonClick.addEventListener("click", pop);
// deleteButton.addEventListener("click", init);

// function pop(effect) {
//   const entireBody = document.getElementsByTagName("BODY")[0];

//   if (effect == "initialize") {
//     result.style.display = "block";

//   } else if (effect == "finalize") {
//     result.style.display = "none";
//   }
// }

let modal = document.getElementsByClassName("overlay")[0];
function on() {
  modal.classList.add("open-modal");
}

function off() {
  modal.classList.remove("open-modal");
}
