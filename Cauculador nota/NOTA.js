function CONSELHO() {
    let n1 = document.getElementById('input1').value *1;
    let n2 = document.getElementById('input2').value *1;
    let n3 = document.getElementById('input3').value *1;
    
    if ((n1 > 10) || (n2 > 10) || (n3 > 10) || (n1 < 0) || (n2 < 0) || (n3 < 0)) {
       document.getElementById("output2").value = "imposibili"
       return null
    }

    let Delta = (n1*3 + n2*3 + n3*4)/(10);
    if(Delta < 5 ){
        document.getElementById("output2").value = "desapontado";
    }
    else { document.getElementById("output2").value = "apontado";
}
    document.getElementById('output1').value=Delta;

}