const grid = document.querySelector('.grid')
let squares = Array.from(document.querySelectorAll('.grid div'))
const scoreDisplay = document.querySelector('#score')
const startButton = document.querySelector('#start-button')
const width = 10

console.log(squares)

//The tetrominos

const lTetromino = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
]

const zTetromino = [
    [0, width, width+1, width*2+1],
    [width+1, width+2, width*2, width*2+1],
    [0, width, width+1, width*2+1],
    [width+1, width+2, width*2, width*2+1],
    
]

const tTetromino = [
    [1, width, width+1, width+2],
    [1, width+1, width+2, width*2+1],
    [width, width+1, width+2, width*2+1],
    [1, width, width+1, width*2+1]
]

const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
]

const iTetromino=[
    [1,width+1, width*2+1, width*3+1],
    [width, width+1,width+2,width+3],
    [1,width+1, width*2+1, width*3+1],
    [width, width+1,width+2,width+3]
]

const theTetrominos = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]
console.log(theTetrominos)

let currentPosition = 4
let currentRotation = 0

//randomnly select a Tetromino and its first rotation
let randomNumber= Math.floor(Math.random()*theTetrominos.length)
let current = theTetrominos[random][currentRotation]







//Draw the position of the first tetromino

function draw(){
    current.forEach(index =>{
        squares[currentPosition + index].classList.add('tetromino')
    })
}

//undraw the Tetromino
function unDraw(){
    current.forEach(index =>{
        squares[currentPosition + index].classList.remove('tetromino')
    })   
}

//move down the Tetrominos every second

timerId = setInterval(moveDown, 1000)

//assign function to keycodes
function  control(e){
    if(e.key === 'ArrowLeft'){
        moveLeft()
    }
    else if(e.key === 'ArrowUp'){
    rotate()
    }
    else if( e.key === 'ArrowRight'){
    moveRight()
    }
    else if( e.key === 'ArrowDown'){
    moveDown()
    }
}

document.addEventListener('keydown', control)

//move down function

function moveDown(){
    unDraw()
    currentPosition+=width
    draw()
    freeze()
}

function freeze(){
    if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))){
        current.forEach(index => squares[currentPosition + index].classList.add('taken'))
        // start a new Tetromino falling
        random = Math.floor(Math.random()* theTetrominos.length)
        current = theTetrominos[random][currentRotation]
        currentPosition=4
        draw()
    }
    
}

// move the Tetromino left, unless it is at the edge or there is a blockage

function moveLeft(){
    unDraw()
    const isAtLeftEdge = current.some(index =>(currentPosition + index) % width ===0)
    if (!isAtLeftEdge) currentPosition -=1

    if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
        currentPosition +=1
    }

    draw()
}

function moveRight(){
    unDraw()
    const isAtRightEdge = current.some(index => (currentPosition + index) % width === width-1)
    if(!isAtRightEdge) currentPosition +=1

    if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
        currentPosition -=1
    }
    draw()
}

//rotate tetromino

function rotate(){
    unDraw()
    currentRotation ++
    if(currentRotation === current.length){
        currentRotation = 0
    }
    current = theTetrominos[randomNumber][currentRotation]
    draw()
    

}


