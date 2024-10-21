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
        // console.log("GET>>", index);
        while (c.next !== null) {
            if (i === index) {
                // console.log(">>>>>>>>>>> ", i);
                // console.log(">>>>>>>>>>>.", c);
                return c.val ?? -1;
            }
            c = c.next;
            // console.log(">>>>>>", c.val);
            i++;
        }
        if (i === index) {
            return c.val ?? -1;
        }
        return -1;
    }

    addAtHead(val: number): void {
        if (this.list.val === null) {
            this.list = new DoublyLinkedListNode(val);
            return;
        }
        const newNode = new DoublyLinkedListNode(val);
        newNode.next = this.list;
        this.list.prev = newNode;
        this.list = newNode;
    }

    addAtTail(val: number): void {
        if (this.list.val === null) {
            this.list = new DoublyLinkedListNode(val);
            return;
        }
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
        if (this.list.val === null) {
            if (index === 0) {
                this.list = new DoublyLinkedListNode(val);
                return;
            }
        }

        if (index === 0) {
            this.addAtHead(val);
            return;
        }

        let i = 0;
        let c = this.list;
        let l = 0;

        while (c.next !== null) {
            if (index === i) break;
            c = c.next;
            i++;
            l++;
        }

        if (i !== index && i + 1 === index) {
            this.addAtTail(val);
            return;
        }
        if (i !== index) return;

        const newNode = new DoublyLinkedListNode(val);
        // console.log(">>>>>>>>>>.", c.val);

        const prev = c.prev;
        prev!.next = newNode;
        newNode.prev = prev;
        newNode.next = c;
        c.prev = newNode;

        // const t = c.next;
        // c.next = newNode;
        // newNode.prev = c;
        // newNode.next = t;
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

const mll = new MyLinkedList();

// [
//     "MyLinkedList",
//     "addAtHead",
//     "addAtHead",
//     "addAtHead",
//     "addAtIndex",
//     "deleteAtIndex",
//     "addAtHead",
//     "addAtTail",
//     "get",
//     "addAtHead",
//     "addAtIndex",
//     "addAtHead",
// ]
// [([], [7], [2], [1], [3, 0], [2], [6], [4], [4], [4], [5, 0], [6])];

mll.addAtHead(7);
// printAsArray(mll.list);
mll.addAtHead(2);
// printAsArray(mll.list);
mll.addAtHead(1);
// printAsArray(mll.list);
mll.addAtIndex(3, 0);
// printAsArray(mll.list);
mll.deleteAtIndex(2);
// printAsArray(mll.list);
mll.addAtHead(6);
// printAsArray(mll.list);
mll.addAtTail(4);
// printAsArray(mll.list);
// printAsArray(mll.list);
if (mll.get(4) === 4) console.log("mll SUCCESS");
mll.addAtHead(4);
mll.addAtIndex(5, 0);
mll.addAtHead(6);

// ["MyLinkedList","addAtIndex","addAtIndex","addAtIndex","get"]
// [[],[0,10],[0,20],[1,30],[0]]

const mll2 = new MyLinkedList();
mll2.addAtIndex(0, 10);
printAsArray(mll2.list);
mll2.addAtIndex(0, 20);
printAsArray(mll2.list);
mll2.addAtIndex(1, 30);
printAsArray(mll2.list);
console.log(mll2.get(0));

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

function printAsArray(l: any) {
    const arr = [];
    let c = l;
    while (c.next !== null) {
        if (c?.val !== null) {
            arr.push(c.val);
        }
        c = c.next;
    }

    if (c.val !== null) arr.push(c.val);
    console.log(arr);
}
