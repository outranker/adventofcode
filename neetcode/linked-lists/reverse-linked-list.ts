import { assert } from "../../util/assert.mts";

class Node {
    value: number;
    next: Node | null;
    constructor(value: number, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Solution {
    static reverseList(head: Node): Node {
        /**
         * algo for reversing the linked list
         * 1. get the last the node from old list
         * 2. create new list and set it as the beginning node
         * 3. remove that last node from the old list
         * 4. again get the last node from the old list
         * 5. set it as the last node for new list
         * 6. remove the last node from the old list
         * 7. rinse and repeat
         * */

        let newLinkedList: Node | null = null;

        let lastNode: Node = head;
        let ll: Node;
        while (lastNode !== null) {
            if (lastNode.next === null) ll = lastNode;
            lastNode = lastNode.next as Node;
        }

        // add to end of the list
        if (!newLinkedList) {
            newLinkedList = new Node(ll!.value);
        } else {
            while (newLinkedList !== null) {
                newLinkedList = newLinkedList!.next;
            }
        }

        return newLinkedList;
    }

    static fromArrayToList(args: number[]): Node {
        let linkedList: Node | null = null;
        for (const n of args) {
            if (!linkedList) {
                linkedList = new Node(n);
            } else {
                let t = linkedList;
                while (t.next !== null) {
                    t = t.next;
                }
                t.next = new Node(n);
            }
        }
        return linkedList as Node;
    }
}

console.log(Solution.reverseList(Solution.fromArrayToList([0, 1, 2, 3])));
