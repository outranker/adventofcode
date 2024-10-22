export class DoublyLinkedList {
    val: number;
    prev: DoublyLinkedList | null;
    next: DoublyLinkedList | null;
    constructor(n: number) {
        this.val = n;
        this.prev = null;
        this.next = null;
    }

    append(val: number) {}
    prepend(val: number) {}
    insertAt(value: number, index: number) {}
    removeAt(value: number, index: number) {}
    getAt(index: number) {}
    reverse() {}
    isEmpty() {}
    getHead() {}
    getTail() {}
}
