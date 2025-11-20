const tela = document.getElementsByTagName("tela")[0];
const canvas = document.createElement("canvas");
tela.appendChild(canvas);
canvas.width = tela.getAttribute("largura");
canvas.height = tela.getAttribute("altura");
canvas.style = "border:1px solid black";
const ctx = canvas.getContext('2d');

desenhar();

function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenhar arcos
    for (const arc of document.getElementsByTagName("arco")) {
        let x = arc.getAttribute("px") || 20;
        let y = arc.getAttribute("py") || 20;
        let r = arc.getAttribute("raio") || 20;
        let angIni = parseFloat(arc.getAttribute("angIni") || 0);
        let angFim = parseFloat(arc.getAttribute("angFim") || Math.PI * 2);
        let cor = arc.getAttribute("cor") || "green";
        ctx.beginPath();
        ctx.arc(x, y, r, angIni, angFim, false);
        ctx.fillStyle = cor;
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.stroke();
        ctx.closePath();
    }

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

    // Desenhar polígonos
    for (const pol of document.getElementsByTagName("polgono")) {
        let pontos = pol.getAttribute("pontos") || "0,0 50,0 25,50";
        let cor = pol.getAttribute("cor") || "red";

        let arrayPontos = pontos.split(" ");

        ctx.beginPath();

        for (let i = 0; i < arrayPontos.length; i++) {
            let xy = arrayPontos[i].split(",");
            let x = xy[0];
            let y = xy[1];

            if (i == 0) {
                ctx.moveTo(x, y);
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
}

function atualizar() {
    for (const arc of document.getElementsByTagName("arco")) {
        let animarV = arc.getAttribute("animarV");
        let animarH = arc.getAttribute("animarH");

        if (animarH) {
            let n = parseInt(arc.getAttribute("px"));
            (animarH === "direita") ? n += 2 : n -= 2;
            if (n > canvas.width) n = 0;
            if (n < 0) n = canvas.width;
            arc.setAttribute("px", n);
        }

        if (animarV) {
            let n = parseInt(arc.getAttribute("py"));
            (animarV === "abaixo") ? n += 2 : n -= 2;
            if (n > canvas.height) n = 0;
            if (n < 0) n = canvas.height;
            arc.setAttribute("py", n);
        }
    }

    //rect
    for (const ret of document.getElementsByTagName("retangulo")) {
        let animarV = ret.getAttribute("animarV");
        let animarH = ret.getAttribute("animarH");

        if (animarH) {
            let n = parseFloat(ret.getAttribute("px"));
            if (animarH === "direita") {
                n += 2;
            } else n -= 2;
            if (n > canvas.width) n = 0;
            if (n < 0) n = canvas.width;
            ret.setAttribute("px", n);
        }

        if (animarV) {
            let n = parseFloat(ret.getAttribute("py"));
            if (animarV === "abaixo") {
                n += 2
            } else n -= 2;
            if (n > canvas.height) n = 0;
            if (n < 0) n = canvas.height;
            ret.setAttribute("py", n);
        }
    }

    for (const pol of document.getElementsByTagName("poligono")) {
        let animarV = pol.getAttribute("animarV");
        let animarH = pol.getAttribute("animarH");

        if (animarH) {
            let n = parseFloat(pol.getAttribute("px") || 0);
            if (animarH === "direita") {
                n += 2

            } else n -= 2;
            if (n > canvas.width) n = 0;
            if (n < 0) n = canvas.width;
            pol.setAttribute("px", n);
        }

        if (animarV) {
            let n = parseFloat(pol.getAttribute("py") || 0);
            if (animarV === "abaixo") 
            { n += 2 
            }else n -= 2;
            if (n > canvas.height) n = 0;
            if (n < 0) n = canvas.height;
            pol.setAttribute("py", n);
        }
    }
}

function animar() {
    desenhar();
    atualizar();
    requestAnimationFrame(animar);
}

animar();