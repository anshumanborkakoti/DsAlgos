// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const levelWidth = [];
  const traversal = ['s', root];
  while (traversal.length > 1) {
    const node = traversal.shift();
    if (node === 's') {
      levelWidth.push(0);
      traversal.push('s');
      continue;
    }
    levelWidth[levelWidth.length - 1]++;
    traversal.push(...node.children);
  }
  return levelWidth;
}

module.exports = levelWidth;
