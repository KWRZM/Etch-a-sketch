let color = "black";
let isDrawing = "false";

let lastButton = document.getElementById('black');
lastButton.classList.add('transition');

let board = document.querySelector('.board');
const error = document.querySelector('.error');


document.addEventListener('mousedown',(e) => {
    isDrawing = true;
});

document.addEventListener('mouseup',(e) => {
    isDrawing = false;
});

function populateBoard(size){
    
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove);

    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let N = size * size;
    for(let i = 0; i < N; i++){
        let square = document.createElement("div");
        square.addEventListener('mousemove',colorSquare);
        square.style.backgroundColor = "white";
        //square.classList.add('border-top-left');
        square.setAttribute('draggable', 'false');

        board.insertAdjacentElement('beforeend',square);
       
    }
}

populateBoard(16);

function changeSize(input){
    if(input <= 100 && input >=2){
        error.style.display = 'none';
        populateBoard(input);
        document.getElementById('size').textContent = `Size: ${input} x ${input} px`;
    }
    else{
        error.style.display = 'flex';
    }
}

function colorSquare() {
    if(isDrawing == true){
        if (color === "random") {
            let colorRand = getRandomColor();
            this.style.backgroundColor = colorRand;
            const color2 = document.getElementById('colorPicker');
            color2.value=colorRand;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice){
    color = choice;
    if(lastButton != undefined)lastButton.classList.remove('transition');
    lastButton = document.getElementById(choice);
    lastButton.classList.add('transition');
    const color2 = document.getElementById('colorPicker');
    console.log(color2);
    const color3 = tinycolor(choice);
    const hex = color3.toHexString();
    
    color2.value=hex;
}

function resetBoard(){
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = "white");

}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomPicture(){
    const pixels = board.querySelectorAll('div');
    pixels.forEach((div) => {
        div.style.backgroundColor = getRandomColor();
    });
}