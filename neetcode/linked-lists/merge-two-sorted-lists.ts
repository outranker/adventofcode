class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function fromArrayToList(args: number[]): ListNode {
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

function printLinkedList(list: ListNode | null) {
    if (!list) {
        console.log([]);
        return;
    }
    const arr = [];
    while (list.next !== null) {
        arr.push(list.val);
        list = list?.next;
    }
    if (list !== null) arr.push(list.val);
    console.log(arr);
}

function mergeTwoLists(list1: ListNode, list2: ListNode): ListNode | null {
    const node = new ListNode(0);
    let tail = node;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next as ListNode;
        } else {
            tail.next = list2;
            list2 = list2.next as ListNode;
        }
        tail = tail.next;
    }

    if (list1) {
        tail.next = list1;
    } else if (list2) {
        tail.next = list2;
    }

    return node.next;
}

console.log(printLinkedList(mergeTwoLists(fromArrayToList([1, 2, 4]), fromArrayToList([8, 12, 17, 20, 38]))));
// console.log(printLinkedList(mergeTwoLists(fromArrayToList([]), fromArrayToList([]))));
// console.log(printLinkedList(mergeTwoLists(fromArrayToList([]), fromArrayToList([5]))));
