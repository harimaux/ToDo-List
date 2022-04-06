const inputBtn = document.getElementById("inputBtn");
const warningNote = document.querySelector(".warningNote");

inputBtn.addEventListener("click", () => {
  //Hides warning message
  warningNote.style.visibility = "hidden";

  //Collects user input and clears input field afterwards
  const userInput = document.getElementById("userInput").value;
  document.getElementById("userInput").value = "";

  //Checks if input is empty, displays warning message is so
  if (userInput == "") {
    warningNote.style.visibility = "visible";
  } else {
    //Grabs unordered list div and insterts Li note inside
    const notesUl = document.getElementById("notes");
    notesUl.innerHTML += `<li>${userInput}</li>`;

    //All notes Li
    const allNotes = document.querySelectorAll(".notes li");

    //Looping through all notes
    for (note of allNotes) {
      //When note clicked once adds text decoration 'line-through' to mark note as 'done'
      note.addEventListener("click", (e) => {
        e.target.classList.toggle("lineThroughToggle");
      });

      //Note is deleted when clicked twice
      note.addEventListener("dblclick", (e) => {
        e.target.remove();
      });
    }
  }
});

//App info box show/hide
const infoIcon = document.querySelector("#infoIcon");
const infoBox = document.querySelector(".infoBox");

infoIcon.addEventListener("click", () => {
  infoBox.classList.toggle("infoBoxVisibilityToggle");
});
