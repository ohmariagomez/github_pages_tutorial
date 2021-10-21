const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceResponse = document.getElementById("choiceResponse");

function showGif(response){
  if (response = "Fenway"){
    choiceResponse.innerHTML += '<img src="https://media.giphy.com/media/5tw3kCvxXW1XrE6Dxj/giphy.gif" />';
    choiceResponse.style.display = "block";
  } else if (response = "Pasta") {
    img = "";
    choiceResponse.style.display = "block";
  } else {
    img = "";
    choiceResponse.style.display = "block";
  }
}
