//  Binary Search Tree where larger inserted values go to the right
//  and smaller values go to the left
class BST {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
    this.parent = null;
  }

  insert(childVal) {
    let childNode = new BST(childVal);
    let parentNode = this;

    if((childNode.val > this.val) && this.right===null) { //empty nodes
      this.right = childNode;
      this.right.parent = this;
    }
    else if((childNode.val > this.val) && this.right!==null) { //non-empty nodes
      parentNode = this.right.insert(childVal);
    }
    else if((childNode.val < this.val) && this.left===null) {
      this.left = childNode;
      this.left.parent = this;

    }
    else if((childNode.val < this.val) && this.left!==null) {
      parentNode = this.left.insert(childVal);
    }
    return parentNode;
  };

  getHeight() {
    let lHeight = 0;
    let rHeight = 0;
    if(this.left) {
      lHeight = this.left.getHeight();
    }
    if(this.right) {
      rHeight = this.right.getHeight();
    }

    if(!(this.left || this.right)) {
      return -1;
    }
    return lHeight > rHeight ? lHeight + 1 : rHeight + 1;

  }
}

module.exports = BST;
// const bst = new BST(10);
// bst.insert(20);
// bst.insert(30);
// bst.insert(5);
// bst.insert(15);
// bst.insert(25);

// console.log(bst);