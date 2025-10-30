const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');

//config bola
let bola = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 20, 
    dx: 15, //velocidade horizontal
    dy: 20, //velocidade vertical
    color: "purple"
};

//função para desenhra a bola
function desenhar(){

    ctx.beginPath();
    ctx.arc(bola.x, bola.y, bola.radius, 0, Math.PI * 2);
    ctx.fillStyle = bola.color;
    ctx.fill();
    ctx.closePath();
}

//função para atualizar a função da bola
function atualizaPosicaoBola(){
    //atualiza a posicao da bola
    bola.x += bola.dx;
    bola.y += bola.dy;

    //verifica colisao com as bordas horizontais
    if(bola.x + bola.radius > canvas.width || bola.x - bola.radius < 0){
        bola.dx = -bola.dx; //inverte a direção horizontal
    }

    //verifica as colisoes com as bordas verticais 
    if(bola.y + bola.radius > canvas.height || bola.y - bola.radius < 0){
        bola.dy = -bola.dy; //inverte a direção vertical
    }
}
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    desenhar();
    atualizaPosicaoBola();
    requestAnimationFrame(animate);
}
animate();