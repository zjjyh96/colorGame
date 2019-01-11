var colors = generateRandomColors(6);
var numberOfSquares = 6;

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");


easybtn.addEventListener("click", function(){
  easybtn.classList.add("selected");
  hardbtn.classList.remove("selected");
  numberOfSquares = 3;
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < 3; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i+3].style.display = "none";
  }
  h1.style.background="steelblue";

})

hardbtn.addEventListener("click", function(){
  hardbtn.classList.add("selected");
  easybtn.classList.remove("selected");
  numberOfSquares = 6;
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < 3; i++){

    squares[i+3].style.display = "block";
  }
  for (var i = 0; i < 6; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.background="steelblue";

})

resetbutton.addEventListener("click", function(){
  colors = generateRandomColors(numberOfSquares);
  pickedColor=pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.background="steelblue";
  messageDisplay.textContent = "";
  resetbutton.textContent = "New Colors";
})


colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i ++){
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  // add click listeners to squares
  squares[i].addEventListener("click", function(){
    // grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    // compare color to pickedColor
    if (clickedColor === pickedColor){
      messageDisplay.textContent = "Correct";
      resetbutton.textContent = "Play Again?";
      changeColors(clickedColor);
    }else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }

  })
}

function changeColors(color){
  for (var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
  h1.style.backgroundColor = color;
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  var arr=[];
  // add num colors to array
  for (var i=0; i<num; i++){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    arr.push("rgb("+red+", "+green+", "+blue+")");
  }
  return arr;
}
