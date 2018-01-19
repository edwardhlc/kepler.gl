'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LAYER_VIS_CONFIGS = exports.PROPERTY_GROUPS = undefined;

var _keymirror = require('keymirror');

var _keymirror2 = _interopRequireDefault(_keymirror);

var _defaultSettings = require('../constants/default-settings');

var _uberVizColors = require('../constants/uber-viz-colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PROPERTY_GROUPS = exports.PROPERTY_GROUPS = (0, _keymirror2.default)({
  color: null,
  stroke: null,
  radius: null,
  height: null,

  // for heatmap aggregation
  cell: null,
  display: null
});

var LAYER_VIS_CONFIGS = exports.LAYER_VIS_CONFIGS = {
  thickness: {
    type: 'number',
    defaultValue: 2,
    label: 'Stroke Width',
    isRanged: false,
    range: [0, 100],
    step: 0.1,
    group: PROPERTY_GROUPS.stroke,
    property: 'thickness'
  },
  strokeWidthRange: {
    type: 'number',
    defaultValue: [0, 10],
    label: 'Stroke Width Range',
    isRanged: true,
    range: [0, 200],
    step: 0.1,
    group: PROPERTY_GROUPS.stroke,
    property: 'sizeRange'
  },
  // radius is actually radiusScale in deck.gl
  radius: {
    type: 'number',
    defaultValue: 10,
    label: 'Radius',
    isRanged: false,
    range: [0, 100],
    step: 0.1,
    group: PROPERTY_GROUPS.radius,
    property: 'radius'
  },
  fixedRadius: {
    defaultValue: false,
    type: 'boolean',
    label: 'Fixed Radius to meter',
    description: 'Map radius to absolute radius in meters, e.g. 5 to 5 meters',
    group: PROPERTY_GROUPS.radius,
    property: 'fixedRadius'
  },
  radiusRange: {
    type: 'number',
    defaultValue: [0, 50],
    isRanged: true,
    range: [0, 500],
    step: 0.1,
    label: 'Radius Range',
    group: PROPERTY_GROUPS.radius,
    property: 'radiusRange'
  },
  clusterRadius: {
    type: 'number',
    label: 'Cluster Size (m)',
    defaultValue: 40,
    isRanged: false,
    range: [1, 500],
    step: 0.1,
    group: PROPERTY_GROUPS.radius,
    property: 'clusterRadius'
  },
  clusterRadiusRange: {
    type: 'number',
    label: 'Radius Range (m)',
    defaultValue: [1, 40],
    isRanged: true,
    range: [1, 150],
    step: 0.1,
    group: PROPERTY_GROUPS.radius,
    property: 'radiusRange'
  },
  opacity: {
    type: 'number',
    defaultValue: 0.8,
    label: 'Opacity',
    isRanged: false,
    range: [0, 1],
    step: 0.01,
    group: PROPERTY_GROUPS.color,
    property: 'opacity'
  },
  coverage: {
    type: 'number',
    defaultValue: 1,
    label: 'Coverage',
    isRanged: false,
    range: [0, 1],
    step: 0.01,
    group: PROPERTY_GROUPS.cell,
    property: 'coverage'
  },
  outline: {
    type: 'boolean',
    defaultValue: false,
    label: 'Draw outline',
    group: PROPERTY_GROUPS.display,
    property: 'outline'
  },
  colorRange: {
    type: 'color-range-select',
    defaultValue: _uberVizColors.defaultUberColorRange,
    label: 'Color range',
    group: PROPERTY_GROUPS.color,
    property: 'colorRange'
  },
  targetColor: {
    type: 'color-select',
    label: 'Target Color',
    defaultValue: null,
    group: PROPERTY_GROUPS.color,
    property: 'targetColor'
  },
  aggregation: {
    type: 'select',
    defaultValue: _defaultSettings.AGGREGATION_TYPES.average,
    label: 'Color Aggregation',
    options: Object.keys(_defaultSettings.AGGREGATION_TYPES),
    group: PROPERTY_GROUPS.color,
    property: 'colorAggregation'
  },
  percentile: {
    type: 'number',
    defaultValue: [0, 100],
    label: function label(config) {
      return 'Filter by ' + (config.colorField ? config.visConfig.colorAggregation + ' ' + config.colorField.name : 'count') + ' percentile';
    },
    isRanged: true,
    range: [0, 100],
    step: 0.01,
    group: PROPERTY_GROUPS.color,
    property: 'percentile'
  },
  elevationPercentile: {
    type: 'number',
    defaultValue: [0, 100],
    label: function label(config) {
      return 'Filter by ' + (config.sizeField ? config.visConfig.sizeAggregation + ' ' + config.sizeField.name : 'count') + ' percentile';
    },
    isRanged: true,
    range: [0, 100],
    step: 0.01,
    group: PROPERTY_GROUPS.height,
    property: 'elevationPercentile'
  },
  resolution: {
    type: 'number',
    defaultValue: 8,
    label: 'Resolution range',
    isRanged: false,
    range: [0, 13],
    step: 1,
    group: PROPERTY_GROUPS.cell,
    property: 'resolution'
  },
  worldUnitSize: {
    type: 'number',
    defaultValue: 1,
    label: 'World Unit Size',
    isRanged: false,
    range: [0.01, 500],
    step: 0.01,
    group: PROPERTY_GROUPS.cell,
    property: 'worldUnitSize'
  },
  elevationScale: {
    type: 'number',
    defaultValue: 5,
    label: 'Elevation Scale',
    isRanged: false,
    range: [0, 100],
    step: 1,
    group: PROPERTY_GROUPS.height,
    property: 'elevationScale'
  },
  elevationRange: {
    type: 'number',
    defaultValue: [0, 500],
    label: 'Height Scale',
    isRanged: true,
    range: [0, 1000],
    step: 0.01,
    group: PROPERTY_GROUPS.height,
    property: 'sizeRange'
  },
  'hi-precision': {
    type: 'boolean',
    defaultValue: false,
    label: 'High Precision Rendering',
    group: PROPERTY_GROUPS.display,
    property: 'hi-precision',
    description: 'High precision will result in slower performance'
  },
  enable3d: {
    type: 'boolean',
    defaultValue: false,
    label: 'Enable Height',
    group: PROPERTY_GROUPS.height,
    property: 'enable3d',
    description: 'Click button at top right of the map to switch to 3d view'
  },
  stroked: {
    type: 'boolean',
    label: 'Polygon Stroke',
    defaultValue: true,
    group: PROPERTY_GROUPS.display,
    property: 'stroked'
  },
  filled: {
    type: 'boolean',
    label: 'Polygon Fill',
    defaultValue: false,
    group: PROPERTY_GROUPS.display,
    property: 'filled'
  },
  extruded: {
    type: 'boolean',
    defaultValue: false,
    label: 'Enable Polygon Height',
    group: PROPERTY_GROUPS.display,
    property: 'extruded'
  },
  wireframe: {
    type: 'boolean',
    defaultValue: false,
    label: 'Show Wireframe',
    group: PROPERTY_GROUPS.display,
    property: 'wireframe'
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9rZXBsZXJnbC1sYXllcnMvbGF5ZXItZmFjdG9yeS5qcyJdLCJuYW1lcyI6WyJQUk9QRVJUWV9HUk9VUFMiLCJjb2xvciIsInN0cm9rZSIsInJhZGl1cyIsImhlaWdodCIsImNlbGwiLCJkaXNwbGF5IiwiTEFZRVJfVklTX0NPTkZJR1MiLCJ0aGlja25lc3MiLCJ0eXBlIiwiZGVmYXVsdFZhbHVlIiwibGFiZWwiLCJpc1JhbmdlZCIsInJhbmdlIiwic3RlcCIsImdyb3VwIiwicHJvcGVydHkiLCJzdHJva2VXaWR0aFJhbmdlIiwiZml4ZWRSYWRpdXMiLCJkZXNjcmlwdGlvbiIsInJhZGl1c1JhbmdlIiwiY2x1c3RlclJhZGl1cyIsImNsdXN0ZXJSYWRpdXNSYW5nZSIsIm9wYWNpdHkiLCJjb3ZlcmFnZSIsIm91dGxpbmUiLCJjb2xvclJhbmdlIiwidGFyZ2V0Q29sb3IiLCJhZ2dyZWdhdGlvbiIsImF2ZXJhZ2UiLCJvcHRpb25zIiwiT2JqZWN0Iiwia2V5cyIsInBlcmNlbnRpbGUiLCJjb25maWciLCJjb2xvckZpZWxkIiwidmlzQ29uZmlnIiwiY29sb3JBZ2dyZWdhdGlvbiIsIm5hbWUiLCJlbGV2YXRpb25QZXJjZW50aWxlIiwic2l6ZUZpZWxkIiwic2l6ZUFnZ3JlZ2F0aW9uIiwicmVzb2x1dGlvbiIsIndvcmxkVW5pdFNpemUiLCJlbGV2YXRpb25TY2FsZSIsImVsZXZhdGlvblJhbmdlIiwiZW5hYmxlM2QiLCJzdHJva2VkIiwiZmlsbGVkIiwiZXh0cnVkZWQiLCJ3aXJlZnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBOztBQUVBOzs7O0FBRU8sSUFBTUEsNENBQWtCLHlCQUFVO0FBQ3ZDQyxTQUFPLElBRGdDO0FBRXZDQyxVQUFRLElBRitCO0FBR3ZDQyxVQUFRLElBSCtCO0FBSXZDQyxVQUFRLElBSitCOztBQU12QztBQUNBQyxRQUFNLElBUGlDO0FBUXZDQyxXQUFTO0FBUjhCLENBQVYsQ0FBeEI7O0FBV0Es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TWRHLGlCQUFhO0FBTkMsR0E3TGU7QUFxTS9CMkIsWUFBVTtBQUNSckMsVUFBTSxTQURFO0FBRVJDLGtCQUFjLEtBRk47QUFHUkMsV0FBTyxlQUhDO0FBSVJJLFdBQU9mLGdCQUFnQkksTUFKZjtBQUtSWSxjQUFVLFVBTEY7QUFNUkcsaUJBQWE7QUFOTCxHQXJNcUI7QUE2TS9CNEIsV0FBUztBQUNQdEMsVUFBTSxTQURDO0FBRVBFLFdBQU8sZ0JBRkE7QUFHUEQsa0JBQWMsSUFIUDtBQUlQSyxXQUFPZixnQkFBZ0JNLE9BSmhCO0FBS1BVLGNBQVU7QUFMSCxHQTdNc0I7QUFvTi9CZ0MsVUFBUTtBQUNOdkMsVUFBTSxTQURBO0FBRU5FLFdBQU8sY0FGRDtBQUdORCxrQkFBYyxLQUhSO0FBSU5LLFdBQU9mLGdCQUFnQk0sT0FKakI7QUFLTlUsY0FBVTtBQUxKLEdBcE51QjtBQTJOL0JpQyxZQUFVO0FBQ1J4QyxVQUFNLFNBREU7QUFFUkMsa0JBQWMsS0FGTjtBQUdSQyxXQUFPLHVCQUhDO0FBSVJJLFdBQU9mLGdCQUFnQk0sT0FKZjtBQUtSVSxjQUFVO0FBTEYsR0EzTnFCO0FBa08vQmtDLGFBQVc7QUFDVHpDLFVBQU0sU0FERztBQUVUQyxrQkFBYyxLQUZMO0FBR1RDLFdBQU8sZ0JBSEU7QUFJVEksV0FBT2YsZ0JBQWdCTSxPQUpkO0FBS1RVLGNBQVU7QUFMRDtBQWxPb0IsQ0FBMUIiLCJmaWxlIjoibGF5ZXItZmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBrZXlNaXJyb3IgZnJvbSAna2V5bWlycm9yJztcblxuaW1wb3J0IHtBR0dSRUdBVElPTl9UWVBFU30gZnJvbSAnLi4vY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5pbXBvcnQge2RlZmF1bHRVYmVyQ29sb3JSYW5nZX0gZnJvbSAnLi4vY29uc3RhbnRzL3ViZXItdml6LWNvbG9ycyc7XG5cbmV4cG9ydCBjb25zdCBQUk9QRVJUWV9HUk9VUFMgPSBrZXlNaXJyb3Ioe1xuICBjb2xvcjogbnVsbCxcbiAgc3Ryb2tlOiBudWxsLFxuICByYWRpdXM6IG51bGwsXG4gIGhlaWdodDogbnVsbCxcblxuICAvLyBmb3IgaGVhdG1hcCBhZ2dyZWdhdGlvblxuICBjZWxsOiBudWxsLFxuICBkaXNwbGF5OiBudWxsXG59KTtcblxuZXhwb3J0IGNvbnN0IExBWUVSX1ZJU19DT05GSUdTID0ge1xuICB0aGlja25lc3M6IHtcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICBkZWZhdWx0VmFsdWU6IDIsXG4gICAgbGFiZWw6ICdTdHJva2UgV2lkdGgnLFxuICAgIGlzUmFuZ2VkOiBmYWxzZSxcbiAgICByYW5nZTogWzAsIDEwMF0sXG4gICAgc3RlcDogMC4xLFxuICAgIGdyb3VwOiBQUk9QRVJUWV9HUk9VUFMuc3Ryb2tlLFxuICAgIHByb3BlcnR5OiAndGhpY2tuZXNzJ1xuICB9LFxuICBzdHJva2VXaWR0aFJhbmdlOiB7XG4gICAgdHlwZTogJ251bWJlcicsXG4gICAgZGVmYXVsdFZhbHVlOiBbMCwgMTBdLFxuICAgIGxhYmVsOiAnU3Ryb2tlIFdpZHRoIFJhbmdlJyxcbiAgICBpc1JhbmdlZDogdHJ1ZSxcbiAgICByYW5nZTogWzAsIDIwMF0sXG4gICAgc3RlcDogMC4xLFxuICAgIGdyb3VwOiBQUk9QRVJUWV9HUk9VUFMuc3Ryb2tlLFxuICAgIHByb3BlcnR5OiAnc2l6ZVJhbmdlJ1xuICB9LFxuICAvLyByYWRpdXMgaXMgYWN0dWFsbHkgcmFkaXVzU2NhbGUgaW4gZGVjay5nbFxuICByYWRpdXM6IHtcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICBkZWZhdWx0VmFsdWU6IDEwLFxuICAgIGxhYmVsOiAnUmFkaXVzJyxcbiAgICBpc1JhbmdlZDogZmFsc2UsXG4gICAgcmFuZ2U6IFswLCAxMDBdLFxuICAgIHN0ZXA6IDAuMSxcbiAgICBncm91cDogUFJPUEVSVFlfR1JPVVBTLnJhZGl1cyxcbiAgICBwcm9wZXJ0eTogJ3JhZGl1cydcbiAgfSxcbiAgZml4ZWRSYWRpdXM6IHtcbiAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBsYWJlbDogJ0ZpeGVkIFJhZGl1cyB0byBtZXRlcicsXG4gICAgZGVzY3JpcHRpb246ICdNYXAgcmFkaXVzIHRvIGFic29sdXRlIHJhZGl1cyBpbiBtZXRlcnMsIGUuZy4gNSB0byA1IG1ldGVycycsXG4gICAgZ3JvdXA6IFBST1BFUlRZX0dST1VQUy5yYWRpdXMsXG4gICAgcHJvcGVydHk6ICdmaXhlZFJhZGl1cydcbiAgfSxcbiAgcmFkaXVzUmFuZ2U6IHtcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICBkZWZhdWx0VmFsdWU6IFswLCA1MF0sXG4gICAgaXNSYW5nZWQ6IHRydWUsXG4gICAgcmFuZ2U6IFswLCA1MDBdLFxuICAgIHN0ZXA6IDAuMSxcbiAgICBsYWJlbDogJ1JhZGl1cyBSYW5nZScsXG4gICAgZ3JvdXA6IFBST1BFUlRZX0dST1VQUy5yYWRpdXMsXG4gICAgcHJvcGVydHk6ICdyYWRpdXNSYW5nZSdcbiAgfSxcbiAgY2x1c3RlclJhZGl1czoge1xuICAgIHR5cGU6ICdudW1iZXInLFxuICAgIGxhYmVsOiAnQ2x1c3RlciBTaXplIChtKScsXG4gICAgZGVmYXVsdFZhbHVlOiA0MCxcbiAgICBpc1JhbmdlZDogZmFsc2UsXG4gICAgcmFuZ2U6IFsxLCA1MDBdLFxuICAgIHN0ZXA6IDAuMSxcbiAgICBncm91cDogUFJPUEVSVFlfR1JPVVBTLnJhZGl1cyxcbiAgICBwcm9wZXJ0eTogJ2NsdXN0ZXJSYWRpdXMnXG4gIH0sXG4gIGNsdXN0ZXJSYWRpdXNSYW5nZToge1xuICAgIHR5cGU6ICdudW1iZXInLFxuICAgIGxhYmVsOiAnUmFkaXVzIFJhbmdlIChtKScsXG4gICAgZGVmYXVsdFZhbHVlOiBbMSwgNDBdLFxuICAgIGlzUmFuZ2VkOiB0cnVlLFxuICAgIHJhbmdlOiBbMSwgMTUwXSxcbiAgICBzdGVwOiAwLjEsXG4gICAgZ3JvdXA6IFBST1BFUlRZX0dST1VQUy5yYWRpdXMsXG4gICAgcHJvcGVydHk6ICdyYWRpdXNSYW5nZSdcbiAgfSxcbiAgb3BhY2l0eToge1xuICAgIHR5cGU6ICdudW1iZXInLFxuICAgIGRlZmF1bHRWYWx1ZTogMC44LFxuICAgIGxhYmVsOiAnT3BhY2l0eScsXG4gICAgaXNSYW5nZWQ6IGZhbHNlLFxuICAgIHJhbmdlOiBbMCwgMV0sXG4gICAgc3RlcDogMC4wMSxcbiAgICBncm91cDogUFJPUEVSVFlfR1JPVVBTLmNvbG9yLFxuICAgIHByb3BlcnR5OiAnb3BhY2l0eSdcbiAgfSxcbiAgY292ZXJhZ2U6IHtcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICBkZWZhdWx0VmFsdWU6IDEsXG4gICAgbGFiZWw6ICdDb3ZlcmFnZScsXG4gICAgaXNSYW5nZWQ6IGZhbHNlLFxuICAgIHJhbmdlOiBbMCwgMV0sXG4gICAgc3RlcDogMC4wMSxcbiAgICBncm91cDogUFJPUEVSVFlfR1JPVVBTLmNlbGwsXG4gICAgcHJvcGVydHk6ICdjb3ZlcmFnZSdcbiAgfSxcbiAgb3V0bGluZToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgIGxhYmVsOiAnRHJhdyBvdXRsaW5lJyxcbiAgICBncm91cDogUFJPUEVSVFlfR1JPVVBTLmRpc3BsYXksXG4gICAgcHJvcGVydHk6ICdvdXRsaW5lJ1xuICB9LFxuICBjb2xvclJhbmdlOiB7XG4gICAgdHlwZTogJ2NvbG9yLXJhbmdlLXNlbGVjdCcsXG4gICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VWJlckNvbG9yUmFuZ2UsXG4gICAgbGFiZWw6ICdDb2xvciByYW5nZScsXG4gICAgZ3JvdXA6IFBST1BFUlRZX0dST1VQUy5jb2xvcixcbiAgICBwcm9wZXJ0eTogJ2NvbG9yUmFuZ2UnXG4gIH0sXG4gIHRhcmdldENvbG9yOiB7XG4gICAgdHlwZTogJ2NvbG9yLXNlbGVjdCcsXG4gICAgbGFiZWw6ICdUYXJnZXQgQ29sb3InLFxuICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICBncm91cDogUFJPUEVSVFlfR1JPVVBTLmNvbG9yLFxuICAgIHByb3BlcnR5OiAndGFyZ2V0Q29sb3InXG4gIH0sXG4gIGFnZ3JlZ2F0aW9uOiB7XG4gICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgZGVmYXVsdFZhbHVlOiBBR0dSRUdBVElPTl9UWVBFUy5hdmVyYWdlLFxuICAgIGxhYmVsOiAnQ29sb3IgQWdncmVnYXRpb24nLFxuICAgIG9wdGlvbnM6IE9iamVjdC5rZXlzKEFHR1JFR0FUSU9OX1RZUEVTKSxcbiAgICBncm91cDogUFJPUEVSVFlfR1JPVVBTLmNvbG9yLFxuICAgIHByb3BlcnR5OiAnY29sb3JBZ2dyZWdhdGlvbidcbiAgfSxcbiAgcGVyY2VudGlsZToge1xuICAgIHR5cGU6ICdudW1iZXInLFxuICAgIGRlZmF1bHRWYWx1ZTogWzAsIDEwMF0sXG4gICAgbGFiZWw6IGNvbmZpZyA9PlxuICAgICAgYEZpbHRlciBieSAke1xuICAgICAgICBjb25maWcuY29sb3JGaWVsZFxuICAgICAgICAgID8gYCR7Y29uZmlnLnZpc0NvbmZpZy5jb2xvckFnZ3JlZ2F0aW9ufSAke2NvbmZpZy5jb2xvckZpZWxkLm5hbWV9YFxuICAgICAgICAgIDogJ2NvdW50J1xuICAgICAgfSBwZXJjZW50aWxlYCxcbiAgICBpc1JhbmdlZDogdHJ1ZSxcbiAgICByYW5nZTogWzAsIDEwMF0sXG4gICAgc3RlcDogMC4wMSxcbiAgICBncm91cDogUFJPUEVSVFlfR1JPVVBTLmNvbG9yLFxuICAgIHByb3BlcnR5OiAncGVyY2VudGlsZSdcbiAgfSxcbiAgZWxldmF0aW9uUGVyY2VudGlsZToge1xuICAgIHR5cGU6ICdudW1iZXInLFxuICAgIGRlZmF1bHRWYWx1ZTogWzAsIDEwMF0sXG4gICAgbGFiZWw6IGNvbmZpZyA9PlxuICAgICAgYEZpbHRlciBieSAke1xuICAgICAgICBjb25maWcuc2l6ZUZpZWxkXG4gICAgICAgICAgPyBgJHtjb25maWcudmlzQ29uZmlnLnNpemVBZ2dyZWdhdGlvbn0gJHtjb25maWcuc2l6ZUZpZWxkLm5hbWV9YFxuICAgICAgICAgIDogJ2NvdW50J1xuICAgICAgfSBwZXJjZW50aWxlYCxcbiAgICBpc1JhbmdlZDogdHJ1ZSxcbiAgICByYW5nZTogWzAsIDEwMF0sXG4gICAgc3RlcDogMC4wMSxcbiAgICBncm91cDogUFJPUEVSVFlfR1JPVVBTLmhlaWdodCxcbiAgICBwcm9wZXJ0eTogJ2VsZXZhdGlvblBlcmNlbnRpbGUnXG4gIH0sXG4gIHJlc29sdXRpb246IHtcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICBkZWZhdWx0VmFsdWU6IDgsXG4gICAgbGFiZWw6ICdSZXNvbHV0aW9uIHJhbmdlJyxcbiAgICBpc1JhbmdlZDogZmFsc2UsXG4gICAgcmFuZ2U6IFswLCAxM10sXG4gICAgc3RlcDogMSxcbiAgICBncm91cDogUFJPUEVSVFlfR1JPVVBTLmNlbGwsXG4gICAgcHJvcGVydHk6ICdyZXNvbHV0aW9uJ1xuICB9LFxuICB3b3JsZFVuaXRTaXplOiB7XG4gICAgdHlwZTogJ251bWJlcicsXG4gICAgZGVmYXVsdFZhbHVlOiAxLFxuICAgIGxhYmVsOiAnV29ybGQgVW5pdCBTaXplJyxcbiAgICBpc1JhbmdlZDogZmFsc2UsXG4gICAgcmFuZ2U6IFswLjAxLCA1MDBdLFxuICAgIHN0ZXA6IDAuMDEsXG4gICAgZ3JvdXA6IFBST1BFUlRZX0dST1VQUy5jZWxsLFxuICAgIHByb3BlcnR5OiAnd29ybGRVbml0U2l6ZSdcbiAgfSxcbiAgZWxldmF0aW9uU2NhbGU6IHtcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICBkZWZhdWx0VmFsdWU6IDUsXG4gICAgbGFiZWw6ICdFbGV2YXRpb24gU2NhbGUnLFxuICAgIGlzUmFuZ2VkOiBmYWxzZSxcbiAgICByYW5nZTogWzAsIDEwMF0sXG4gICAgc3RlcDogMSxcbiAgICBncm91cDogUFJPUEVSVFlfR1JPVVBTLmhlaWdodCxcbiAgICBwcm9wZXJ0eTogJ2VsZXZhdGlvblNjYWxlJ1xuICB9LFxuICBlbGV2YXRpb25SYW5nZToge1xuICAgIHR5cGU6ICdudW1iZXInLFxuICAgIGRlZmF1bHRWYWx1ZTogWzAsIDUwMF0sXG4gICAgbGFiZWw6ICdIZWlnaHQgU2NhbGUnLFxuICAgIGlzUmFuZ2VkOiB0cnVlLFxuICAgIHJhbmdlOiBbMCwgMTAwMF0sXG4gICAgc3RlcDogMC4wMSxcbiAgICBncm91cDogUFJPUEVSVFlfR1JPVVBTLmhlaWdodCxcbiAgICBwcm9wZXJ0eTogJ3NpemVSYW5nZSdcbiAgfSxcbiAgJ2hpLXByZWNpc2lvbic6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICBsYWJlbDogJ0hpZ2ggUHJlY2lzaW9uIFJlbmRlcmluZycsXG4gICAgZ3JvdXA6IFBST1BFUlRZX0dST1VQUy5kaXNwbGF5LFxuICAgIHByb3BlcnR5OiAnaGktcHJlY2lzaW9uJyxcbiAgICBkZXNjcmlwdGlvbjogJ0hpZ2ggcHJlY2lzaW9uIHdpbGwgcmVzdWx0IGluIHNsb3dlciBwZXJmb3JtYW5jZSdcbiAgfSxcbiAgZW5hYmxlM2Q6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICBsYWJlbDogJ0VuYWJsZSBIZWlnaHQnLFxuICAgIGdyb3VwOiBQUk9QRVJUWV9HUk9VUFMuaGVpZ2h0LFxuICAgIHByb3BlcnR5OiAnZW5hYmxlM2QnLFxuICAgIGRlc2NyaXB0aW9uOiAnQ2xpY2sgYnV0dG9uIGF0IHRvcCByaWdodCBvZiB0aGUgbWFwIHRvIHN3aXRjaCB0byAzZCB2aWV3J1xuICB9LFxuICBzdHJva2VkOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGxhYmVsOiAnUG9seWdvbiBTdHJva2UnLFxuICAgIGRlZmF1bHRWYWx1ZTogdHJ1ZSxcbiAgICBncm91cDogUFJPUEVSVFlfR1JPVVBTLmRpc3BsYXksXG4gICAgcHJvcGVydHk6ICdzdHJva2VkJ1xuICB9LFxuICBmaWxsZWQ6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgbGFiZWw6ICdQb2x5Z29uIEZpbGwnLFxuICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgZ3JvdXA6IFBST1BFUlRZX0dST1VQUy5kaXNwbGF5LFxuICAgIHByb3BlcnR5OiAnZmlsbGVkJ1xuICB9LFxuICBleHRydWRlZDoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgIGxhYmVsOiAnRW5hYmxlIFBvbHlnb24gSGVpZ2h0JyxcbiAgICBncm91cDogUFJPUEVSVFlfR1JPVVBTLmRpc3BsYXksXG4gICAgcHJvcGVydHk6ICdleHRydWRlZCdcbiAgfSxcbiAgd2lyZWZyYW1lOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgbGFiZWw6ICdTaG93IFdpcmVmcmFtZScsXG4gICAgZ3JvdXA6IFBST1BFUlRZX0dST1VQUy5kaXNwbGF5LFxuICAgIHByb3BlcnR5OiAnd2lyZWZyYW1lJ1xuICB9XG59O1xuIl19