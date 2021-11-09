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
    let longitudbloc = 0.40;
    let alturabloc = 0.20;

    bloquesancho = (longitud) / (longitudbloc + liga);
    bloquesalto = (altura) / (alturabloc + liga);
    let total = bloquesancho * bloquesalto;
    alert("El numero de bloques a utilizar es: " + Math.round(total));
}