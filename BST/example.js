const BST = require("./BST");


const inputs = [50, 30, 24, 5, 28, 45, 98, 61, 52, 60, 22, 21];
let root = new BST(inputs[0]);

inputs.slice(1).forEach(val => root.insert(val));
console.log(root);
console.log(root.getHeight());
