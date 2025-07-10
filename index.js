function displayPoem(response) {

  console.log("poem generatated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay:1,
    cursor: "",
  });}

function generatePoem(event) {
  event.preventDefault();

  instructionsInput = document.querySelector("#user-instructions");

let apiKey = "60c3d936b5fef44at07f1bcc18a1ob97";
let prompt = `user instructions: generate a poem about ${instructionsInput.value}`;
let context = 
"you are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line poem in and separate each line with a <br />. make sure to follow user instructions:";
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemFormElement = document.querySelector("#poem");
poemFormElement.innerHTML = `<div class="blink">Generating poem...⏲️</div>`;
console.log("generating poem");
console.log(`prompt: ${prompt}`);
console.log(`context: ${context}`);

axios.get(apiURL).then(displayPoem);

 

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);