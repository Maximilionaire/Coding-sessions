// Card options

const cardArray = [
    {
        name:'fries',
        img : 'src/images/fries.png'
    },
    {
        name:'cheeseburger',
        img : 'src/images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img : 'src/images/hotdog.png'
    },
    {
        name:'ice-cream',
        img : 'src/images/ice-cream.png'
    },
    {
        name:'milkshake',
        img : 'src/images/milkshake.png'
    },
    {
        name:'pizza',
        img : 'src/images/pizza.png'
    },
    {
        name:'fries',
        img : 'src/images/fries.png'
    },
    {
        name:'cheeseburger',
        img : 'src/images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img : 'src/images/hotdog.png'
    },
    {
        name:'ice-cream',
        img : 'src/images/ice-cream.png'
    },
    {
        name:'milkshake',
        img : 'src/images/milkshake.png'
    },
    {
        name:'pizza',
        img : 'src/images/pizza.png'
    },
    
]
// const randomNumber = Math.floor(Math.random() * cards.length)

// console.log(cards)

// console.log(randomNumber)

// console.log(cards[randomNumber])

cardArray.sort(() => 0.5 - Math.random())
// ^^^ Sorts an array randomly ^^^

console.log(cardArray)

const grid = document.querySelector('.grid')
let cardsChosen = []
let cardsChoosenIds = []
let cardsWon = []

function createBoard(){
    for (let i = 0 ; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'src/images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}





function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChoosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
   
    
}



function checkForMatch(){
    const resultDisplay = document.getElementById('result')
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChoosenIds[0]
    const optionTwoId = cardsChoosenIds[1]

    if(optionOneId === optionTwoId){
        alert('You have picked the same image')
        cards[optionOneId].setAttribute('src','src/images/blank.png')
        cards[optionTwoId].setAttribute('src','src/images/blank.png')
    }

    else if(cardsChosen[0]===cardsChosen[1]){
        alert('You have found a match')
        cards[optionOneId].setAttribute('src','src/images/white.png')
        cards[optionTwoId].setAttribute('src','src/images/white.png')
        
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }

    else{
        cards[optionOneId].setAttribute('src','src/images/blank.png')
        cards[optionTwoId].setAttribute('src','src/images/blank.png')
        alert('sorry no match babe(#not sorry)')

    }

 

    cardsChosen = []
    cardsChoosenIds = []

    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = ' hooooray!!! YOU WON!!!'
    }

    console.log(cardsChosen)
    console.log(cardsWon)
}


createBoard()







