let xs = [];
let conta = 0;

function tijolinho(){

    let palavra = document.getElementById('p').value;
    let n = xs.length;

    if (conta < n){
        if (xs[conta] == palavra){
            document.getElementById('z').value = 'ok';
            conta ++;
        }
        else{ 
            document.getElementById('z') = 'ERROU';
        }
    } 
    else {
    
        xs.push(palavra);
        conta = 0;
    }
       console.log(xs);
}
