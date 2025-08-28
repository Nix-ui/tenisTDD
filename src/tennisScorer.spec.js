import { showScore } from "./tennisScorer.js";

describe("Tennis Scorer",()=>{
    it("El partido inicia  0-0",()=>{
        expect(showScore()).toEqual("Love-Love");
    });
});