export const convertStringToArrayOfNumbers = (str) => {
  return str.split`,`.map((x) => +x);
};

export const addTwoExpressions = (A, B) => {
  const m = A.length;
  const n = B.length;

  const size = Math.max(m, n);
  const sum = new Array(size);
  for (let i = 0; i < size; ++i) sum[i] = 0;
  for (let i = 0; i < m; ++i) sum[i] = A[i];
  for (let i = 0; i < n; ++i) sum[i] += B[i];

  return sum;
};

//[[2,-1],[3,1],5] // = 2x^(-1) + 3x^1 + 5
//[[1,-1], [2,2],[-1,1],[6,3]] // = x^(-1) + 2x^2 - x + 6x^3
export const testLinkedList = () => {
  // creating an object for the
  // Linkedlist class
  var ll = new LinkedList();

  // testing isEmpty on an empty list
  // returns true
  console.log(ll.isEmpty());

  // adding element to the list
  ll.add([10, 5]);

  // prints 10
  ll.printList();

  // returns 1
  console.log(ll.size_of_list());

  // adding more elements to the list
  ll.add([20, 4]);
  ll.add([30, 6]);
  ll.add([40, 7]);
  ll.add([50, 2]);

  // returns 10 20 30 40 50
  ll.printList();

  // prints 10 20 30 40
  ll.printList();

  // insert 60 at second position
  // ll contains 10 20 60 30 40
  ll.insertAt([60, 4], 2);

  ll.printList();

  // returns false
  console.log("is List Empty ? " + ll.isEmpty());

  // remove 3rd element from the list
  console.log("remove from index 3: ", ll.removeFrom(3));

  // prints 10 20 60 40
  ll.printList();
};

// Linked List implementation

// User defined class node
class Node {
  // constructor
  constructor(element) {
    this.element = element;
    // this.coeff = element[0];
    // this.pow = element[1];
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
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
      if (this.head == null) this.head = node;
      else {
        current = this.head;

        // iterate to the end of the
        // list
        while (current.next) {
          current = current.next;
        }

        // add node
        current.next = node;
      }
      this.size++;
    }
  }
  // insert element at the position index
  // of the list
  insertAt(element, index) {
    if (index > 0 && index > this.size) return false;
    else {
      // creates a new node
      var node = new Node(element);
      var curr, prev;

      curr = this.head;

      // add the element to the
      // first index
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        var it = 0;

        // iterate over the list to find
        // the position to insert
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // adding an element
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }
  // removes an element from the
  // specified location
  removeFrom(index) {
    if (index > 0 && index > this.size) return -1;
    else {
      var curr,
        prev,
        it = 0;
      curr = this.head;
      prev = curr;

      // deleting first element
      if (index === 0) {
        this.head = curr.next;
      } else {
        // iterate over the list to the
        // position to removce an element
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // remove the element
        prev.next = curr.next;
      }
      this.size--;

      // return the remove element
      return curr.element;
    }
  }
  // removes a given element from the
  // list

  // Helper Methods
  // isEmpty
  // size_Of_List
  // PrintList

  // finds the index of element

  // checks the list for empty
  isEmpty() {
    return this.size == 0;
  }

  // gives the size of the list
  size_of_list() {
    return this.size;
  }

  // prints the list items
  printList() {
    var curr = this.head;
    var str = "";
    while (curr) {
      str += curr.element[0] + "x^" + curr.element[1] + " + ";
      curr = curr.next;
    }
    console.log(str.slice(0, -3));
  }
}

const polyAdd = (poly1, poly2, resultPoly) => {
  // while(poly1[0].next )
};

export const zadanie = () => {
  var poly1 = new LinkedList();
  // Create first polunomial of 5x^2 + 4x^1 + 2x^0
  poly1.add([5, 2], [4, 1], [2, 0]);

  var poly2 = new LinkedList();
  // Create second polynomial of 5x^1 + 5x^0
  poly2.add([5, 1], [5, 0]);

  poly1.printList();
  poly2.printList();
};
