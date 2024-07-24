
function power() {

    let n = document.getElementById('N').value;
    let x =1;
    for (let i = 1; i<=n ; i=i+1) {

        x = x*2
    }
    document.getElementById("p").innerHTML = "2<sup>" +n+ "</sup> =" + x;
}