/* global Blob */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pdf = exports.createElement = exports.StyleSheet = exports.Document = exports.Image = exports.Font = exports.Page = exports.Link = exports.Text = exports.View = exports.PDFRenderer = undefined;

var _renderer = require('./renderer');

var _stylesheet = require('./stylesheet');

var _stylesheet2 = _interopRequireDefault(_stylesheet);

var _font = require('./font');

var _font2 = _interopRequireDefault(_font);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var View = 'VIEW';
var Text = 'TEXT';
var Link = 'LINK';
var Page = 'PAGE';
var Image = 'IMAGE';
var Document = 'DOCUMENT';

var pdf = function pdf(input) {
  var parse = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(input) {
      var document;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              document = input.document;
              _context.next = 3;
              return document.render();

            case 3:

              if (document.props.onRender) {
                document.props.onRender();
              }

              return _context.abrupt('return', input);

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function parse(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var toBuffer = function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return parse(input);

            case 2:
              return _context2.abrupt('return', _context2.sent);

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function toBuffer() {
      return _ref2.apply(this, arguments);
    };
  }();

  var toString = function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
      var result, render;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              result = '';
              _context3.next = 3;
              return parse(input);

            case 3:
              render = _context3.sent;
              return _context3.abrupt('return', new Promise(function (resolve) {
                render.on('data', function (buffer) {
                  result += buffer;
                });

                render.on('end', function () {
                  resolve(result);
                });
              }));

            case 5:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    return function toString() {
      return _ref3.apply(this, arguments);
    };
  }();

  function toBlob() {
    parse(input).then(function () {
      var stream = input.pipe(Blob());

      return new Promise(function (resolve) {
        stream.on('finish', function () {
          resolve(stream.toBlob('application/pdf'));
        });
      });
    });
  }

  return {
    toBuffer: toBuffer,
    toBlob: toBlob,
    toString: toString
  };
};

exports.PDFRenderer = _renderer.PDFRenderer;
exports.View = View;
exports.Text = Text;
exports.Link = Link;
exports.Page = Page;
exports.Font = _font2.default;
exports.Image = Image;
exports.Document = Document;
exports.StyleSheet = _stylesheet2.default;
exports.createElement = _renderer.createElement;
exports.pdf = pdf;