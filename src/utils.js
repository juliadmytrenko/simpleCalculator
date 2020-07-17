export const convertStringToArrayOfNumbers = (str) => {
  return str.split`,`.map((x) => +x);
};

//[[2,-1],[3,1],5] // = 2x^(-1) + 3x^1 + 5
//[[1,-1], [2,2],[-1,1],[6,3]] // = x^(-1) + 2x^2 - x + 6x^3

// Linked List implementation
class Node {
  constructor(element) {
    this.element = element ?? null;
    this.next = null;
  }

  // adds an element at the end
  // of list
  add() {
    for (var i = 0; i < arguments.length; ++i) {
      // creates a new node
      var node = new Node(arguments[i]);

      // to store current node
      var current;

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
    var curr = this;
    var str = "";
    while (curr && curr.element) {
      if (curr.element[0] === 0) curr = curr.next;

      let pow = curr.element[1];
      if (pow < 0) pow = "(" + pow + ")";

      if (curr.element[0] < 0) {
        str += "(" + curr.element[0] + "x^" + pow + ") + ";
      } else {
        str += curr.element[0] + "x^" + pow + " + ";
      }
      curr = curr.next;
    }
    console.log(str.slice(0, -3));
  }
}

const polyAdd = (poly1, poly2, resultPoly) => {
  if (!poly1.element || !poly2.element) {
    console.log("ERROR: Values of both polynomials must be specified.");
    return;
  }

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

export const addPolynomials = () => {
  var poly1 = new Node();
  // Create first polynomial of 5x^2 + 4x^1 + 2x^0 + (-4x^(-2) + (-4x^(-4))
  poly1.add([5, 3], [4, 2], [2, 0], [-4, -2], [-4, -4]);

  var poly2 = new Node();
  // Create second polynomial of 5x^1 + 5x^0
  poly2.add([5, 1], [5, 0], [4, -2]);

  poly1.printList();
  poly2.printList();
  var result = new Node();
  polyAdd(poly1, poly2, result);
  // Result in this case should equal 5x^2 + 9x^1 + 7x^0
  result.printList();
};
