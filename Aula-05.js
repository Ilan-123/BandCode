var url = "https://youtu.be/v5s3C5Pp4Pg";
var btn = document.querySelector("#btn");

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }
 
    let a = Math.random()*200;
    a = Math.round(a)

function clicou() {
    let n = document.getElementById('input1').value;
    
    akinator(n)
    
    }

function akinator(n){

    if (n == a){
        document.getElementById('p').innerHTML = openInNewTab(url)
        return null;
    }

    else if (n<a){
        document.getElementById('p').innerHTML = "Broxou"
        return null;
    }

    else if (n>a){
        document.getElementById('p').innerHTML = "se perdeu no personagem"
        return null;
    }
}