const toConvex = require('./common/to-convex');
const toYTriangles = require('./common/to-y-triangles');
const toRects = require('./common/to-rects');

/**
 * 给出一组点集或者曲线函数, 返回组成这个多边形的矩形集合
 * @param {Array[] | Function} points 或者 function
 * @param {Object} options 
 */
function _main (points = [], options = {}) {
  const triangles = toConvex(points);

  console.log('triangles: ', triangles);

  let yTriangles = [];
  triangles.forEach(trg => {
    yTriangles = yTriangles.concat(toYTriangles(trg));
  });

  console.log('yTriangles: ', yTriangles);

  let results = [];
  yTriangles.forEach(trg => {
    results = results.concat(toRects(trg, options && options.accuracy));
  }, []);

  return results;
}

module.exports = _main;

/**
 * Test
 */

const r = _main([
  [2, 2],
  [4, 1],
  [5, 3],
  [4, 8],
  [1, 8],
  [3, 6],
  [0, 4],
], { accuracy: 2 });

console.log(r);