export class Fizz {
    do(digit: number) {
        return digit % 3 == 0 ? "Fizz" : digit.toString();
    }
}

describe('FizzBuzzKata test', () => {
    it("should give output number as string", () => {
        expect("4").toBe("4");
    });

    it("should give Fizz if multiples of three", () => {
        expect(new Fizz().do(3)).toBe("Fizz");
    });

    it("should give Buzz if multiples of five", () => {
        expect(new Fizz().do(3)).toBe("Buzz");
    });
})