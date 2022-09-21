class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return console.log(this.first);
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return console.log(this);
    }
    dequeue() {
        if (!this.length) {
            return console.log(null);
        }
        if (this.first === this.last) {
            this.last = null;
        }
        //      const holdingPointer = this.first;
        this.first = this.first.next;
        this.length--;
        return console.log(this);
    }
    //isEmpty;
}

const myQueue = new Queue();
myQueue.enqueue('Joy')
myQueue.enqueue('Matt')
myQueue.enqueue('Pavel')
myQueue.enqueue('Samir');
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();

  //Joy
  //Matt
  //Pavel
  //Samir
