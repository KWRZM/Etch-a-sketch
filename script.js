let color = "black";
let isDrawing = "false";

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

        board.insertAdjacentElement('beforeend',square);
    }
}

populateBoard(16);

function changeSize(input){
    if(input <= 100 && input >=2){
        error.style.display = 'none';
        populateBoard(input);
    }
    else{
        error.style.display = 'flex';
    }
}

function colorSquare() {
    if(isDrawing == true){
        if (color === "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice){
    color = choice;
}

function resetBoard(){
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = "white");

}