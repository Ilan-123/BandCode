let canvas = document.getElementById('canvas') ;
let ctx = canvas.getContext('2d');

let xs = [];
let ys = [];
let rs = [];

let w = 600;
let h = 600;


function gera(){

    let x = Math.random()*600;
    let y = Math.random()*600;

    xs.push(x);
    ys.push(y);
    rs.push(0);

}

function draw(){ 
    ctx.clearRect(0,0,w,h);
    ctx.strokeStyle = "#008000";

   gera()

    for (i=xs.length - 1; i >= 0; i -- ){
       rs[i]++;
       if (rs[i]>100){
           rs.splice(i,1);
           xs.splice(i,1);
           ys.splice(i,1);
       }
    }

    for (i=0; i<xs.length; i++){
        ctx.beginPath();
        ctx.ellipse(xs[i], ys[i], rs[i], rs[i],0,0,6.28);
        ctx.stroke();
    }
    requestAnimationFrame(draw);
}
draw()