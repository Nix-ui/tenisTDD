import { showScore } from "./tennisScorer.js";

describe("Tennis Scorer",()=>{
    it("El partido inicia  0-0",()=>{
        expect(showScore()).toEqual("Love-Love");
    });
    it("El jugador 1 anota el primer punto",()=>{
        expect(showScore(1,0)).toEqual("15-Love");
    });
    it("El jugador 1 anota el segundo punto",()=>{
        expect(showScore(2,0)).toEqual("30-Love");
    });
    it("El jugador 1 anota el tercer punto",()=>{
        expect(showScore(3,0)).toEqual("40-Love");
    });
});