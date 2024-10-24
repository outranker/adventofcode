class Node {
    val: number;
    prev: MyLinkedList | null;
    next: MyLinkedList | null;
    constructor(n: number) {
        this.val = n;
        this.prev = null;
        this.next = null;
    }
}
class MyLinkedList {
    head: Node | null;
    tail: Node | null;
    size: number;
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }
    get(index: number) {
        if (index === 0 && this.val !== null) {
            return this.val;
        }
        if (index === 0 && this.val === null) {
            return -1;
        }
        let c = this.next;
        let counter = 1;
        while (c !== null) {
            if (index === counter) break;
            c = this.next;
            counter++;
        }
        if (c === null) return -1;
        return c.val;
    }
    addAtHead(val: number) {
        if (this.val === null) {
            this.val = val;
            return;
        }

        const newList = new MyLinkedList(val);
        this.prev = newList;
        newList.next = this;
        this.head = this;
    }
    addAtTail(val: number) {}
    addAtIndex() {}
    deleteAtIndex() {}
    toArrOfObjects() {
        let c = new MyLinkedList(this.val!);
        c.next = this.next;
        const arr = [];
        while (c.next !== null) {
            arr.push({ curr: c.val, prev: c?.prev?.val, next: c?.next?.val });
            c = c.next;
        }

        arr.push({ curr: c.val, prev: c?.prev?.val, next: (c!.next as unknown as MyLinkedList)?.val });
        console.log(arr);
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
mll.addAtHead(2);
mll.addAtHead(1);
// mll.addAtIndex(3, 0);
// mll.deleteAtIndex(2);
mll.addAtHead(6);
mll.addAtTail(4);
// if (mll.get(4) === 4) console.log("mll SUCCESS");
mll.addAtHead(4);
// mll.addAtIndex(5, 0);
mll.addAtHead(6);
console.log(mll);
mll.toArrOfObjects();

// ["MyLinkedList","addAtIndex","addAtIndex","addAtIndex","get"]
// [[],[0,10],[0,20],[1,30],[0]]

// const mll2 = new MyLinkedList();
// mll2.addAtIndex(0, 10);
// printAsArray(mll2.list);
// mll2.addAtIndex(0, 20);
// printAsArray(mll2.list);
// mll2.addAtIndex(1, 30);
// printAsArray(mll2.list);
// console.log(mll2.get(0));

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
