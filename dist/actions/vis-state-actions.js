'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layerConfigChange = layerConfigChange;
exports.layerTypeChange = layerTypeChange;
exports.layerVisualChannelConfigChange = layerVisualChannelConfigChange;
exports.layerVisConfigChange = layerVisConfigChange;
exports.updateLayerBlending = updateLayerBlending;
exports.interactionConfigChange = interactionConfigChange;
exports.setFilter = setFilter;
exports.addFilter = addFilter;
exports.addLayer = addLayer;
exports.reorderLayer = reorderLayer;
exports.removeFilter = removeFilter;
exports.removeLayer = removeLayer;
exports.removeDataset = removeDataset;
exports.showDatasetTable = showDatasetTable;
exports.updateVisData = updateVisData;
exports.toggleAnimation = toggleAnimation;
exports.enlargeFilter = enlargeFilter;
exports.onLayerHover = onLayerHover;
exports.onLayerClick = onLayerClick;
exports.onMapClick = onMapClick;
exports.toggleLayerForMap = toggleLayerForMap;
exports.setVisibleLayersForMap = setVisibleLayersForMap;
exports.setFilterPlot = setFilterPlot;
exports.loadFiles = loadFiles;
exports.loadFilesErr = loadFilesErr;

var _actionTypes = require('../constants/action-types');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function layerConfigChange(oldLayer, newConfig) {
  return {
    type: _actionTypes2.default.LAYER_CONFIG_CHANGE,
    oldLayer: oldLayer,
    newConfig: newConfig
  };
} // vis-state-reducer
function layerTypeChange(oldLayer, newType) {
  return {
    type: _actionTypes2.default.LAYER_TYPE_CHANGE,
    oldLayer: oldLayer,
    newType: newType
  };
}

function layerVisualChannelConfigChange(oldLayer, newConfig, channel) {
  return {
    type: _actionTypes2.default.LAYER_VISUAL_CHANNEL_CHANGE,
    oldLayer: oldLayer,
    newConfig: newConfig,
    channel: channel
  };
}

function layerVisConfigChange(oldLayer, newVisConfig) {
  return {
    type: _actionTypes2.default.LAYER_VIS_CONFIG_CHANGE,
    oldLayer: oldLayer,
    newVisConfig: newVisConfig
  };
}

function updateLayerBlending(mode) {
  return {
    type: _actionTypes2.default.UPDATE_LAYER_BLENDING,
    mode: mode
  };
}

function interactionConfigChange(config) {
  return {
    type: _actionTypes2.default.INTERACTION_CONFIG_CHANGE,
    config: config
  };
}

function setFilter(idx, prop, value) {
  return {
    type: _actionTypes2.default.SET_FILTER,
    idx: idx,
    prop: prop,
    value: value
  };
}

function addFilter(dataId) {
  return {
    type: _actionTypes2.default.ADD_FILTER,
    dataId: dataId
  };
}

function addLayer() {
  return {
    type: _actionTypes2.default.ADD_LAYER
  };
}

function reorderLayer(order) {
  return {
    type: _actionTypes2.default.REORDER_LAYER,
    order: order
  };
}

function removeFilter(idx) {
  return {
    type: _actionTypes2.default.REMOVE_FILTER,
    idx: idx
  };
}

function removeLayer(idx) {
  return {
    type: _actionTypes2.default.REMOVE_LAYER,
    idx: idx
  };
}

function removeDataset(key) {
  return {
    type: _actionTypes2.default.REMOVE_DATASET,
    key: key
  };
}

function showDatasetTable(dataId) {
  return {
    type: _actionTypes2.default.SHOW_DATASET_TABLE,
    dataId: dataId
  };
}

/**
 *
 * @param datasets - Array of datasets :
 * {info: {id: '', color: hex, label: '']}, data: {fields: [], rows: []}}
 * @param options
 * @returns {{type: null, datasets: *, options: *}}
 */
function updateVisData(datasets, options) {
  return {
    type: _actionTypes2.default.UPDATE_VIS_DATA,
    datasets: datasets,
    options: options
  };
}

function toggleAnimation(idx) {
  return {
    type: _actionTypes2.default.TOGGLE_FILTER_ANIMATION,
    idx: idx
  };
}

function enlargeFilter(idx) {
  return {
    type: _actionTypes2.default.ENLARGE_FILTER,
    idx: idx
  };
}

function onLayerHover(info) {
  return {
    type: _actionTypes2.default.LAYER_HOVER,
    info: info
  };
}

function onLayerClick(info) {
  return {
    type: _actionTypes2.default.LAYER_CLICK,
    info: info
  };
}

function onMapClick() {
  return {
    type: _actionTypes2.default.MAP_CLICK
  };
}

/**
 * Toggle a single layer for a give map
 * @param mapIndex
 * @param layerId
 * @returns {{type: *, mapIndex: *, layerId: *}}
 */
function toggleLayerForMap(mapIndex, layerId) {
  return {
    type: _actionTypes2.default.TOGGLE_LAYER_FOR_MAP,
    mapIndex: mapIndex,
    layerId: layerId
  };
}

/**
 * Toggle layer visibility on split views
 * @param layerIndex the layer we want to toggle visibility on
 * @param mapIndex the map index
 * @returns {{type: null, layerIndex: *, mapIndex: *}}
 */
function setVisibleLayersForMap(mapIndex, layerIds) {
  return {
    type: _actionTypes2.default.SET_VISIBLE_LAYERS_FOR_MAP,
    mapIndex: mapIndex,
    layerIds: layerIds
  };
}

function setFilterPlot(idx, newProp) {
  return {
    type: _actionTypes2.default.SET_FILTER_PLOT,
    idx: idx,
    newProp: newProp
  };
}

function loadFiles(files) {
  return {
    type: _actionTypes2.default.LOAD_FILES,
    files: files
  };
}

function loadFilesErr(error) {
  return {
    type: _actionTypes2.default.LOAD_FILES_ERR,
    error: error
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3Zpcy1zdGF0ZS1hY3Rpb25zLmpzIl0sIm5hbWVzIjpbImxheWVyQ29uZmlnQ2hhbmdlIiwibGF5ZXJUeXBlQ2hhbmdlIiwibGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlIiwibGF5ZXJWaXNDb25maWdDaGFuZ2UiLCJ1cGRhdGVMYXllckJsZW5kaW5nIiwiaW50ZXJhY3Rpb25Db25maWdDaGFuZ2UiLCJzZXRGaWx0ZXIiLCJhZGRGaWx0ZXIiLCJhZGRMYXllciIsInJlb3JkZXJMYXllciIsInJlbW92ZUZpbHRlciIsInJlbW92ZUxheWVyIiwicmVtb3ZlRGF0YXNldCIsInNob3dEYXRhc2V0VGFibGUiLCJ1cGRhdGVWaXNEYXRhIiwidG9nZ2xlQW5pbWF0aW9uIiwiZW5sYXJnZUZpbHRlciIsIm9uTGF5ZXJIb3ZlciIsIm9uTGF5ZXJDbGljayIsIm9uTWFwQ2xpY2siLCJ0b2dnbGVMYXllckZvck1hcCIsInNldFZpc2libGVMYXllcnNGb3JNYXAiLCJzZXRGaWx0ZXJQbG90IiwibG9hZEZpbGVzIiwibG9hZEZpbGVzRXJyIiwib2xkTGF5ZXIiLCJuZXdDb25maWciLCJ0eXBlIiwiTEFZRVJfQ09ORklHX0NIQU5HRSIsIm5ld1R5cGUiLCJMQVlFUl9UWVBFX0NIQU5HRSIsImNoYW5uZWwiLCJMQVlFUl9WSVNVQUxfQ0hBTk5FTF9DSEFOR0UiLCJuZXdWaXNDb25maWciLCJMQVlFUl9WSVNfQ09ORklHX0NIQU5HRSIsIm1vZGUiLCJVUERBVEVfTEFZRVJfQkxFTkRJTkciLCJjb25maWciLCJJTlRFUkFDVElPTl9DT05GSUdfQ0hBTkdFIiwiaWR4IiwicHJvcCIsInZhbHVlIiwiU0VUX0ZJTFRFUiIsImRhdGFJZCIsIkFERF9GSUxURVIiLCJBRERfTEFZRVIiLCJvcmRlciIsIlJFT1JERVJfTEFZRVIiLCJSRU1PVkVfRklMVEVSIiwiUkVNT1ZFX0xBWUVSIiwia2V5IiwiUkVNT1ZFX0RBVEFTRVQiLCJTSE9XX0RBVEFTRVRfVEFCTEUiLCJkYXRhc2V0cyIsIm9wdGlvbnMiLCJVUERBVEVfVklTX0RBVEEiLCJUT0dHTEVfRklMVEVSX0FOSU1BVElPTiIsIkVOTEFSR0VfRklMVEVSIiwiaW5mbyIsIkxBWUVSX0hPVkVSIiwiTEFZRVJfQ0xJQ0siLCJNQVBfQ0xJQ0siLCJtYXBJbmRleCIsImxheWVySWQiLCJUT0dHTEVfTEFZRVJfRk9SX01BUCIsImxheWVySWRzIiwiU0VUX1ZJU0lCTEVfTEFZRVJTX0ZPUl9NQVAiLCJuZXdQcm9wIiwiU0VUX0ZJTFRFUl9QTE9UIiwiZmlsZXMiLCJMT0FEX0ZJTEVTIiwiZXJyb3IiLCJMT0FEX0ZJTEVTX0VSUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFHZ0JBLGlCLEdBQUFBLGlCO1FBUUFDLGUsR0FBQUEsZTtRQVFBQyw4QixHQUFBQSw4QjtRQVNBQyxvQixHQUFBQSxvQjtRQVFBQyxtQixHQUFBQSxtQjtRQU9BQyx1QixHQUFBQSx1QjtRQU9BQyxTLEdBQUFBLFM7UUFTQUMsUyxHQUFBQSxTO1FBT0FDLFEsR0FBQUEsUTtRQU1BQyxZLEdBQUFBLFk7UUFPQUMsWSxHQUFBQSxZO1FBT0FDLFcsR0FBQUEsVztRQU9BQyxhLEdBQUFBLGE7UUFPQUMsZ0IsR0FBQUEsZ0I7UUFjQUMsYSxHQUFBQSxhO1FBUUFDLGUsR0FBQUEsZTtRQU9BQyxhLEdBQUFBLGE7UUFPQUMsWSxHQUFBQSxZO1FBT0FDLFksR0FBQUEsWTtRQU9BQyxVLEdBQUFBLFU7UUFZQUMsaUIsR0FBQUEsaUI7UUFjQUMsc0IsR0FBQUEsc0I7UUFRQUMsYSxHQUFBQSxhO1FBUUFDLFMsR0FBQUEsUztRQU9BQyxZLEdBQUFBLFk7O0FBdE1oQjs7Ozs7O0FBRU8sU0FBU3hCLGlCQUFULENBQTJCeUIsUUFBM0IsRUFBcUNDLFNBQXJDLEVBQWdEO0FBQ3JELFNBQU87QUFDTEMsVUFBTSxzQkFBWUMsbUJBRGI7QUFFTEgsc0JBRks7QUFHTEM7QUFISyxHQUFQO0FBS0QsQyxDQVREO0FBV08sU0FBU3pCLGVBQVQsQ0FBeUJ3QixRQUF6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QU0sc0JBQVlpQyxXQURiO0FBRUxGO0FBRkssR0FBUDtBQUlEOztBQUVNLFNBQVN2QyxVQUFULEdBQXNCO0FBQzNCLFNBQU87QUFDTFEsVUFBTSxzQkFBWWtDO0FBRGIsR0FBUDtBQUdEOztBQUVEOzs7Ozs7QUFNTyxTQUFTekMsaUJBQVQsQ0FBMkIwQyxRQUEzQixFQUFxQ0MsT0FBckMsRUFBOEM7QUFDbkQsU0FBTztBQUNMcEMsVUFBTSxzQkFBWXFDLG9CQURiO0FBRUxGLHNCQUZLO0FBR0xDO0FBSEssR0FBUDtBQUtEOztBQUVEOzs7Ozs7QUFNTyxTQUFTMUMsc0JBQVQsQ0FBZ0N5QyxRQUFoQyxFQUEwQ0csUUFBMUMsRUFBb0Q7QUFDekQsU0FBTztBQUNMdEMsVUFBTSxzQkFBWXVDLDBCQURiO0FBRUxKLHNCQUZLO0FBR0xHO0FBSEssR0FBUDtBQUtEOztBQUVNLFNBQVMzQyxhQUFULENBQXVCaUIsR0FBdkIsRUFBNEI0QixPQUE1QixFQUFxQztBQUMxQyxTQUFPO0FBQ0x4QyxVQUFNLHNCQUFZeUMsZUFEYjtBQUVMN0IsWUFGSztBQUdMNEI7QUFISyxHQUFQO0FBS0Q7O0FBRU0sU0FBUzVDLFNBQVQsQ0FBbUI4QyxLQUFuQixFQUEwQjtBQUMvQixTQUFPO0FBQ0wxQyxVQUFNLHNCQUFZMkMsVUFEYjtBQUVMRDtBQUZLLEdBQVA7QUFJRDs7QUFFTSxTQUFTN0MsWUFBVCxDQUFzQitDLEtBQXRCLEVBQTZCO0FBQ2xDLFNBQU87QUFDTDVDLFVBQU0sc0JBQVk2QyxjQURiO0FBRUxEO0FBRkssR0FBUDtBQUlEIiwiZmlsZSI6InZpcy1zdGF0ZS1hY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdmlzLXN0YXRlLXJlZHVjZXJcbmltcG9ydCBBY3Rpb25UeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxheWVyQ29uZmlnQ2hhbmdlKG9sZExheWVyLCBuZXdDb25maWcpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9DT05GSUdfQ0hBTkdFLFxuICAgIG9sZExheWVyLFxuICAgIG5ld0NvbmZpZ1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJUeXBlQ2hhbmdlKG9sZExheWVyLCBuZXdUeXBlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfVFlQRV9DSEFOR0UsXG4gICAgb2xkTGF5ZXIsXG4gICAgbmV3VHlwZVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlKG9sZExheWVyLCBuZXdDb25maWcsIGNoYW5uZWwpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9WSVNVQUxfQ0hBTk5FTF9DSEFOR0UsXG4gICAgb2xkTGF5ZXIsXG4gICAgbmV3Q29uZmlnLFxuICAgIGNoYW5uZWxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxheWVyVmlzQ29uZmlnQ2hhbmdlKG9sZExheWVyLCBuZXdWaXNDb25maWcpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9WSVNfQ09ORklHX0NIQU5HRSxcbiAgICBvbGRMYXllcixcbiAgICBuZXdWaXNDb25maWdcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxheWVyQmxlbmRpbmcobW9kZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlVQREFURV9MQVlFUl9CTEVORElORyxcbiAgICBtb2RlXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcmFjdGlvbkNvbmZpZ0NoYW5nZShjb25maWcpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5JTlRFUkFDVElPTl9DT05GSUdfQ0hBTkdFLFxuICAgIGNvbmZpZ1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RmlsdGVyKGlkeCwgcHJvcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TRVRfRklMVEVSLFxuICAgIGlkeCxcbiAgICBwcm9wLFxuICAgIHZhbHVlXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRGaWx0ZXIoZGF0YUlkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuQUREX0ZJTFRFUixcbiAgICBkYXRhSWRcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExheWVyKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLkFERF9MQVlFUlxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVvcmRlckxheWVyKG9yZGVyKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuUkVPUkRFUl9MQVlFUixcbiAgICBvcmRlclxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRmlsdGVyKGlkeCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlJFTU9WRV9GSUxURVIsXG4gICAgaWR4XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVMYXllcihpZHgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5SRU1PVkVfTEFZRVIsXG4gICAgaWR4XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVEYXRhc2V0KGtleSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlJFTU9WRV9EQVRBU0VULFxuICAgIGtleVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0RhdGFzZXRUYWJsZShkYXRhSWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TSE9XX0RBVEFTRVRfVEFCTEUsXG4gICAgZGF0YUlkXG4gIH07XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBkYXRhc2V0cyAtIEFycmF5IG9mIGRhdGFzZXRzIDpcbiAqIHtpbmZvOiB7aWQ6ICcnLCBjb2xvcjogaGV4LCBsYWJlbDogJyddfSwgZGF0YToge2ZpZWxkczogW10sIHJvd3M6IFtdfX1cbiAqIEBwYXJhbSBvcHRpb25zXG4gKiBAcmV0dXJucyB7e3R5cGU6IG51bGwsIGRhdGFzZXRzOiAqLCBvcHRpb25zOiAqfX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVZpc0RhdGEoZGF0YXNldHMsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5VUERBVEVfVklTX0RBVEEsXG4gICAgZGF0YXNldHMsXG4gICAgb3B0aW9uc1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQW5pbWF0aW9uKGlkeCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlRPR0dMRV9GSUxURVJfQU5JTUFUSU9OLFxuICAgIGlkeFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5sYXJnZUZpbHRlcihpZHgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5FTkxBUkdFX0ZJTFRFUixcbiAgICBpZHhcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTGF5ZXJIb3ZlcihpbmZvKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfSE9WRVIsXG4gICAgaW5mb1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25MYXllckNsaWNrKGluZm8pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9DTElDSyxcbiAgICBpbmZvXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk1hcENsaWNrKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLk1BUF9DTElDS1xuICB9O1xufVxuXG4vKipcbiAqIFRvZ2dsZSBhIHNpbmdsZSBsYXllciBmb3IgYSBnaXZlIG1hcFxuICogQHBhcmFtIG1hcEluZGV4XG4gKiBAcGFyYW0gbGF5ZXJJZFxuICogQHJldHVybnMge3t0eXBlOiAqLCBtYXBJbmRleDogKiwgbGF5ZXJJZDogKn19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVMYXllckZvck1hcChtYXBJbmRleCwgbGF5ZXJJZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlRPR0dMRV9MQVlFUl9GT1JfTUFQLFxuICAgIG1hcEluZGV4LFxuICAgIGxheWVySWRcbiAgfTtcbn1cblxuLyoqXG4gKiBUb2dnbGUgbGF5ZXIgdmlzaWJpbGl0eSBvbiBzcGxpdCB2aWV3c1xuICogQHBhcmFtIGxheWVySW5kZXggdGhlIGxheWVyIHdlIHdhbnQgdG8gdG9nZ2xlIHZpc2liaWxpdHkgb25cbiAqIEBwYXJhbSBtYXBJbmRleCB0aGUgbWFwIGluZGV4XG4gKiBAcmV0dXJucyB7e3R5cGU6IG51bGwsIGxheWVySW5kZXg6ICosIG1hcEluZGV4OiAqfX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFZpc2libGVMYXllcnNGb3JNYXAobWFwSW5kZXgsIGxheWVySWRzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0VUX1ZJU0lCTEVfTEFZRVJTX0ZPUl9NQVAsXG4gICAgbWFwSW5kZXgsXG4gICAgbGF5ZXJJZHNcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEZpbHRlclBsb3QoaWR4LCBuZXdQcm9wKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0VUX0ZJTFRFUl9QTE9ULFxuICAgIGlkeCxcbiAgICBuZXdQcm9wXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRmlsZXMoZmlsZXMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MT0FEX0ZJTEVTLFxuICAgIGZpbGVzXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRmlsZXNFcnIoZXJyb3IpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MT0FEX0ZJTEVTX0VSUixcbiAgICBlcnJvclxuICB9O1xufVxuIl19