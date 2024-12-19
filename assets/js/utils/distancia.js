export const calculaDistancia = (puntoInicialX, puntoInicialY, puntoFinalX, puntoFinalY) => {
    const distanciaHorizontal = Math.abs(puntoInicialX - puntoFinalX);
    const distanciaVertical = Math.abs(puntoInicialY - puntoFinalY);
    return distanciaHorizontal + distanciaVertical;
}

