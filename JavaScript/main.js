function introduzir(tecla){

    let nega = document.getElementById("nega");
    let ecra = document.getElementById("ecra");

    if(tecla == "-"){
        if(!nega.innerHTML.includes("-")){
            nega.innerHTML = "-";
        }

        else{
            nega.innerHTML = "";
        }
    }

    else{
        if(ecra.innerHTML.length < 10){
            if(tecla == "."){
                if(!ecra.innerHTML.includes(".")){
                    ecra.innerHTML += tecla;
                }
            }
            
            else{
                ecra.innerHTML += tecla;
            }
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

        far.innerHTML = temperatura.toFixed(1) + " ºC = " + farenh.toFixed(2) + " F";
        kel.innerHTML = temperatura.toFixed(1) + " ºC = " + kelvin.toFixed(2) + " K";
    }
}

function apagar(){

    document.getElementById("nega").innerHTML = "";
    document.getElementById("ecra").innerHTML = "";
    document.getElementById("far").innerHTML = "";
    document.getElementById("kel").innerHTML = "";
}