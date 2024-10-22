export class SinglyLinkedList {
    list: SinglyLinkedList | null;
    val: number;
    next: SinglyLinkedList | null;
    constructor(n: number) {
        this.val = n;
        this.next = null;
        this.list = null;
    }
    append(val: number) {
        if (this.list === null) {
            this.list = new SinglyLinkedList(val);
        } else {
            let c = this.list;
            const n = new SinglyLinkedList(val);
            while (c.next !== null) {
                c = c.next;
            }
            c.next = n;
        }
    }
    prepend(val: number) {
        if (this.list === null) {
            this.list = new SinglyLinkedList(val);
        } else {
            const n = new SinglyLinkedList(val);
            n.next = this.list;
            this.list = n;
        }
    }
    /**
     * @description if index doesn't exist appends to the tail of list
     */
    insertAt(value: number, index: number) {
        let i = 0;
        if (this.list === null) {
            this.list = new SinglyLinkedList(value);
            return;
        }
        if (this.list.next === null) {
            this.list.next = new SinglyLinkedList(value);
            return;
        }
        let c = this.list;
        while (c.next !== null) {
            i++;
            c = c.next;

            if (i === index - 1) {
                const t = c.next;
                c.next = new SinglyLinkedList(value);
                c.next.next = t;
                return;
            }
        }
        c.next = new SinglyLinkedList(value);
        return;
    }
    removeAt(value: number, index: number) {}
    getAt(index: number) {}
    reverse() {}
    isEmpty() {}
}
