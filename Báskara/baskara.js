function calcular() {
    let a = document.getElementById('input1').value *1;
    let b = document.getElementById('input2').value *1;
    let c = document.getElementById('input3').value *1;
    
    let Delta = b * b - 4 * a * c;
    if(Delta < 0 ){
        document.getElementById("output1").value = "Delta = negativo";
        document.getElementById("output2").value = "Delta = negativo";
        return null;
    }

    let x1 = (-b + Math.sqrt(Delta))/(2 * a);
    let x2 = (-b - Math.sqrt(Delta))/(2 * a);
    document.getElementById('output1').value=x1;
    document.getElementById('output2').value=x2;
}