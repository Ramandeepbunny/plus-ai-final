function generatepoem(event) {
  event.preventDefult();
  alert("generating poem");
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatepoem);