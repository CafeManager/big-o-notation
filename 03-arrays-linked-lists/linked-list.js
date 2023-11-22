/** Node: node for a singly linked list. */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/** LinkedList: chained together nodes. */

class LinkedList {
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        for (let val of vals) this.push(val);
    }

    /** push(val): add new value to end of list. */

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
        }
        if (this.tail !== null) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length += 1;
    }

    /** unshift(val): add new value to start of list. */

    unshift(val) {
        let parentNode = new Node(val);
        if (!this.head) {
            this.head = parentNode;
            this.tail = parentNode;
            this.length += 1;
            return;
        }
        let childNode = this.head;
        this.head = parentNode;
        parentNode.next = childNode;

        while (childNode.next) {
            parentNode = parentNode.next;
            childNode = childNode.next;
            parentNode.next = childNode;
        }
        this.length += 1;
    }

    /** pop(): return & remove last item. */

    pop() {
        if (this.head == this.tail) {
            let poppedNodeVal = this.head.val;
            this.head = null;
            this.tail = null;
            this.length -= 1;
            return poppedNodeVal;
        }
        let currNode = this.head;
        while (currNode.next != this.tail) {
            currNode = currNode.next;
        }

        let poppedNodeVal = currNode.next.val;
        this.tail = currNode;
        this.length -= 1;
        return poppedNodeVal;
    }

    /** shift(): return & remove first item. */

    shift() {
        let poppedNodeVal = this.head.val;
        if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
            this.length -= 1;
            return poppedNodeVal;
        }

        this.head = this.head.next;
        this.length -= 1;
        return poppedNodeVal;
    }

    /** getAt(idx): get val at idx. */

    getAt(idx) {
        let currNode = this.head;
        while (idx != 0) {
            currNode = currNode.next;
            idx -= 1;
        }
        return currNode.val;
    }

    /** setAt(idx, val): set val at idx to val */

    setAt(idx, val) {
        let currNode = this.head;
        while (idx != 0) {
            currNode = currNode.next;
            idx -= 1;
        }
        currNode.val = val;
    }

    /** insertAt(idx, val): add node w/val before idx. */

    insertAt(idx, val) {
        let newNode = new Node(val);
        let currNode = this.head;
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            this.length += 1;
            return;
        }
        for (let i = 1; i < idx; i++) {
            currNode = currNode.next;
        }
        if (currNode == this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;

            this.length += 1;
            return;
        }
        newNode.next = currNode.next;
        currNode.next = newNode;
        this.length += 1;
    }

    /** removeAt(idx): return & remove item at idx, */

    removeAt(idx) {
        let currNode = this.head;
        let poppedNode;
        if (idx == 0) {
            poppedNode = this.head;
            if (this.head == this.tail) {
                this.tail = null;
                this.head = null;
                this.length -= 1;
                return poppedNode;
            }
            this.head = this.head.next;
            this.length -= 1;
            return poppedNode;
        }
        for (let i = 0; i < idx - 1; i++) {
            if (i + 1 == idx) {
                poppedNode = currNode.next;
                currNode.next = currNode.next.next;
                break;
            }
        }
    }

    /** average(): return an average of all values in the list */

    average() {
        let currNode = this.head;
        let sum = 0;
        let count = 0;
        if (this.length == 0) {
            return 0;
        }
        while (currNode) {
            sum += currNode.val;
            count += 1;
            currNode = currNode.next;
        }
        return sum / count;
    }
}

module.exports = LinkedList;
