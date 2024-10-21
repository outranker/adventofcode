import { assert } from "../../util/assert.mts";

class List {
    val: number | null;
    next: List | null;
    constructor(n: number | null) {
        this.val = n;
        this.next = null;
    }
    enqueue() {}

    dequeue() {}
}

function countStudents(students: number[], sandwiches: number[]): number {}

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
