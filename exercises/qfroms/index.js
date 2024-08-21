// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const defined = (itm) => itm !== undefined;

const Stack = require('./stack');

class Queue {
  constructor() {
    this._instack = new Stack();
    this._outstack = new Stack();
  }

  _outstackEmpty() {
    return !defined(this._outstack.peek());
  }

  _loadOutstack() {
    if (this._outstackEmpty())
      while (defined(this._instack.peek())) {
        this._outstack.push(this._instack.pop());
      }
  }

  add(itm) {
    this._instack.push(itm);
  }

  remove() {
    this._loadOutstack();
    return this._outstack.pop();
  }

  peek() {
    this._loadOutstack();
    return this._outstack.peek();
  }
}

module.exports = Queue;
