export class Queue {
  first: any;
  last: any;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value: any) {
    const newNode = { value, next: null };
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    const removedNode = this.first;
    this.first = this.first.next;
    if (this.first === null) {
      this.last = null;
    }
    this.size--;
    return removedNode.value;
  }

  isEmpty() {
    return this.size === 0;
  }
}
