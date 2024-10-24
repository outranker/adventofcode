export class SinglyLinkedList {
    val: number;
    next: SinglyLinkedList | null;
    constructor(n: number) {
        this.val = n;
        this.next = null;
    }
    append(val: number) {
        if (this.val === null) {
            this.val = val;
            return;
        }
        const n = new SinglyLinkedList(val);
        if (this.next === null) {
            this.next = n;
            return;
        }
        let c = this.next;
        while (c.next !== null) {
            c = c.next;
        }
        c.next = n;
    }
    prepend(val: number) {
        const n = new SinglyLinkedList(this.val);
        n.next = this.next;
        this.val = val;
        this.next = n;
    }
    reverse() {
        let newList = new SinglyLinkedList(this.val);
        let next = this.next;

        while (next !== null) {
            const t = newList;
            newList = new SinglyLinkedList(next.val);
            newList.next = t;
            next = next.next;
        }
        this.val = newList.val;
        this.next = newList.next;
    }
    isEmpty() {
        if (this.val === null) return false;
        return true;
    }
}

const l = new SinglyLinkedList(1);
l.append(2);
l.append(3);
l.append(4);
l.prepend(0);
l.reverse();

console.log(l);
