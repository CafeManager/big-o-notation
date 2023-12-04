class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }

    /** insert(val): insert a new node into the BST with value val.
     * Returns the tree. Uses iteration. */

    insert(val) {
        let curr = this.root;
        let newNode = new Node(val);
        if (!curr) {
            this.root = newNode;
            return this;
        }
        while (curr) {
            if (curr.val < val) {
                if (!curr.right) {
                    curr.right = newNode;
                    curr = null;
                } else {
                    curr = curr.right;
                }
            } else if (curr.val > val) {
                if (!curr.left) {
                    curr.left = newNode;
                    curr = null;
                } else {
                    curr = curr.left;
                }
            }
        }
        return this;
    }

    /** insertRecursively(val): insert a new node into the BST with value val.
     * Returns the tree. Uses recursion. */

    insertRecursively(val) {
        let newNode = new Node(val);

        let insert = (node) => {
            if (!this.root) {
                this.root = newNode;
                return this;
            }
            if (node.val > newNode.val) {
                if (!node.left) {
                    node.left = newNode;
                } else {
                    return insert(node.left);
                }
            } else if (node.val < newNode.val) {
                if (!node.right) {
                    node.right = newNode;
                } else {
                    return insert(node.right);
                }
            }
            console.log("unreach");
        };
        insert(this.root);
        return this;
    }

    /** find(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses iteration. */

    find(val) {
        let curr = this.root;
        while (curr) {
            if (curr.val > val) {
                curr = curr.left;
            } else if (curr.val < val) {
                curr = curr.right;
            } else if (curr.val == val) {
                return curr;
            }
        }
    }

    /** findRecursively(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses recursion. */

    findRecursively(val) {
        let search = (node) => {
            if (!node) {
                return undefined;
            }
            if (node.val > val) {
                return search(node.left);
            } else if (node.val < val) {
                return search(node.right);
            } else if (node.val == val) {
                return node;
            }
        };
        let result = search(this.root);
        return result;
    }

    /** dfsPreOrder(): Traverse the array using pre-order DFS.
     * Return an array of visited nodes. */

    dfsPreOrder() {
        let orderedValues = [];

        let retrieveValues = (node) => {
            orderedValues.push(node.val);
            if (node.left) {
                retrieveValues(node.left);
            }
            if (node.right) {
                retrieveValues(node.right);
            }
        };

        retrieveValues(this.root);
        return orderedValues;
    }

    /** dfsInOrder(): Traverse the array using in-order DFS.
     * Return an array of visited nodes. */

    dfsInOrder() {
        let orderedValues = [];

        let retrieveValues = (node) => {
            if (node.left) {
                retrieveValues(node.left);
            }
            orderedValues.push(node.val);
            if (node.right) {
                retrieveValues(node.right);
            }
        };

        retrieveValues(this.root);
        return orderedValues;
    }

    /** dfsPostOrder(): Traverse the array using post-order DFS.
     * Return an array of visited nodes. */

    dfsPostOrder() {
        let orderedValues = [];

        let retrieveValues = (node) => {
            if (node.left) {
                retrieveValues(node.left);
            }

            if (node.right) {
                retrieveValues(node.right);
            }
            orderedValues.push(node.val);
        };

        retrieveValues(this.root);
        return orderedValues;
    }

    /** bfs(): Traverse the array using BFS.
     * Return an array of visited nodes. */

    bfs() {
        let orderedValues = [];
        let stack = [this.root];
        while (stack.length > 0) {
            let node = stack.shift();

            if (node) {
                console.log(stack);
                orderedValues.push(node.val);

                if (node.left) {
                    stack.push(node.left);
                }
                if (node.right) {
                    stack.push(node.right);
                }
            }
        }
        return orderedValues;
    }

    /** Further Study!
     * remove(val): Removes a node in the BST with the value val.
     * Returns the removed node. */

    remove(val) {}

    /** Further Study!
     * isBalanced(): Returns true if the BST is balanced, false otherwise. */

    isBalanced() {}

    /** Further Study!
     * findSecondHighest(): Find the second highest value in the BST, if it exists.
     * Otherwise return undefined. */

    findSecondHighest() {}
}
let binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(50);
console.log(binarySearchTree.bfs());

module.exports = BinarySearchTree;
