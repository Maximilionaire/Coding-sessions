const grid = document.querySelector('.grid')
const scoreDisplay = document.getElementById('score')
const width = 28 //28 * 28 = 784 squares
let score = 0


//layout of grid  an what is in the sqaures

// legend
// 0 - pac-dot
// 1 - wall
// 2 - ghost- layar
// 3 - power-pellet
// 4 - empty

//messaggeeer

const layout =  [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]

// draw the grid and render it

const squares = [];

function createBoard(){
    for(let i=0; i<layout.length; i++){
        const square = document.createElement('div')
        grid.appendChild(square)
        squares.push(square)
    


//add layout to board

if(layout[i]===0){
    squares[i].classList.add('pac-dot')

}
else if (layout[i]===1){
    squares[i].classList.add('wall')
}
else if (layout[i]===3){
    squares[i].classList.add('power-pellet')
}
else if (layout[i]===2){
    squares[i].classList.add('ghost-layar')
}

}

}

createBoard();


//starting position of pac-man

let pacmanCurrentIndex = 490

squares[pacmanCurrentIndex].classList.add('pac-man')

//move pac-man

function movePacman(e){

    squares[pacmanCurrentIndex].classList.remove('pac-man')

    switch(e.keyCode){
        case 37:
            if(pacmanCurrentIndex % width !== 0 && !squares[pacmanCurrentIndex -1].classList.contains('wall') && !squares[pacmanCurrentIndex -1].classList.contains('ghost-layar')) pacmanCurrentIndex -=1
            //check if pacman is in the left exit

            if((pacmanCurrentIndex -1 === 363)){
                pacmanCurrentIndex = 391
            }
            break
        case 38:
            if(pacmanCurrentIndex - width >=0 && !squares[pacmanCurrentIndex -width].classList.contains('wall') && !squares[pacmanCurrentIndex -width].classList.contains('ghost-layar')) pacmanCurrentIndex -=width
            break
        case 39:
            if(pacmanCurrentIndex  % width < width -1 && !squares[pacmanCurrentIndex +1].classList.contains('wall')&& !squares[pacmanCurrentIndex +1].classList.contains('ghost-layar'))pacmanCurrentIndex +=1
            // check if packman in the right exit
            if((pacmanCurrentIndex + 1 === 392)){
                pacmanCurrentIndex = 364
            }
            break
        case 40:
        if(pacmanCurrentIndex + width < width * width && !squares[pacmanCurrentIndex +width].classList.contains('wall') && !squares[pacmanCurrentIndex +width].classList.contains('ghost-layar')) pacmanCurrentIndex +=width
        break    
    }

    squares[pacmanCurrentIndex].classList.add('pac-man')

    pacDotEaten()
    //powerPelletEaten()
    //chackForGameOver()
    //CheckForWin()


}

document.addEventListener('keyup', movePacman)


//what happens when Pa-man eats a pac dot

function pacDotEaten(){
    if(squares[pacmanCurrentIndex].classList.contains('pac-dot')){
        score++
        scoreDisplay.innerHTML=score
        squares[pacmanCurrentIndex].classList.remove('pac-dot')
    }
}
