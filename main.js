


let num = Math.floor(Math.random()*(100-10)+10);
console.log(num);

let x=false;
let i = 4;
    document.getElementById('essai').innerHTML = 5;
    function trouverNombre(){
        let number = parseInt(document.getElementById('nombre').value);
        if (i==0) {
            alert('Tu as perdu');
        }
        if (i >= 0 && x == false) {
        let faull = 0;
            if (num === number) {
                alert('tu es ganger');
                i=0;
            }else if(num<number && num>10 && num<=100){
                document.getElementById('message').innerHTML = `Non, le nombre est plus petite`;
                faull++;
            }else if(num>number && num>10 && num<=100){
                document.getElementById('message').innerHTML = `Non, le nombre est plus grand`;
                faull++;
            }else{
                document.getElementById('message').innerHTML = `Non, veuillez entrer un nombre entre 1 et 100`;
                faull++;
            }
            document.getElementById('essai').innerHTML = i;
            i--;
        }
    }
