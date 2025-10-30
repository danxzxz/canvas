const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath(); //posição de inicio do desenho

ctx.arc(150, 100, 50, 0, Math.PI * 2, false); //(o centro do desenho vai estar nos dois primeiro parametros, o 3 é o raio, angulo inicial, sentido horario ou anti horario (false/ true))
ctx.fillStyle = 'blue'; // cor do preenchimento
ctx.fill(); // preenche
ctx.strokeStyle = 'black'; //cor do contorno
ctx.stroke(); //aplicando a cor preta

ctx.closePath(); //ultimo ponto do desenho

ctx.beginPath();
ctx.rect(50, 200, 200, 100); //rect = quadrado ou retangulos (2 primeiros param -> inicio do desenho, 3 e 4 param-> largura / altura)
ctx.fillStyle = 'green';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.closePath(); 


ctx.beginPath();
ctx.moveTo(300, 300); //primeiro ponto
ctx.lineTo(400, 300); //segundo ponto
ctx.lineTo(350, 200); //terceiro ponto
ctx.closePath(); 
ctx.fillStyle = 'purple';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();