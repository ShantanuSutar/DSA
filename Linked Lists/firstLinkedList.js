// 9 -->  10 --> 99 --> 5  --> 16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }



class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return console.log(this);
    }


    prepend(value) {
        const newNode = {
            value: value,
            next: null
        };
        //   this.head.next = this.head;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return console.log(this);
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return console.log(array);
    };
    insert(index, value) {
        //check params
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        if (index >= this.length) {
            this.append(value);
            return this.printList();
        }
        const newNode = {
            value: value,
            next: null
        };
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }
    traverseToIndex(index) {
        //check params 
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(9);
myLinkedList.insert(3, 99);
myLinkedList.insert(30, 88);
myLinkedList.insert(0, 7);

//myLinkedList.printList();

//console.log(myLinkedList);