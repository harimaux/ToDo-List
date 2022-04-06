const inputBtn = document.getElementById("inputBtn");

inputBtn.addEventListener("click", () => {
  const userInput = document.getElementById("userInput").value;
  document.getElementById("userInput").value = "";

  const notesUl = document.getElementById("notes");
  notesUl.innerHTML += `<li>${userInput}</li>`;

  const allNotes = document.querySelectorAll(".notes li");

  for (note of allNotes) {
    note.addEventListener("click", (e) => {
      e.target.style.textDecoration = "line-through";
    });

    note.addEventListener("dblclick", (e) => {
      e.target.remove();
    });
  }
});
