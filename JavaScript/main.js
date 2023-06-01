function introduzir(tecla){

    let nega = document.getElementById("nega");
    let ecra = document.getElementById("ecra");
    let resultados = document.querySelector("#resultados");

    if(ecra != ""){
        resultados.style.display = "block";
    }

    else{
        resultados.style.display = "none";
    }

    if(tecla == "-"){

        if(ecra.innerHTML.length == 0){ nega.innerHTML = ""; }

        else{

            if(!nega.innerHTML.includes("-")){ nega.innerHTML = "-"; }
            else{ nega.innerHTML = ""; }
        }
    }
    else{
        if(ecra.innerHTML.length < 10){

            if(tecla == "."){

                if(ecra.innerHTML.length == 0){
                    ecra.innerHTML += "0";
                    ecra.innerHTML += tecla;
                }

                else if(!ecra.innerHTML.includes(".")){ ecra.innerHTML += tecla; }
            }    

            else if(tecla == "0"){ 

                if(ecra.innerHTML.length == 1){ 

                    if(!ecra.innerHTML.includes("0")){ ecra.innerHTML += tecla; }                 
                }
                else{ ecra.innerHTML += tecla; }
            }  

            else if(tecla != "0"){

                if(ecra.innerHTML.length == 1 && ecra.innerHTML.includes("0")){ 
                    ecra.innerHTML = "";
                    ecra.innerHTML += tecla;
                }
                else{ ecra.innerHTML += tecla; }
            }

            else{ ecra.innerHTML += tecla; }
        }
    }

    let temperatura = parseFloat(nega.innerHTML + ecra.innerHTML);
    let far = document.getElementById("far");
    let kel = document.getElementById("kel");

    if(isNaN(temperatura)){
        far.innerHTML = "";
        kel.innerHTML = "";
    }

    else{
        let farenh = temperatura * 1.8 + 32;
        let kelvin = temperatura + 273.15;

        far.innerHTML = temperatura.toFixed(1) + " ºC = " + farenh.toFixed(2) + " Fahrenheit";
        kel.innerHTML = temperatura.toFixed(1) + " ºC = " + kelvin.toFixed(2) + " Kelvin";
    }
}

function apagar(){

    document.getElementById("nega").innerHTML = "";
    document.getElementById("ecra").innerHTML = "";
    document.getElementById("far").innerHTML = "";
    document.getElementById("kel").innerHTML = "";
    document.querySelector("#resultados").style.display = "none";
}