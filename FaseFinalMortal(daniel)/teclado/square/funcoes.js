const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//config bola
let square = {
    x: 200,
    y: 200,
    size: 50,
    color: "blue",
    speed: 10    //velocidade
};

//função para desenhra a bola
function drawSquare(){

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle = square.color;
    ctx.fillRect(square.x, square.y, square.size, square.size); //desenha oquadrado
    ctx.closePath();
}

//função para atualizar a função da bola
function moveSquare(){
    const key = event.key;

    if(key === "ArrowUp" && square.y > 0){
        square.y -= square.speed //move para cima
    } else if (key === "ArrowDown" && square.y + square.size < canvas.height){
        square.y += square.speed //move para baixo
    }else if (key === "ArrowLeft" && square.x > 0){
        square.x -= square.speed //move para esquerda
    } else if (key === "ArrowRight" && square.x + square.size < canvas.width){
        square.x += square.speed //move para diretia
    }
    drawSquare();
}
window.addEventListener('keydown', moveSquare);
drawSquare();