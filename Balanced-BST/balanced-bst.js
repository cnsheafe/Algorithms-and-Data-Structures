const BST = require("./BST");

class AVLTree extends BST {
  constructor(value) {
    super(value);
    this.parent = null;
  }

  insert(childValue) {
    let childNode = new AVLTree(childValue);
    childNode.parent = this;

    if ((childValue > this.root.value) && this.root.right === null) { //empty nodes
        this.root.right = childNode;
    } else if ((childValue > this.root.value) && this.root.right !== null) { //non-empty nodes
        this.root.right.insert(childValue);
    } else if ((childValue < this.root.value) && this.root.left === null) {
        this.root.left = childNode;
    } else if ((childValue < this.root.value) && this.root.left !== null) {
        this.root.left.insert(childValue);
    }
    this._checkBalance();
  }

  _checkBalance() {
    if (this.root === null) {
      return;
    }

    const lHeight = this.root.left !== null ? this.root.left.getHeight() + 1 : -1;
    const rHeight = this.root.right !== null ? this.root.right.getHeight() + 1 : -1;
    let balance = lHeight > -1 && rHeight > -1 ? lHeight - rHeight : null;

    if (balance === 0) {
      return;
    }
    else if (balance > 1) {
      this._rotateRight();
    }
    else if (balance < -1 ) {
      this._rotateLeft();
    }
    else {
      if (this.parent !== null) {
        this.parent._checkBalance();
      }
    }
    return balance;
  }

  _rotateLeft() {
    const copyLeft = new AVLTree(this.root.value);
    copyLeft.root.right = this.root.right.root.left;
    copyLeft.root.left = this.root.left;

    this.root = this.root.right.root;
    this.root.left = copyLeft;
  }

  _rotateRight() {
    const copyRight = new AVLTree(this.root.value);
    copyRight.root.left = this.root.left.root.right;
    copyRight.root.right = this.root.right;

    this.root = this.root.left.root;
    this.root.right = copyRight;
  }
}
const bst = new AVLTree(10);
bst.insert(5);
bst.insert(15);
bst.insert(13);
bst.insert(20);
bst.insert(25);
bst.insert(1);

console.log(bst.root);