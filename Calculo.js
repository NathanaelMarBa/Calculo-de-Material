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
    alert("El total de mortero a utilizar es: " + totalmortero.toFixed(4) + " m3");
}

function concretosResistentes(){
    let metros = parseFloat(prompt("Ingrese los metros cubicos"));
    let opc = parseInt(prompt("Ingrese el tipo de concreto \n 1. 1:2:2 \n 2. 1:2:3"));
    switch(opc){
        case 1:
            tipo1(metros);
            break;
        case 2:
            tipo2(metros);
            break;
        default:
            alert("Opcion no valida");
            concretosResistentes();
    }
}

function tipo1(metros){
    let cemento = metros * 8.4;
    let cementodesper = 8.4 * 0.5;
    let cementototal = cemento + cementodesper;

    let arena = metros * 0.67;
    let arenadesper = 0.67 * 0.5;
    let arenatotal = arena + arenadesper;

    let grava = metros * 0.67;
    let gravadesper = 0.67 * 0.5;
    let gravatotal = grava + gravadesper;

    let agua = metros * 220;
    let aguadesper = 220 * 0.5;
    let aguatotal = agua + aguadesper;

    let materiales = {
        cemento: "Se utilizaran " + cementototal + " Bultos de cemento,",
        arena: Math.round(arenatotal) + " m3 de arena,",
        grava: Math.round(gravatotal) + " m3 de grava,",
        agua: aguatotal + " litros de agua"
    }

    alert(materiales.cemento + "\n" + materiales.arena + "\n" + materiales.grava + "\n" + materiales.agua);
}

function tipo2(metros){
    let cemento = metros * 7;
    let cementodesper = 7 * 0.5;
    let cementototal = cemento + cementodesper;

    let arena = metros * 0.56;
    let arenadesper = 0.56 * 0.5;
    let arenatotal = arena + arenadesper;

    let grava = metros * 0.84;
    let gravadesper = 0.84 * 0.5;
    let gravatotal = grava + gravadesper;

    let agua = metros * 180;
    let aguadesper = 180 * 0.5;
    let aguatotal = agua + aguadesper;

    let materiales = {
        cemento: "Se utilizaran " + cementototal + " Bultos de cemento,",
        arena: Math.round(arenatotal) + " m3 de arena,",
        grava: Math.round(gravatotal) + " m3 de grava,",
        agua: aguatotal + " litros de agua"
    }

    alert(materiales.cemento + "\n" + materiales.arena + "\n" + materiales.grava + "\n" + materiales.agua);
}