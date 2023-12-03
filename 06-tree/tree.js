/** TreeNode: node for a general tree. */

class TreeNode {
    constructor(val, children = []) {
        this.val = val;
        this.children = children;
    }
}

class Tree {
    constructor(root = null) {
        this.root = root;
    }

    /** sumValues(): add up all of the values in the tree. */

    sumValues() {
        let stack = [this.root];
        let sum = 0;
        while (stack.length > 0) {
            console.log(stack);
            let current = stack.pop();
            if (current) {
                for (let child of current.children) {
                    console.log(current.children);
                    stack.push(child);
                }
                sum += current.val;
            }
        }
        return sum;
    }

    /** countEvens(): count all of the nodes in the tree with even values. */

    countEvens() {
        let stack = [this.root];
        let total = 0;
        while (stack.length > 0) {
            let current = stack.pop();
            if (current) {
                for (let child of current.children) {
                    console.log(current.children);
                    stack.push(child);
                }
                if (current.val % 2 == 0) {
                    total += 1;
                }
            }
        }
        return total;
    }

    /** numGreater(lowerBound): return a count of the number of nodes
     * whose value is greater than lowerBound. */

    numGreater(lowerBound) {
        let stack = [this.root];
        let total = 0;
        while (stack.length > 0) {
            let current = stack.pop();
            if (current) {
                for (let child of current.children) {
                    console.log(current.children);
                    stack.push(child);
                }
                if (current.val > lowerBound) {
                    total += 1;
                }
            }
        }
        return total;
    }
}

// build small tree
let nSmall = new TreeNode(1);
let nSmall2 = new TreeNode(2);
nSmall.children.push(nSmall2);
smallTree = new Tree(nSmall);

// build large tree
let n = new TreeNode(1);
let n2 = new TreeNode(2);
let n3 = new TreeNode(3);
let n4 = new TreeNode(4);
let n5 = new TreeNode(5);
let n6 = new TreeNode(6);
let n7 = new TreeNode(7);
let n8 = new TreeNode(8);

n.children = [n2, n3, n4];

n4.children.push(n5, n6);
n6.children.push(n7);
n7.children.push(n8);

largeTree = new Tree(n);

console.log(largeTree.sumValues());

module.exports = { Tree, TreeNode };
