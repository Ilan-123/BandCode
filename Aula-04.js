
let anterior = "";

function alterar() {
    for (let i = 1; i < 101; i = i + 2){

        anterior = anterior + " " + i;
    }
    document.getElementById("p").innerHTML = anterior;
}