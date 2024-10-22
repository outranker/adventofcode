class Node {
    val: number;
    next: Node | null;
    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    queue: Node | null;
    queueSize: number;

    constructor() {
        this.queue = null;
        this.queueSize = 0;
    }

    peek() {
        return this.queue;
    }
    getQueueSize() {
        return this.queueSize;
    }
    isEmpty() {
        if (this.queue === null) return true;
        if (this.getQueueSize() === 0) return true;
        return false;
    }
    dequeue() {
        if (!this.queue) return;
        const temp = this.queue.next;
        this.queue = temp;
        this.queueSize--;
    }
    enqueue(val: number) {
        const n = new Node(val);
        if (this.queue === null) {
            this.queue = n;
            this.queueSize++;
        } else {
            let c = this.queue;
            while (c.next !== null) {
                c = c.next;
            }
            c.next = n;
            this.queueSize++;
        }
    }

    // needs to be implemented stack methods
    push(x: number): void {
        this.enqueue(x);
    }

    pop(): number {
        let c = this.queue as Node;
        if (this.queueSize === 1) {
            const number = this.queue!.val;
            this.queue = null;
            this.queueSize = 0;
            return number;
        } else if (this.queueSize === 2) {
            const number = this.queue!.next!.val;
            this.queue!.next = null;
            this.queueSize = 1;
            return number;
        }
        while (c.next !== null && c.next.next !== null) {
            c = c.next;
        }
        const number = c.next!.val;
        this.queueSize -= 1;
        c.next = null;
        return number;
    }

    top(): number {
        let c = this.queue as Node;
        if (this.queueSize === 1) {
            return this.queue!.val;
        } else if (this.queueSize === 2) {
            return this.queue!.next!.val;
        }
        while (c.next !== null && c.next.next !== null) {
            c = c.next;
        }
        return c.next!.val;
    }

    empty(): boolean {
        return this.isEmpty();
    }
}

function runTest(actionList: string[], inputs: any[][]) {
    const queue = new Queue();
    for (let i = 0; i < actionList.length; i++) {
        const action = actionList[i];
        const input = inputs[i][0] as unknown as any;

        if (action === "MyStack") {
            console.log(i, null);
        } else {
            const r = queue![action as "push" | "top" | "pop" | "empty"](input);
            console.log(i, r ?? null);
            console.log(">>>>", queue.getQueueSize());
        }
        // console.log(printAsArray(queue.list));
    }
}

// runTest(["MyStack", "push", "push", "top", "pop", "empty"], [[], [1], [2], [], [], []]);

runTest(["MyStack", "push", "push", "pop", "top"], [[], [1], [2], [], []]);
