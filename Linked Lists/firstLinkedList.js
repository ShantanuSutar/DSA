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

    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(9);
myLinkedList.printList();
//myLinkedList.insert(2, 99);
//console.log(myLinkedList);