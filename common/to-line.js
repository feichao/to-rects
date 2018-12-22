/**
 * @param {Array} point1 [x, y], 第一个点的坐标
 * @param {Array} point2 [x, y], 第二个点的坐标
 * @returns {Function} 返回直线函数
 */
module.exports = function (point1, point2) {
  return function (y) {
    const [x1, y1] = point1;
    const [x2, y2] = point2;

    if (x1 === x2) {
      return y1;
    }

    const a = (y1 - y2) / (x1 - x2);
    const b = y1 - a * x1;
    return (y - b) / a;
  }
}
