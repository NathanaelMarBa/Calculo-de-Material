function principal(){
    let contador = 0;
    while(contador == 0){
        let opc = parseInt(prompt("Que deseas calcular? \n 1.Pared \n 2.Concretos resistentes \n 3.Concretos Simples \n 4.Concreto de Relleno \n 5.Salir"));
        switch(opc){
            case 1:
                pared();
                break;
            case 2:
                concretosResistentes();
                break;
            case 3:
                concretosSimples();
                break;
            case 4:
                concretoRelleno();
                break;
            case 5:
                contador = 1;
                break;
            default:
                alert("Opcion no valida");
                principal();
        }
    }
}

function pared(){
    let longitud = parseFloat(prompt("Ingrese la longitud de la pared"));
    let altura = parseFloat(prompt("Ingrese el largo de la pared"));
    let liga = 0.01;
    let ancho = parseFloat(prompt("Ingrese el ancho del bloc a utilizar \n 1.10cm \n 2.15cm \n 3. 20cm \n 4. 25cm"));
    let bloc1 = 10;
    let bloc2 = 15;
    let bloc3 = 20;
    let bloc4 = 25;

    if(ancho == 1){
        ancho = bloc1;
    } else if(ancho == 2){
        ancho = bloc2;
    } else if(ancho == 3){
        ancho = bloc3;
    } else if(ancho == 4){
        ancho = bloc4;
    }

    let longitudbloc = 0.40;
    let alturabloc = 0.20;

    bloquesancho = (longitud) / (longitudbloc + liga);
    bloquesalto = (altura) / (alturabloc + liga);
    let total = bloquesancho * bloquesalto;
    let desperdicio = total * 0.5;
    total = total + desperdicio;

    let mortero = (longitudbloc + alturabloc)*(ancho)*(liga);
    let totalmortero = Math.round(total) * mortero;
    alert("El numero de blocs a utilizar es: " + Math.round(total));
    alert("El total de mortero a utilizar es: " + totalmortero.toFixed(4));
}