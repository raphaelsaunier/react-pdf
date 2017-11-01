'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchImage = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _pngJs = require('png-js');

var _pngJs2 = _interopRequireDefault(_pngJs);

var _jpeg = require('./jpeg');

var _jpeg2 = _interopRequireDefault(_jpeg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var request = require('request');

function getImage(body, extension) {
  switch (extension.toLowerCase()) {
    case 'jpg':
    case 'jpeg':
      return new _jpeg2.default(body);
    case 'png':
      return new _pngJs2.default(body);
    default:
      throw new Error('Image type not supported: ' + extension);
  }
}

var fetchImage = exports.fetchImage = function fetchImage(src) {
  if ((typeof src === 'undefined' ? 'undefined' : _typeof(src)) === 'object') {
    if (src.data && src.format) {
      // Local file given
      return new Promise(function (resolve, reject) {
        return resolve(getImage(src.data, src.format));
      });
    }
    throw new Error('Invalid data given for local file: ' + JSON.stringify(src));
  }

  var extension = src.split('.').pop();
  return new Promise(function (resolve, reject) {
    request({
      url: src,
      method: 'GET',
      encoding: null
    }, function (error, response, body) {
      if (error) {
        return reject(error);
      }

      var image = getImage(body, extension);
      return resolve(image);
    });
  });
};