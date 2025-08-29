import { TenisScorer} from "./tennisScorer.js";

describe("Tennis Scorer",()=>{
    it("El partido inicia  0-0",()=>{
        let  tenisScorer = new TenisScorer();
        expect(tenisScorer.showScore()).toEqual("Love-Love");
    });
    describe("Anotacion del jugador  1",()=>{
        let  tenisScorer = new TenisScorer();
        it("El jugador 1 anota el primer punto",()=>{
            tenisScorer.player1Scores();
            expect(tenisScorer.showScore()).toEqual("15-Love");
        });
        it("El jugador 1 anota el segundo punto",()=>{
            tenisScorer.player1Scores();
            expect(tenisScorer.showScore()).toEqual("30-Love");
        });
        it("El jugador 1 anota el tercer punto",()=>{
            tenisScorer.player1Scores();
            expect(tenisScorer.showScore()).toEqual("40-Love");
        });
    });
    describe("Anotacion del jugador  2",()=>{
        let  tenisScorer = new TenisScorer();
        it("El jugador 2 anota el primer punto",()=>{
            tenisScorer.player2Scores();
            expect(tenisScorer.showScore()).toEqual("Love-15");
        });
        it("El jugador 2 anota el segundo punto",()=>{
            tenisScorer.player2Scores();
            expect(tenisScorer.showScore()).toEqual("Love-30");
        });
        it("El jugador 2 anota el tercer punto",()=>{
            tenisScorer.player2Scores();
            expect(tenisScorer.showScore()).toEqual("Love-40");
        });
    });
    describe("El jugador 1 va ganando al jugador 2, y el jugador 2 tiene 1 punto",()=>{
        let  tenisScorer = new TenisScorer();
        tenisScorer.player1Scores();
        tenisScorer.player2Scores();
        it("El jugador 1 anota el segundo punto y el jugador 2 tiene 1 punto",()=>{
            tenisScorer.player1Scores();
            expect(tenisScorer.showScore()).toEqual("30-15");
        })
        it("El jugador 1 anota el tercer punto y el jugador 2 tiene 1 punto",()=>{
            tenisScorer.player1Scores();
            expect(tenisScorer.showScore()).toEqual("40-15");
        })
    });
    describe("El jugador 1 va ganando al jugador 2, y el jugador 2 tiene 2 puntos",()=>{
        let  tenisScorer = new TenisScorer();
        tenisScorer.player1Scores();
        tenisScorer.player1Scores();
        tenisScorer.player2Scores();
        tenisScorer.player2Scores();
        it("El jugador 1 anota el tercer punto y el jugador 2 tiene 2 puntos",()=>{
            tenisScorer.player1Scores();
            expect(tenisScorer.showScore()).toEqual("40-30");
        })
    });
});