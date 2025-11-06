const tela = document.getElementsByTagName("tela");
const canvas = document.createElement("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.width = 300;
canvas.height = 300;
const ctx = canvas.getContext('2d');
tela[0].appendChild(canvas);


for (const arco of document.getElementsByTagName("arco")) {
    desenhaArco(arco);
}
function desenhaArco(arco) {
    const x = arco.getAttribute("px") || 150;
    const y = arco.getAttribute("py") || 150;
    const raio = arco.getAttribute("raio") || 20;
    const cor = arco.getAttribute("cor") || "green";
    const angIni = arco.getAttribute("angIni") || 0;
    const angFinal = arco.getAttribute("angFinal") || Math.PI * 2;
    const rotacao = arco.getAttribute("rotacao") || false;

    ctx.beginPath();
    ctx.arc(x, y, raio, angIni, angFinal, rotacao);
    ctx.fillStyle = cor;
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();
}


