  const  tela=document.getElementsByTagName("tela")[0];
  const  canvas=document.createElement("canvas");
  tela.appendChild(canvas);
  canvas.width= tela.getAttribute("largura")
  canvas.height= tela.getAttribute("altura")
  canvas.style="border:1px solid black";
  const ctx = canvas.getContext('2d');

  for(const arc of document.getElementsByTagName("arco")){

      let x = arc.getAttribute("px")||20;
      let y = arc.getAttribute("py")||20;
      let r = arc.getAttribute("raio")||20;
      let angIni = parseFloat(arc.getAttribute("angIni")||0);
      let angFim = parseFloat(arc.getAttribute("angFim")||Math.PI*2);
      let cor = arc.getAttribute("cor")||"green";
      ctx.beginPath();
      ctx.arc(x, y, r, angIni, angFim, false);
      ctx.fillStyle = cor;
      ctx.fill();
      ctx.strokeStyle = 'black';
      ctx.stroke();
      ctx.closePath();
  }

// Desenhar retângulos
for (const ret of document.getElementsByTagName("retangulo")) {
    let x = ret.getAttribute("px") || 20;
    let y = ret.getAttribute("py") || 20;
    let largura = ret.getAttribute("largura") || 50;
    let altura = ret.getAttribute("altura") || 50;
    let cor = ret.getAttribute("cor") || "blue";
    
    ctx.beginPath();
    ctx.rect(x, y, largura, altura);
    ctx.fillStyle = cor;
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();
}

for (const pol of document.getElementsByTagName("poligono")) {
    let pontos = pol.getAttribute("pontos") || "0,0 50,0 25,50"; //faze um triângulo por padrão
    let cor = pol.getAttribute("cor") || "red";
    
    let arrayPontos = pontos.split(" "); //divide a string por espaço
    
    ctx.beginPath();
    
    for (let i = 0; i < arrayPontos.length; i++) { 
        let xy = arrayPontos[i].split(","); //divide cada ponto por vírgula
        let x = xy[0];
        let y = xy[1];
        
        if (i == 0) {
            ctx.moveTo(x, y); //se for primeiro ponto, move para ele, se nao desenha uma linha ate eke
        } else {
            ctx.lineTo(x, y);
        }
    }
    
    ctx.closePath();
    ctx.fillStyle = cor;
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
}