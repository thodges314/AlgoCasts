// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }

  static;
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let j = 0;
    let crawlNode = this.head;
    while (crawlNode) {
      j++;
      crawlNode = crawlNode.next;
    }
    return j;
  }
  getFirst() {
    return this.head;
  }

  getLast() {
    let lastNode = this.head;
    while (lastNode?.next) {
      lastNode = lastNode.next;
    }
    return lastNode;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    let lastNode = this.head;
    if (!lastNode) return;
    if (!lastNode.next) this.head = null;
    while (lastNode.next)
      lastNode.next.next ? (lastNode = lastNode.next) : (lastNode.next = null);
  }

  insertLast(data) {
    const lastNode = this.getLast();
    if (lastNode) {
      lastNode.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(idx) {
    let cnt = 0;
    let returnNode = this.head;
    while (cnt < idx && returnNode?.next) {
      returnNode = returnNode.next;
      cnt++;
    }
    if (cnt !== idx) return null;
    return returnNode;
  }

  removeAt(idx) {
    if (!!this.head) {
      if (idx === 0) {
        this.removeFirst();
      } else {
        const precedingNode = this.getAt(idx - 1);
        if (!!precedingNode) precedingNode.next = precedingNode.next?.next;
      }
    }
  }

  insertAt(data, idx) {
    if (idx === 0) {
      this.insertFirst(data);
    } else {
      const precedingNode = this.getAt(idx - 1);
      if (!!precedingNode) {
        const newNode = new Node(data, precedingNode.next);
        precedingNode.next = newNode;
      } else this.insertLast(data);
    }
  }

  forEach(fcn) {
    let currentNode = this.head;
    while (!!currentNode) {
      fcn(currentNode);
      currentNode = currentNode.next;
    }
  }
}

module.exports = { Node, LinkedList };
