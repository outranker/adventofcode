class DoublyLinkedListNode {
    val: number;
    prev: DoublyLinkedListNode | null;
    next: DoublyLinkedListNode | null;
    constructor(n: number) {
        this.val = n;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    linkedList: DoublyLinkedListNode;
    constructor(dList: DoublyLinkedListNode) {
        this.linkedList = dList;
    }

    insertToEnd(num: number) {
        let curr = this.linkedList;
        while (curr.next !== null) {
            curr = curr.next;
        }
        const newNode = new DoublyLinkedListNode(num);
        curr.next = newNode;
        newNode.prev = curr;
        curr = curr.next;
    }

    insertToFront(num: number) {
        const newNode = new DoublyLinkedListNode(num);
        newNode.next = this.linkedList;
        this.linkedList.prev = newNode;
        this.linkedList = newNode;
    }

    deleteTheTail() {
        let c = this.linkedList;
        while (c.next !== null) c = c.next;
        if (c.prev && c.prev.next) {
            c.prev.next = null;
        }
    }

    deleteTheHead() {
        if (this.linkedList.next) this.linkedList = this.linkedList.next;
        this.linkedList.prev = null;
    }

    get(index: number): number {
        let i = 0;
        let c = this.linkedList;
        while (c.next !== null) {
            if (i === index) return c.val ?? -1;
            c = c.next;
            i++;
        }
        if (i === index) {
            return c.val ?? -1;
        }
        return -1;
    }

    addAtIndex(index: number, val: number): void {
        if (index === 0) {
            this.addAtHead(val);
            return;
        }
        let i = 0;
        let c = this.linkedList;

        while (c.next !== null) {
            if (index === i) break;
            c = c.next;
            i++;
        }

        if (i !== index) return;

        const newNode = new DoublyLinkedListNode(val);
        const t = c.prev;
        c.prev = newNode;
        newNode.next = c;
        t!.next = newNode;
    }

    deleteAtIndex(index: number): void {
        if (index === 0) {
            this.deleteTheHead();
            return;
        }
        let i = 0;
        let c = this.linkedList;

        while (c.next !== null) {
            if (index === i) break;
            c = c.next;
            i++;
        }

        if (i !== index) return;

        if (c.next === null) {
            this.deleteTheTail();
            return;
        }

        const next = c.next;
        c.prev!.next = next;
        next.prev = c;
    }

    printAsArray() {
        const arr = [];
        let c = this.linkedList;
        while (c.next !== null) {
            if (c?.val !== null) {
                arr.push(c.val);
            }
            c = c.next;
        }

        if (c.val !== null) arr.push(c.val);
        console.log(arr);
    }
    addAtHead(val: number): void {
        const newNode = new DoublyLinkedListNode(val);
        newNode.next = this.linkedList;
        this.linkedList.prev = newNode;
        this.linkedList = newNode;
    }
}

const n = new DoublyLinkedListNode(1);
const l = new DoublyLinkedList(n);

l.insertToEnd(3);
l.insertToEnd(5);
l.insertToEnd(7);
l.insertToEnd(10);
l.insertToFront(0);
// console.log(l.linkedList);
// l.printAsArray();

// l.deleteTheTail();
// l.deleteTheTail();

// l.deleteTheHead();
// l.deleteTheHead();

// console.log(l.linkedList);
// l.printAsArray();

// console.log(l.get(0));

const n2 = new DoublyLinkedListNode(2);
const l2 = new DoublyLinkedList(n2);

l2.insertToEnd(3);
l2.insertToEnd(6);
l2.insertToEnd(8);

// l2.printAsArray();
// l2.addAtIndex(0, 4);
// l2.printAsArray();

l2.printAsArray();
l2.deleteAtIndex(1);
l2.printAsArray();
