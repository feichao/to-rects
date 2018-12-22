const decomp = require('poly-decomp');


module.exports = function (points) {
  const convexPolygons = decomp.quickDecomp(points);
}