'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFileHandler = getFileHandler;
exports.getFileType = getFileType;
exports.loadCsv = loadCsv;
exports.loadGeoJSON = loadGeoJSON;

var _window = require('global/window');

var _dataProcessor = require('./data-processor');

function getFileHandler(fileBlob) {
  var type = getFileType(fileBlob.name);

  return type === 'csv' ? loadCsv : type === 'geojson' ? loadGeoJSON : null;
}

function getFileType(filename) {
  if (filename.endsWith('csv')) {
    return 'csv';
  } else if (filename.endsWith('json') || filename.endsWith('geojson')) {
    // Read GeoJson from browser
    return 'geojson';
  }

  // Wait to add other file type handler
  return 'other';
}

function readCSVFile(fileBlob) {
  return new Promise(function (resolve, reject) {
    var fileReader = new _window.FileReader();
    fileReader.onload = function (_ref) {
      var result = _ref.target.result;

      resolve(result);
    };

    fileReader.readAsText(fileBlob);
  });
}

function loadCsv(fileBlob) {
  var processor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _dataProcessor.processCsvData;

  return readCSVFile(fileBlob).then(function (rawData) {
    return rawData ? processor(rawData) : null;
  });
}

function readGeoJSONFile(fileBlob) {
  return new Promise(function (resolve, reject) {
    var fileReader = new _window.FileReader();
    fileReader.onload = function (_ref2) {
      var result = _ref2.target.result;

      try {
        var geo = JSON.parse(result);
        resolve(geo);
      } catch (err) {
        resolve(null);
      }
    };

    fileReader.readAsText(fileBlob);
  });
}

function loadGeoJSON(fileBlob) {
  var processor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _dataProcessor.processGeojson;

  return readGeoJSONFile(fileBlob).then(function (rawData) {
    return rawData ? processor(rawData) : null;
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3IvZmlsZS1oYW5kbGVyLmpzIl0sIm5hbWVzIjpbImdldEZpbGVIYW5kbGVyIiwiZ2V0RmlsZVR5cGUiLCJsb2FkQ3N2IiwibG9hZEdlb0pTT04iLCJmaWxlQmxvYiIsInR5cGUiLCJuYW1lIiwiZmlsZW5hbWUiLCJlbmRzV2l0aCIsInJlYWRDU1ZGaWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmaWxlUmVhZGVyIiwib25sb2FkIiwicmVzdWx0IiwidGFyZ2V0IiwicmVhZEFzVGV4dCIsInByb2Nlc3NvciIsInRoZW4iLCJyYXdEYXRhIiwicmVhZEdlb0pTT05GaWxlIiwiZ2VvIiwiSlNPTiIsInBhcnNlIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7OztRQUdnQkEsYyxHQUFBQSxjO1FBTUFDLFcsR0FBQUEsVztRQXVCQUMsTyxHQUFBQSxPO1FBc0JBQyxXLEdBQUFBLFc7O0FBdERoQjs7QUFDQTs7QUFFTyxTQUFTSCxjQUFULENBQXdCSSxRQUF4QixFQUFrQztBQUN2QyxNQUFNQyxPQUFPSixZQUFZRyxTQUFTRSxJQUFyQixDQUFiOztBQUVBLFNBQU9ELFNBQVMsS0FBVCxHQUFpQkgsT0FBakIsR0FBMkJHLFNBQVMsU0FBVCxHQUFxQkYsV0FBckIsR0FBbUMsSUFBckU7QUFDRDs7QUFFTSxTQUFTRixXQUFULENBQXFCTSxRQUFyQixFQUErQjtBQUNwQyxNQUFJQSxTQUFTQyxRQUFULENBQWtCLEtBQWxCLENBQUosRUFBOEI7QUFDNUIsV0FBTyxLQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUlELFNBQVNDLFFBQVQsQ0FBa0IsTUFBbEIsS0FBNkJELFNBQVNDLFFBQVQsQ0FBa0IsU0FBbEIsQ0FBakMsRUFBK0Q7QUFDcEU7QUFDQSxXQUFPLFNBQVA7QUFDRDs7QUFFRDtBQUNBLFNBQU8sT0FBUDtBQUNEOztBQUVELFNBQVNDLFdBQVQsQ0FBcUJMLFFBQXJCLEVBQStCO0FBQzdCLFNBQU8sSUFBSU0sT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QyxRQUFNQyxhQUFhLHdCQUFuQjtBQUNBQSxlQUFXQyxNQUFYLEdBQW9CLGdCQUF3QjtBQUFBLFVBQWJDLE1BQWEsUUFBdEJDLE1BQXNCLENBQWJELE1BQWE7O0FBQzFDSixjQUFRSSxNQUFSO0FBQ0QsS0FGRDs7QUFJQUYsZUFBV0ksVUFBWCxDQUFzQmIsUUFBdEI7QUFDRCxHQVBNLENBQVA7QUFRRDs7QUFFTSxTQUFTRixPQUFULENBQWlCRSxRQUFqQixFQUF1RDtBQUFBLE1BQTVCYyxTQUE0Qjs7QUFDNUQsU0FBT1QsWUFBWUwsUUFBWixFQUFzQmUsSUFBdEIsQ0FDTDtBQUFBLFdBQVlDLFVBQVVGLFVBQVVFLE9BQVYsQ0FBVixHQUErQixJQUEzQztBQUFBLEdBREssQ0FBUDtBQUdEOztBQUVELFNBQVNDLGVBQVQsQ0FBeUJqQixRQUF6QixFQUFtQztBQUNqQyxTQUFPLElBQUlNLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsUUFBTUMsYUFBYSx3QkFBbkI7QUFDQUEsZUFBV0MsTUFBWCxHQUFvQixpQkFBd0I7QUFBQSxVQUFiQyxNQUFhLFNBQXRCQyxNQUFzQixDQUFiRCxNQUFhOztBQUMxQyxVQUFJO0FBQ0YsWUFBTU8sTUFBTUMsS0FBS0MsS0FBTCxDQUFXVCxNQUFYLENBQVo7QUFDQUosZ0JBQVFXLEdBQVI7QUFDRCxPQUhELENBR0UsT0FBT0csR0FBUCxFQUFZO0FBQ1pkLGdCQUFRLElBQVI7QUFDRDtBQUNGLEtBUEQ7O0FBU0FFLGVBQVdJLFVBQVgsQ0FBc0JiLFFBQXRCO0FBQ0QsR0FaTSxDQUFQO0FBYUQ7O0FBRU0sU0FBU0QsV0FBVCxDQUFxQkMsUUFBckIsRUFBMkQ7QUFBQSxNQUE1QmMsU0FBNEI7O0FBQ2hFLFNBQU9HLGdCQUFnQmpCLFFBQWhCLEVBQTBCZSxJQUExQixDQUNMO0FBQUEsV0FBWUMsVUFBVUYsVUFBVUUsT0FBVixDQUFWLEdBQStCLElBQTNDO0FBQUEsR0FESyxDQUFQO0FBR0QiLCJmaWxlIjoiZmlsZS1oYW5kbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGaWxlUmVhZGVyfSBmcm9tICdnbG9iYWwvd2luZG93JztcbmltcG9ydCB7cHJvY2Vzc0NzdkRhdGEsIHByb2Nlc3NHZW9qc29ufSBmcm9tICcuL2RhdGEtcHJvY2Vzc29yJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbGVIYW5kbGVyKGZpbGVCbG9iKSB7XG4gIGNvbnN0IHR5cGUgPSBnZXRGaWxlVHlwZShmaWxlQmxvYi5uYW1lKTtcblxuICByZXR1cm4gdHlwZSA9PT0gJ2NzdicgPyBsb2FkQ3N2IDogdHlwZSA9PT0gJ2dlb2pzb24nID8gbG9hZEdlb0pTT04gOiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsZVR5cGUoZmlsZW5hbWUpIHtcbiAgaWYgKGZpbGVuYW1lLmVuZHNXaXRoKCdjc3YnKSkge1xuICAgIHJldHVybiAnY3N2JztcbiAgfSBlbHNlIGlmIChmaWxlbmFtZS5lbmRzV2l0aCgnanNvbicpIHx8IGZpbGVuYW1lLmVuZHNXaXRoKCdnZW9qc29uJykpIHtcbiAgICAvLyBSZWFkIEdlb0pzb24gZnJvbSBicm93c2VyXG4gICAgcmV0dXJuICdnZW9qc29uJztcbiAgfVxuXG4gIC8vIFdhaXQgdG8gYWRkIG90aGVyIGZpbGUgdHlwZSBoYW5kbGVyXG4gIHJldHVybiAnb3RoZXInO1xufVxuXG5mdW5jdGlvbiByZWFkQ1NWRmlsZShmaWxlQmxvYikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGZpbGVSZWFkZXIub25sb2FkID0gKHt0YXJnZXQ6IHtyZXN1bHR9fSkgPT4ge1xuICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgIH07XG5cbiAgICBmaWxlUmVhZGVyLnJlYWRBc1RleHQoZmlsZUJsb2IpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDc3YoZmlsZUJsb2IsIHByb2Nlc3NvciA9IHByb2Nlc3NDc3ZEYXRhKSB7XG4gIHJldHVybiByZWFkQ1NWRmlsZShmaWxlQmxvYikudGhlbihcbiAgICByYXdEYXRhID0+IChyYXdEYXRhID8gcHJvY2Vzc29yKHJhd0RhdGEpIDogbnVsbClcbiAgKTtcbn1cblxuZnVuY3Rpb24gcmVhZEdlb0pTT05GaWxlKGZpbGVCbG9iKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoe3RhcmdldDoge3Jlc3VsdH19KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBnZW8gPSBKU09OLnBhcnNlKHJlc3VsdCk7XG4gICAgICAgIHJlc29sdmUoZ2VvKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmaWxlUmVhZGVyLnJlYWRBc1RleHQoZmlsZUJsb2IpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRHZW9KU09OKGZpbGVCbG9iLCBwcm9jZXNzb3IgPSBwcm9jZXNzR2VvanNvbikge1xuICByZXR1cm4gcmVhZEdlb0pTT05GaWxlKGZpbGVCbG9iKS50aGVuKFxuICAgIHJhd0RhdGEgPT4gKHJhd0RhdGEgPyBwcm9jZXNzb3IocmF3RGF0YSkgOiBudWxsKVxuICApO1xufVxuIl19