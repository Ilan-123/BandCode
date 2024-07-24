const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let nave = new Image();
let plabo = new Image();
let urro = new Image();

urro.src = 'urro.png'
nave.src = 'urro shrek.png';
plabo.src = 'Plobo.png';

let xnave = 1000;
let ynave = 1000;

let w = 1600;
let h = 900;

let xraios = [];
let yraios = [];

let p = 0

document.getElementById('p').innerHTML = 'inimigos falecidos' + ' ' + p;

let t = 0;

let z = 1;


let aplabo = [];
let bplabo = [];

xkabum = [];
ykabum = [];
rkabum = [];


function move(event){
  xnave = event.offsetX;
  ynave = event.offsetY;
}

function down(event){
  let x = event.offsetX;
  let y = event.offsetY;
  xraios.push(x);
  yraios.push(y);
}

function downplabo(){
  let a = Math.random()*1600;
  let b = 30;
  aplabo.push(a);
  bplabo.push(b);

}


function moverPlabos(){
  
  for (let n = aplabo.length-1;n>=0;n--){
    bplabo[n] = bplabo[n]+2;
    if (bplabo[n]>850){
      bplabo.splice(n,1);
      aplabo.splice(n,1);

    if (bplabo[n]>850 && bplabo[n] < 1000){
      document.getElementById('canvas').innerHTML = 'brochou'
    }}
  }
}

function drawplabo(){
  
  for (let n=0;n<aplabo.length;n++){
    ctx.beginPath();
    ctx.moveTo(aplabo[n],bplabo[n]);
    ctx.stroke();
    ctx.drawImage(plabo,aplabo[n],bplabo[n]-30,42,69);
   
  }
}

function moverRaios(){
  
  for (let i = xraios.length-1;i>=0;i--){
    yraios[i] = yraios[i]-10;
    if (yraios[i]<10){
      yraios.splice(i,1);
      xraios.splice(i,1);
    }
  }
}


function drawRaios(){
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 6,9;
  ctx.shadowColor = '#a52a2a';
  ctx.shadowBlur = 6;

  for (let i=0;i<xraios.length;i++){
    ctx.beginPath();
    ctx.moveTo(xraios[i],yraios[i]);
    ctx.lineTo(xraios[i],yraios[i]-30);
    ctx.stroke();

  }
}

function drawkabum(){

  for (i=xkabum.length - 1; i >= 0; i -- ){
    rkabum[i]++;
    if (rkabum[i]>69){
        rkabum.splice(i,1);
        xkabum.splice(i,1);
        ykabum.splice(i,1);
    }
 } 
    ctx.strokeStyle = "#FF4500";
    ctx.beginPath();
    ctx.ellipse(xkabum, ykabum, rkabum, rkabum,0,0,6.28);
    ctx.stroke();
  }


function draw(){

  ctx.clearRect(0,0,w,h);
  ctx.drawImage(nave,xnave-30,ynave-30,69,69);
 
  
  t++

  moverRaios();
  drawRaios();
  drawplabo();
  drawkabum();
  moverPlabos();
  
  if(t==50){
    downplabo();
    t=0

  }

for (let i = xraios.length-1; i>=0; i--){
    for (let j = aplabo.length-1 ; j>=0 ; j--){
      let dx = Math.abs( xraios[i] - (aplabo[j] + 42/2));
      let dy = Math.abs( yraios[i] - bplabo[j]);
     

      if ((dx<=21)&&(dy<=69)){

        xkabum.push(xraios[i]);
        ykabum.push(yraios[i]);
        rkabum.push(z);
    
        yraios[i] = -69;
        bplabo[j] = 69420;
        
        p++

        for(let z = 1; z<100; z++){
          z++
        }
      }



      document.getElementById('p').innerHTML = 'inimigos falecidos' + ' ' + p;
    }
  }
 requestAnimationFrame(draw);


}

draw();
   
