const choiceResponse = document.getElementById("choiceResponse");

function showGif(response){
  if (response == "A"){
    choiceResponse.innerHTML += '<img src="https://media.giphy.com/media/5tw3kCvxXW1XrE6Dxj/giphy.gif" />';
    choiceResponse.style.display = "block";
  } else if (response == "B") {
    choiceResponse.innerHTML += '<img src="https://media.giphy.com/media/gzE15pfW1jxkI/giphy.gif" />';
    choiceResponse.style.display = "block";
  } else if (response == "C") {
    choiceResponse.innerHTML += '<img src="https://media.giphy.com/media/Vm2qtmm2nxVP0ZJ96n/giphy.gif" />';
    choiceResponse.style.display = "block";
  } else {
    choiceResponse.style.display = "none";
  }
}
