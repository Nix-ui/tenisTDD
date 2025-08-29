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
    });
});