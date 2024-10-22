import { assert } from "../../util/assert.mts";

class Node {
    val: number | null;
    next: Node | null;
    constructor(n: number) {
        this.val = n;
        this.next = null;
    }
}

class List {
    queue: Node | null;
    queueSize: number;
    constructor(q: Node) {
        this.queue = q;
        this.queueSize = 1;
    }
    // add to the end of the list aka arr.push()
    enqueue(val: number) {
        const n = new Node(val);
        if (this.isEmpty()) {
            this.queue = n;
            this.increaseSize();
            return this.queue;
        } else {
            let c = this.queue as Node;
            while (c.next !== null) {
                c = c.next;
            }
            c.next = n;
            this.increaseSize();
            return c.next;
        }
    }

    // remove from the front of the list aka 0th index aka arr.shift()
    dequeue() {
        if (this.queueSize === 1) {
            const t = this.queue;
            this.queue = null;
            this.decrementSize();
            return t;
        }
        if (this.queueSize === 0) {
            return null;
        }

        const t = this.queue;
        this.queue = this.queue!.next as Node;
        this.decrementSize();
        return t;
    }

    // return the 0th index node
    peek() {
        if (this.queue === null) return null;
        if (!this.isEmpty()) return this.queue.val as number;
    }

    // return true if queue is empty
    isEmpty(): boolean {
        if (this.queue === null) return true;
        if (this.queue.val === null) return true;
        return false;
    }

    // get/set the size of the queueu
    getSize() {
        return this.queueSize;
    }
    decrementSize() {
        this.queueSize--;
    }
    increaseSize(val?: number) {
        if (val === undefined) this.queueSize++;
        else this.queueSize += val;
    }

    // remove all elements from the queue
    clear() {
        this.queue = null;
    }

    toArray() {
        let c = this.queue;
        const arr: number[] = [];
        if (this.isEmpty()) return arr;
        while (c?.next !== null) {
            arr.push(c!.val as number);
            c = c!.next;
        }
        arr.push(c!.val as number);
        return arr;
    }

    static fromArray(arr: number[]) {
        let n: Node | null = null;
        let l: List | null = null;
        for (const el of arr) {
            if (l === null) {
                n = new Node(el);
                l = new List(n);
            } else {
                l.enqueue(el);
            }
        }
        return l;
    }
}

function countStudents(students: number[], sandwiches: number[]): number {
    const studentsList = List.fromArray(students);
    const sandwichesList = List.fromArray(sandwiches);

    if (studentsList === null) return 0;
    if (sandwichesList === null) return studentsList.getSize() ?? 0;
    let count = 0;
    let limit = studentsList.getSize();

    while (!studentsList.isEmpty()) {
        if (studentsList.peek() === null) {
            return 0;
        }
        if (sandwichesList === null || sandwichesList.peek() === null) {
            return studentsList.getSize();
        }

        if (studentsList.peek() === sandwichesList.peek()) {
            studentsList.dequeue();
            sandwichesList.dequeue();
            count = 0;
            limit = studentsList.getSize();
        } else {
            const pVal = studentsList.peek() as number;
            studentsList.dequeue();
            studentsList.enqueue(pVal);
            count++;
        }

        if (count > limit) {
            break;
        }
    }
    return studentsList.getSize();
}

assert(
    countStudents,
    [
        [1, 1, 0, 0],
        [0, 1, 0, 1],
    ],
    0
);

assert(
    countStudents,
    [
        [1, 1, 1, 0, 0, 1],
        [1, 0, 0, 0, 1, 1],
    ],
    3
);
