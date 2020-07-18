import { addPoly, Node, testAddPoly } from "./utils";

describe("-->test Node class", () => {
  describe("add method", () => {
    it("Value of poly1.element should be equal to [5, 3], Value of poly1.next.element should be equal to [-4, -4]", () => {
      const poly1 = new Node();
      poly1.add([5, 3], [-4, -4]);
      expect(poly1.element).toEqual([5, 3]);
      expect(poly1.next.element).toEqual([-4, -4]);
    });
  });
  describe("printList method", () => {
    it("should output: 5x^3 + 4x^2 + 2x^0 + (-4x^(-2)) + (-4x^(-4))", () => {
      const poly1 = new Node();
      poly1.add([5, 3], [4, 2], [2, 0], [-4, -2], [-4, -4]);
      expect(poly1.printList()).toBe(
        "5x^3 + 4x^2 + 2x^0 + (-4x^(-2)) + (-4x^(-4))"
      );
    });
  });
});

describe("-->test addPoly", () => {
  it("should output: 5x^3 + 4x^2 + 5x^1 + 7x^0 + (-4x^(-4))", () => {
    const poly1 = new Node();
    poly1.add([5, 1], [5, 0], [4, -2]);
    const poly2 = new Node();
    poly2.add([5, 3], [4, 2], [2, 0], [-4, -2], [-4, -4]);

    const result = addPoly(poly1, poly2);
    expect(result.printList()).toBe("5x^3 + 4x^2 + 5x^1 + 7x^0 + (-4x^(-4))");
  });

  it("should output: 5x^3 + 5x^1 + 5x^0 + 8x^(-2) + 5x^(-3) + 1x^(-4)", () => {
    const poly1 = new Node();
    poly1.add([5, 1], [5, 0], [4, -2], [2, -3], [1, -4]);
    const poly2 = new Node();
    poly2.add([5, 3], [4, -2], [3, -3]);

    const result = addPoly(poly1, poly2);
    expect(result.printList()).toBe(
      "5x^3 + 5x^1 + 5x^0 + 8x^(-2) + 5x^(-3) + 1x^(-4)"
    );
  });
});

describe("-->test testAddPoly", () => {
  it("Should output 5x^3 + 4x^2 + 5x^1 + 7x^0", () => {
    expect(testAddPoly()).toEqual("5x^3 + 4x^2 + 5x^1 + 7x^0");
  });
});
