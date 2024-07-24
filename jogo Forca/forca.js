let alvo = 'octanagem';
let n = alvo.length;
document.getElementById('p1').innerHTML = 'A palavra possui ' + n + ' letras';
let guess = '';
let erros = 0;

for (let i=0; i<n; i++) { guess = guess + 'X'}

let buneco = document.getElementById('buneco');
let ctx = buneco.getContext('2d');
let w = 800
let h = 800

function bunecu(){  
    ctx.clearRect(0,0,w,h);
    bola(400,200,100);
    linha(400,300,400,600);
    braço1(400,300,250,500);
    braço2(400,300,550,500);
    perna1(400,600,250,800);
    perna2(400,600,550,800);
}

function bola(x,y,r){
    ctx.beginPath();
    ctx.ellipse(x,y,r,r,0,0,7.26);
    ctx.stroke();

}

function linha(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}

function braço1(a1,b1,a2,b2){
    ctx.beginPath();
    ctx.moveTo(a1,b1);
    ctx.lineTo(a2,b2);
    ctx.stroke();
}

function braço2(c1,d1,c2,d2){
    ctx.beginPath();
    ctx.moveTo(c1,d1);
    ctx.lineTo(c2,d2);
    ctx.stroke();
}

function perna1(e1,f1,e2,f2){
    ctx.beginPath();
    ctx.moveTo(e1,f1);
    ctx.lineTo(e2,f2);
    ctx.stroke();
}

function perna2(g1,h1,g2,h2){
    ctx.beginPath();
    ctx.moveTo(g1,h1);
    ctx.lineTo(g2,h2);
    ctx.stroke();

    clicou();
}

function clicou(){

    let input = document.getElementById('input1').value;
    let c =input[0];
    let ok = false;
    
    for (let j=0; j<n; j++){
        let i = alvo.indexOf(c,j);
        if (i>=0) { 
            guess[i] = c;
            guess = replace(guess,c,i);
            ok = true;
        } 
    }
    if (!ok){
        erros++;
    }
    
    document.getElementById('p2').innerHTML = guess + ' - com ' +erros+' erros';

    if (erros>5){
        document.getElementById('p2').innerHTML = guess + ' ---- FORCA ----';
    }

    if (erros>1){
    }

    if (erros>2){
    }

    if (erros>3){
    }

    if (erros>4){
    }

    if (erros == 5){
    }

}


function replace(s,c,i){
    let s2 = '';
    for (let j=0;j<i;j++){
        s2 += s[j];
    }
    s2+=c;
    for (let j=i+1;j<s.length;j++){
        s2 += s[j];
    }
    return s2;
}

// colocar funcao buneco dentro de clicou e extrair partes do corpo com cada erro//