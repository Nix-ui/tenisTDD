import { TenisScorer} from "./tennisScorer.js";

describe("Tennis Scorer",()=>{
    it("El partido inicia  0-0",()=>{
        let  tenisScorer = new TenisScorer();
        expect(tenisScorer.showScore()).toEqual("Love-Love");
    });
    it("El jugador 1 anota el primer punto",()=>{
        let  tenisScorer = new TenisScorer();
        tenisScorer.player1Scores();
        expect(tenisScorer.showScore()).toEqual("15-Love");
    });
    it("El jugador 1 anota el segundo punto",()=>{
        let  tenisScorer = new TenisScorer();
        tenisScorer.player1Scores();
        tenisScorer.player1Scores();
        expect(tenisScorer.showScore()).toEqual("30-Love");
    });
    it("El jugador 1 anota el tercer punto",()=>{
        let  tenisScorer = new TenisScorer();
        tenisScorer.player1Scores();
        tenisScorer.player1Scores();
        tenisScorer.player1Scores();
        expect(tenisScorer.showScore()).toEqual("40-Love");
    });
});