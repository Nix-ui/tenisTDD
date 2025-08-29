

function showScore(jugador1=0,jugador2=0){ 
    const puntos1 = jugador1 == 1 ?  "15": jugador1 == 2 ? "30" : jugador1 == 3 ? "40" : "Love";
    const puntos2 = jugador2 == 1 ?  "15": "Love";
    return  `${puntos1}-${puntos2}`;
}

export { showScore };