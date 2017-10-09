const BST = require("./BST");

class AVLTree extends BST {
    constructor(value) {
        super(value);
    }

    insert(value) {
        console.log(this.val);
        // if (!this.left || !this.right) {
        //   super.insert(value);
        // }
        let balance = this.left.getHeight() - this.right.getHeight();
        if (balance > 1) {
            _rotateRight(this);
            super.insert(value);

        } else if (balance < -1) {
            _rotateLeft(this);
            super.insert(value);
        } else {
            this.insert(value);
        }
    }

    _rotateLeft(subtree) {
        let copy = subtree;
        subtree = copy.right;
        copy.right = subtree.left;
        subtree.left = copy;
    }

    _rotateRight(subtee) {
        let copy = subtree;
        subtree = copy.left;
        copy.left = subtree.right;
        subtree.right = copy;
    }
}
const bst = new AVLTree(10);
bst.insert(8);
bst.insert(15);
bst.insert(5);
bst.insert(9);
bst.insert(2);

console.log(bst);