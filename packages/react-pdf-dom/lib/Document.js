'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _core = require('@react-pdf/core');

var _omit = require('lodash/fp/omit');

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global URL */


var Container = function (_Component) {
  _inherits(Container, _Component);

  function Container(props) {
    _classCallCheck(this, Container);

    var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, props));

    _this.container = (0, _core.createElement)('ROOT');


    _this.state = {
      document: undefined
    };
    return _this;
  }

  _createClass(Container, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.mountNode = _core.PDFRenderer.createContainer(this.container);

      _core.PDFRenderer.updateContainer(_react2.default.createElement(
        _core.Document,
        (0, _omit2.default)(['height', 'width', 'children'], this.props),
        this.props.children
      ), this.mountNode, this);

      this.embed.src = URL.createObjectURL((0, _core.pdf)(this.container).toBlob());
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      _core.PDFRenderer.updateContainer(_react2.default.createElement(
        _core.Document,
        (0, _omit2.default)(['height', 'width', 'children'], this.props),
        this.props.children
      ), this.mountNode, this);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _core.PDFRenderer.updateContainer(null, this.mountNode, this);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          width = _props.width,
          height = _props.height;


      return _react2.default.createElement('iframe', {
        ref: function ref(container) {
          _this2.embed = container;
        },
        style: { width: width, height: height }
      });
    }
  }]);

  return Container;
}(_react.Component);

Container.displayName = 'Document';
Container.propTypes = {
  children: _react.PropTypes.node,
  height: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  width: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};
exports.default = Container;