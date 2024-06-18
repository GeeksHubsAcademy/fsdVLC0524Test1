//Importo mis funciones a testear
const { add, subs, mult } = require("./operations");
/////////////////////////////////

describe("basic test", () => {
  test("it sums integers", () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });
  test("it sums big integers", () => {
    // console.log(Number.MAX_SAFE_INTEGER);

    const result = add(9007199254740991, 1);
    expect(result).toBe(9007199254740992);
  });
  test("it sums negative integers", () => {
    const result = add(10, -2);
    expect(result).toBe(8);
  });
  test("it sums 0", () => {
    const random = Math.random();
    const result = add(random, 0);
    expect(result).toBe(random);
  });
});
