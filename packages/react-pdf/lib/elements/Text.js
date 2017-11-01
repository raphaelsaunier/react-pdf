'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = require('./Base');

var _Base3 = _interopRequireDefault(_Base2);

var _bin = require('../../bin');

var _bin2 = _interopRequireDefault(_bin);

var _lodash = require('lodash.isnan');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.upperfirst');

var _lodash4 = _interopRequireDefault(_lodash3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = function (_Base) {
  _inherits(Text, _Base);

  function Text(root, props) {
    _classCallCheck(this, Text);

    var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, root, props));

    _this.width = null;
    _this.height = null;


    _this.layout.setMeasureFunc(_this.measureText.bind(_this));
    return _this;
  }

  _createClass(Text, [{
    key: 'appendChild',
    value: function appendChild(child) {
      if (typeof child === 'string') {
        this.children.push(this.transformText(child));
      } else {
        this.children.push(child);
      }
    }
  }, {
    key: 'removeChild',
    value: function removeChild(child) {
      this.children = null;
    }
  }, {
    key: 'getRawValue',
    value: function getRawValue() {
      return this.children.reduce(function (acc, child) {
        if (typeof child === 'string') {
          return acc + child;
        } else {
          return acc + child.getRawValue();
        }
      }, '');
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      return this.root.widthOfString(this.getRawValue());
    }
  }, {
    key: 'getHeight',
    value: function getHeight(width) {
      return this.root.heightOfString(this.getRawValue(), { width: width });
    }
  }, {
    key: 'setFontSize',
    value: function setFontSize() {
      this.root.fontSize(this.style.fontSize || 18);
    }
  }, {
    key: 'setFontFamily',
    value: function setFontFamily() {
      this.root.font(this.style.fontFamily || 'Helvetica');
    }
  }, {
    key: 'transformText',
    value: function transformText(text) {
      switch (this.style.textTransform) {
        case 'uppercase':
          return text.toUpperCase();
        case 'lowercase':
          return text.toLowerCase();
        case 'capitalize':
          return (0, _lodash4.default)(text);
        default:
          return text;
      }
    }

    // Yoga measurement function. Decides which width and height should the text have
    // based on the available parent dimentions and their modes (exactly or at most)

  }, {
    key: 'measureText',
    value: function measureText(width, widthMode, height, heightMode) {
      // Set fontSize and fontFamily to calculate correct height and width
      this.setFontSize();
      this.setFontFamily();

      // If we have a known width, we just calculate the height of the text.
      if (widthMode === _bin2.default.MEASURE_MODE_EXACTLY) {
        this.width = width;
        this.height = this.getHeight(this.width);

        return { height: this.style.flexGrow ? NaN : this.height };
      }

      // If we have a known height and flexGrow, we just keep the (previously calculated)
      // width as it is, by returning NaN. Otherwise, we calculate the text width.
      if (heightMode === _bin2.default.MEASURE_MODE_EXACTLY) {
        this.height = height;
        this.width = this.style.flexGrow ? NaN : this.getWidth();

        return { width: this.width };
      }

      // If we know nothing, we skip this measurement step until the parent
      // is calculated. Once this happens, we get the minimum of the
      // text width as if were in one line, and the parent's width.
      // Then we calculate the height with it.
      if (widthMode === _bin2.default.MEASURE_MODE_AT_MOST && heightMode === _bin2.default.MEASURE_MODE_AT_MOST && this.isParentRendered() && !this.width && !this.height) {
        this.width = Math.min(width, this.getWidth());
        this.height = this.getHeight(this.width);

        return { width: this.width, height: this.height };
      }

      return {};
    }
  }, {
    key: 'isParentRendered',
    value: function isParentRendered() {
      var parentLayout = this.parent.getAbsoluteLayout();
      return !(0, _lodash2.default)(parentLayout.width) && !(0, _lodash2.default)(parentLayout.height);
    }
  }, {
    key: 'recalculateLayout',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.layout.markDirty();

              case 1:
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
    key: 'renderText',
    value: function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(text, isFirstNode) {
        var _style, _style$align, align, textDecoration;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _style = this.style, _style$align = _style.align, align = _style$align === undefined ? 'left' : _style$align, textDecoration = _style.textDecoration;


                this.root.text(text, {
                  align: align,
                  link: '',
                  continued: true,
                  underline: textDecoration === 'underline'
                });

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function renderText(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return renderText;
    }()
  }, {
    key: 'render',
    value: function () {
      var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
        var padding, _getAbsoluteLayout, left, top, width, height, _style$color, color, i, child;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                padding = this.getComputedPadding();
                _getAbsoluteLayout = this.getAbsoluteLayout(), left = _getAbsoluteLayout.left, top = _getAbsoluteLayout.top, width = _getAbsoluteLayout.width, height = _getAbsoluteLayout.height;
                _style$color = this.style.color, color = _style$color === undefined ? 'black' : _style$color;


                this.drawBackgroundColor();
                this.drawBorders();

                // Set coordinates, dimentions and continued text
                // Increase a bit the width and height of the text or excecution freezes.
                this.root.text('', left + padding.left, top + padding.top, {
                  continued: true,
                  width: width - padding.left - padding.right,
                  height: height - padding.top - padding.bottom
                });

                // Render childs: text and inline elements
                i = 0;

              case 7:
                if (!(i < this.children.length)) {
                  _context3.next = 22;
                  break;
                }

                child = this.children[i];


                this.setFontSize();
                this.setFontFamily();
                this.root.fillColor(color);

                if (!(typeof child === 'string')) {
                  _context3.next = 17;
                  break;
                }

                _context3.next = 15;
                return this.renderText(child);

              case 15:
                _context3.next = 19;
                break;

              case 17:
                _context3.next = 19;
                return child.render({ inline: true });

              case 19:
                i++;
                _context3.next = 7;
                break;

              case 22:

                // Text should not longer be continuos
                this.root.text('', { continued: false });

              case 23:
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

  return Text;
}(_Base3.default);

exports.default = Text;