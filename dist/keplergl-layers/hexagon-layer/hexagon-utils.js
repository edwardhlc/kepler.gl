'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hexagonToPolygonGeo = hexagonToPolygonGeo;

var _deck = require('deck.gl');

function hexagonToPolygonGeo(_ref, properties, radius, mapState) {
  var object = _ref.object;

  var viewport = new _deck.WebMercatorViewport(mapState);

  var screenCenter = viewport.projectFlat(object.centroid);

  var _viewport$getDistance = viewport.getDistanceScales(),
      pixelsPerMeter = _viewport$getDistance.pixelsPerMeter;

  var pixRadius = radius * pixelsPerMeter[0];

  var coordinates = [];

  for (var i = 0; i < 6; i++) {
    var vertex = hex_corner(screenCenter, pixRadius, i);
    coordinates.push(viewport.unprojectFlat(vertex));
  }

  coordinates.push(coordinates[0]);

  return {
    geometry: {
      coordinates: coordinates,
      type: 'LineString'
    },
    properties: properties
  };
}

function hex_corner(center, radius, i) {
  var angle_deg = 60 * i + 30;
  var angle_rad = Math.PI / 180 * angle_deg;

  return [center[0] + radius * Math.cos(angle_rad), center[1] + radius * Math.sin(angle_rad)];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9rZXBsZXJnbC1sYXllcnMvaGV4YWdvbi1sYXllci9oZXhhZ29uLXV0aWxzLmpzIl0sIm5hbWVzIjpbImhleGFnb25Ub1BvbHlnb25HZW8iLCJwcm9wZXJ0aWVzIiwicmFkaXVzIiwibWFwU3RhdGUiLCJvYmplY3QiLCJ2aWV3cG9ydCIsInNjcmVlbkNlbnRlciIsInByb2plY3RGbGF0IiwiY2VudHJvaWQiLCJnZXREaXN0YW5jZVNjYWxlcyIsInBpeGVsc1Blck1ldGVyIiwicGl4UmFkaXVzIiwiY29vcmRpbmF0ZXMiLCJpIiwidmVydGV4IiwiaGV4X2Nvcm5lciIsInB1c2giLCJ1bnByb2plY3RGbGF0IiwiZ2VvbWV0cnkiLCJ0eXBlIiwiY2VudGVyIiwiYW5nbGVfZGVnIiwiYW5nbGVfcmFkIiwiTWF0aCIsIlBJIiwiY29zIiwic2luIl0sIm1hcHBpbmdzIjoiOzs7OztRQUVnQkEsbUIsR0FBQUEsbUI7O0FBRmhCOztBQUVPLFNBQVNBLG1CQUFULE9BQXVDQyxVQUF2QyxFQUFtREMsTUFBbkQsRUFBMkRDLFFBQTNELEVBQXFFO0FBQUEsTUFBdkNDLE1BQXVDLFFBQXZDQSxNQUF1Qzs7QUFDMUUsTUFBTUMsV0FBVyw4QkFBd0JGLFFBQXhCLENBQWpCOztBQUVBLE1BQU1HLGVBQWVELFNBQVNFLFdBQVQsQ0FBcUJILE9BQU9JLFFBQTVCLENBQXJCOztBQUgwRSw4QkFJakRILFNBQVNJLGlCQUFULEVBSmlEO0FBQUEsTUFJbkVDLGNBSm1FLHlCQUluRUEsY0FKbUU7O0FBSzFFLE1BQU1DLFlBQVlULFNBQVNRLGVBQWUsQ0FBZixDQUEzQjs7QUFFQSxNQUFNRSxjQUFjLEVBQXBCOztBQUVBLE9BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLENBQXBCLEVBQXVCQSxHQUF2QixFQUE0QjtBQUMxQixRQUFNQyxTQUFTQyxXQUFXVCxZQUFYLEVBQXlCSyxTQUF6QixFQUFvQ0UsQ0FBcEMsQ0FBZjtBQUNBRCxnQkFBWUksSUFBWixDQUFpQlgsU0FBU1ksYUFBVCxDQUF1QkgsTUFBdkIsQ0FBakI7QUFDRDs7QUFFREYsY0FBWUksSUFBWixDQUFpQkosWUFBWSxDQUFaLENBQWpCOztBQUVBLFNBQU87QUFDTE0sY0FBVTtBQUNSTiw4QkFEUTtBQUVSTyxZQUFNO0FBRkUsS0FETDtBQUtMbEI7QUFMSyxHQUFQO0FBT0Q7O0FBRUQsU0FBU2MsVUFBVCxDQUFvQkssTUFBcEIsRUFBNEJsQixNQUE1QixFQUFvQ1csQ0FBcEMsRUFBdUM7QUFDckMsTUFBTVEsWUFBWSxLQUFLUixDQUFMLEdBQVMsRUFBM0I7QUFDQSxNQUFNUyxZQUFZQyxLQUFLQyxFQUFMLEdBQVUsR0FBVixHQUFnQkgsU0FBbEM7O0FBRUEsU0FBTyxDQUNMRCxPQUFPLENBQVAsSUFBWWxCLFNBQVNxQixLQUFLRSxHQUFMLENBQVNILFNBQVQsQ0FEaEIsRUFFTEYsT0FBTyxDQUFQLElBQVlsQixTQUFTcUIsS0FBS0csR0FBTCxDQUFTSixTQUFULENBRmhCLENBQVA7QUFJRCIsImZpbGUiOiJoZXhhZ29uLXV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtXZWJNZXJjYXRvclZpZXdwb3J0fSBmcm9tICdkZWNrLmdsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGhleGFnb25Ub1BvbHlnb25HZW8oe29iamVjdH0sIHByb3BlcnRpZXMsIHJhZGl1cywgbWFwU3RhdGUpIHtcbiAgY29uc3Qgdmlld3BvcnQgPSBuZXcgV2ViTWVyY2F0b3JWaWV3cG9ydChtYXBTdGF0ZSk7XG5cbiAgY29uc3Qgc2NyZWVuQ2VudGVyID0gdmlld3BvcnQucHJvamVjdEZsYXQob2JqZWN0LmNlbnRyb2lkKTtcbiAgY29uc3Qge3BpeGVsc1Blck1ldGVyfSA9IHZpZXdwb3J0LmdldERpc3RhbmNlU2NhbGVzKCk7XG4gIGNvbnN0IHBpeFJhZGl1cyA9IHJhZGl1cyAqIHBpeGVsc1Blck1ldGVyWzBdO1xuXG4gIGNvbnN0IGNvb3JkaW5hdGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSBoZXhfY29ybmVyKHNjcmVlbkNlbnRlciwgcGl4UmFkaXVzLCBpKTtcbiAgICBjb29yZGluYXRlcy5wdXNoKHZpZXdwb3J0LnVucHJvamVjdEZsYXQodmVydGV4KSk7XG4gIH1cblxuICBjb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGVzWzBdKTtcblxuICByZXR1cm4ge1xuICAgIGdlb21ldHJ5OiB7XG4gICAgICBjb29yZGluYXRlcyxcbiAgICAgIHR5cGU6ICdMaW5lU3RyaW5nJ1xuICAgIH0sXG4gICAgcHJvcGVydGllc1xuICB9O1xufVxuXG5mdW5jdGlvbiBoZXhfY29ybmVyKGNlbnRlciwgcmFkaXVzLCBpKSB7XG4gIGNvbnN0IGFuZ2xlX2RlZyA9IDYwICogaSArIDMwO1xuICBjb25zdCBhbmdsZV9yYWQgPSBNYXRoLlBJIC8gMTgwICogYW5nbGVfZGVnO1xuXG4gIHJldHVybiBbXG4gICAgY2VudGVyWzBdICsgcmFkaXVzICogTWF0aC5jb3MoYW5nbGVfcmFkKSxcbiAgICBjZW50ZXJbMV0gKyByYWRpdXMgKiBNYXRoLnNpbihhbmdsZV9yYWQpXG4gIF07XG59XG4iXX0=