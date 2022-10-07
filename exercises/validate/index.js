// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  if (max !== null && node.data > max) {
    return false;
  }

  if (min !== null && node.data < min) {
    return false;
  }

  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }

  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }
  return true;
}

mineValidate(aNode){
  if (!aNode) { return true }
  let leftvalid = false;
  let rightvalid = false;
  if (aNode.left && (aNode.left < aNode)) {
    leftvalid = validate(aNode.left);
  }
  if (aNode.right && (aNode.right > aNode)) {
    rightvalid = validate(aNode.right);
  }

  return leftvalid && rightvalid;
}

module.exports = validate;
