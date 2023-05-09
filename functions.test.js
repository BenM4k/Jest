const  { stringLength, reverseString, Operation, capitalize } = require('./functions');

it("Test 1", () => {
    expect(
        stringLength("ben")
    ).toBe(3)
})

it("Test 2", () => {
    expect(
        stringLength("tastfullysad")
    ).toBe(false)
})

it ("Test 3", () =>{
    expect(
        reverseString("ben")
    ).toBe("neb")
})

describe("Math", () =>{
    beforeEach(() =>{
        operation = new Operation()
    });

    test('add numbers', () =>{
        expect(operation.add(4, 2)).toBe(6)
    });
    test('subtract numbers', () =>{
        expect(operation.subtract(4, 2)).toBe(2)
    });
    test('divide numbers', () =>{
        expect(operation.divide(4, 2)).toBe(2)
    });
    test('multiply numbers', () =>{
        expect(operation.multiply(4, 2)).toBe(8)
    });
})

it ("Test 4", () =>{
    expect(
        capitalize("ben")
    ).toBe("Ben")
})