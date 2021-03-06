'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bin = require('../../bin');

var _bin2 = _interopRequireDefault(_bin);

var _Base2 = require('./Base');

var _Base3 = _interopRequireDefault(_Base2);

var _image = require('../utils/image');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = function (_Base) {
  _inherits(Image, _Base);

  function Image(root, props) {
    _classCallCheck(this, Image);

    var _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, root, props));

    _this.image = null;


    _this.fetch = (0, _image.fetchImage)(props.src);
    return _this;
  }

  _createClass(Image, [{
    key: 'shouldGrow',
    value: function shouldGrow() {
      return !!this.style.flexGrow;
    }
  }, {
    key: 'getHeight',
    value: function getHeight(width) {
      var ratio = this.image.width / this.image.height;
      return width / ratio;
    }
  }, {
    key: 'getWidth',
    value: function getWidth(height) {
      var ratio = this.image.width / this.image.height;
      return height * ratio;
    }
  }, {
    key: 'measureImage',
    value: function measureImage(width, widthMode, height, heightMode) {
      if (widthMode === _bin2.default.MEASURE_MODE_EXACTLY) {
        return { height: this.getHeight(width) };
      }

      if (heightMode === _bin2.default.MEASURE_MODE_EXACTLY) {
        return { width: this.getWidth(height) };
      }

      if (widthMode === _bin2.default.MEASURE_MODE_AT_MOST && heightMode === _bin2.default.MEASURE_MODE_AT_MOST) {
        var imageWidth = Math.min(this.image.width, width);

        return {
          width: imageWidth,
          height: this.getHeight(imageWidth)
        };
      }
    }
  }, {
    key: 'recalculateLayout',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.fetch;

              case 2:
                this.image = _context.sent;


                if (!this.shouldGrow()) {
                  this.layout.setMeasureFunc(this.measureImage.bind(this));
                  this.layout.markDirty();
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function recalculateLayout() {
        return _ref.apply(this, arguments);
      }

      return recalculateLayout;
    }()
  }, {
    key: 'render',
    value: function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        var padding, _getAbsoluteLayout, left, top, width, height;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                padding = this.getComputedPadding();
                _getAbsoluteLayout = this.getAbsoluteLayout(), left = _getAbsoluteLayout.left, top = _getAbsoluteLayout.top, width = _getAbsoluteLayout.width, height = _getAbsoluteLayout.height;


                this.drawBackgroundColor();
                this.drawBorders();

                this.root.image(this.image.data, left + padding.left, top + padding.top, {
                  width: width - padding.left - padding.right,
                  height: height - padding.top - padding.bottom
                });

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function render() {
        return _ref2.apply(this, arguments);
      }

      return render;
    }()
  }]);

  return Image;
}(_Base3.default);

exports.default = Image;