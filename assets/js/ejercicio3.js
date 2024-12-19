const carrera = (liebreAposicion, liebreAvelocidad, liebreBposicion, liebreBvelocidad) => {
    const MAX_I = 1000;
    let i = 0;

    let posicionA = liebreAposicion;
    let posicionB = liebreBposicion;

    while (posicionA !== posicionB && i < MAX_I) {
        posicionA += liebreAvelocidad;
        posicionB += liebreBvelocidad;
        i++;

        if (posicionA === posicionB) {
            console.log(`Las liebres se encuentran en la posicion ${posicionA}`);
            return posicionA;
        }
    }
    if (i === MAX_I) {
        console.log("Las liebres no se encontraran jeje");
        return -1;
    }
}

carrera(0, 2, 5, 1);