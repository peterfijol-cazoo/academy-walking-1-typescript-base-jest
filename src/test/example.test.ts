import {Example} from "../main/example";

<<<<<<< Updated upstream
describe('FizzBuzzKata test', () => {
    it("should give output number as string", () => {
        expect("4").toBe("4");
=======
describe('test', () => {
    it("should give sum of a + b when adding a and b", () => {
        let example: Example = new Example();
        expect(example.add(1, 2)).toBe(3);
>>>>>>> Stashed changes
    })
})