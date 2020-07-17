import { addPoly, Node } from "./utils";

describe("Node class", () => {
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
      // Create first polynomial of 5x^2 + 4x^1 + 2x^0 + (-4x^(-2) + (-4x^(-4))
      poly1.add([5, 3], [4, 2], [2, 0], [-4, -2], [-4, -4]);
      expect(poly1.printList()).toBe(
        "5x^3 + 4x^2 + 2x^0 + (-4x^(-2)) + (-4x^(-4))"
      );
    });
  });
});

// pozniejsze testy
//   it("should output: 5x^2 + 9x^1 + 7x^0", () => {
//     const poly1 = new Node();
//     // Create first polynomial of 5x^2 + 4x^1 + 2x^0 + (-4x^(-2) + (-4x^(-4))
//     poly1.add([5, 3], [4, 2], [2, 0], [-4, -2], [-4, -4]);
//     const poly2 = new Node();
//     // Create second polynomial of 5x^1 + 5x^0
//     poly2.add([5, 1], [5, 0], [4, -2]);

//     const result = addPoly(poly1, poly2);
//     // Result in this case should equal 5x^2 + 9x^1 + 7x^0
//     expect(result.printList()).toBe("5x^3 + 4x^2 + 5x^1 + 7x^0 + (-4x^(-4))");
//   });
