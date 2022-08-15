///main\\\

//SE VOCÊ APERTAR E, VC MEIO Q MUDA DE "LEVEL", QUE NESSE CASO FORAM TODOS SEPARADOS
//POR CLASSES (QUE DERIVAM DE OUTRA CLASSE-MÃE)

const canvas = document.getElementById('display_canvas')
const ctx = canvas.getContext('2d')

if (window.innerHeight >= 600 && window.innerWidth >= 800) {
    canvas.height = window.innerHeight
    canvas.width = (800 * window.innerHeight) / 600
}
else {
    canvas.width = 800
    canvas.height = 600
}
//an universal measure that always changes
m = canvas.width / 800

///the user's input (controls and stuff) goes here\\\

//final definition
var userInput = {
    up: false,
    left: false,
    down: false,
    right: false,
    enter: false,
    e: false
}

//input listening
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'W':
        case 'w':
        case 'ArrowUp':
            userInput.up = true
            break;
        case 'A':
        case 'a':
        case 'ArrowLeft':
            userInput.left = true
            break;
        case 'S':
        case 's':
        case 'ArrowDown':
            userInput.down = true
            break;
        case 'D':
        case 'd':
        case 'ArrowRight':
            userInput.right = true
            break;
        case 'Enter':
            userInput.enter = true
            break;
        case 'E':
        case 'e':
            userInput.e = true
            break;
    }
})
window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'W':
        case 'w':
        case 'ArrowUp':
            userInput.up = false
            break;
        case 'A':
        case 'a':
        case 'ArrowLeft':
            userInput.left = false
            break;
        case 'S':
        case 's':
        case 'ArrowDown':
            userInput.down = false
            break;
        case 'D':
        case 'd':
        case 'ArrowRight':
            userInput.right = false
            break;
        case 'Enter':
            userInput.enter = false
            break;
        case 'E':
        case 'e':
            userInput.e = false
            break;
    }
})

//level set

//default lvl definition
let lvlLoad = new Home_PlayerRoom({
    size: { x: 128*m, y: 160*m },
    position: { x: 300, y: 400 },
    velocity: { x: 0, y: 0 },
    src: 'sprites/dan/dan',
    srcsize: { x: 128*m, y: 160*m}
});

gameGeneralFunction()
function gameGeneralFunction() {
    window.requestAnimationFrame(gameGeneralFunction)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    lvlLoad.update()
}