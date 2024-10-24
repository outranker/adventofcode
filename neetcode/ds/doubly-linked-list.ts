export class DoublyLinkedList {
    val: number;
    prev: DoublyLinkedList | null;
    next: DoublyLinkedList | null;
    constructor(n: number) {
        this.val = n;
        this.prev = null;
        this.next = null;
    }

    append(val: number) {
        const n = new DoublyLinkedList(val);
        let c = this.next;
        if (c === null) {
            this.next = n;
            n.prev = this;
            return;
        }
        while (c.next !== null) {
            c = c.next;
        }
        c.next = n;
        n.prev = c;
    }
    prepend(val: number) {
        const n = new DoublyLinkedList(this.val);
        n.next = this.next;
        if (this.next) this.next.prev = n;
        this.val = val;
        this.next = n;
        n.prev = this;
    }
    insertAt(value: number, index: number) {
        let counter = 0;
        let c = this.next;
        while (c !== null) {
            if (index === counter) break;
            c = c.next;
            counter++;
        }
        if (counter !== index) {
            const n = new DoublyLinkedList(value);
            c!.next = n;
            n.prev = c;
            return;
        }
        const prev = c!.prev;
        const n = new DoublyLinkedList(value);
        n.next = c;
        prev!.next = n;
    }
    reverse() {
        let newList = new DoublyLinkedList(this.val);
        let next = this.next;
        while (next !== null) {
            const t = newList;
            newList = new DoublyLinkedList(next.val);
            newList.next = t;
            next = next.next;
        }
        this.val = newList.val;
        this.next = newList.next;
    }
    toArrOfObjects() {
        let c = new DoublyLinkedList(this.val);
        c.next = this.next;
        const arr = [];
        while (c.next !== null) {
            arr.push({ curr: c.val, prev: c?.prev?.val, next: c?.next?.val });
            c = c.next;
        }

        arr.push({ curr: c.val, prev: c?.prev?.val, next: (c!.next as unknown as DoublyLinkedList)?.val });
        console.log(arr);
    }
}

const dl = new DoublyLinkedList(1);
dl.append(2);
dl.append(3);
dl.append(4);
dl.prepend(0);
dl.reverse();

console.log(dl.toArrOfObjects());
// console.log(dl);
