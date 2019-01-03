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

  let yTriangles = [];
  triangles.forEach(trg => {
    yTriangles = yTriangles.concat(toYTriangles(trg));
  });

  let results = [];
  yTriangles.forEach(trg => {
    results = results.concat(toRects(trg, { accuracy: options.accuracy }));
  }, []);

  return results;
}

module.exports = _main;

/**
 * Test
 */

const r = _main([
  [0, 0],
  [75, 50],
  [150, 0],
  [300, 75],
  [300, 150],
  [150, 300],
  [75, 150],
  [0, 150],
], { accuracy: 4 });

console.log('window.testData = ' + JSON.stringify(r));