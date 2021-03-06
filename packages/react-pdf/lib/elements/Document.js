'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _font = require('../font');

var _font2 = _interopRequireDefault(_font);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Document = function () {
  function Document(root, props) {
    _classCallCheck(this, Document);

    this.children = [];

    this.root = root;
    this.props = props;
  }

  _createClass(Document, [{
    key: 'appendChild',
    value: function appendChild(child) {
      child.parent = this;
      this.children.push(child);
    }
  }, {
    key: 'removeChild',
    value: function removeChild(child) {
      var index = this.children.indexOf(child);

      child.parent = null;
      this.children.slice(index, 1);
    }
  }, {
    key: 'addMetaData',
    value: function addMetaData() {
      var _props = this.props,
          title = _props.title,
          author = _props.author,
          subject = _props.subject,
          keywords = _props.keywords,
          creator = _props.creator,
          producer = _props.producer;

      // The object keys need to start with a capital letter by the PDF spec

      if (title) {
        this.root.info.Title = title;
      }
      if (author) {
        this.root.info.Author = author;
      }
      if (subject) {
        this.root.info.Subject = subject;
      }
      if (keywords) {
        this.root.info.Keywords = keywords;
      }

      this.root.info.Creator = creator || 'react-pdf';
      this.root.info.Producer = producer || 'react-pdf';
    }
  }, {
    key: 'loadFonts',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var listToExplore, node;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                listToExplore = this.children.slice(0);

              case 1:
                if (!(listToExplore.length > 0)) {
                  _context.next = 9;
                  break;
                }

                node = listToExplore.shift();

                if (!(node.style && node.style.fontFamily)) {
                  _context.next = 6;
                  break;
                }

                _context.next = 6;
                return _font2.default.load(node.style.fontFamily, this.root);

              case 6:

                if (node.children) {
                  node.children.forEach(function (childNode) {
                    listToExplore.push(childNode);
                  });
                }
                _context.next = 1;
                break;

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadFonts() {
        return _ref.apply(this, arguments);
      }

      return loadFonts;
    }()
  }, {
    key: 'renderChildren',
    value: function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        var i;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                i = 0;

              case 1:
                if (!(i < this.children.length)) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 4;
                return this.children[i].render();

              case 4:
                i++;
                _context2.next = 1;
                break;

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function renderChildren() {
        return _ref2.apply(this, arguments);
      }

      return renderChildren;
    }()
  }, {
    key: 'render',
    value: function () {
      var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.addMetaData();
                _context3.next = 3;
                return this.loadFonts();

              case 3:
                _context3.next = 5;
                return this.renderChildren();

              case 5:

                this.root.end();

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function render() {
        return _ref3.apply(this, arguments);
      }

      return render;
    }()
  }]);

  return Document;
}();

Document.defaultProps = {
  author: null,
  keywords: null,
  subject: null,
  title: null
};
exports.default = Document;