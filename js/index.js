// Array de letras do alfabeto
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Função para gerar uma letra aleatória
function randomLetter() {
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function randomColor() {
  const colorsArray = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
    "#66664D",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
    "#E666B3",
    "#33991A",
    "#CC9999",
    "#B3B31A",
    "#00E680",
    "#4D8066",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#9900B3",
    "#E64D66",
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
  ];

  return colorsArray[Math.floor(Math.random() * colorsArray.length)];
}

// Função para posicionar a letra em um local aleatório na página
function moveLetter(letterElement) {
  const maxWidth = window.innerWidth - letterElement.offsetWidth;
  const maxHeight = window.innerHeight - letterElement.offsetHeight;
  const newX = Math.random() * maxWidth;
  const newY = Math.random() * maxHeight;
  letterElement.style.left = newX + "px";
  letterElement.style.top = newY + "px";
}

// Função para lidar com o clique em uma letra
function handleClick(event) {
  const newLetter = randomLetter();
  event.target.textContent = newLetter;
  event.target.style.backgroundColor = randomColor()
  moveLetter(event.target); // Chama a função para mover a letra para uma nova posição
}

// Função para criar e exibir uma letra na página
function displayLetter() {
  const letter = randomLetter();
  const letterElement = document.createElement("div");
  letterElement.textContent = letter;
  letterElement.style.backgroundColor = randomColor();
  letterElement.classList.add("letter");
  letterElement.addEventListener("click", handleClick);
  document.body.appendChild(letterElement);
  moveLetter(letterElement);
}

// Exibir uma letra inicialmente
displayLetter();
