const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    this.treeRoot = addNode(this.treeRoot, data);

    function addNode(node, data) {
      const newNode = new Node(data);

      if (!node) {
        return newNode;
      }

      if (data === node.data) {
        return node;
      }

      if (data > node.data) {
        node.right = addNode(node.right, data);
      } else {
        node.left = addNode(node.left, data);
      }

      return node;
    }
  }

  has(data) { 
    return hasData(this.treeRoot, data)
    
    function hasData(node, data) {

      if (node.data === data) {
        return true;
      }
      
      if (data > node.data) {
        return node.right ? hasData(node.right, data) : false;
      } else {
        return node.left ? hasData(node.left, data) : false;
      }
    }
  }

  find(data) {
    return findNode(this.treeRoot, data)
    
    function findNode(node, data) {

      if (node.data === data) {
        return node;
      }
      
      if (data > node.data) {
        return node.right ? findNode(node.right, data) : null;
      } else {
        return node.left ? findNode(node.left, data) : null;
      }
    }
  }

  remove(data) {
    this.treeRoot = removeNode(this.treeRoot, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }

      if (data === node.data) {
        if (!node.right) {
          node = node.left;
          return node;
        } 

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.left && !node.right) {
          return null;
        }
        
        const minRightNodeData = findMin(node.right).data;
        node.data = minRightNodeData;
        node.right = removeNode(node.right, minRightNodeData);

        function findMin(node) {
          return node.left ? findMin(node.left) : node;
        }

        return node;
      }

    }
  }

  min() {
    return findMin(this.treeRoot).data 

    function findMin(node) {
      return node.left ? findMin(node.left) : node;
    }
  }

  max() {
    return findMax(this.treeRoot).data

    function findMax(node) {
      return node.right ? findMax(node.right) : node;
    }
  }
}

module.exports = {
  BinarySearchTree
};