class Jugador{
    puntos;
    avarage;
    constructor(){
        this.puntos = 0;
        this.avarage = false;
    }
    anotarPunto(){
        this.puntos ++;
    }
    getPuntos(){
        return this.puntos;
    }
    getAvarage(){
        return this.avarage;
    }
    toggleAvarage(){
        this.avarage = !this.avarage;
    }
}

class TenisScorer {
    jugador1;
    jugador2;
    asociacionPuntos = {
        0: "Love",
        1: "15",
        2: "30",
        3: "40"
    };
    constructor(){
        this.jugador1 = new Jugador();
        this.jugador2 = new Jugador();
    }
    player1Scores(){
        this.jugador1.anotarPunto();
    }
    player2Scores(){
        this.jugador2.anotarPunto();
    }
    showScore(){ 
        const puntos1 = this.asociacionPuntos[this.jugador1.getPuntos()];
        const puntos2 = this.asociacionPuntos[this.jugador2.getPuntos()];
        return  `${puntos1}-${puntos2}`;
    }
}


export { TenisScorer , Jugador};