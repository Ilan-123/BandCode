function clicou(){

    let n=document.getElementById('input1').value;

    for (let i = 2; i<n; i = i + 1){
        let resto = n % i;
        if (resto == 0){
            document.getElementById('p').innerHTML = n + " " + 'Não é primo'
            return null;
        }
        document.getElementById('p').innerHTML = n + " " + 'É primo'
    }
}
