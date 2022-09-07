

// Declaramos las constantes, el precio es por gramo.
const precioAlmendra = 4
const precioNuez = 2.3
const precioPasas = 0.65
const precioCaju = 3

//Tomamos el fruto seco y la cantidad por prompt. Con el while nos aseguramos que ingrese una opción válida
let frutoSeco = prompt(`Ingresá el fruto seco que desea comprar:
-Almendra 
-Nuez
-Pasas
-Caju`);
    while (frutoSeco != "Almendra" && frutoSeco != "Nuez" && frutoSeco != "Pasas" && frutoSeco != "Caju"){
        frutoSeco = prompt(`Ingresá el fruto seco que desea comprar:
        -Almendra 
        -Nuez
        -Pasas
        -Caju 
        Recordá ingresar la primera letra en mayúscula`)
    }
let cantidad = parseInt(prompt("Ingresá la cantidad en gramos que desea comprar"));
    while (isNaN(cantidad)){
        cantidad = parseInt(prompt(`Ingrese la cantidad en gramos que desea comprar
        Ingresá un número válido`))
    } 


switch(frutoSeco) {
    case "Almendra": 
    //Usamos parseInt para redondear y simplificar la transacción evitando el cambio en centavos.
        console.log(`El importe a pagar es de ${parseInt(precioAlmendra * cantidad)} pesos argentinos`);
        break;
    case "Nuez":
        console.log(`El importe a pagar es de ${parseInt(precioNuez * cantidad)} pesos argentinos`);
        break;
    case "Pasas":
        console.log(`El importe a pagar es de ${parseInt(precioPasas * cantidad)} pesos argentinos`);
        break;
    case "Caju":
        console.log(`El importe a pagar es de ${parseInt(precioCaju * cantidad)} pesos argentinos`);
        break;
    default: 
        console.log("Volvé a intentarlo ingresando la primera letra en mayúscula y un número válido");
        break;
}