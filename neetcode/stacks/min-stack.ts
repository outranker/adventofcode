class Node {
    val: number;
    next: Node | null;
    minValue: number;
    prev: Node | null;
    constructor(n: number) {
        this.val = n;
        this.next = null;
        this.prev = null;
        this.minValue = n;
    }
}

class Stack {
    stack: Node | null;
    stackSize: number;
    tail: Node | null;
    constructor() {
        this.stack = null;
        this.stackSize = 0;
        this.tail = null;
    }

    push(v: number) {
        const n = new Node(v);
        if (this.stack === null) {
            this.stack = n;
            this.tail = this.stack;
            this.stackSize++;
            n.minValue = v;
        } else {
            const c = this.tail as Node;
            c.next = n;
            c.next.prev = c;
            if (v > c.minValue) {
                n.minValue = c.minValue;
            } else {
                n.minValue = v;
            }
            this.tail = n;
            this.stackSize++;
        }
    }
    pop() {
        if (this.stack === null) {
            return;
        } else if (this.stackSize === 1) {
            this.stack = null;
            this.tail = null;
            this.stackSize--;
        } else if (this.stackSize === 2) {
            this.stack.next = null;
            this.tail = this.stack;
            this.stackSize--;
        } else {
            let c = this.stack;
            while (c.next !== null && c.next.next !== null) {
                c = c.next;
            }
            // console.log("before", this.toArray(), c.next);
            c.next = null;
            this.tail = c;
            this.stackSize--;
            // console.log("after", this.toArray());
        }
    }
    top(): number {
        return this.tail!.val;
    }
    getMin() {
        return this.tail!.minValue;
    }
    peek() {
        if (this.stack === null) return null;
        return this.stack.val;
    }
    isEmpty() {
        if (this.stackSize === 0) return true;
        return false;
    }
    toArray() {
        const arr: number[] = [];
        if (this.stack === null) return arr;
        let c = this.stack;
        while (c.next !== null) {
            arr.push(c.val);
            c = c.next;
        }
        arr.push(c.val);
        return arr;
    }
}

function runnumberest(actionList: string[], inputs: any[][]) {
    const stack = new Stack();
    for (let i = 0; i < actionList.length; i++) {
        const action = actionList[i];
        const input = inputs[i][0] as unknown as any;

        if (action === "MinStack") {
            console.log(i, null);
        } else {
            const r = stack![action as "push" | "top" | "pop" | "getMin"](input);
            console.log(i, action, r ?? null, stack.toArray());
            // console.log(">>>>", stack.getMin(), stack.stack, stack.stackSize);
        }
        // console.log(printAsArray(stack.list));
    }
}

// runnumberest(["MyStack", "push", "push", "top", "pop", "empty"], [[], [1], [2], [], [], []]);

runnumberest(
    ["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"],
    [[], [-2], [0], [-3], [], [], [], []]
);
