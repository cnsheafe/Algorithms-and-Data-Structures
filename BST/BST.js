class BST {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
    this.insert = childVal => {
      let childNode = new BST(childVal);

      if((childNode.val > this.val) && this.right===null) { //empty nodes
        this.right = childNode;
      }
      else if((childNode.val > this.val) && this.right!==null) { //non-empty nodes
        this.right.insert(childVal);
      }
      else if((childNode.val < this.val) && this.left===null) {
        this.left = childNode;

      }
      else if((childNode.val < this.val) && this.left!==null) {
        this.left.insert(childVal);
      }
    };
    this.getHeight = function() {
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
}

module.exports = BST;