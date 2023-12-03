/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    /** minDepth(): return the minimum depth of the tree -- that is,
     * the length of the shortest path from the root to a leaf. */

    minDepth() {
        if (this.root == null) {
            return 0;
        }
        let stack = [[this.root]];
        let minLength = 1;
        let children = [];
        while (stack) {
            let current = stack.pop();
            for (let node of current) {
                if (!node) {
                    return minLength;
                }
                if (!node.left || !node.right) {
                    return minLength;
                } else {
                    children.push(node.left);
                    children.push(node.right);
                }
                minLength += 1;
            }
            stack.push(children);
            children = [];
        }
        return minLength;
    }

    /** maxDepth(): return the maximum depth of the tree -- that is,
     * the length of the longest path from the root to a leaf. */

    maxDepth() {
        if (this.root == null) {
            return 0;
        }
        let stack = [this.root];
        let valList = [];
        let minLength = 0;
        let maxLength = 0;
        while (stack.length > 0) {
            let current = stack.shift();
            if (current == null) {
                minLength -= 1;
                valList.pop();
            } else {
                if (current.left && current.right) {
                    stack.unshift(current.right);
                    stack.unshift(current.left);
                    valList.push(current.val);
                    minLength += 1;
                    if (minLength > maxLength) {
                        maxLength = minLength;
                    }
                } else if (current.left && !current.right) {
                    stack.unshift(null);
                    stack.unshift(current.left);
                    valList.push(current.val);
                    minLength += 1;
                    if (minLength > maxLength) {
                        maxLength = minLength;
                    }
                } else if (!current.left && current.right) {
                    stack.push(current.right);
                    valList.push(current.val);
                    minLength += 1;
                    if (minLength > maxLength) {
                        maxLength = minLength;
                    }
                } else if (!current.left && !current.right) {
                    minLength += 1;
                    valList.push(current.val);
                    if (minLength > maxLength) {
                        maxLength = minLength;
                    }
                    valList.pop();
                    minLength -= 1;
                }
            }
        }
        return maxLength;
    }

    /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
     * The path doesn't need to start at the root, but you can't visit a node more than once. */

    maxSum() {
        let max = 0;

        let getMaxPath = (node) => {
            if (!node) {
                return 0;
            }

            let leftSum = getMaxPath(node.left);
            let rightSum = getMaxPath(node.right);
            let openMax = Math.max(
                Math.max(leftSum, rightSum) + node.val,
                node.val
            );
            let closedMax = Math.max(openMax, leftSum + rightSum + node.val);

            if (closedMax > max) {
                max = closedMax;
            }
            return openMax;
        };
        let tempMax = getMaxPath(this.root);
        if (tempMax > max) {
            return tempMax;
        } else {
            return max;
        }
    }

    /** nextLarger(lowerBound): return the smallest value in the tree
     * which is larger than lowerBound. Return null if no such value exists. */

    nextLarger(lowerBound) {
        let next = null;
        let stack = [this.root];

        while (stack.length > 0) {
            let node = stack.pop();
            if (node) {
                if (
                    node.val > lowerBound &&
                    (node.val < next || next == null)
                ) {
                    next = node.val;
                }
                stack.push(node.right);
                stack.push(node.left);
            }
        }
        return next;
    }

    /** Further study!
     * areCousins(node1, node2): determine whether two nodes are cousins
     * (i.e. are at the same level but have different parents. ) */

    areCousins(node1, node2) {}

    /** Further study!
     * serialize(tree): serialize the BinaryTree object tree into a string. */

    static serialize() {}

    /** Further study!
     * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

    static deserialize() {}

    /** Further study!
     * lowestCommonAncestor(node1, node2): find the lowest common ancestor
     * of two nodes in a binary tree. */

    lowestCommonAncestor(node1, node2) {}
}

emptyTree = new BinaryTree();

// build small tree;
let smallLeft = new BinaryTreeNode(5);
let smallRight = new BinaryTreeNode(5);
let smallRoot = new BinaryTreeNode(6, smallLeft, smallRight);
smallTree = new BinaryTree(smallRoot);

// build large tree
let node6 = new BinaryTreeNode(1);
let node5 = new BinaryTreeNode(1);
let node4 = new BinaryTreeNode(2);
let node3 = new BinaryTreeNode(3, node4, node6);
let node2 = new BinaryTreeNode(5, node3, node5);
let node1 = new BinaryTreeNode(5);
let root = new BinaryTreeNode(6, node1, node2);
largeTree = new BinaryTree(root);

module.exports = { BinaryTree, BinaryTreeNode };
