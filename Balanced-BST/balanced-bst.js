const BST = require("./BST");

class AVLTree extends BST {
  constructor(value) {
    super(value);
  }

  insert(value) {
    let parentNode = super.insert(value);
    if (this.left.getHeight() - this.right.getHeight() > 1) {

    }
    else if (this.right.getHeight() - this.left.getHeight() < 1) {
      this._rotateLeft(parentNode);
    }
  }

  _rotateLeft(subtree) {
    console.log("Rearranging at ", subtee.val);
    let copy = subtree;
    subtree = subtree.right;
    copy.right = subtree.left;
    subtree.left = copy;
  }
  _rotateRight(subtee) {
    
  }
}
const bst = new BST(10);
bst.insert(20);
bst.insert(30);
bst.insert(5);
bst.insert(15);
bst.insert(25);
bst.insert(22);

console.log(bst);