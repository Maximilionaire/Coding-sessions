const circle = document.querySelector('.circle')
let xAxis = 0
let yAxis = 0

function control(event){
    // if (event.key === 'ArrowLeft'){
    //     console.log('pressed left')}
    
    // else if(event.key === 'ArrowRight'){
    //     console.log('pressed right')}

    // else if(event.key === 'ArrowUp'){
    //     console.log('pressed Up')}

    // else if(event.key === 'ArrowDown'){
    //     console.log('pressed down')}

    switch (event.key){
        case 'ArrowLeft':
            console.log('pressed left')
            xAxis -= 50;
            circle.style.left = xAxis + 'px'
            
            break;
        case 'ArrowRight':
            console.log('pressed right')
            xAxis += 50;
            circle.style.left = xAxis + 'px'
            break;
        case 'ArrowUp':
            console.log('pressed up')
            yAxis -= 50
            circle.style.top = yAxis + 'px'
            break;
        case 'ArrowDown':
            console.log('pressed down')
            yAxis += 50
            circle.style.top = yAxis + 'px'
            break;
        default : console.log('key not recognised')
    }
}

const smiley = document.querySelector('.smile')

function smile(e){
    switch (e.key){
        case'ArrowUp':
        smiley.style.transform="rotate(180deg)"
        break;
 
        case'ArrowDown':
        smiley.style.transform="rotate(0deg)"
        break;
            
    }
    
    


}

document.addEventListener('keydown', smile)