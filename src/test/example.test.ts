export class Fizz {
    do(digit: number) {
        if (this.isDivisible3and5(digit))
            return "FizzBuzz";
        if (this.isDivisibleBy3(digit))
            return "Fizz";
        if (this.isDivisbleBy5(digit))
            return "Buzz";

        return digit.toString();
    }

    private isDivisbleBy5(digit: number) {
        return digit % 5 == 0;
    }

    private isDivisibleBy3(digit: number) {
        return digit % 3 == 0;
    }

    private isDivisible3and5(digit: number) {
        return digit % 3 == 0 && digit % 5 == 0;
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
        expect(new Fizz().do(5)).toBe("Buzz");
    });

    it("should give FizzBuzz if multiples of three and five", () => {
        expect(new Fizz().do(15)).toBe("FizzBuzz");
    });

    it.each([[2, "2"], [4,"4"], [6,"Fizz"], [15,"FizzBuzz"]])("should take %i and give %s", (x,zx) => {
        expect(new Fizz().do(x)).toBe(zx);
    });
})