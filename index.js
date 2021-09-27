var inputArea = document.querySelector(".input-text-area");
var outputArea = document.querySelector(".output-text-area");
var btnTranslate = document.querySelector("#btn-translate");

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

outputArea.innerText = "Translated Text Here..";

btnTranslate.addEventListener("click", handleClick);

function makeURL(text) {
  return serverURL + "?" + "text=" + inputArea.value;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("Something wrong in serve., please try again!");
}
function handleClick() {
  var inputValue = inputArea.value;
  const URLResponse = fetch(makeURL(inputValue))
    .then((response) => response.json())
    .then((json) => {
      var resText = json.contents.translated;
      outputArea.innerText = resText;
    })
    .catch(errorHandler);
}