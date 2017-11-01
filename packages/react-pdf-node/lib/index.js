'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _core = require('@react-pdf/core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  renderToStream: function renderToStream(element) {
    var _this = this;

    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var container, node;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              container = (0, _core.createElement)('ROOT');
              node = _core.PDFRenderer.createContainer(container);


              _core.PDFRenderer.updateContainer(element, node, null);

              _context.next = 5;
              return (0, _core.pdf)(container).toBuffer();

            case 5:
              return _context.abrupt('return', _context.sent);

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  renderToFile: function renderToFile(element, filePath, callback) {
    var _this2 = this;

    return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
      var output, stream;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this2.renderToStream(element);

            case 2:
              output = _context2.sent;
              stream = _fs2.default.createWriteStream(filePath);

              output.pipe(stream);

              _context2.next = 7;
              return new Promise(function (resolve, reject) {
                stream.on('finish', function () {
                  if (callback) {
                    callback(output, filePath);
                  }
                  resolve(output);

                  console.log('\uD83D\uDCDD  PDF successfully exported on ' + _path2.default.resolve(filePath));
                });
                stream.on('error', reject);
              });

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  },
  render: function render(element, filePath, callback) {
    var _this3 = this;

    return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3.renderToFile(element, filePath, callback);

            case 2:
              return _context3.abrupt('return', _context3.sent);

            case 3:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }))();
  }
};