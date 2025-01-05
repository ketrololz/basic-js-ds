const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = new ListNode(value)

    if (!this.tail) {
      this.tail = newNode;
    } else {
      const prevTail = this.tail;

      prevTail.next = newNode;
      this.tail = newNode 
    }

    if (!this.head) {
      this.head = newNode;
    }
  }

  dequeue() {
    if (!this.head) {
      return null;
    }
    
    const deletedNode = this.head;
    this.head = deletedNode.next;
    return deletedNode.value;
  }
}

module.exports = {
  Queue
};
