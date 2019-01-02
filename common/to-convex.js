const earcut = require('earcut');

/**
 * 将任意多边形转换为三角形的组合
 * @param {Array[]} points 多边形的点集, 按照顺时针或者逆时针给出点集
 * @returns {Array[][]}
 */
function _toConvex(points) {
  const triangles = earcut(points.reduce((pre, next) => pre.concat(next), []));

  const results = [];
  triangles.forEach((vertexIndex, index) => {
    const i = Math.floor(index / 3);
    const p = points[vertexIndex];
    if (Array.isArray(results[i])) {
      results[i].push(p);
    } else {
      results[i] = [p];
    }
  });

  return results;
}

module.exports = _toConvex;

/**
 * Test
 */

// const result = _toConvex([
//   [2, 2],
//   [4, 1],
//   [5, 3],
//   [4, 8],
//   [1, 8],
//   [3, 6],
//   [0, 4],
// ]);

// console.log(result);