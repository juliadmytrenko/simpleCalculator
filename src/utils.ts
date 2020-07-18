// Linked List implementation

type PolyElement = [number, number];

export interface Node {
  element: PolyElement | null;
  next: Node | null;
}

export class Node {
  constructor(element?: PolyElement) {
    this.element = element ?? null;
    this.next = null;
  }

  // adds an element at the end
  // of list
  add(...args: [PolyElement, ...PolyElement[]]) {
    for (let i = 0; i < args.length; ++i) {
      // creates a new node
      const node = new Node(args[i]);

      // to store current node
      let current;

      // if list is Empty add the
      // element and make it head
      if (this.element === null) this.element = node.element;
      else {
        current = this;

        // iterate to the end of the
        // list
        while (current.next) {
          current = current.next;
        }

        // add node
        current.next = node;
      }
    }
  }

  // Helper Methods

  // prints the list items
  printList() {
    let curr: Node = this;
    let str = "";
    while (curr && curr.element) {
      if (curr.element[0] === 0) curr = curr.next;

      let pow: string = curr.element[1].toString();
      if (+pow < 0) pow = "(" + pow + ")";

      if (curr.element[0] < 0) {
        str += "(" + curr.element[0] + "x^" + pow + ") + ";
      } else {
        str += curr.element[0] + "x^" + pow + " + ";
      }
      curr = curr.next;
    }
    console.log(str.slice(0, -3));
    return str.slice(0, -3);
  }
}

// Adds two polynomials and returns the result.
// For this function to add polynomials properly:
// - expressions of each polynomial must be ordered from the greatest power to the lowest power
// e.g. `[5,4],[3,3],[7,2],[10,0],[2,-1]`  // OK
//      `[5,3],[3,4],[7,2]`               // WRONG (should be `[3,4],[5,3],[7,2]`)
// - expressions in single polynomial must not be duplicated
// e.g. `[5,4],[5,4],[5,4]` // WRONG (the coefficients of duplicates will not sum up)
export const addPoly = (poly1: Node, poly2: Node) => {
  const result = new Node();
  add(poly1, poly2, result);
  return result;
};

const add = (poly1: Node, poly2: Node, resultPoly: Node) => {
  while (poly1 && poly2) {
    // If power of 1st polynomial is greater then 2nd, then store 1st as it is
    // and move its pointer
    if (poly1.element[1] > poly2.element[1]) {
      resultPoly.element = poly1.element;
      poly1 = poly1.next;
    }

    // If power of 2nd polynomial is greater then 1st, then store 2nd as it is
    // and move its pointer
    else if (poly1.element[1] < poly2.element[1]) {
      resultPoly.element = poly2.element;
      poly2 = poly2.next;
    }

    // If power of both polynomial numbers is same then add their coefficients
    else {
      resultPoly.element = poly1.element;
      resultPoly.element[0] += poly2.element[0];
      poly1 = poly1.next;
      poly2 = poly2.next;
    }
    // Dynamically create new node
    resultPoly.next = new Node();
    resultPoly = resultPoly.next;
    resultPoly.next = null;
  }

  while (poly1 || poly2) {
    if (poly1) {
      resultPoly.element = poly1.element;
      poly1 = poly1.next;
    }
    if (poly2) {
      resultPoly.element = poly2.element;
      poly2 = poly2.next;
    }

    resultPoly.next = new Node();
    resultPoly = resultPoly.next;
    resultPoly.next = null;
  }
};

export const testAddPoly = () => {
  const poly1 = new Node();
  // Creates first polynomial of 5x^3 + 4x^2 + 2x^0
  poly1.add([5, 3], [4, 2], [2, 0]);

  const poly2 = new Node();
  // Creates second polynomial of 5x^1 + 5x^0
  poly2.add([5, 1], [5, 0]);

  poly1.printList();
  poly2.printList();

  const result = addPoly(poly1, poly2);
  // Result in this case should equal to 5x^3 + 4x^2 + 5x^1 + 7x^0
  return result.printList();
};
