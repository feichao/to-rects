
const toLine = require('./to-line');

/**
 * @name _toRects
 * @param {Array[]} points 三角形点的集合, 必须有一个边和 X 轴平行
 * @param {Number} accuracy 矩形高度的精度, 默认为 1 像素
 * @returns {Array} 生成的矩形的集合
 */
function _pointToRects(points, accuracy = 1) {
  let line1;
  let line2;
  let [p1, p2, p3] = points.sort((p1, p2) => p1[1] - p2[1]);
  if (p1[1] === p2[1]) {
    if (p1[0] < p2[0]) { // 确保是逆时针
      [p1, p2] = [p2, p1];
    }
    line1 = toLine(p2, p3);
    line2 = toLine(p1, p3);
  } else {
    if (p2[0] > p3[0]) { // 确保是逆时针
      [p2, p3] = [p3, p2];
    }
    line1 = toLine(p1, p2);
    line2 = toLine(p1, p3);
  }

  const rects = [];
  const minY = p1[1];
  const maxY = p3[1];

  for(let i = minY; i <= maxY; i += accuracy) {
    const x1 = line1(i);
    const x2 = line2(i);
    rects.push({
      x: x1,
      y: i,
      height: accuracy,
      width: x2 - x1
    });
  }

  return rects;
}

/**
 * 
 * @param {Function} fun 
 * @param {Number} accuracy 
 */
function _funToRects (fun, accuracy) {

}

module.exports = {
  /**
   * 将三角形转换成矩形集合
   * @param {Array[]} points 三角形的点的集合
   * @param {Object} options 
   */
  pointsToRects (points, options = {}) {
    const { accuracy = 1 } = options;
    return _pointToRects(points, accuracy);
  },
  /**
   * 将曲线转化成矩形集合
   * @param {Function} fun 曲线公式, 根据 y, 计算 x
   * @param {Object} options 
   */
  funToRects (fun, options = {}) {
    const { accuracy = 1 } = options;
    return _funToRects(points, accuracy);
  }
};