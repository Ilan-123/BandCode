function clicou(){

    let s = document.getElementById('input1').value;

    if (s.length < 10) {

        document.getElementById('input1').style.color = 'green'; 
    }

    else if(s.length > 10 &&  s.lenght < 20) {

        document.getElementById('input1').style.color = 'blue';
    }

    else if (s.length > 20) {

        document.getElementById('input1').style.color = 'red'; 
    }


}