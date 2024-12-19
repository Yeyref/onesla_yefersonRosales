import { calculaDistancia } from './utils/distancia.js';

const consiguePasajeroCercano = (conductorX, conductorY, pasajero1X, pasajero1Y, pasajero2X, pasajero2Y) => {
    const distanciaPasajero1 = calculaDistancia(conductorX, conductorY, pasajero1X, pasajero1Y );
    
    const distanciaPasajero2 = calculaDistancia(conductorX, conductorY,pasajero2X, pasajero2Y );
    
    alert(`Distancia al pasajero B: ${distanciaPasajero1} cuadras`);
    alert(`Distancia al pasajero C: ${distanciaPasajero2} cuadras`);

    if (distanciaPasajero1 < distanciaPasajero2) {
        alert("Pasajero cercano es el B");
        return "B";
    } else if (distanciaPasajero2 < distanciaPasajero1) {
        alert("Pasajero cercano es C");
        return "C";
    } else {
        alert("Ambos pasajeros a la misma distancia");
        return "Igual";
    }
}
//Aca copio para que vea tanto aca en el IDE como en consola, como utilizar la funcion, y que parametro corresponde a cada usuario.
console.log("Ejemplo de uso:");
console.log("El Conductor en (0,0)");
console.log("Y el pasajero B en (3,4)");
console.log(" Junto con el pasajero C en (1,2)");
consiguePasajeroCercano(0, 0, 3, 4, 1, 2);