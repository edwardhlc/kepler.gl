'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateHashId = generateHashId;
exports.isChrome = isChrome;
exports.isPlainObject = isPlainObject;
exports.notNullorUndefined = notNullorUndefined;
exports.capitalizeFirstLetter = capitalizeFirstLetter;

var _window = require('global/window');

var _window2 = _interopRequireDefault(_window);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generate a hash string based on number of character
 * @param {number} count
 * @returns {string} hash string
 */
function generateHashId(count) {
  return Math.random().toString(36).substr(count);
}

/**
 * Detect chrome
 * @returns {boolean} - yes or no
 */
function isChrome() {
  // Chrome 1+
  return _window2.default.chrome && _window2.default.chrome.webstore;
}

/**
 * whether is an object
 * @returns {boolean} - yes or no
 */
function isPlainObject(obj) {
  return obj === Object(obj) && typeof obj !== 'function' && !Array.isArray(obj);
}

/**
 * whether null or undefined
 * @returns {boolean} - yes or no
 */
function notNullorUndefined(d) {
  return d !== undefined && d !== null;
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy91dGlscy5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZUhhc2hJZCIsImlzQ2hyb21lIiwiaXNQbGFpbk9iamVjdCIsIm5vdE51bGxvclVuZGVmaW5lZCIsImNhcGl0YWxpemVGaXJzdExldHRlciIsImNvdW50IiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyIiwiY2hyb21lIiwid2Vic3RvcmUiLCJvYmoiLCJPYmplY3QiLCJBcnJheSIsImlzQXJyYXkiLCJkIiwidW5kZWZpbmVkIiwic3RyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFPZ0JBLGMsR0FBQUEsYztRQVVBQyxRLEdBQUFBLFE7UUFTQUMsYSxHQUFBQSxhO1FBVUFDLGtCLEdBQUFBLGtCO1FBSUFDLHFCLEdBQUFBLHFCOztBQXhDaEI7Ozs7OztBQUVBOzs7OztBQUtPLFNBQVNKLGNBQVQsQ0FBd0JLLEtBQXhCLEVBQStCO0FBQ3BDLFNBQU9DLEtBQUtDLE1BQUwsR0FDSkMsUUFESSxDQUNLLEVBREwsRUFFSkMsTUFGSSxDQUVHSixLQUZILENBQVA7QUFHRDs7QUFFRDs7OztBQUlPLFNBQVNKLFFBQVQsR0FBb0I7QUFDekI7QUFDQSxTQUFPLGlCQUFPUyxNQUFQLElBQWlCLGlCQUFPQSxNQUFQLENBQWNDLFFBQXRDO0FBQ0Q7O0FBRUQ7Ozs7QUFJTyxTQUFTVCxhQUFULENBQXVCVSxHQUF2QixFQUE0QjtBQUNqQyxTQUNFQSxRQUFRQyxPQUFPRCxHQUFQLENBQVIsSUFBdUIsT0FBT0EsR0FBUCxLQUFlLFVBQXRDLElBQW9ELENBQUNFLE1BQU1DLE9BQU4sQ0FBY0gsR0FBZCxDQUR2RDtBQUdEOztBQUVEOzs7O0FBSU8sU0FBU1Qsa0JBQVQsQ0FBNEJhLENBQTVCLEVBQStCO0FBQ3BDLFNBQU9BLE1BQU1DLFNBQU4sSUFBbUJELE1BQU0sSUFBaEM7QUFDRDs7QUFFTSxTQUFTWixxQkFBVCxDQUErQmMsR0FBL0IsRUFBb0M7QUFDekMsU0FBT0EsSUFBSUMsTUFBSixDQUFXLENBQVgsRUFBY0MsV0FBZCxLQUE4QkYsSUFBSUcsS0FBSixDQUFVLENBQVYsQ0FBckM7QUFDRCIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3aW5kb3cgZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5cbi8qKlxuICogR2VuZXJhdGUgYSBoYXNoIHN0cmluZyBiYXNlZCBvbiBudW1iZXIgb2YgY2hhcmFjdGVyXG4gKiBAcGFyYW0ge251bWJlcn0gY291bnRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGhhc2ggc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUhhc2hJZChjb3VudCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKVxuICAgIC50b1N0cmluZygzNilcbiAgICAuc3Vic3RyKGNvdW50KTtcbn1cblxuLyoqXG4gKiBEZXRlY3QgY2hyb21lXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSB5ZXMgb3Igbm9cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQ2hyb21lKCkge1xuICAvLyBDaHJvbWUgMStcbiAgcmV0dXJuIHdpbmRvdy5jaHJvbWUgJiYgd2luZG93LmNocm9tZS53ZWJzdG9yZTtcbn1cblxuLyoqXG4gKiB3aGV0aGVyIGlzIGFuIG9iamVjdFxuICogQHJldHVybnMge2Jvb2xlYW59IC0geWVzIG9yIG5vXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICByZXR1cm4gKFxuICAgIG9iaiA9PT0gT2JqZWN0KG9iaikgJiYgdHlwZW9mIG9iaiAhPT0gJ2Z1bmN0aW9uJyAmJiAhQXJyYXkuaXNBcnJheShvYmopXG4gICk7XG59XG5cbi8qKlxuICogd2hldGhlciBudWxsIG9yIHVuZGVmaW5lZFxuICogQHJldHVybnMge2Jvb2xlYW59IC0geWVzIG9yIG5vXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3ROdWxsb3JVbmRlZmluZWQoZCkge1xuICByZXR1cm4gZCAhPT0gdW5kZWZpbmVkICYmIGQgIT09IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyKSB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG4iXX0=