class DoublyLinkedListNode {
    val: string | null;
    prev: DoublyLinkedListNode | null;
    next: DoublyLinkedListNode | null;
    constructor(n: string | null) {
        this.val = n;
        this.prev = null;
        this.next = null;
    }
}

class BrowserHistory {
    list: DoublyLinkedListNode;
    tail: number;
    constructor(homepage: string) {
        this.list = new DoublyLinkedListNode(homepage);
        this.tail = 0;
    }

    visit(url: string): void {
        const v = new DoublyLinkedListNode(url);
        let c = this.list;
        let counter = 0;

        if (this.tail === counter) {
            this.list.next = v;
            v.prev = this.list;
            this.tail++;
            return;
        }

        while (c.next !== null) {
            c = c.next;
            counter++;
            if (this.tail === counter) {
                c.next = v;
                v.prev = c;
                this.tail++;
                return;
            }
        }
    }

    back(steps: number): string {
        // console.log("steps", steps);
        // console.log("tail", this.tail);
        this.tail -= steps;
        // console.log("tail after calc", this.tail);
        if (this.tail < 0) {
            this.tail = 0;
            return this.list.val as string;
        }
        let b = 0;
        let c = this.list;
        let counter = 0;
        let s = "";
        while (c.next !== null) {
            b++;
            c = c.next;
            counter++;
            if (counter === this.tail) {
                s = c.val as string;
                break;
            }

            if (b === 100_000) throw new Error("boundary error");
        }
        // console.log("this is s", s);
        return s;
    }

    forward(steps: number): string {
        // console.log("forward steps", steps);
        // console.log("forward tail", this.tail);
        let counter = 0;
        let c = this.list;
        const tempTail = this.tail + steps;
        // console.log("forward tail after calc", this.tail);
        let s = "";

        while (c.next !== null) {
            c = c.next;
            counter++;
            if (counter === tempTail) {
                s = c.val as string;
                break;
            }
        }
        if (tempTail !== this.tail) this.tail = counter;
        return s || (c.val as string);
    }
}

function runTest(actionList: string[], inputs: any[][]) {
    let instance;
    for (let i = 0; i < actionList.length; i++) {
        const action = actionList[i];
        const input = inputs[i][0] as unknown as any;

        if (action === "BrowserHistory") {
            instance = new BrowserHistory(input);
            console.log(i, null);
        } else {
            const r = instance![action as "visit" | "back" | "forward"](input);
            console.log(i, r || null);
        }
        // console.log(printAsArray(instance.list));
    }
}

runTest(
    // ["BrowserHistory", "visit", "visit", "visit", "back", "back", "forward", "visit", "forward", "back", "back"],
    // [
    //     ["leetcode.com"],
    //     ["google.com"],
    //     ["facebook.com"],
    //     ["youtube.com"],
    //     [1],
    //     [1],
    //     [1],
    //     ["linkedin.com"],
    //     [2],
    //     [2],
    //     [7],
    // ]
    // ["BrowserHistory", "visit", "visit", "visit", "back", "back", "forward", "forward", "forward"],
    // [["leetcode.com"], ["google.com"], ["facebook.com"], ["youtube.com"], [10], [1], [1], [1], [10]]
    [
        "BrowserHistory",
        "visit",
        "forward",
        "back",
        "visit",
        "visit",
        "visit",
        "visit",
        "back",
        "visit",
        "back",
        "forward",
        "visit",
        "visit",
        "visit",
    ],
    [
        ["hdqqhm.com"],
        ["yltqtsj.com"],
        [1],
        [1],
        ["cyv.com"],
        ["vbpvni.com"],
        ["opy.com"],
        ["kbyzp.com"],
        [7],
        ["fchhxaz.com"],
        [6],
        [9],
        ["rg.com"],
        ["oemqn.com"],
        ["hyqsb.com"],
    ]
);

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
