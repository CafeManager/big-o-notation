/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);
    this.size += 1;

    if(this.first == null){
      this.first = newNode;
      this.last = newNode;
      return;
    }
    
    this.last.next = newNode;
    this.last = this.last.next;
    return;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    let removedNode;
    this.size -= 1;
    if(this.first == this.last){
      removedNode = this.first.val;
      this.first = null;
      this.last = null;
    } else {
      removedNode = this.first.val;
      this.first = this.first.next;
    }
    return removedNode;

  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(this.size > 0 ){
      return false;
    } else { 
      return true;
    }
  }
}

module.exports = Queue;
