class ListNode {
    val: number;
    next: null | ListNode;
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
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
    static reverseList(head: ListNode): ListNode {
        if (!head) return head;
        if (head.next === null) return head;
        const arr = [];
        let curr = head;
        arr.push(head.val);
        while (curr.next !== null) {
            curr = curr.next;
            arr.push(curr.val);
        }

        let linkedList: ListNode | null = null;
        const l = arr.length;
        for (let i = l - 1; i >= 0; i--) {
            if (!linkedList) {
                linkedList = new ListNode(arr[i]);
            } else {
                let t = linkedList;
                while (t.next !== null) {
                    t = t.next;
                }
                t.next = new ListNode(arr[i]);
            }
        }
        return linkedList as ListNode;
    }

    static iterativeSolution(head: ListNode): ListNode {
        let prev: ListNode | null = null;
        let curr: ListNode = head;

        while (curr?.next !== null) {
            const temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        const t = curr.next;
        curr.next = prev;
        prev = curr;
        curr = t as unknown as ListNode;
        return prev as unknown as ListNode;
    }

    static recursiveSolution(head: ListNode): ListNode {
        if (!head) return head;
        if (head.next === null) return head;

        let newHead = head;
        if (head.next !== null) {
            newHead = this.recursiveSolution(head.next);
            head.next.next = head;
        }
        head.next = null;

        return newHead;
    }

    static fromArrayToList(args: number[]): ListNode {
        let linkedList: ListNode | null = null;
        for (const n of args) {
            if (!linkedList) {
                linkedList = new ListNode(n);
            } else {
                let t = linkedList;
                while (t.next !== null) {
                    t = t.next;
                }
                t.next = new ListNode(n);
            }
        }
        return linkedList as ListNode;
    }
}

console.log(Solution.recursiveSolution(Solution.fromArrayToList([0, 1, 2, 3])));
