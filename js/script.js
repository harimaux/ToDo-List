const inputBtn = document.getElementById("inputBtn");
const warningNote = document.querySelector(".warningNote");

inputBtn.addEventListener("click", () => {
  warningNote.style.visibility = "hidden";

  const userInput = document.getElementById("userInput").value;
  document.getElementById("userInput").value = "";

  if (userInput == "") {
    warningNote.style.visibility = "visible";
  } else {
    const notesUl = document.getElementById("notes");
    notesUl.innerHTML += `<li>${userInput}</li>`;

    const allNotes = document.querySelectorAll(".notes li");

    for (note of allNotes) {
      note.addEventListener("click", (e) => {
        e.target.classList.toggle("lineThroughToggle");
      });

      note.addEventListener("dblclick", (e) => {
        e.target.remove();
      });
    }
  }
});
