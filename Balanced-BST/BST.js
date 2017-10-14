//  Binary Search Tree where larger inserted values go to the right
//  and smaller values go to the left
class BST {
    constructor(value) {
        this.root = {
            value: value,
            left: null,
            right: null
        }
    }

    insert(childValue) {
        let childNode = new BST(childValue);

        if ((childValue > this.root.value) && this.root.right === null) { //empty nodes
            this.root.right = childNode;
        } else if ((childValue > this.root.value) && this.root.right !== null) { //non-empty nodes
            this.root.right.insert(childValue);
        } else if ((childValue < this.root.value) && this.root.left === null) {
            this.root.left = childNode;
        } else if ((childValue < this.root.value) && this.root.left !== null) {
            this.root.left.insert(childValue);
        }
    };

    getHeight() {
        let lHeight = 0;
        let rHeight = 0;
        if (this.root.left) {
            lHeight = this.root.left.getHeight();
        }
        if (this.root.right) {
            rHeight = this.root.right.getHeight();
        }

        if (!(this.root.left || this.root.right)) {
            return 0;
        }
        return lHeight > rHeight ? lHeight + 1 : rHeight + 1;

    }
}

module.exports = BST;
