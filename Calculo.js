principal();

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
    let longitud;
    let altura;
    let metrosc = 0;
    let liga = 0.01;
    let longitudbloc = 0.40;
    let alturabloc = 0.20;
    let bloc1 = 10;
    let bloc2 = 15;
    let bloc3 = 20;
    let bloc4 = 25;
    let conta = false;
    let conta2 = false;
    let ancho = 0;

    while(conta == false){
        longitud = parseFloat(prompt("Ingrese la longitud de la pared"));
        altura = parseFloat(prompt("Ingrese el largo de la pared"));
        if(longitud == 0 && altura == 0){
            alert("Ingresa medidas mayores a 0 metros por favor")
        }

        if(longitud > 0 && altura > 0){
                conta = true;
        }
    }

        while(conta2 == false){
            let opc = parseInt(prompt("Ingrese el ancho del bloc a utilizar \n 1.10cm \n 2.15cm \n 3. 20cm \n 4. 25cm"));
                    
                switch(opc){
                    case 1:
                        ancho = bloc1;
                        conta2 = true;
                        break;
                    case 2:
                        ancho = bloc2;
                        conta2 = true;
                        break;
                    case 3:
                        ancho = bloc3;
                        conta2 = true;
                        break;
                    case 4:
                        ancho = bloc4;
                        conta2 = true;
                        break;
                    default:
                        alert("Opcion no valida");
                }
        }

            bloquesancho = (longitud) / (longitudbloc + liga);
            bloquesalto = (altura) / (alturabloc + liga);
            let total = bloquesancho * bloquesalto;
            let desperdicio = total * 0.5;
            total = total + desperdicio;

            let mortero = (longitudbloc + alturabloc)*(ancho)*(liga);
            let totalmortero = Math.round(total) * mortero;
            alert("El numero de blocs a utilizar es: " + Math.round(total));
            alert("El total de mortero a utilizar es: " + totalmortero.toFixed(4) + " m3");
            metrosc = longitud * altura;

    let cont = false;

    while(cont == false){
        let des = prompt("Te gustaria saber en cuanto tiempo se terminara la pared? S/N")
        if(des == "S"){
            conclusionpared(metrosc);
            cont = true;
        }else if (des == "N"){
            alert("Gracias por su visita");
            principal();
            cont = true;
        }
    }
}

function concretosResistentes(){
    let metros;
    let opc;
    let conta = false;

    while(conta == false){
        metros = parseFloat(prompt("Ingrese los metros cubicos"));

        if(metros > 0){
            opc = parseInt(prompt("Ingrese el tipo de concreto \n 1. 1:2:2 \n 2. 1:2:3"));
            switch(opc){
                case 1:
                    tipo1(metros);
                    conta = true;
                    break;
                case 2:
                    tipo2(metros);
                    conta = true;
                    break;
                default:
                    alert("Opcion no valida");
                    conta = true;
                    concretosResistentes();
            }
        }
    }

    let cont = false;

    while(cont == false){
        let des = prompt("Te gustaria saber en cuanto tiempo se terminara la obra? S/N")
        if(des == "S"){
            conclusionobra(metros);
            cont = true;
        }else if (des == "N"){
            alert("Gracias por su visita");
            principal();
            cont = true;
        }
    }
}

function concretosSimples(){
    let metros;
    let opc;
    let conta = false;

    while(conta == false){
        metros = parseFloat(prompt("Ingrese los metros cubicos"));
        
        if(metros > 0){
            opc = parseInt(prompt("Ingrese el tipo de concreto \n 1. 1:2:4 \n 2. 1:3:4"));
            switch(opc){
                case 1:
                    tipo3(metros);
                    conta = true;
                    break;
                case 2:
                    tipo4(metros);
                    conta = true;
                    break;
                default:
                    alert("Opcion no valida");
                    conta = true;
                    concretosSimples();
            }
        }
    }

    let cont = false;

    while(cont == false){
        let des = prompt("Te gustaria saber en cuanto tiempo se terminara la obra? S/N")
        if(des == "S"){
            conclusionobra(metros);
            cont = true;
        }else if(des == "N"){
            alert("Gracias por su visita");
            principal();
            cont = true;
        }
    }
}

function concretoRelleno(){
    let metros;
    let conta = false;

    while(conta == false){
        metros = parseFloat(prompt("Ingrese los metros cubicos"));
        
        if(metros > 0){
            tipo5(metros);
            conta = true;
        }
    }

    let cont = false;

    while(cont == false){
        let des = prompt("Te gustaria saber en cuanto tiempo se terminara la obra? S/N")
        if(des == "S"){
            conclusionobra(metros);
            cont = true;
        }else if(des == "N"){
            alert("Gracias por su visita");
            principal();
            cont = true;
        }
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

    let cont = false;

        while(cont == false){
            let des = prompt(("Deseas un presupuesto del material? S/N"));
            if(des == "S"){
            cont = true;
                presupuesto(cementototal, arenatotal, gravatotal);
            }else if(des == "N"){
                alert("Gracias por su visita");
                principal();
                cont = true;
            }
    }
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

    let cont = false;

        while(cont == false){
            let des = prompt(("Deseas un presupuesto del material? S/N"));
            if(des == "S"){
            cont = true;
                presupuesto(cementototal, arenatotal, gravatotal);
            }else if(des == "N"){
                alert("Gracias por su visita");
                principal();
                cont = true;
            }
        }
}

function tipo3(metros){
    let cemento = metros * 6;
    let cementodesper = 6 * 0.5;
    let cementototal = cemento + cementodesper;

    let arena = metros * 0.48;
    let arenadesper = 0.48 * 0.5;
    let arenatotal = arena + arenadesper;

    let grava = metros * 0.96;
    let gravadesper = 0.96 * 0.5;
    let gravatotal = grava + gravadesper;

    let agua = metros * 170;
    let aguadesper = 170 * 0.5;
    let aguatotal = agua + aguadesper;

    let materiales = {
        cemento: "Se utilizaran " + cementototal + " Bultos de cemento,",
        arena: Math.round(arenatotal) + " m3 de arena,",
        grava: Math.round(gravatotal) + " m3 de grava,",
        agua: aguatotal + " litros de agua"
    }

    alert(materiales.cemento + "\n" + materiales.arena + "\n" + materiales.grava + "\n" + materiales.agua);

    let cont = false;

        while(cont == false){   
            let des = prompt(("Deseas un presupuesto del material? S/N"));
            if(des == "S"){
                presupuesto(cementototal, arenatotal, gravatotal);
                cont = true;
            }else if(des == "N"){
                alert("Gracias por su visita");
                principal();
                cont = true;
            }
        }
}

function tipo4(metros){
    let cemento = metros * 5.2;
    let cementodesper = 5.2 * 0.5;
    let cementototal = cemento + cementodesper;

    let arena = metros * 0.63;
    let arenadesper = 0.63 * 0.5;
    let arenatotal = arena + arenadesper;

    let grava = metros * 0.84;
    let gravadesper = 0.84 * 0.5;
    let gravatotal = grava + gravadesper;

    let agua = metros * 170;
    let aguadesper = 170 * 0.5;
    let aguatotal = agua + aguadesper;

    let materiales = {
        cemento: "Se utilizaran " + cementototal + " Bultos de cemento,",
        arena: Math.round(arenatotal) + " m3 de arena,",
        grava: Math.round(gravatotal) + " m3 de grava,",
        agua: aguatotal + " litros de agua"
    }

    alert(materiales.cemento + "\n" + materiales.arena + "\n" + materiales.grava + "\n" + materiales.agua);

    let cont = false;

        while(cont == false){
            let des = prompt(("Deseas un presupuesto del material? S/N"));
            if(des == "S"){
                presupuesto(cementototal, arenatotal, gravatotal);
                cont = true;
            }else if(des == "N"){
                alert("Gracias por su visita");
                principal();
                cont = true;
            }
        }
}

function tipo5(metros){
    let cemento = metros * 4.2;
    let cementodesper = 4.2 * 0.5;
    let cementototal = cemento + cementodesper;

    let arena = metros * 0.5;
    let arenadesper = 0.5 * 0.5;
    let arenatotal = arena + arenadesper;

    let grava = metros * 1.0;
    let gravadesper = 1.0 * 0.5;
    let gravatotal = grava + gravadesper;

    let agua = metros * 160;
    let aguadesper = 160 * 0.5;
    let aguatotal = agua + aguadesper;

    let materiales = {
        cemento: "Se utilizaran " + cementototal + " Bultos de cemento,",
        arena: Math.round(arenatotal) + " m3 de arena,",
        grava: Math.round(gravatotal) + " m3 de grava,",
        agua: aguatotal + " litros de agua"
    }

    alert(materiales.cemento + "\n" + materiales.arena + "\n" + materiales.grava + "\n" + materiales.agua);

    let cont = false;

        while(cont == false){
            let des = prompt(("Deseas un presupuesto del material? S/N"));
            if(des == "S"){
                presupuesto(cementototal, arenatotal, gravatotal);
                cont = true;
            }else if(des == "N"){
                alert("Gracias por su visita");
                principal();
                cont = true;
            }
        }
}

function presupuesto(ctotal, atotal, gtotal){
    let preciocemento = ctotal * 198;
    let precioarena = atotal * 350;
    let preciograva = gtotal * 750;

    let presupuesto = {
        cemento: "El precio total del cemento es de $" + preciocemento.toFixed(2) + ",",
        arena: "El precio total de la arena es de $" + precioarena.toFixed(2) + ",",
        grava: "El precio total de la grava es de $" + preciograva.toFixed(2) + ","
    }
    alert(presupuesto.cemento + "\n" + presupuesto.arena + "\n" + presupuesto.grava + "\n"+ "\n" + "Este presupuesto es un estimado con materiales de la mejor calidad, el precio puede varear segun el lugar donde se compre.");
}

function conclusionobra(metros){
    let cont = false;
    let personal;
    let trabajador = 0;
    let dias = 0;

    while(cont == false){
        personal = prompt(("Ingrese el numero de trabajadores"));

        if(personal > 0){
            for (trabajador; trabajador<metros;){
                trabajador = (trabajador + 5) * personal;
                dias += 1;
            }
                alert("La obra se demorara " + dias + " dias en completarse.");
                cont = true;
        }
    }
}

function conclusionpared(metrosc){
    let personal = 0;
    let trabajador = 0;
    let dias = 0;
    let cont = false;
    while(cont == false){
        personal = prompt(("Ingrese el numero de trabajadores"));

        if(personal > 0){
            for (trabajador; trabajador<metrosc;){
                trabajador = (trabajador += 8) * personal;
                dias += 1;
            }
            cont = true;
        }
    }
    alert("La obra se demorara " + dias + " dias en completarse.");
}
