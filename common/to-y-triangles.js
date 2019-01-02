const toLine = require('./to-line');

/**
 * 将任意三角形转换成两个三角形, 转换后的三角形必有一条边平行于 x 轴, 返回两个三角形
 * @param {Array} points 三角形的三个顶点
 * @returns {Array[]}
 */
function _toYTriangles (points) {
  const [p1, p2, p3] = points.sort((p1, p2) => p1[1] - p2[1]);

  // 如果两个点的 Y 坐标相同, 直接返回传入的三角形
  if (p1[1] === p2[1] || p2[1] === p3[1]) {
    return [points];
  }

  const line = toLine(p1, p3);

  const [x, y] = [line(p2[1]), p2[1]];

  return [
    [p1, p2, [x, y]],
    [p2, p3, [x, y]]
  ];
}

module.exports = _toYTriangles;

/**
 * Test
 */

// const r = _toYTriangles([
//   [2, 2],
//   [4, 1],
//   [5, 3]
// ]);

// console.log(r);
