const evaluarNumeros = ()=>{
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            console.log(`fla ${i}`);
        }
        else if (i % 2 === 0) {
            console.log(`pan ${i}`);
        }
        else if (i % 3 === 0 ) {
            console.log(`tu ${i}`);
        }
    }
}

evaluarNumeros();