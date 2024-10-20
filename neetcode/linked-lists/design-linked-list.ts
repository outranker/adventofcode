class DoublyLinkedListNode {
    val: number | null;
    prev: DoublyLinkedListNode | null;
    next: DoublyLinkedListNode | null;
    constructor(n: number | null) {
        this.val = n;
        this.prev = null;
        this.next = null;
    }
}

class MyLinkedList {
    list: DoublyLinkedListNode;
    constructor() {
        this.list = new DoublyLinkedListNode(null);
    }

    get(index: number): number {
        let i = 0;
        let c = this.list;
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

    addAtHead(val: number): void {
        const newNode = new DoublyLinkedListNode(val);
        newNode.next = this.list;
        this.list.prev = newNode;
        this.list = newNode;
    }

    addAtTail(val: number): void {
        let curr = this.list;
        while (curr.next !== null) {
            curr = curr.next;
        }
        const newNode = new DoublyLinkedListNode(val);
        curr.next = newNode;
        newNode.prev = curr;
        curr = curr.next;
    }

    addAtIndex(index: number, val: number): void {
        let i = 0;
        let c = this.list;

        while (c.next !== null) {
            if (index === i) break;
            c = c.next;
            i++;
        }

        if (i !== index) return;

        const newNode = new DoublyLinkedListNode(val);

        newNode.prev = c.prev;
        newNode.next = c;
        c = newNode;
        this.list = c;
    }

    deleteAtIndex(index: number): void {
        if (index === 0) {
            this.deleteTheHead();
            return;
        }
        let i = 0;
        let c = this.list;

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

    deleteTheHead() {
        if (this.list.next) this.list = this.list.next;
        this.list.prev = null;
    }

    deleteTheTail() {
        let c = this.list;
        while (c.next !== null) c = c.next;
        if (c.prev && c.prev.next) {
            c.prev.next = null;
        }
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
