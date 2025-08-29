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
    checkDeuce(){
        if(this,this.jugador1.getAvarage() && this.jugador2.getAvarage() ){
            this.jugador1.toggleAvarage();
            this.jugador2.toggleAvarage();
            return "Deuce";
        }else if(this.jugador1.getPuntos() == this.jugador2.getPuntos() && this.jugador1.getPuntos() >= 3){
            return "Deuce";
        }
    }
    checkAvarage(){
        if(this.jugador1.getPuntos() > 3 && this.jugador2.getPuntos() > 2){
            this.jugador1.toggleAvarage();
            return "Advantage for Player 1";
        }else if(this.jugador2.getPuntos() > 3 && this.jugador1.getPuntos() > 2){
            this.jugador2.toggleAvarage();
            return "Advantage for Player 2";
        }
    }
    showScore(){ 
        const puntos1 = this.asociacionPuntos[this.jugador1.getPuntos()];
        const puntos2 = this.asociacionPuntos[this.jugador2.getPuntos()];
        let resultado = this.checkAvarage() ? this.checkAvarage() : `${puntos1}-${puntos2}`;
        return  this.checkDeuce() ? this.checkDeuce() : resultado;
    }
    resetScore(){
        this.jugador1 = new Jugador();
        this.jugador2 = new Jugador();
    }
}


export { TenisScorer , Jugador};