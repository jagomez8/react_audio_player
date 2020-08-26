'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

const img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsSAAALEgHS3X78AAAAG3RFWHRTb2Z0d2FyZQBDZWxzeXMgU3R1ZGlvIFRvb2zBp+F8AAABZ0lEQVRo3u3avUoDQRTF8f+e58gLie8gPoMfKChWIghaCFooFjYWEjuxs7DSxkobqzRBLBQFQZAguxZmII1FYpTMnHvKsM0PwuzZO7dqmganVAEOcIADXCa4rqeBfaACtoA9pF7J4C7QGvilA6wAJ0hNieCfHrwBFpEuXcApF8Ac0p0LGKAGjoElpEcHcMo7sAtsIL05gFOegfX+if7pAE65B9aQ2i7glGtgAenKBQzQAKfAMlLHAZzSA46AVaQnB3DKK7AJ7CB9OIBTuv0T/RCpdgD/S1WdRPBgVZ1HunUB/0lVnXTw2KtqLuCxVdXcwL+uqrmCR66quYOHrqolgIeqqiWBU16AWaQzFzDAA1IrwAX/pWeQzuPQitdSFI+olvHxEJ+HMQAYOTYjHpshns2Y1mYQb3PVYnWZZnNdanMhbrPyYLPUYrW2ZLOYVuzqod1y6RRwwPf68DbFrw8XkgAHOMABzipf2Gq7mFpw2hoAAAAASUVORK5CYII=";

const img$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsSAAALEgHS3X78AAAAG3RFWHRTb2Z0d2FyZQBDZWxzeXMgU3R1ZGlvIFRvb2zBp+F8AAAA/ElEQVRo3u3aMU5CURBG4fOmV8Ge2hJXAS0JCSzExk0Y96EktDbUtLTU0BLCo+dZ2BEMvGuAazjTztw/8yW3nKKqKm6pCsGCBQsWLPi/g3e7FvAOdIC7ve4WmACvRMyTtjpjfn3wzzIz4PHI5BpoE7HIKT8FPAL6J05/EjHIKT8FXB74Zr9VScRDTvkp4HoPIoqc8gULFixYsGDBggULFixYsGDBggULFixYsGDBggULFixYsGDBgm8EXOfoZENEI6f8FPAY6J04/UHEMKf8FPATMAWaRyZXwDMRy5zy/3J6+AZ0gfu9bgl8AS+1sRfI97hUsGDBggULvl59A65615gxcFQMAAAAAElFTkSuQmCC";

function PlayButton(props) {
  var isPlay = props.isPlay;
  var onPlayClick = props.onPlayClick;
  var style = {
    height: '30px',
    width: '30px',
    backgroundSize: 'cover',
    opacity: '70%'
  };

  if (isPlay) {
    style['backgroundImage'] = "url(".concat(img$1, ")");
  } else {
    style['backgroundImage'] = "url(".concat(img, ")");
  }

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "controls",
    onClick: onPlayClick,
    style: style
  });
}

function TimeDisplay(props) {
  var currentTime = getTime(props.currentTime);
  var totalTime = getTime(props.totalTime);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "timeDisplay"
  }, /*#__PURE__*/React__default['default'].createElement("span", null, currentTime, "/", totalTime));
} // time formatter


var getTime = function getTime(time) {
  if (time) {
    var minute = parseInt(time / 60);
    var second = parseInt(time % 60);
    var minuteText = "".concat(minute);
    var secondText = "".concat(second);

    if (minute < 10) {
      minuteText = "0".concat(minute);
    }

    if (second < 10) {
      secondText = "0".concat(second);
    }

    return "".concat(minuteText, ":").concat(secondText);
  } else {
    return "00:00";
  }
};

function ProgerssBar(props) {
  var currentTime = props.currentTime,
      totalTime = props.totalTime,
      buffered = props.buffered;
  var onTimeUpdate = props.onTimeUpdate; // calculate played percentage

  var played = parseInt(currentTime / totalTime * 100, 10);
  var playedStyle = {
    width: "".concat(played, "%"),
    backgroundColor: ' cornflowerblue',
    position: 'absolute',
    zIndex: '8',
    left: '0',
    height: '4px'
  }; // calculate buffered percentage

  var buf = parseInt(buffered / totalTime * 100, 10);
  var bufStyle = {
    width: "".concat(buf, "%"),
    backgroundColor: '#545454',
    position: 'absolute',
    zIndex: '5',
    left: '0',
    height: '4px'
  };

  var onProgressClick = function onProgressClick(e) {
    var progressDiv = ProgressRef.current; // get click position 

    var offset = e.pageX - progressDiv.getBoundingClientRect().left;

    if (offset < 0) {
      offset = 0;
    }

    if (offset > progressDiv.offsetWidth) {
      offset = progressDiv.offsetWidth;
    } // calculate relative position(% of the processbar)


    var offsetPercentage = offset / progressDiv.offsetWidth;
    var currentTime = offsetPercentage * totalTime; // ! debug

    console.log("offset%=".concat(offsetPercentage, " currentTime=").concat(currentTime));
    onTimeUpdate(currentTime);
  };

  var ProgressRef = React.useRef(null);
  var onPlayheadRelease = props.onPlayheadRelease,
      onPlayheadMove = props.onPlayheadMove,
      onPlayheadClick = props.onPlayheadClick;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "progressWrap",
    onClick: onProgressClick,
    onMouseMove: function onMouseMove(e) {
      onPlayheadMove(e, ProgressRef.current);
    },
    onMouseUp: function onMouseUp(e) {
      onPlayheadRelease(e, ProgressRef.current);
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "progress",
    ref: ProgressRef
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "played",
    style: playedStyle
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "playhead",
    onMouseDown: onPlayheadClick
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "buffered",
    style: bufStyle
  })));
}

const img$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsSAAALEgHS3X78AAAAG3RFWHRTb2Z0d2FyZQBDZWxzeXMgU3R1ZGlvIFRvb2zBp+F8AAABKklEQVRIx+3WTyttURQA8N9ZepcPYMJAeeYUzxv7BmRipBdmZCxGol53qpjoDcQHkHwAMwNkxkRGMpIyZHD3NbjyJyVH7qHe2cO1V/1qtddaO6vX677iZCVcwv8xnNKiiMXi4JQyrGBWRPYsPoxjERefD6fUgnVMwiOc0iAOcIbfIm4+D07pB7Yw9hh7givYxwA2RfzJD9dqFSxjHB1vZr8sdTdOUUGviJO8cBVz78p+DjfwVcygKmI+L3yJzg/CQ9h7eGQDeeH3N/JruB1XuBbRXiTcilvciWgrstQ/cY4LEV1FPq4p/MO2iNGPtNPSQzt15minDEfox4SIjeYPkMb9NNZwiR4Rd80fmY27Q/zCiIidIpdEH7pE7DZ7Lf4VsVD+QEq4hL8dfA8MGbLFFTbsQQAAAABJRU5ErkJggg==";

function VolumeBar(props) {
  var volume = props.volume,
      onVolumeUpdate = props.onVolumeUpdate; // volumebar reference

  var volumeRef = React.useRef(null); // vol click handler

  var onVolumeClick = function onVolumeClick(e) {
    var volDiv = volumeRef.current; // get click position 

    var offset = e.pageX - volDiv.getBoundingClientRect().left;

    if (offset < 0) {
      offset = 0;
    }

    if (offset > volDiv.offsetWidth) {
      offset = volDiv.offsetWidth;
    } // calculate relative position(% of the processbar)


    var newVol = offset / volDiv.offsetWidth;
    onVolumeUpdate(newVol);
  };

  var slideStyle = {
    position: 'absolute',
    borderRadius: '50%',
    zIndex: '10',
    top: '-2px',
    left: "".concat(volume * 100, "%"),
    width: '8px',
    height: '8px',
    backgroundColor: 'cornsilk'
  };
  var icon = {
    height: '30px',
    width: '30px',
    backgroundImage: "url(".concat(img$2, ")"),
    opacity: '70%',
    marginRight: '0px'
  };
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "volumeWrap"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: icon,
    className: "controls"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "volumeBar",
    ref: volumeRef,
    onClick: onVolumeClick
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "silde",
    style: slideStyle
  })));
}

const img$3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsSAAALEgHS3X78AAAAG3RFWHRTb2Z0d2FyZQBDZWxzeXMgU3R1ZGlvIFRvb2zBp+F8AAAA2UlEQVRIx+3WLUtEQRQG4GffIIs/yX+iiAgWLRZtWrWLH3/AYLbaRES02k0Wg0FB2EW417IXje4Kx7D3rcPMA8PMOWfQtq3/yKCHe7gebppbDLEueZzq1KY5xDaOJHvTwt3CCLuS0yngMRYwlgxnhbtcYkPy+gv4e28y+CsML1iTXFXD0OJ4cv2flXCXByxLnqpheMem5KIa7nKOLclHNQx3kqW5gcuv+m0Clj6ue6xUfqcGJ9UF5BmrkuvKklneJEbYkZxVtcUbLM44CBz8GAT2+5mrh+cD/gKmx+vFIZ1wOwAAAABJRU5ErkJggg==";

function NextButton(props) {
  var enable = props.enable;
  var onNextClick = props.onNextClick;
  var style = {
    height: '30px',
    width: '30px',
    backgroundSize: 'cover',
    opacity: '70%',
    backgroundImage: "url(".concat(img$3, ")")
  }; // if this button is disable

  if (!enable) {
    style.opacity = '35%';
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "controls",
      style: style
    });
  }

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "controls",
    style: style,
    onClick: onNextClick
  });
}

const img$4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsSAAALEgHS3X78AAAAG3RFWHRTb2Z0d2FyZQBDZWxzeXMgU3R1ZGlvIFRvb2zBp+F8AAAA50lEQVRIx+3WO04DMRAA0LeOFKVDoqfgAPShSM4AFXeg4AKEEiQKCkokkFIAR4ETgZRmlgKkEMLPaHddsC49tp9ke+yp6rpWolU93MPdwxFnOMKllI6zVo3YwRzPUprkwgsMsZDSKAM9xAVe56RU5cLLwBeTP4zfwBUOVvpbhSPGuMf2WqwVOGKAE8ww+HRM43DEFu4w+XY3GoUj9nGNzR/PvhE4YoTztzT7XWsIfsQ4K6cbgh+wWwIutNXL2B5uurtc6+l0i2m3cLEHpOiT2dInUexbPH1XCMz+WAg8SWna11w9/D/gF17Fy8UIV2aCAAAAAElFTkSuQmCC";

function PrevButton(props) {
  var enable = props.enable;
  var onPrevClick = props.onPrevClick;
  var style = {
    height: '30px',
    width: '30px',
    backgroundSize: 'cover',
    opacity: '70%',
    backgroundImage: "url(".concat(img$4, ")")
  }; // if this button is disable

  if (!enable) {
    style.opacity = '35%';
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "controls",
      style: style
    });
  }

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "controls",
    style: style,
    onClick: onPrevClick
  });
}

const img$5 = "data:image/jpeg;base64,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";

function Info(props) {
  var nowPlaying = props.nowPlaying;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "info"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "thumbnail"
  }, /*#__PURE__*/React__default['default'].createElement("img", {
    style: {
      height: '75px',
      width: '133px'
    },
    src: nowPlaying.thumbnail ? nowPlaying.thumbnail : img$5,
    alt: nowPlaying.title
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "textInfo"
  }, /*#__PURE__*/React__default['default'].createElement("div", null, nowPlaying.title), /*#__PURE__*/React__default['default'].createElement("div", null, nowPlaying.author)));
}

const img$6 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsSAAALEgHS3X78AAAAG3RFWHRTb2Z0d2FyZQBDZWxzeXMgU3R1ZGlvIFRvb2zBp+F8AAABbElEQVRIx+3VsUtVcRQH8M87ZA7GqwSn9kAI2gIbmloUhGhtcwghCKqhhoY3BNEg4hJC0Obo0JANQYuDOLjUoP+Bg6DCa+rFuQ3eannvoe9eXkjvN97l87vnd873NIqi8C9OYwSfXzjzM56K+DZsuMBPvMdLEQfDhH+fI7zBsogf/eHMcTzEA9zARA3X2cUzEZ+6w5nX8BE3a+6lPvDJn26X6B5e4IuIdoVSH6KFVRGd7qXOfIyVEp0RcVzhjTtYRUvEYf/mytzGLdwT8aFCc22UZd093ThltnEJzTOXt1KAZG6iEHFnFJnnGz5p3hQxMzw48zKO0RbRPB2cOY0lEXMV4PtYx5aI2/3hzMkydRYxJqIxIHqlTMTreCTiba8lMVZiLUz++X5WOLOJu3hdojtlIna6LYlZLGG65lfewbyI/V7bqU74O75iDe96L4m/+AUs4BWmBi71wHOceRXP8QQXhwfXOU6jrP4v4V/oTs3F64TxVQAAAABJRU5ErkJggg==";

const img$7 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsSAAALEgHS3X78AAAAG3RFWHRTb2Z0d2FyZQBDZWxzeXMgU3R1ZGlvIFRvb2zBp+F8AAABd0lEQVRIx+3Wv0ocURTH8c+exmBl6giSUgQRmxTRB1AQkjoPICFFbIybN8jaaSXp0yhBUCHpxcIiQkiRdCKojRC7JDZ3U3g1uu5odnTXZk93zzDzPf/u70ylXq+7D6t0wV1wKUtpHdMiDjsNruMYVRHvOw0+s41m2f8Dp7SJsew/wR7WsCBivwDQjxlMYQA9BaEc4ZWIlZvAF+0YL0R8aoBO4gP6/qMG14Avf7QHw3iL5/iFcRE7+fkoNtGLj3iHbyJOmpR6JUOPWutxSkuYxneMZu8OBrEk4mVBj69k2Sr4wQVQLXvnzgOJ+NPkneVmWbY+1Sk9wVaD96mI7fYLSEo1vMmnmohqZ5QrpXnM5tO8iLn2g++l1KdX6wuG8rWp5OH6kYfrd3u0uqPX6TTLEVTx7AYBWc2V+FpOQIol82eWzM8NwU1kyXx4O8m8uiR285JYFHFQ0IZHeJ2XxONyS6J9a7GkVpcH31Kry4HvSKu7f5ldcAn7CxuU+8VCAGXTAAAAAElFTkSuQmCC";

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = process.env.NODE_ENV;

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

var invariant_1 = invariant;

function defaultKey(key) {
  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function useUncontrolledProp(propValue, defaultValue, handler) {
  var wasPropRef = React.useRef(propValue !== undefined);

  var _useState = React.useState(defaultValue),
      stateValue = _useState[0],
      setState = _useState[1];

  var isProp = propValue !== undefined;
  var wasProp = wasPropRef.current;
  wasPropRef.current = isProp;
  /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */

  if (!isProp && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }

  return [isProp ? propValue : stateValue, React.useCallback(function (value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (handler) handler.apply(void 0, [value].concat(args));
    setState(value);
  }, [handler])];
}
function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function (result, fieldName) {
    var _extends2;

    var _ref = result,
        defaultValue = _ref[defaultKey(fieldName)],
        propsValue = _ref[fieldName],
        rest = _objectWithoutPropertiesLoose(_ref, [defaultKey(fieldName), fieldName].map(_toPropertyKey));

    var handlerName = config[fieldName];

    var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]),
        value = _useUncontrolledProp[0],
        handler = _useUncontrolledProp[1];

    return _extends({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
  }, props);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var ThemeContext = React__default['default'].createContext({});
var Consumer = ThemeContext.Consumer,
    Provider = ThemeContext.Provider;

function useBootstrapPrefix(prefix, defaultPrefix) {
  var prefixes = React.useContext(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}

var SelectableContext = React__default['default'].createContext(null);
var makeEventKey = function makeEventKey(eventKey, href) {
  if (href === void 0) {
    href = null;
  }

  if (eventKey != null) return String(eventKey);
  return href || null;
};

function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

function ownerWindow(node) {
  var doc = ownerDocument(node);
  return doc && doc.defaultView || window;
}

function getComputedStyle(node, psuedoElement) {
  return ownerWindow(node).getComputedStyle(node, psuedoElement);
}

var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}

/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */
var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}

function style(node, property) {
  var css = '';
  var transforms = '';

  if (typeof property === 'string') {
    return node.style.getPropertyValue(hyphenateStyleName(property)) || getComputedStyle(node).getPropertyValue(hyphenateStyleName(property));
  }

  Object.keys(property).forEach(function (key) {
    var value = property[key];

    if (!value && value !== 0) {
      node.style.removeProperty(hyphenateStyleName(key));
    } else if (isTransform(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += hyphenateStyleName(key) + ": " + value + ";";
    }
  });

  if (transforms) {
    css += "transform: " + transforms + ";";
  }

  node.style.cssText += ";" + css;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/* eslint-disable no-return-assign */
var optionsSupported = false;
var onceSupported = false;

try {
  var options = {
    get passive() {
      return optionsSupported = true;
    },

    get once() {
      // eslint-disable-next-line no-multi-assign
      return onceSupported = optionsSupported = true;
    }

  };

  if (canUseDOM) {
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, true);
  }
} catch (e) {
  /* */
}

/**
 * An `addEventListener` ponyfill, supports the `once` option
 */
function addEventListener(node, eventName, handler, options) {
  if (options && typeof options !== 'boolean' && !onceSupported) {
    var once = options.once,
        capture = options.capture;
    var wrappedHandler = handler;

    if (!onceSupported && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };

      handler.__once = wrappedHandler;
    }

    node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
  }

  node.addEventListener(eventName, handler, options);
}

function removeEventListener(node, eventName, handler, options) {
  var capture = options && typeof options !== 'boolean' ? options.capture : options;
  node.removeEventListener(eventName, handler, capture);

  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}

function listen(node, eventName, handler, options) {
  addEventListener(node, eventName, handler, options);
  return function () {
    removeEventListener(node, eventName, handler, options);
  };
}

function parseDuration(node) {
  var str = style(node, 'transitionDuration') || '';
  var mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}

function triggerTransitionEnd(element) {
  var evt = document.createEvent('HTMLEvents');
  evt.initEvent('transitionend', true, true);
  element.dispatchEvent(evt);
}

function emulateTransitionEnd(element, duration, padding) {
  if (padding === void 0) {
    padding = 5;
  }

  var called = false;
  var handle = setTimeout(function () {
    if (!called) triggerTransitionEnd(element);
  }, duration + padding);
  var remove = listen(element, 'transitionend', function () {
    called = true;
  }, {
    once: true
  });
  return function () {
    clearTimeout(handle);
    remove();
  };
}

function transitionEnd(element, handler, duration, padding) {
  if (duration == null) duration = parseDuration(element) || 0;
  var removeEmulate = emulateTransitionEnd(element, duration, padding);
  var remove = listen(element, 'transitionend', handler);
  return function () {
    removeEmulate();
    remove();
  };
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element$1=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element$1,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var config = {
  disabled: false
};

var timeoutsShape = process.env.NODE_ENV !== 'production' ? propTypes.oneOfType([propTypes.number, propTypes.shape({
  enter: propTypes.number,
  exit: propTypes.number,
  appear: propTypes.number
}).isRequired]) : null;
var classNamesShape = process.env.NODE_ENV !== 'production' ? propTypes.oneOfType([propTypes.string, propTypes.shape({
  enter: propTypes.string,
  exit: propTypes.string,
  active: propTypes.string
}), propTypes.shape({
  enter: propTypes.string,
  enterDone: propTypes.string,
  enterActive: propTypes.string,
  exit: propTypes.string,
  exitDone: propTypes.string,
  exitActive: propTypes.string
})]) : null;

var TransitionGroupContext = React__default['default'].createContext(null);

var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM__default['default'].findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : ReactDOM__default['default'].findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM__default['default'].findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      React__default['default'].createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : React__default['default'].cloneElement(React__default['default'].Children.only(children), childProps))
    );
  };

  return Transition;
}(React__default['default'].Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: propTypes.shape({
    current: typeof Element === 'undefined' ? propTypes.any : propTypes.instanceOf(Element)
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: propTypes.oneOfType([propTypes.func.isRequired, propTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: propTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: propTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: propTypes.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: propTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: propTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: propTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: propTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: propTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: propTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: propTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: propTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: propTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: propTypes.func
} : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;

/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.filter(function (f) {
    return f != null;
  }).reduce(function (acc, f) {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }

    if (acc === null) return f;
    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      // @ts-ignore
      acc.apply(this, args); // @ts-ignore

      f.apply(this, args);
    };
  }, null);
}

// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function triggerBrowserReflow(node) {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  node.offsetHeight;
}

/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded befor being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */

function useCommittedRef(value) {
  var ref = React.useRef(value);
  React.useEffect(function () {
    ref.current = value;
  }, [value]);
  return ref;
}

function useEventCallback(fn) {
  var ref = useCommittedRef(fn);
  return React.useCallback(function () {
    return ref.current && ref.current.apply(ref, arguments);
  }, [ref]);
}

var _fadeStyles;
var defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
var fadeStyles = (_fadeStyles = {}, _fadeStyles[ENTERING] = 'show', _fadeStyles[ENTERED] = 'show', _fadeStyles);
var Fade = React__default['default'].forwardRef(function (_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "children"]);

  var handleEnter = React.useCallback(function (node) {
    triggerBrowserReflow(node);
    if (props.onEnter) props.onEnter(node);
  }, [props]);
  return /*#__PURE__*/React__default['default'].createElement(Transition, _extends({
    ref: ref,
    addEndListener: transitionEnd
  }, props, {
    onEnter: handleEnter
  }), function (status, innerProps) {
    return React__default['default'].cloneElement(children, _extends({}, innerProps, {
      className: classnames('fade', className, children.props.className, fadeStyles[status])
    }));
  });
});
Fade.defaultProps = defaultProps;
Fade.displayName = 'Fade';

var rHyphen = /-(.)/g;
function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}

var pascalCase = function pascalCase(str) {
  return str[0].toUpperCase() + camelize(str).slice(1);
};

// TODO: emstricten & fix the typing here! `createWithBsPrefix<TElementType>...`
function createWithBsPrefix(prefix, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? pascalCase(prefix) : _ref$displayName,
      Component = _ref.Component,
      defaultProps = _ref.defaultProps;

  var BsComponent = React__default['default'].forwardRef(function (_ref2, ref) {
    var className = _ref2.className,
        bsPrefix = _ref2.bsPrefix,
        _ref2$as = _ref2.as,
        Tag = _ref2$as === void 0 ? Component || 'div' : _ref2$as,
        props = _objectWithoutPropertiesLoose(_ref2, ["className", "bsPrefix", "as"]);

    var resolvedPrefix = useBootstrapPrefix(bsPrefix, prefix);
    return /*#__PURE__*/React__default['default'].createElement(Tag, _extends({
      ref: ref,
      className: classnames(className, resolvedPrefix)
    }, props));
  });
  BsComponent.defaultProps = defaultProps;
  BsComponent.displayName = displayName;
  return BsComponent;
}

function isTrivialHref(href) {
  return !href || href.trim() === '#';
}
/**
 * There are situations due to browser quirks or Bootstrap CSS where
 * an anchor tag is needed, when semantically a button tag is the
 * better choice. SafeAnchor ensures that when an anchor is used like a
 * button its accessible. It also emulates input `disabled` behavior for
 * links, which is usually desirable for Buttons, NavItems, DropdownItems, etc.
 */


var SafeAnchor = React__default['default'].forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'a' : _ref$as,
      disabled = _ref.disabled,
      onKeyDown = _ref.onKeyDown,
      props = _objectWithoutPropertiesLoose(_ref, ["as", "disabled", "onKeyDown"]);

  var handleClick = function handleClick(event) {
    var href = props.href,
        onClick = props.onClick;

    if (disabled || isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };

  if (isTrivialHref(props.href)) {
    props.role = props.role || 'button'; // we want to make sure there is a href attribute on the node
    // otherwise, the cursor incorrectly styled (except with role='button')

    props.href = props.href || '#';
  }

  if (disabled) {
    props.tabIndex = -1;
    props['aria-disabled'] = true;
  }

  return /*#__PURE__*/React__default['default'].createElement(Component, _extends({
    ref: ref
  }, props, {
    onClick: handleClick,
    onKeyDown: createChainedFunction(handleKeyDown, onKeyDown)
  }));
});
SafeAnchor.displayName = 'SafeAnchor';

var defaultProps$1 = {
  variant: 'primary',
  active: false,
  disabled: false
};
var Button = React__default['default'].forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      size = _ref.size,
      active = _ref.active,
      className = _ref.className,
      block = _ref.block,
      type = _ref.type,
      as = _ref.as,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"]);

  var prefix = useBootstrapPrefix(bsPrefix, 'btn');
  var classes = classnames(className, prefix, active && 'active', prefix + "-" + variant, block && prefix + "-block", size && prefix + "-" + size);

  if (props.href) {
    return /*#__PURE__*/React__default['default'].createElement(SafeAnchor, _extends({}, props, {
      as: as,
      ref: ref,
      className: classnames(classes, props.disabled && 'disabled')
    }));
  }

  if (ref) {
    props.ref = ref;
  }

  if (type) {
    props.type = type;
  } else if (!as) {
    props.type = 'button';
  }

  var Component = as || 'button';
  return /*#__PURE__*/React__default['default'].createElement(Component, _extends({}, props, {
    className: classes
  }));
});
Button.displayName = 'Button';
Button.defaultProps = defaultProps$1;

/**
 * Track whether a component is current mounted. Generally less preferable than
 * properlly canceling effects so they don't run after a component is unmounted,
 * but helpful in cases where that isn't feasible, such as a `Promise` resolution.
 *
 * @returns a function that returns the current isMounted state of the component
 *
 * ```ts
 * const [data, setData] = useState(null)
 * const isMounted = useMounted()
 *
 * useEffect(() => {
 *   fetchdata().then((newData) => {
 *      if (isMounted()) {
 *        setData(newData);
 *      }
 *   })
 * })
 * ```
 */

function useMounted() {
  var mounted = React.useRef(true);
  var isMounted = React.useRef(function () {
    return mounted.current;
  });
  React.useEffect(function () {
    return function () {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}

/**
 * Returns a ref that is immediately updated with the new value
 *
 * @param value The Ref value
 * @category refs
 */

function useUpdatedRef(value) {
  var valueRef = React.useRef(value);
  valueRef.current = value;
  return valueRef;
}

/**
 * Attach a callback that fires when a component unmounts
 *
 * @param fn Handler to run when the component unmounts
 * @category effects
 */

function useWillUnmount(fn) {
  var onUnmount = useUpdatedRef(fn);
  React.useEffect(function () {
    return function () {
      return onUnmount.current();
    };
  }, []);
}

/*
 * Browsers including Internet Explorer, Chrome, Safari, and Firefox store the
 * delay as a 32-bit signed integer internally. This causes an integer overflow
 * when using delays larger than 2,147,483,647 ms (about 24.8 days),
 * resulting in the timeout being executed immediately.
 *
 * via: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
 */

var MAX_DELAY_MS = Math.pow(2, 31) - 1;

function setChainedTimeout(handleRef, fn, timeoutAtMs) {
  var delayMs = timeoutAtMs - Date.now();
  handleRef.current = delayMs <= MAX_DELAY_MS ? setTimeout(fn, delayMs) : setTimeout(function () {
    return setChainedTimeout(handleRef, fn, timeoutAtMs);
  }, MAX_DELAY_MS);
}
/**
 * Returns a controller object for setting a timeout that is properly cleaned up
 * once the component unmounts. New timeouts cancel and replace existing ones.
 */


function useTimeout() {
  var isMounted = useMounted(); // types are confused between node and web here IDK

  var handleRef = React.useRef();
  useWillUnmount(function () {
    return clearTimeout(handleRef.current);
  });
  return React.useMemo(function () {
    var clear = function clear() {
      return clearTimeout(handleRef.current);
    };

    function set(fn, delayMs) {
      if (delayMs === void 0) {
        delayMs = 0;
      }

      if (!isMounted()) return;
      clear();

      if (delayMs <= MAX_DELAY_MS) {
        // For simplicity, if the timeout is short, just set a normal timeout.
        handleRef.current = setTimeout(fn, delayMs);
      } else {
        setChainedTimeout(handleRef, fn, Date.now() + delayMs);
      }
    }

    return {
      set: set,
      clear: clear
    };
  }, []);
}

var DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];
var Col = React__default['default'].forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "className", "as"]);

  var prefix = useBootstrapPrefix(bsPrefix, 'col');
  var spans = [];
  var classes = [];
  DEVICE_SIZES.forEach(function (brkPoint) {
    var propValue = props[brkPoint];
    delete props[brkPoint];
    var span;
    var offset;
    var order;

    if (typeof propValue === 'object' && propValue != null) {
      var _propValue$span = propValue.span;
      span = _propValue$span === void 0 ? true : _propValue$span;
      offset = propValue.offset;
      order = propValue.order;
    } else {
      span = propValue;
    }

    var infix = brkPoint !== 'xs' ? "-" + brkPoint : '';
    if (span) spans.push(span === true ? "" + prefix + infix : "" + prefix + infix + "-" + span);
    if (order != null) classes.push("order" + infix + "-" + order);
    if (offset != null) classes.push("offset" + infix + "-" + offset);
  });

  if (!spans.length) {
    spans.push(prefix); // plain 'col'
  }

  return /*#__PURE__*/React__default['default'].createElement(Component, _extends({}, props, {
    ref: ref,
    className: classnames.apply(void 0, [className].concat(spans, classes))
  }));
});
Col.displayName = 'Col';

var matchesImpl;
function matches(node, selector) {
  if (!matchesImpl) {
    var body = document.body;
    var nativeMatch = body.matches || body.matchesSelector || body.webkitMatchesSelector || body.mozMatchesSelector || body.msMatchesSelector;

    matchesImpl = function matchesImpl(n, s) {
      return nativeMatch.call(n, s);
    };
  }

  return matchesImpl(node, selector);
}

var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}

/**
 * Store the last of some value. Tracked via a `Ref` only updating it
 * after the component renders.
 *
 * Helpful if you need to compare a prop value to it's previous value during render.
 *
 * ```ts
 * function Component(props) {
 *   const lastProps = usePrevious(props)
 *
 *   if (lastProps.foo !== props.foo)
 *     resetValueFromProps(props.foo)
 * }
 * ```
 *
 * @param value the value to track
 */

function usePrevious(value) {
  var ref = React.useRef(null);
  React.useEffect(function () {
    ref.current = value;
  });
  return ref.current;
}

/**
 * A convenience hook around `useState` designed to be paired with
 * the component [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) api.
 * Callback refs are useful over `useRef()` when you need to respond to the ref being set
 * instead of lazily accessing it in an effect.
 *
 * ```ts
 * const [element, attachRef] = useCallbackRef<HTMLDivElement>()
 *
 * useEffect(() => {
 *   if (!element) return
 *
 *   const calendar = new FullCalendar.Calendar(element)
 *
 *   return () => {
 *     calendar.destroy()
 *   }
 * }, [element])
 *
 * return <div ref={attachRef} />
 * ```
 *
 * @category refs
 */

function useCallbackRef() {
  return React.useState(null);
}

/**
 * Returns a function that triggers a component update. the hook equivalent to
 * `this.forceUpdate()` in a class component. In most cases using a state value directly
 * is preferable but may be required in some advanced usages of refs for interop or
 * when direct DOM manipulation is required.
 *
 * ```ts
 * const forceUpdate = useForceUpdate();
 *
 * const updateOnClick = useCallback(() => {
 *  forceUpdate()
 * }, [forceUpdate])
 *
 * return <button type="button" onClick={updateOnClick}>Hi there</button>
 * ```
 */

function useForceUpdate() {
  // The toggling state value is designed to defeat React optimizations for skipping
  // updates when they are stricting equal to the last state value
  var _useReducer = React.useReducer(function (state) {
    return !state;
  }, false),
      dispatch = _useReducer[1];

  return dispatch;
}

var DropdownContext = /*#__PURE__*/React__default['default'].createContext(null);

function useSafeState(state) {
  var isMounted = useMounted();
  return [state[0], React.useCallback(function (nextState) {
    if (!isMounted()) return;
    return state[1](nextState);
  }, [isMounted, state[1]])];
}

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function getLayoutRect(element) {
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: element.offsetWidth,
    height: element.offsetHeight
  };
}

function contains(parent, child) {
  // $FlowFixMe: hasOwnProperty doesn't seem to work in tests
  var isShadow = Boolean(child.getRootNode && child.getRootNode().host); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (isShadow) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

/*:: import type { Window } from '../types'; */

/*:: declare function getWindow(node: Node | Window): Window; */
function getWindow(node) {
  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
  }

  return node;
}

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

/*:: declare function isElement(node: mixed): boolean %checks(node instanceof
  Element); */

function isElement$1(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
/*:: declare function isHTMLElement(node: mixed): boolean %checks(node instanceof
  HTMLElement); */


function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe: assume body is always available
  return (isElement$1(element) ? element.ownerDocument : element.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// $FlowFixMe: this is a quicker (but less type safe) way to save quite some bytes from the bundle
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    // $FlowFixMe: need a better way to handle this...
    element.host || // ShadowRoot detected
    // $FlowFixMe: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === 'fixed') {
    return null;
  }

  var offsetParent = element.offsetParent;

  if (offsetParent) {
    var html = getDocumentElement(offsetParent);

    if (getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static' && getComputedStyle$1(html).position !== 'static') {
      return html;
    }
  }

  return offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.

    if (css.transform !== 'none' || css.perspective !== 'none' || css.willChange && css.willChange !== 'auto') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static') {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function within(min, value, max) {
  return Math.max(min, Math.min(value, max));
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign(Object.assign({}, getFreshSideObject()), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = state.modifiersData[name + "#persistent"].padding;
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element,
      _options$padding = options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (process.env.NODE_ENV !== "production") {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {
    if (process.env.NODE_ENV !== "production") {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
  state.modifiersData[name + "#persistent"] = {
    padding: mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements))
  };
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsets(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: Math.round(x * dpr) / dpr || 0,
    y: Math.round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive;

  var _roundOffsets = roundOffsets(offsets),
      x = _roundOffsets.x,
      y = _roundOffsets.y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);
    } // $FlowFixMe: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

    /*:: offsetParent = (offsetParent: Element); */


    if (placement === top) {
      sideY = bottom;
      y -= offsetParent.clientHeight - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left) {
      sideX = right;
      x -= offsetParent.clientWidth - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref3) {
  var state = _ref3.state,
      options = _ref3.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive;

  if (process.env.NODE_ENV !== "production") {
    var transitionProperty = getComputedStyle$1(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign(Object.assign({}, state.styles.popper), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign(Object.assign({}, state.styles.arrow), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false
    })));
  }

  state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect$1(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect$1,
  data: {}
};

var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

var hash$1 = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash$1[matched];
  });
}

function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = element.ownerDocument.body;
  var width = Math.max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = Math.max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle$1(body || html).direction === 'rtl') {
    x += Math.max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle$1(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the 
reference element's position.
*/

function listScrollParents(element, list) {
  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = getNodeName(scrollParent) === 'body';
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign(Object.assign({}, rect), {}, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement$1(clipperElement)) {
    return [];
  } // $FlowFixMe: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement$1(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = Math.max(rect.top, accRect.top);
    accRect.right = Math.min(rect.right, accRect.right);
    accRect.bottom = Math.min(rect.bottom, accRect.bottom);
    accRect.left = Math.max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function getVariation(placement) {
  return placement.split('-')[1];
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = Math.floor(offsets[mainAxis]) - Math.floor(reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = Math.floor(offsets[mainAxis]) + Math.ceil(reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement$1(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(referenceElement);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign(Object.assign({}, popperRect), popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

/*:: type OverflowsMap = { [ComputedPlacement]: number }; */

/*;; type OverflowsMap = { [key in ComputedPlacement]: number }; */
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements; // $FlowFixMe

  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;

    if (process.env.NODE_ENV !== "production") {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign(Object.assign({}, rects), {}, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign(Object.assign({}, state.rects), {}, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? Math.min(min, tetherMin) : min, offset, tether ? Math.max(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var _preventedOffset = within(_min, _offset, _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

        case 'phase':
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign(Object.assign(Object.assign({}, existing), current), {}, {
      options: Object.assign(Object.assign({}, existing.options), current.options),
      data: Object.assign(Object.assign({}, existing.data), current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign(Object.assign({}, DEFAULT_OPTIONS), defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign(Object.assign(Object.assign({}, defaultOptions), state.options), options);
        state.scrollParents = {
          reference: isElement$1(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (process.env.NODE_ENV !== "production") {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);

          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = getComputedStyle$1(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (process.env.NODE_ENV !== "production") {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (process.env.NODE_ENV !== "production") {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (process.env.NODE_ENV !== "production") {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

// This is b/c the Popper lib is all esm files, and would break in a common js only environment

var createPopper = popperGenerator({
  defaultModifiers: [hide$1, popperOffsets$1, computeStyles$1, eventListeners, offset$1, flip$1, preventOverflow$1, arrow$1]
});

var initialPopperStyles = function initialPopperStyles(position) {
  return {
    position: position,
    top: '0',
    left: '0',
    opacity: '0',
    pointerEvents: 'none'
  };
};

var disabledApplyStylesModifier = {
  name: 'applyStyles',
  enabled: false
}; // until docjs supports type exports...

var ariaDescribedByModifier = {
  name: 'ariaDescribedBy',
  enabled: true,
  phase: 'afterWrite',
  effect: function effect(_ref) {
    var state = _ref.state;
    return function () {
      var _state$elements = state.elements,
          reference = _state$elements.reference,
          popper = _state$elements.popper;

      if ('removeAttribute' in reference) {
        var ids = (reference.getAttribute('aria-describedby') || '').split(',').filter(function (id) {
          return id.trim() !== popper.id;
        });
        if (!ids.length) reference.removeAttribute('aria-describedby');else reference.setAttribute('aria-describedby', ids.join(','));
      }
    };
  },
  fn: function fn(_ref2) {
    var _popper$getAttribute;

    var state = _ref2.state;
    var _state$elements2 = state.elements,
        popper = _state$elements2.popper,
        reference = _state$elements2.reference;
    var role = (_popper$getAttribute = popper.getAttribute('role')) == null ? void 0 : _popper$getAttribute.toLowerCase();

    if (popper.id && role === 'tooltip' && 'setAttribute' in reference) {
      var ids = reference.getAttribute('aria-describedby');
      reference.setAttribute('aria-describedby', ids ? ids + "," + popper.id : popper.id);
    }
  }
};
var EMPTY_MODIFIERS = [];
/**
 * Position an element relative some reference element using Popper.js
 *
 * @param referenceElement
 * @param popperElement
 * @param {object}      options
 * @param {object=}     options.modifiers Popper.js modifiers
 * @param {boolean=}    options.enabled toggle the popper functionality on/off
 * @param {string=}     options.placement The popper element placement relative to the reference element
 * @param {string=}     options.strategy the positioning strategy
 * @param {boolean=}    options.eventsEnabled have Popper listen on window resize events to reposition the element
 * @param {function=}   options.onCreate called when the popper is created
 * @param {function=}   options.onUpdate called when the popper is updated
 *
 * @returns {UsePopperState} The popper state
 */

function usePopper(referenceElement, popperElement, _temp) {
  var _ref3 = _temp === void 0 ? {} : _temp,
      _ref3$enabled = _ref3.enabled,
      enabled = _ref3$enabled === void 0 ? true : _ref3$enabled,
      _ref3$placement = _ref3.placement,
      placement = _ref3$placement === void 0 ? 'bottom' : _ref3$placement,
      _ref3$strategy = _ref3.strategy,
      strategy = _ref3$strategy === void 0 ? 'absolute' : _ref3$strategy,
      _ref3$modifiers = _ref3.modifiers,
      modifiers = _ref3$modifiers === void 0 ? EMPTY_MODIFIERS : _ref3$modifiers,
      config = _objectWithoutPropertiesLoose(_ref3, ["enabled", "placement", "strategy", "modifiers"]);

  var popperInstanceRef = React.useRef();
  var update = React.useCallback(function () {
    var _popperInstanceRef$cu;

    (_popperInstanceRef$cu = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu.update();
  }, []);
  var forceUpdate = React.useCallback(function () {
    var _popperInstanceRef$cu2;

    (_popperInstanceRef$cu2 = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu2.forceUpdate();
  }, []);

  var _useSafeState = useSafeState(React.useState({
    placement: placement,
    update: update,
    forceUpdate: forceUpdate,
    attributes: {},
    styles: {
      popper: initialPopperStyles(strategy),
      arrow: {}
    }
  })),
      popperState = _useSafeState[0],
      setState = _useSafeState[1];

  var updateModifier = React.useMemo(function () {
    return {
      name: 'updateStateModifier',
      enabled: true,
      phase: 'write',
      requires: ['computeStyles'],
      fn: function fn(_ref4) {
        var state = _ref4.state;
        var styles = {};
        var attributes = {};
        Object.keys(state.elements).forEach(function (element) {
          styles[element] = state.styles[element];
          attributes[element] = state.attributes[element];
        });
        setState({
          state: state,
          styles: styles,
          attributes: attributes,
          update: update,
          forceUpdate: forceUpdate,
          placement: state.placement
        });
      }
    };
  }, [update, forceUpdate, setState]);
  React.useEffect(function () {
    if (!popperInstanceRef.current || !enabled) return;
    popperInstanceRef.current.setOptions({
      placement: placement,
      strategy: strategy,
      modifiers: [].concat(modifiers, [updateModifier, disabledApplyStylesModifier])
    }); // intentionally NOT re-running on new modifiers
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [strategy, placement, updateModifier, enabled]);
  React.useEffect(function () {
    if (!enabled || referenceElement == null || popperElement == null) {
      return undefined;
    }

    popperInstanceRef.current = createPopper(referenceElement, popperElement, _extends({}, config, {
      placement: placement,
      strategy: strategy,
      modifiers: [].concat(modifiers, [ariaDescribedByModifier, updateModifier])
    }));
    return function () {
      if (popperInstanceRef.current != null) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = undefined;
        setState(function (s) {
          return _extends({}, s, {
            attributes: {},
            styles: {
              popper: initialPopperStyles(strategy)
            }
          });
        });
      }
    }; // This is only run once to _create_ the popper
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, referenceElement, popperElement]);
  return popperState;
}

/* eslint-disable no-bitwise, no-cond-assign */
// HTML DOM and SVG DOM may have different support levels,
// so we need to check on context instead of a document root element.
function contains$1(context, node) {
  if (context.contains) return context.contains(node);
  if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning$2 = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning$2.apply(null, [format].concat(args));
    }
  };
}

var warning_1 = warning;

function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && 'setState' in componentOrElement) {
    return ReactDOM__default['default'].findDOMNode(componentOrElement);
  }

  return componentOrElement != null ? componentOrElement : null;
}

var ownerDocument$1 = (function (componentOrElement) {
  return ownerDocument(safeFindDOMNode(componentOrElement));
});

var escapeKeyCode = 27;

var noop$1 = function noop() {};

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var getRefTarget = function getRefTarget(ref) {
  return ref && ('current' in ref ? ref.current : ref);
};

/**
 * The `useRootClose` hook registers your callback on the document
 * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
 * style behavior where your callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 *
 * @param {Ref<HTMLElement>| HTMLElement} ref  The element boundary
 * @param {function} onRootClose
 * @param {object=}  options
 * @param {boolean=} options.disabled
 * @param {string=}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on
 */
function useRootClose(ref, onRootClose, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      disabled = _ref.disabled,
      _ref$clickTrigger = _ref.clickTrigger,
      clickTrigger = _ref$clickTrigger === void 0 ? 'click' : _ref$clickTrigger;

  var preventMouseRootCloseRef = React.useRef(false);
  var onClose = onRootClose || noop$1;
  var handleMouseCapture = React.useCallback(function (e) {
    var currentTarget = getRefTarget(ref);
    warning_1(!!currentTarget, 'RootClose captured a close event but does not have a ref to compare it to. ' + 'useRootClose(), should be passed a ref that resolves to a DOM node');
    preventMouseRootCloseRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!contains$1(currentTarget, e.target);
  }, [ref]);
  var handleMouse = useEventCallback(function (e) {
    if (!preventMouseRootCloseRef.current) {
      onClose(e);
    }
  });
  var handleKeyUp = useEventCallback(function (e) {
    if (e.keyCode === escapeKeyCode) {
      onClose(e);
    }
  });
  React.useEffect(function () {
    if (disabled || ref == null) return undefined;
    var doc = ownerDocument$1(getRefTarget(ref)); // Use capture for this listener so it fires before React's listener, to
    // avoid false positives in the contains() check below if the target DOM
    // element is removed in the React mouse callback.

    var removeMouseCaptureListener = listen(doc, clickTrigger, handleMouseCapture, true);
    var removeMouseListener = listen(doc, clickTrigger, handleMouse);
    var removeKeyupListener = listen(doc, 'keyup', handleKeyUp);
    var mobileSafariHackListeners = [];

    if ('ontouchstart' in doc.documentElement) {
      mobileSafariHackListeners = [].slice.call(doc.body.children).map(function (el) {
        return listen(el, 'mousemove', noop$1);
      });
    }

    return function () {
      removeMouseCaptureListener();
      removeMouseListener();
      removeKeyupListener();
      mobileSafariHackListeners.forEach(function (remove) {
        return remove();
      });
    };
  }, [ref, disabled, clickTrigger, handleMouseCapture, handleMouse, handleKeyUp]);
}

function toModifierMap(modifiers) {
  var result = {};

  if (!Array.isArray(modifiers)) {
    return modifiers || result;
  } // eslint-disable-next-line no-unused-expressions


  modifiers == null ? void 0 : modifiers.forEach(function (m) {
    result[m.name] = m;
  });
  return result;
}
function toModifierArray(map) {
  if (map === void 0) {
    map = {};
  }

  if (Array.isArray(map)) return map;
  return Object.keys(map).map(function (k) {
    map[k].name = k;
    return map[k];
  });
}
function mergeOptionsWithPopperConfig(_ref) {
  var _modifiers$preventOve, _modifiers$preventOve2, _modifiers$offset, _modifiers$arrow;

  var enabled = _ref.enabled,
      enableEvents = _ref.enableEvents,
      placement = _ref.placement,
      flip = _ref.flip,
      offset = _ref.offset,
      containerPadding = _ref.containerPadding,
      arrowElement = _ref.arrowElement,
      _ref$popperConfig = _ref.popperConfig,
      popperConfig = _ref$popperConfig === void 0 ? {} : _ref$popperConfig;
  var modifiers = toModifierMap(popperConfig.modifiers);
  return _extends({}, popperConfig, {
    placement: placement,
    enabled: enabled,
    modifiers: toModifierArray(_extends({}, modifiers, {
      eventListeners: {
        enabled: enableEvents
      },
      preventOverflow: _extends({}, modifiers.preventOverflow, {
        options: containerPadding ? _extends({
          padding: containerPadding
        }, (_modifiers$preventOve = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve.options) : (_modifiers$preventOve2 = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve2.options
      }),
      offset: {
        options: _extends({
          offset: offset
        }, (_modifiers$offset = modifiers.offset) == null ? void 0 : _modifiers$offset.options)
      },
      arrow: _extends({}, modifiers.arrow, {
        enabled: !!arrowElement,
        options: _extends({}, (_modifiers$arrow = modifiers.arrow) == null ? void 0 : _modifiers$arrow.options, {
          element: arrowElement
        })
      }),
      flip: _extends({
        enabled: !!flip
      }, modifiers.flip)
    }))
  });
}

var noop$2 = function noop() {};
/**
 * @memberOf Dropdown
 * @param {object}  options
 * @param {boolean} options.flip Automatically adjust the menu `drop` position based on viewport edge detection
 * @param {[number, number]} options.offset Define an offset distance between the Menu and the Toggle
 * @param {boolean} options.show Display the menu manually, ignored in the context of a `Dropdown`
 * @param {boolean} options.usePopper opt in/out of using PopperJS to position menus. When disabled you must position it yourself.
 * @param {string}  options.rootCloseEvent The pointer event to listen for when determining "clicks outside" the menu for triggering a close.
 * @param {object}  options.popperConfig Options passed to the [`usePopper`](/api/usePopper) hook.
 */


function useDropdownMenu(options) {
  if (options === void 0) {
    options = {};
  }

  var context = React.useContext(DropdownContext);

  var _useCallbackRef = useCallbackRef(),
      arrowElement = _useCallbackRef[0],
      attachArrowRef = _useCallbackRef[1];

  var hasShownRef = React.useRef(false);
  var _options = options,
      flip = _options.flip,
      offset = _options.offset,
      rootCloseEvent = _options.rootCloseEvent,
      _options$popperConfig = _options.popperConfig,
      popperConfig = _options$popperConfig === void 0 ? {} : _options$popperConfig,
      _options$usePopper = _options.usePopper,
      shouldUsePopper = _options$usePopper === void 0 ? !!context : _options$usePopper;
  var show = (context == null ? void 0 : context.show) == null ? options.show : context.show;
  var alignEnd = (context == null ? void 0 : context.alignEnd) == null ? options.alignEnd : context.alignEnd;

  if (show && !hasShownRef.current) {
    hasShownRef.current = true;
  }

  var handleClose = function handleClose(e) {
    context == null ? void 0 : context.toggle(false, e);
  };

  var _ref = context || {},
      drop = _ref.drop,
      setMenu = _ref.setMenu,
      menuElement = _ref.menuElement,
      toggleElement = _ref.toggleElement;

  var placement = alignEnd ? 'bottom-end' : 'bottom-start';
  if (drop === 'up') placement = alignEnd ? 'top-end' : 'top-start';else if (drop === 'right') placement = alignEnd ? 'right-end' : 'right-start';else if (drop === 'left') placement = alignEnd ? 'left-end' : 'left-start';

  var _usePopper = usePopper(toggleElement, menuElement, mergeOptionsWithPopperConfig({
    placement: placement,
    enabled: !!(shouldUsePopper && show),
    enableEvents: show,
    offset: offset,
    flip: flip,
    arrowElement: arrowElement,
    popperConfig: popperConfig
  })),
      styles = _usePopper.styles,
      attributes = _usePopper.attributes,
      popper = _objectWithoutPropertiesLoose(_usePopper, ["styles", "attributes"]);

  var menu;
  var menuProps = {
    ref: setMenu || noop$2,
    'aria-labelledby': toggleElement == null ? void 0 : toggleElement.id
  };
  var childArgs = {
    show: show,
    alignEnd: alignEnd,
    hasShown: hasShownRef.current,
    close: handleClose
  };

  if (!shouldUsePopper) {
    menu = _extends({}, childArgs, {
      props: menuProps
    });
  } else {
    menu = _extends({}, popper, childArgs, {
      props: _extends({}, menuProps, attributes.popper, {
        style: styles.popper
      }),
      arrowProps: _extends({
        ref: attachArrowRef
      }, attributes.arrow, {
        style: styles.arrow
      })
    });
  }

  useRootClose(menuElement, handleClose, {
    clickTrigger: rootCloseEvent,
    disabled: !(menu && show)
  });
  return menu;
}
var propTypes$1 = {
  /**
   * A render prop that returns a Menu element. The `props`
   * argument should spread through to **a component that can accept a ref**.
   *
   * @type {Function ({
   *   show: boolean,
   *   alignEnd: boolean,
   *   close: (?SyntheticEvent) => void,
   *   placement: Placement,
   *   update: () => void,
   *   forceUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *   },
   * }) => React.Element}
   */
  children: propTypes.func.isRequired,

  /**
   * Controls the visible state of the menu, generally this is
   * provided by the parent `Dropdown` component,
   * but may also be specified as a prop directly.
   */
  show: propTypes.bool,

  /**
   * Aligns the dropdown menu to the 'end' of it's placement position.
   * Generally this is provided by the parent `Dropdown` component,
   * but may also be specified as a prop directly.
   */
  alignEnd: propTypes.bool,

  /**
   * Enables the Popper.js `flip` modifier, allowing the Dropdown to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: propTypes.bool,
  usePopper: propTypes.oneOf([true, false]),

  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: propTypes.object,

  /**
   * Override the default event used by RootCloseWrapper.
   */
  rootCloseEvent: propTypes.string
};
var defaultProps$2 = {
  usePopper: true
};

/**
 * Also exported as `<Dropdown.Menu>` from `Dropdown`.
 *
 * @displayName DropdownMenu
 * @memberOf Dropdown
 */
function DropdownMenu(_ref2) {
  var children = _ref2.children,
      options = _objectWithoutPropertiesLoose(_ref2, ["children"]);

  var args = useDropdownMenu(options);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, args.hasShown ? children(args) : null);
}

DropdownMenu.displayName = 'ReactOverlaysDropdownMenu';
DropdownMenu.propTypes = propTypes$1;
DropdownMenu.defaultProps = defaultProps$2;

var noop$3 = function noop() {};
/**
 * Wires up Dropdown toggle functionality, returning a set a props to attach
 * to the element that functions as the dropdown toggle (generally a button).
 *
 * @memberOf Dropdown
 */


function useDropdownToggle() {
  var _ref = React.useContext(DropdownContext) || {},
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? false : _ref$show,
      _ref$toggle = _ref.toggle,
      toggle = _ref$toggle === void 0 ? noop$3 : _ref$toggle,
      setToggle = _ref.setToggle;

  return [{
    ref: setToggle || noop$3,
    'aria-haspopup': true,
    'aria-expanded': !!show
  }, {
    show: show,
    toggle: toggle
  }];
}
var propTypes$2 = {
  /**
   * A render prop that returns a Toggle element. The `props`
   * argument should spread through to **a component that can accept a ref**. Use
   * the `onToggle` argument to toggle the menu open or closed
   *
   * @type {Function ({
   *   show: boolean,
   *   toggle: (show: boolean) => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     aria-haspopup: true
   *     aria-expanded: boolean
   *   },
   * }) => React.Element}
   */
  children: propTypes.func.isRequired
};

/**
 * Also exported as `<Dropdown.Toggle>` from `Dropdown`.
 *
 * @displayName DropdownToggle
 * @memberOf Dropdown
 */
function DropdownToggle(_ref2) {
  var children = _ref2.children;

  var _useDropdownToggle = useDropdownToggle(),
      props = _useDropdownToggle[0],
      _useDropdownToggle$ = _useDropdownToggle[1],
      show = _useDropdownToggle$.show,
      toggle = _useDropdownToggle$.toggle;

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, children({
    show: show,
    toggle: toggle,
    props: props
  }));
}

DropdownToggle.displayName = 'ReactOverlaysDropdownToggle';
DropdownToggle.propTypes = propTypes$2;

var propTypes$3 = {
  /**
   * A render prop that returns the root dropdown element. The `props`
   * argument should spread through to an element containing _both_ the
   * menu and toggle in order to handle keyboard events for focus management.
   *
   * @type {Function ({
   *   props: {
   *     onKeyDown: (SyntheticEvent) => void,
   *   },
   * }) => React.Element}
   */
  children: propTypes.func.isRequired,

  /**
   * Determines the direction and location of the Menu in relation to it's Toggle.
   */
  drop: propTypes.oneOf(['up', 'left', 'right', 'down']),

  /**
   * Controls the focus behavior for when the Dropdown is opened. Set to
   * `true` to always focus the first menu item, `keyboard` to focus only when
   * navigating via the keyboard, or `false` to disable completely
   *
   * The Default behavior is `false` **unless** the Menu has a `role="menu"`
   * where it will default to `keyboard` to match the recommended [ARIA Authoring practices](https://www.w3.org/TR/wai-aria-practices-1.1/#menubutton).
   */
  focusFirstItemOnShow: propTypes.oneOf([false, true, 'keyboard']),

  /**
   * A css slector string that will return __focusable__ menu items.
   * Selectors should be relative to the menu component:
   * e.g. ` > li:not('.disabled')`
   */
  itemSelector: propTypes.string,

  /**
   * Align the menu to the 'end' side of the placement side of the Dropdown toggle. The default placement is `top-start` or `bottom-start`.
   */
  alignEnd: propTypes.bool,

  /**
   * Whether or not the Dropdown is visible.
   *
   * @controllable onToggle
   */
  show: propTypes.bool,

  /**
   * Sets the initial show position of the Dropdown.
   */
  defaultShow: propTypes.bool,

  /**
   * A callback fired when the Dropdown wishes to change visibility. Called with the requested
   * `show` value, the DOM event, and the source that fired it: `'click'`,`'keydown'`,`'rootClose'`, or `'select'`.
   *
   * ```ts static
   * function(
   *   isOpen: boolean,
   *   event: SyntheticEvent,
   * ): void
   * ```
   *
   * @controllable show
   */
  onToggle: propTypes.func
};

/**
 * @displayName Dropdown
 */
function Dropdown(_ref) {
  var drop = _ref.drop,
      alignEnd = _ref.alignEnd,
      defaultShow = _ref.defaultShow,
      rawShow = _ref.show,
      rawOnToggle = _ref.onToggle,
      _ref$itemSelector = _ref.itemSelector,
      itemSelector = _ref$itemSelector === void 0 ? '* > *' : _ref$itemSelector,
      focusFirstItemOnShow = _ref.focusFirstItemOnShow,
      children = _ref.children;
  var forceUpdate = useForceUpdate();

  var _useUncontrolledProp = useUncontrolledProp(rawShow, defaultShow, rawOnToggle),
      show = _useUncontrolledProp[0],
      onToggle = _useUncontrolledProp[1];

  var _useCallbackRef = useCallbackRef(),
      toggleElement = _useCallbackRef[0],
      setToggle = _useCallbackRef[1]; // We use normal refs instead of useCallbackRef in order to populate the
  // the value as quickly as possible, otherwise the effect to focus the element
  // may run before the state value is set


  var menuRef = React.useRef(null);
  var menuElement = menuRef.current;
  var setMenu = React.useCallback(function (ref) {
    menuRef.current = ref; // ensure that a menu set triggers an update for consumers

    forceUpdate();
  }, [forceUpdate]);
  var lastShow = usePrevious(show);
  var lastSourceEvent = React.useRef(null);
  var focusInDropdown = React.useRef(false);
  var toggle = React.useCallback(function (event) {
    onToggle(!show, event);
  }, [onToggle, show]);
  var context = React.useMemo(function () {
    return {
      toggle: toggle,
      drop: drop,
      show: show,
      alignEnd: alignEnd,
      menuElement: menuElement,
      toggleElement: toggleElement,
      setMenu: setMenu,
      setToggle: setToggle
    };
  }, [toggle, drop, show, alignEnd, menuElement, toggleElement, setMenu, setToggle]);

  if (menuElement && lastShow && !show) {
    focusInDropdown.current = menuElement.contains(document.activeElement);
  }

  var focusToggle = useEventCallback(function () {
    if (toggleElement && toggleElement.focus) {
      toggleElement.focus();
    }
  });
  var maybeFocusFirst = useEventCallback(function () {
    var type = lastSourceEvent.current;
    var focusType = focusFirstItemOnShow;

    if (focusType == null) {
      focusType = menuRef.current && matches(menuRef.current, '[role=menu]') ? 'keyboard' : false;
    }

    if (focusType === false || focusType === 'keyboard' && !/^key.+$/.test(type)) {
      return;
    }

    var first = qsa(menuRef.current, itemSelector)[0];
    if (first && first.focus) first.focus();
  });
  React.useEffect(function () {
    if (show) maybeFocusFirst();else if (focusInDropdown.current) {
      focusInDropdown.current = false;
      focusToggle();
    } // only `show` should be changing
  }, [show, focusInDropdown, focusToggle, maybeFocusFirst]);
  React.useEffect(function () {
    lastSourceEvent.current = null;
  });

  var getNextFocusedChild = function getNextFocusedChild(current, offset) {
    if (!menuRef.current) return null;
    var items = qsa(menuRef.current, itemSelector);
    var index = items.indexOf(current) + offset;
    index = Math.max(0, Math.min(index, items.length));
    return items[index];
  };

  var handleKeyDown = function handleKeyDown(event) {
    var key = event.key;
    var target = event.target; // Second only to https://github.com/twbs/bootstrap/blob/8cfbf6933b8a0146ac3fbc369f19e520bd1ebdac/js/src/dropdown.js#L400
    // in inscrutability

    var isInput = /input|textarea/i.test(target.tagName);

    if (isInput && (key === ' ' || key !== 'Escape' && menuRef.current && menuRef.current.contains(target))) {
      return;
    }

    lastSourceEvent.current = event.type;

    switch (key) {
      case 'ArrowUp':
        {
          var next = getNextFocusedChild(target, -1);
          if (next && next.focus) next.focus();
          event.preventDefault();
          return;
        }

      case 'ArrowDown':
        event.preventDefault();

        if (!show) {
          toggle(event);
        } else {
          var _next = getNextFocusedChild(target, 1);

          if (_next && _next.focus) _next.focus();
        }

        return;

      case 'Escape':
      case 'Tab':
        onToggle(false, event);
        break;
    }
  };

  return /*#__PURE__*/React__default['default'].createElement(DropdownContext.Provider, {
    value: context
  }, children({
    props: {
      onKeyDown: handleKeyDown
    }
  }));
}

Dropdown.displayName = 'ReactOverlaysDropdown';
Dropdown.propTypes = propTypes$3;
Dropdown.Menu = DropdownMenu;
Dropdown.Toggle = DropdownToggle;

var NavContext = React__default['default'].createContext(null);
NavContext.displayName = 'NavContext';

var defaultProps$3 = {
  as: SafeAnchor,
  disabled: false
};
var DropdownItem = React__default['default'].forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      eventKey = _ref.eventKey,
      disabled = _ref.disabled,
      href = _ref.href,
      onClick = _ref.onClick,
      onSelect = _ref.onSelect,
      propActive = _ref.active,
      Component = _ref.as,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "className", "children", "eventKey", "disabled", "href", "onClick", "onSelect", "active", "as"]);

  var prefix = useBootstrapPrefix(bsPrefix, 'dropdown-item');
  var onSelectCtx = React.useContext(SelectableContext);
  var navContext = React.useContext(NavContext);

  var _ref2 = navContext || {},
      activeKey = _ref2.activeKey;

  var key = makeEventKey(eventKey || null, href);
  var active = propActive == null && key != null ? makeEventKey(activeKey) === key : propActive;
  var handleClick = useEventCallback(function (event) {
    // SafeAnchor handles the disabled case, but we handle it here
    // for other components
    if (disabled) return;
    if (onClick) onClick(event);
    if (onSelectCtx) onSelectCtx(key, event);
    if (onSelect) onSelect(key, event);
  });
  return (
    /*#__PURE__*/
    // "TS2604: JSX element type 'Component' does not have any construct or call signatures."
    // @ts-ignore
    React__default['default'].createElement(Component, _extends({}, props, {
      ref: ref,
      href: href,
      disabled: disabled,
      className: classnames(className, prefix, active && 'active', disabled && 'disabled'),
      onClick: handleClick
    }), children)
  );
});
DropdownItem.displayName = 'DropdownItem';
DropdownItem.defaultProps = defaultProps$3;

var toFnRef = function toFnRef(ref) {
  return !ref || typeof ref === 'function' ? ref : function (value) {
    ref.current = value;
  };
};

function mergeRefs(refA, refB) {
  var a = toFnRef(refA);
  var b = toFnRef(refB);
  return function (value) {
    if (a) a(value);
    if (b) b(value);
  };
}
/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */

function useMergedRefs(refA, refB) {
  return React.useMemo(function () {
    return mergeRefs(refA, refB);
  }, [refA, refB]);
}

var context = React__default['default'].createContext(null);
context.displayName = 'NavbarContext';

function useWrappedRefWithWarning(ref, componentName) {
  // @ts-ignore
  if (!(process.env.NODE_ENV !== "production")) return ref; // eslint-disable-next-line react-hooks/rules-of-hooks

  var warningRef = React.useCallback(function (refValue) {
    !(refValue == null || !refValue.isReactComponent) ? process.env.NODE_ENV !== "production" ? invariant_1(false, componentName + " injected a ref to a provided `as` component that resolved to a component instance instead of a DOM element. " + 'Use `React.forwardRef` to provide the injected ref to the class component as a prop in order to pass it directly to a DOM element') : invariant_1(false) : void 0;
  }, [componentName]); // eslint-disable-next-line react-hooks/rules-of-hooks

  return useMergedRefs(warningRef, ref);
}

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

function getMargins(element) {
  var styles = window.getComputedStyle(element);
  var top = parseFloat(styles.marginTop) || 0;
  var right = parseFloat(styles.marginRight) || 0;
  var bottom = parseFloat(styles.marginBottom) || 0;
  var left = parseFloat(styles.marginLeft) || 0;
  return {
    top: top,
    right: right,
    bottom: bottom,
    left: left
  };
}

function usePopperMarginModifiers() {
  var overlayRef = React.useRef(null);
  var margins = React.useRef(null);
  var callback = React.useCallback(function (overlay) {
    if (!overlay || !(hasClass(overlay, 'popover') || hasClass(overlay, 'dropdown-menu'))) return;
    margins.current = getMargins(overlay);
    overlay.style.margin = '0';
    overlayRef.current = overlay;
  }, []);
  var offset = React.useMemo(function () {
    return {
      name: 'offset',
      options: {
        offset: function offset(_ref) {
          var placement = _ref.placement;
          if (!margins.current) return [0, 0];
          var _margins$current = margins.current,
              top = _margins$current.top,
              left = _margins$current.left,
              bottom = _margins$current.bottom,
              right = _margins$current.right;

          switch (placement.split('-')[0]) {
            case 'top':
              return [0, bottom];

            case 'left':
              return [0, right];

            case 'bottom':
              return [0, top];

            case 'right':
              return [0, left];

            default:
              return [0, 0];
          }
        }
      }
    };
  }, [margins]); // Converts popover arrow margin to arrow modifier padding

  var popoverArrowMargins = React.useMemo(function () {
    return {
      name: 'popoverArrowMargins',
      enabled: true,
      phase: 'main',
      requiresIfExists: ['arrow'],
      effect: function effect(_ref2) {
        var state = _ref2.state;

        if (!overlayRef.current || !state.elements.arrow || !hasClass(overlayRef.current, 'popover') || !state.modifiersData['arrow#persistent']) {
          return undefined;
        }

        var _getMargins = getMargins(state.elements.arrow),
            top = _getMargins.top,
            right = _getMargins.right;

        var padding = top || right;
        state.modifiersData['arrow#persistent'].padding = {
          top: padding,
          left: padding,
          right: padding,
          bottom: padding
        };
        state.elements.arrow.style.margin = '0';
        return function () {
          if (state.elements.arrow) state.elements.arrow.style.margin = '';
        };
      }
    };
  }, []);
  return [callback, [offset, popoverArrowMargins]];
}

var defaultProps$4 = {
  alignRight: false,
  flip: true
}; // TODO: remove this hack

var DropdownMenu$1 = React__default['default'].forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      alignRight = _ref.alignRight,
      rootCloseEvent = _ref.rootCloseEvent,
      flip = _ref.flip,
      showProps = _ref.show,
      renderOnMount = _ref.renderOnMount,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      popperConfig = _ref.popperConfig,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "className", "alignRight", "rootCloseEvent", "flip", "show", "renderOnMount", "as", "popperConfig"]);

  var isNavbar = React.useContext(context);
  var prefix = useBootstrapPrefix(bsPrefix, 'dropdown-menu');

  var _usePopperMarginModif = usePopperMarginModifiers(),
      popperRef = _usePopperMarginModif[0],
      marginModifiers = _usePopperMarginModif[1];

  var _ref2 = useDropdownMenu({
    flip: flip,
    rootCloseEvent: rootCloseEvent,
    show: showProps,
    alignEnd: alignRight,
    usePopper: !isNavbar,
    popperConfig: _extends({}, popperConfig, {
      modifiers: marginModifiers.concat((popperConfig == null ? void 0 : popperConfig.modifiers) || [])
    })
  }),
      hasShown = _ref2.hasShown,
      placement = _ref2.placement,
      show = _ref2.show,
      alignEnd = _ref2.alignEnd,
      close = _ref2.close,
      menuProps = _ref2.props;

  menuProps.ref = useMergedRefs(popperRef, useMergedRefs(useWrappedRefWithWarning(ref, 'DropdownMenu'), menuProps.ref));
  if (!hasShown && !renderOnMount) return null; // For custom components provide additional, non-DOM, props;

  if (typeof Component !== 'string') {
    menuProps.show = show;
    menuProps.close = close;
    menuProps.alignRight = alignEnd;
  }

  if (placement) {
    // we don't need the default popper style,
    // menus are display: none when not shown.
    props.style = _extends({}, props.style, {}, menuProps.style);
    props['x-placement'] = placement;
  }

  return /*#__PURE__*/React__default['default'].createElement(Component, _extends({}, props, menuProps, {
    className: classnames(className, prefix, show && 'show', alignEnd && prefix + "-right")
  }));
});
DropdownMenu$1.displayName = 'DropdownMenu';
DropdownMenu$1.defaultProps = defaultProps$4;

var isRequiredForA11y_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isRequiredForA11y;
function isRequiredForA11y(validator) {
  return function validate(props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      return new Error('The ' + location + ' `' + propFullNameSafe + '` is required to make ' + ('`' + componentNameSafe + '` accessible for users of assistive ') + 'technologies such as screen readers.');
    }

    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      args[_key - 5] = arguments[_key];
    }

    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
  };
}
module.exports = exports['default'];
});

var DropdownToggle$1 = React__default['default'].forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      split = _ref.split,
      className = _ref.className,
      children = _ref.children,
      childBsPrefix = _ref.childBsPrefix,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? Button : _ref$as,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "split", "className", "children", "childBsPrefix", "as"]);

  var prefix = useBootstrapPrefix(bsPrefix, 'dropdown-toggle');

  if (childBsPrefix !== undefined) {
    props.bsPrefix = childBsPrefix;
  }

  var _useDropdownToggle = useDropdownToggle(),
      toggleProps = _useDropdownToggle[0],
      toggle = _useDropdownToggle[1].toggle;

  toggleProps.ref = useMergedRefs(toggleProps.ref, useWrappedRefWithWarning(ref, 'DropdownToggle')); // This intentionally forwards size and variant (if set) to the
  // underlying component, to allow it to render size and style variants.

  return /*#__PURE__*/React__default['default'].createElement(Component, _extends({
    onClick: toggle,
    className: classnames(className, prefix, split && prefix + "-split")
  }, toggleProps, props), children);
});
DropdownToggle$1.displayName = 'DropdownToggle';

var DropdownHeader = createWithBsPrefix('dropdown-header', {
  defaultProps: {
    role: 'heading'
  }
});
var DropdownDivider = createWithBsPrefix('dropdown-divider', {
  defaultProps: {
    role: 'separator'
  }
});
var DropdownItemText = createWithBsPrefix('dropdown-item-text', {
  Component: 'span'
});
var defaultProps$5 = {
  navbar: false
};
var Dropdown$1 = React__default['default'].forwardRef(function (pProps, ref) {
  var _useUncontrolled = useUncontrolled(pProps, {
    show: 'onToggle'
  }),
      bsPrefix = _useUncontrolled.bsPrefix,
      drop = _useUncontrolled.drop,
      show = _useUncontrolled.show,
      className = _useUncontrolled.className,
      alignRight = _useUncontrolled.alignRight,
      onSelect = _useUncontrolled.onSelect,
      onToggle = _useUncontrolled.onToggle,
      focusFirstItemOnShow = _useUncontrolled.focusFirstItemOnShow,
      _useUncontrolled$as = _useUncontrolled.as,
      Component = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
      _4 = _useUncontrolled.navbar,
      props = _objectWithoutPropertiesLoose(_useUncontrolled, ["bsPrefix", "drop", "show", "className", "alignRight", "onSelect", "onToggle", "focusFirstItemOnShow", "as", "navbar"]);

  var onSelectCtx = React.useContext(SelectableContext);
  var prefix = useBootstrapPrefix(bsPrefix, 'dropdown');
  var handleToggle = useEventCallback(function (nextShow, event, source) {
    if (source === void 0) {
      source = event.type;
    }

    if (event.currentTarget === document) source = 'rootClose';

    if (onToggle) {
      onToggle(nextShow, event, {
        source: source
      });
    }
  });
  var handleSelect = useEventCallback(function (key, event) {
    if (onSelectCtx) onSelectCtx(key, event);
    if (onSelect) onSelect(key, event);
    handleToggle(false, event, 'select');
  });
  return /*#__PURE__*/React__default['default'].createElement(SelectableContext.Provider, {
    value: handleSelect
  }, /*#__PURE__*/React__default['default'].createElement(Dropdown, {
    drop: drop,
    show: show,
    alignEnd: alignRight,
    onToggle: handleToggle,
    focusFirstItemOnShow: focusFirstItemOnShow,
    itemSelector: "." + prefix + "-item:not(.disabled):not(:disabled)"
  }, function (_ref) {
    var dropdownProps = _ref.props;
    return /*#__PURE__*/React__default['default'].createElement(Component, _extends({}, props, dropdownProps, {
      ref: ref,
      className: classnames(className, show && 'show', (!drop || drop === 'down') && prefix, drop === 'up' && 'dropup', drop === 'right' && 'dropright', drop === 'left' && 'dropleft')
    }));
  }));
});
Dropdown$1.displayName = 'Dropdown';
Dropdown$1.defaultProps = defaultProps$5;
Dropdown$1.Divider = DropdownDivider;
Dropdown$1.Header = DropdownHeader;
Dropdown$1.Item = DropdownItem;
Dropdown$1.ItemText = DropdownItemText;
Dropdown$1.Menu = DropdownMenu$1;
Dropdown$1.Toggle = DropdownToggle$1;

var defaultProps$6 = {
  fluid: false
};
var Container = React__default['default'].forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      fluid = _ref.fluid,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "fluid", "as", "className"]);

  var prefix = useBootstrapPrefix(bsPrefix, 'container');
  var suffix = typeof fluid === 'string' ? "-" + fluid : '-fluid';
  return /*#__PURE__*/React__default['default'].createElement(Component, _extends({
    ref: ref
  }, props, {
    className: classnames(className, fluid ? "" + prefix + suffix : prefix)
  }));
});
Container.displayName = 'Container';
Container.defaultProps = defaultProps$6;

var resolveContainerRef = function resolveContainerRef(ref) {
  var _ref;

  if (typeof document === 'undefined') return null;
  if (ref == null) return ownerDocument().body;
  if (typeof ref === 'function') ref = ref();
  if (ref && 'current' in ref) ref = ref.current;
  if ((_ref = ref) == null ? void 0 : _ref.nodeType) return ref || null;
  return null;
};
function useWaitForDOMRef(ref, onResolved) {
  var _useState = React.useState(function () {
    return resolveContainerRef(ref);
  }),
      resolvedRef = _useState[0],
      setRef = _useState[1];

  if (!resolvedRef) {
    var earlyRef = resolveContainerRef(ref);
    if (earlyRef) setRef(earlyRef);
  }

  React.useEffect(function () {
    if (onResolved && resolvedRef) {
      onResolved(resolvedRef);
    }
  }, [onResolved, resolvedRef]);
  React.useEffect(function () {
    var nextRef = resolveContainerRef(ref);

    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);
  return resolvedRef;
}

/**
 * Built on top of `Popper.js`, the overlay component is
 * great for custom tooltip overlays.
 */
var Overlay = /*#__PURE__*/React__default['default'].forwardRef(function (props, outerRef) {
  var flip = props.flip,
      offset = props.offset,
      placement = props.placement,
      _props$containerPaddi = props.containerPadding,
      containerPadding = _props$containerPaddi === void 0 ? 5 : _props$containerPaddi,
      _props$popperConfig = props.popperConfig,
      popperConfig = _props$popperConfig === void 0 ? {} : _props$popperConfig,
      Transition = props.transition;

  var _useCallbackRef = useCallbackRef(),
      rootElement = _useCallbackRef[0],
      attachRef = _useCallbackRef[1];

  var _useCallbackRef2 = useCallbackRef(),
      arrowElement = _useCallbackRef2[0],
      attachArrowRef = _useCallbackRef2[1];

  var mergedRef = useMergedRefs(attachRef, outerRef);
  var container = useWaitForDOMRef(props.container);
  var target = useWaitForDOMRef(props.target);

  var _useState = React.useState(!props.show),
      exited = _useState[0],
      setExited = _useState[1];

  var _usePopper = usePopper(target, rootElement, mergeOptionsWithPopperConfig({
    placement: placement,
    enableEvents: !!props.show,
    containerPadding: containerPadding || 5,
    flip: flip,
    offset: offset,
    arrowElement: arrowElement,
    popperConfig: popperConfig
  })),
      styles = _usePopper.styles,
      attributes = _usePopper.attributes,
      popper = _objectWithoutPropertiesLoose(_usePopper, ["styles", "attributes"]);

  if (props.show) {
    if (exited) setExited(false);
  } else if (!props.transition && !exited) {
    setExited(true);
  }

  var handleHidden = function handleHidden() {
    setExited(true);

    if (props.onExited) {
      props.onExited.apply(props, arguments);
    }
  }; // Don't un-render the overlay while it's transitioning out.


  var mountOverlay = props.show || Transition && !exited;
  useRootClose(rootElement, props.onHide, {
    disabled: !props.rootClose || props.rootCloseDisabled,
    clickTrigger: props.rootCloseEvent
  });

  if (!mountOverlay) {
    // Don't bother showing anything if we don't have to.
    return null;
  }

  var child = props.children(_extends({}, popper, {
    show: !!props.show,
    props: _extends({}, attributes.popper, {
      style: styles.popper,
      ref: mergedRef
    }),
    arrowProps: _extends({}, attributes.arrow, {
      style: styles.arrow,
      ref: attachArrowRef
    })
  }));

  if (Transition) {
    var onExit = props.onExit,
        onExiting = props.onExiting,
        onEnter = props.onEnter,
        onEntering = props.onEntering,
        onEntered = props.onEntered;
    child = /*#__PURE__*/React__default['default'].createElement(Transition, {
      "in": props.show,
      appear: true,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleHidden,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered
    }, child);
  }

  return container ? /*#__PURE__*/ReactDOM__default['default'].createPortal(child, container) : null;
});
Overlay.displayName = 'Overlay';
Overlay.propTypes = {
  /**
   * Set the visibility of the Overlay
   */
  show: propTypes.bool,

  /** Specify where the overlay element is positioned in relation to the target element */
  placement: propTypes.oneOf(placements),

  /**
   * A DOM Element, Ref to an element, or function that returns either. The `target` element is where
   * the overlay is positioned relative to.
   */
  target: propTypes.any,

  /**
   * A DOM Element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: propTypes.any,

  /**
   * Enables the Popper.js `flip` modifier, allowing the Overlay to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: propTypes.bool,

  /**
   * A render prop that returns an element to overlay and position. See
   * the [react-popper documentation](https://github.com/FezVrasta/react-popper#children) for more info.
   *
   * @type {Function ({
   *   show: boolean,
   *   placement: Placement,
   *   update: () => void,
   *   forceUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *     [string]: string | number,
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     [string]: string | number,
   *   },
   * }) => React.Element}
   */
  children: propTypes.func.isRequired,

  /**
   * Control how much space there is between the edge of the boundary element and overlay.
   * A convenience shortcut to setting `popperConfig.modfiers.preventOverflow.padding`
   */
  containerPadding: propTypes.number,

  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: propTypes.object,

  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose: propTypes.bool,

  /**
   * Specify event for toggling overlay
   */
  rootCloseEvent: propTypes.oneOf(['click', 'mousedown']),

  /**
   * Specify disabled for disable RootCloseWrapper
   */
  rootCloseDisabled: propTypes.bool,

  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   *
   * @type func
   */
  onHide: function onHide(props) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (props.rootClose) {
      var _PropTypes$func;

      return (_PropTypes$func = propTypes.func).isRequired.apply(_PropTypes$func, [props].concat(args));
    }

    return propTypes.func.apply(propTypes, [props].concat(args));
  },

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  // @ts-ignore
  transition: propTypes.elementType,

  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: propTypes.func,

  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: propTypes.func,

  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: propTypes.func,

  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: propTypes.func,

  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: propTypes.func,

  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: propTypes.func
};

var defaultProps$7 = {
  transition: Fade,
  rootClose: false,
  show: false,
  placement: 'top'
};

function wrapRefs(props, arrowProps) {
  var ref = props.ref;
  var aRef = arrowProps.ref;

  props.ref = ref.__wrapped || (ref.__wrapped = function (r) {
    return ref(safeFindDOMNode(r));
  });

  arrowProps.ref = aRef.__wrapped || (aRef.__wrapped = function (r) {
    return aRef(safeFindDOMNode(r));
  });
}

function Overlay$1(_ref) {
  var overlay = _ref.children,
      transition = _ref.transition,
      _ref$popperConfig = _ref.popperConfig,
      popperConfig = _ref$popperConfig === void 0 ? {} : _ref$popperConfig,
      outerProps = _objectWithoutPropertiesLoose(_ref, ["children", "transition", "popperConfig"]);

  var popperRef = React.useRef({});

  var _usePopperMarginModif = usePopperMarginModifiers(),
      ref = _usePopperMarginModif[0],
      marginModifiers = _usePopperMarginModif[1];

  var actualTransition = transition === true ? Fade : transition || null;
  return /*#__PURE__*/React__default['default'].createElement(Overlay, _extends({}, outerProps, {
    ref: ref,
    popperConfig: _extends({}, popperConfig, {
      modifiers: marginModifiers.concat(popperConfig.modifiers || [])
    }),
    transition: actualTransition
  }), function (_ref2) {
    var _state$modifiersData$;

    var overlayProps = _ref2.props,
        arrowProps = _ref2.arrowProps,
        show = _ref2.show,
        update = _ref2.update,
        _ = _ref2.forceUpdate,
        placement = _ref2.placement,
        state = _ref2.state,
        props = _objectWithoutPropertiesLoose(_ref2, ["props", "arrowProps", "show", "update", "forceUpdate", "placement", "state"]);

    wrapRefs(overlayProps, arrowProps);
    var popper = Object.assign(popperRef.current, {
      state: state,
      scheduleUpdate: update,
      placement: placement,
      outOfBoundaries: (state == null ? void 0 : (_state$modifiersData$ = state.modifiersData.hide) == null ? void 0 : _state$modifiersData$.isReferenceHidden) || false
    });
    if (typeof overlay === 'function') return overlay(_extends({}, props, {}, overlayProps, {
      placement: placement,
      show: show,
      popper: popper,
      arrowProps: arrowProps
    }));
    return React__default['default'].cloneElement(overlay, _extends({}, props, {}, overlayProps, {
      placement: placement,
      arrowProps: arrowProps,
      popper: popper,
      className: classnames(overlay.props.className, !transition && show && 'show'),
      style: _extends({}, overlay.props.style, {}, overlayProps.style)
    }));
  });
}

Overlay$1.defaultProps = defaultProps$7;

var RefHolder = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(RefHolder, _React$Component);

  function RefHolder() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = RefHolder.prototype;

  _proto.render = function render() {
    return this.props.children;
  };

  return RefHolder;
}(React__default['default'].Component);

function normalizeDelay(delay) {
  return delay && typeof delay === 'object' ? delay : {
    show: delay,
    hide: delay
  };
} // Simple implementation of mouseEnter and mouseLeave.
// React's built version is broken: https://github.com/facebook/react/issues/4251
// for cases when the trigger is disabled and mouseOut/Over can cause flicker
// moving from one child element to another.


function handleMouseOverOut(handler, args, relatedNative) {
  var e = args[0];
  var target = e.currentTarget;
  var related = e.relatedTarget || e.nativeEvent[relatedNative];

  if ((!related || related !== target) && !contains$1(target, related)) {
    handler.apply(void 0, args);
  }
}

var defaultProps$8 = {
  defaultShow: false,
  trigger: ['hover', 'focus']
};

function OverlayTrigger(_ref) {
  var trigger = _ref.trigger,
      overlay = _ref.overlay,
      children = _ref.children,
      _ref$popperConfig = _ref.popperConfig,
      popperConfig = _ref$popperConfig === void 0 ? {} : _ref$popperConfig,
      propsShow = _ref.show,
      _ref$defaultShow = _ref.defaultShow,
      defaultShow = _ref$defaultShow === void 0 ? false : _ref$defaultShow,
      onToggle = _ref.onToggle,
      propsDelay = _ref.delay,
      placement = _ref.placement,
      _ref$flip = _ref.flip,
      flip = _ref$flip === void 0 ? placement && placement.indexOf('auto') !== -1 : _ref$flip,
      props = _objectWithoutPropertiesLoose(_ref, ["trigger", "overlay", "children", "popperConfig", "show", "defaultShow", "onToggle", "delay", "placement", "flip"]);

  var triggerNodeRef = React.useRef(null);
  var timeout = useTimeout();
  var hoverStateRef = React.useRef('');

  var _useUncontrolledProp = useUncontrolledProp(propsShow, defaultShow, onToggle),
      show = _useUncontrolledProp[0],
      setShow = _useUncontrolledProp[1];

  var delay = normalizeDelay(propsDelay);

  var _ref2 = typeof children !== 'function' ? React__default['default'].Children.only(children).props : {},
      onFocus = _ref2.onFocus,
      onBlur = _ref2.onBlur,
      onClick = _ref2.onClick;

  var getTarget = React.useCallback(function () {
    return safeFindDOMNode(triggerNodeRef.current);
  }, []);
  var handleShow = React.useCallback(function () {
    timeout.clear();
    hoverStateRef.current = 'show';

    if (!delay.show) {
      setShow(true);
      return;
    }

    timeout.set(function () {
      if (hoverStateRef.current === 'show') setShow(true);
    }, delay.show);
  }, [delay.show, setShow, timeout]);
  var handleHide = React.useCallback(function () {
    timeout.clear();
    hoverStateRef.current = 'hide';

    if (!delay.hide) {
      setShow(false);
      return;
    }

    timeout.set(function () {
      if (hoverStateRef.current === 'hide') setShow(false);
    }, delay.hide);
  }, [delay.hide, setShow, timeout]);
  var handleFocus = React.useCallback(function () {
    handleShow();

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    onFocus == null ? void 0 : onFocus.apply(void 0, args);
  }, [handleShow, onFocus]);
  var handleBlur = React.useCallback(function () {
    handleHide();

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    onBlur == null ? void 0 : onBlur.apply(void 0, args);
  }, [handleHide, onBlur]);
  var handleClick = React.useCallback(function () {
    setShow(!show);
    if (onClick) onClick.apply(void 0, arguments);
  }, [onClick, setShow, show]);
  var handleMouseOver = React.useCallback(function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    handleMouseOverOut(handleShow, args, 'fromElement');
  }, [handleShow]);
  var handleMouseOut = React.useCallback(function () {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    handleMouseOverOut(handleHide, args, 'toElement');
  }, [handleHide]);
  var triggers = trigger == null ? [] : [].concat(trigger);
  var triggerProps = {};

  if (triggers.indexOf('click') !== -1) {
    triggerProps.onClick = handleClick;
  }

  if (triggers.indexOf('focus') !== -1) {
    triggerProps.onFocus = handleFocus;
    triggerProps.onBlur = handleBlur;
  }

  if (triggers.indexOf('hover') !== -1) {
    process.env.NODE_ENV !== "production" ? warning_1(triggers.length > 1, '[react-bootstrap] Specifying only the `"hover"` trigger limits the visibility of the overlay to just mouse users. Consider also including the `"focus"` trigger so that touch and keyboard only users can see the overlay as well.') : void 0;
    triggerProps.onMouseOver = handleMouseOver;
    triggerProps.onMouseOut = handleMouseOut;
  }

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, typeof children === 'function' ? children(_extends({}, triggerProps, {
    ref: triggerNodeRef
  })) : /*#__PURE__*/React__default['default'].createElement(RefHolder, {
    ref: triggerNodeRef
  }, React.cloneElement(children, triggerProps)), /*#__PURE__*/React__default['default'].createElement(Overlay$1, _extends({}, props, {
    show: show,
    onHide: handleHide,
    flip: flip,
    placement: placement,
    popperConfig: popperConfig,
    target: getTarget
  }), overlay));
}

OverlayTrigger.defaultProps = defaultProps$8;

var DEVICE_SIZES$1 = ['xl', 'lg', 'md', 'sm', 'xs'];
var defaultProps$9 = {
  noGutters: false
};
var Row = React__default['default'].forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      noGutters = _ref.noGutters,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "className", "noGutters", "as"]);

  var decoratedBsPrefix = useBootstrapPrefix(bsPrefix, 'row');
  var sizePrefix = decoratedBsPrefix + "-cols";
  var classes = [];
  DEVICE_SIZES$1.forEach(function (brkPoint) {
    var propValue = props[brkPoint];
    delete props[brkPoint];
    var cols;

    if (propValue != null && typeof propValue === 'object') {
      cols = propValue.cols;
    } else {
      cols = propValue;
    }

    var infix = brkPoint !== 'xs' ? "-" + brkPoint : '';
    if (cols != null) classes.push("" + sizePrefix + infix + "-" + cols);
  });
  return /*#__PURE__*/React__default['default'].createElement(Component, _extends({
    ref: ref
  }, props, {
    className: classnames.apply(void 0, [className, decoratedBsPrefix, noGutters && 'no-gutters'].concat(classes))
  }));
});
Row.displayName = 'Row';
Row.defaultProps = defaultProps$9;

var defaultProps$a = {
  placement: 'right'
};
var Tooltip = React__default['default'].forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      placement = _ref.placement,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      arrowProps = _ref.arrowProps,
      _ = _ref.popper,
      _2 = _ref.show,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "placement", "className", "style", "children", "arrowProps", "popper", "show"]);

  bsPrefix = useBootstrapPrefix(bsPrefix, 'tooltip');

  var _ref2 = (placement == null ? void 0 : placement.split('-')) || [],
      primaryPlacement = _ref2[0];

  return /*#__PURE__*/React__default['default'].createElement("div", _extends({
    ref: ref,
    style: style,
    role: "tooltip",
    "x-placement": primaryPlacement,
    className: classnames(className, bsPrefix, "bs-tooltip-" + primaryPlacement)
  }, props), /*#__PURE__*/React__default['default'].createElement("div", _extends({
    className: "arrow"
  }, arrowProps)), /*#__PURE__*/React__default['default'].createElement("div", {
    className: bsPrefix + "-inner"
  }, children));
});
Tooltip.defaultProps = defaultProps$a;
Tooltip.displayName = 'Tooltip';

function ModeChange(props) {
  var mode = props.mode,
      onModeChange = props.onModeChange;
  var style = {
    height: '30px',
    width: '30px',
    backgroundSize: 'cover',
    margin: 0
  }; // playback mode: 0 none/1 list-repeat/2 shuffle

  switch (mode) {
    case 0:
      style['backgroundImage'] = "url(".concat(img$6, ")");
      style['opacity'] = '50%';
      break;

    case 1:
      style['backgroundImage'] = "url(".concat(img$6, ")");
      style['opacity'] = '100%';
      break;

    case 2:
      style['backgroundImage'] = "url(".concat(img$7, ")");
      style['opacity'] = '100%';
      break;

    default:
      style['backgroundImage'] = "url(".concat(img$6, ")");
      style['opacity'] = '50%';
      break;
  }

  return /*#__PURE__*/React__default['default'].createElement(OverlayTrigger, {
    key: 'mode',
    placement: 'top',
    overlay: /*#__PURE__*/React__default['default'].createElement(Tooltip, {
      id: 'mode'
    }, "mode")
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    onClick: onModeChange,
    style: style,
    className: "controls"
  }));
}

const img$8 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsSAAALEgHS3X78AAAAG3RFWHRTb2Z0d2FyZQBDZWxzeXMgU3R1ZGlvIFRvb2zBp+F8AAABTUlEQVRo3u3Zq04DQRQA0FMELwGKhIQEQSAEAwKFIfwAAYPmA1AI+AQEKCR/gMbikDx+oK6qKQZkIWmK6JI0vLYFws6We5Mxm5nNPbsz94qptNttgxCVgAQkIAEJSEDyYxarXWMC62ilDJnG2pvEpz6YN4ZmN6RIUeWDZ4+Y7GFt8pBe83kHSS0CUlbIKJ7KCqnhFpc4S72PvCZWx13XuEajTA2x/UVF+7Kzp1p+/y9kYLZWQAISkH8CiT4SfSTOSED+PIbQGgTIAqplh4zgHNuplt+8hGawgz3M97EuCcgcdrGFlW9+gEK31hCOsI/hH/7JQiEHOP6lLVkopJpVprx4zg5/spBmjwlWsZgypKZz15EXJzhMGXKBzZw5DSzjPuXyu4orjH8yt56V5JueX15gH1nKts2Gzu1UKzsTFzjFQ18vj8vQgAQkIKWKFxc63Z1VuF53AAAAAElFTkSuQmCC";

var style$1 = {
  height: '30px',
  width: '30px',
  backgroundSize: 'cover',
  backgroundColor: 'transparent',
  border: 'none',
  backgroundImage: "url(".concat(img$8, ")"),
  opacity: '0.7'
};
var CustomToggle = /*#__PURE__*/React__default['default'].forwardRef(function (_ref, ref) {
  var children = _ref.children,
      _onClick = _ref.onClick;
  return /*#__PURE__*/React__default['default'].createElement(OverlayTrigger, {
    key: 'playlist',
    placement: 'top',
    overlay: /*#__PURE__*/React__default['default'].createElement(Tooltip, {
      id: 'playlist'
    }, "playlist")
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "controls",
    style: style$1,
    ref: ref,
    onClick: function onClick(e) {
      e.preventDefault();

      _onClick(e);
    }
  }));
});

function Playlist(props) {
  var playlist = props.playlist,
      onMuiscSelect = props.onMuiscSelect,
      removeFromPlaylist = props.removeFromPlaylist;
  var dropItem;

  if (playlist.musics.length === 0) {
    dropItem = /*#__PURE__*/React__default['default'].createElement(Dropdown$1.Item, {
      onClick: function onClick(e) {
        e.preventDefault();
      }
    }, "Nothing in playlist currently");
  } else {
    dropItem = playlist.musics.map(function (e, key) {
      return /*#__PURE__*/React__default['default'].createElement(Dropdown$1.Item, {
        href: "",
        key: key,
        style: {
          display: 'flex'
        },
        onClick: function onClick(e) {
          e.preventDefault();
        }
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        style: {
          paddingRight: '0.8em'
        },
        onClick: function onClick(e) {
          removeFromPlaylist(key);
        }
      }, /*#__PURE__*/React__default['default'].createElement(OverlayTrigger, {
        key: 'delete',
        placement: 'top',
        overlay: /*#__PURE__*/React__default['default'].createElement(Tooltip, {
          id: 'delete'
        }, "delete")
      }, /*#__PURE__*/React__default['default'].createElement("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 16 16",
        className: "bi bi-trash",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React__default['default'].createElement("path", {
        d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
      }), /*#__PURE__*/React__default['default'].createElement("path", {
        fillRule: "evenodd",
        d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
      })))), /*#__PURE__*/React__default['default'].createElement("div", {
        onClick: function onClick() {
          onMuiscSelect(key);
        }
      }, e.title.length > 30 ? "".concat(e.title.slice(0, 27), "...") : e.title));
    });
  }

  return /*#__PURE__*/React__default['default'].createElement(Dropdown$1, {
    drop: "up"
  }, /*#__PURE__*/React__default['default'].createElement(Dropdown$1.Toggle, {
    as: CustomToggle
  }), /*#__PURE__*/React__default['default'].createElement(Dropdown$1.Menu, null, dropItem));
}

var Player = /*#__PURE__*/function (_React$Component) {
  _inherits(Player, _React$Component);

  var _super = _createSuper(Player);

  // to use the ref point to audio element, put it into constructor
  function Player() {
    var _this;

    _classCallCheck(this, Player);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "playErrorHandler", function () {
      console.log('Play() interrupted by reload/pause command');
    });

    _defineProperty(_assertThisInitialized(_this), "reloadAudio", function () {
      var audio = _this.audio.current; // if video is playing

      if (!audio.paused) {
        audio.pause();
      } // then reload video


      audio.load(); // make sure auido is playing after reload

      if (audio.paused) {
        audio.play()["catch"](_this.playErrorHandler);

        _this.setState({
          isPlay: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onTimeUpdate", function (newCurrentTime) {
      if (newCurrentTime) {
        _this.audio.current.currentTime = newCurrentTime;

        _this.setState({
          currentTime: _this.audio.current.currentTime
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onVolumeUpdate", function (volume) {
      if (volume) {
        _this.audio.current.volume = volume;

        _this.setState({
          volume: _this.audio.current.volume
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPlayClick", function () {
      var audio = _this.audio.current;

      if (_this.state.isPlay) {
        _this.setState({
          isPlay: false
        });

        audio.pause();
      } else {
        _this.setState({
          isPlay: true
        });

        audio.play()["catch"](_this.playErrorHandler);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onNextClick", function () {
      var reloadAudio = function reloadAudio() {
        var audio = _this.audio.current; // if video is playing

        if (!audio.paused) {
          audio.pause();
        } // then reload video


        audio.load(); // make sure auido is playing after reload

        if (audio.paused) {
          audio.play()["catch"](_this.playErrorHandler);

          _this.setState({
            isPlay: true
          });
        }
      };

      var playlistLen = _this.props.playlist.musics.length;

      var updateAudio = function updateAudio() {
        _this.setState({
          nowPlaying: _this.props.playlist.musics[_this.state.currentIndex]
        }, reloadAudio);
      }; // if this is the last song in the playlist


      if (_this.state.currentIndex + 1 > playlistLen - 1) {
        _this.setState({
          currentIndex: 0
        }, updateAudio);
      } else {
        _this.setState({
          currentIndex: _this.state.currentIndex + 1
        }, updateAudio);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPrevClick", function () {
      var reloadAudio = function reloadAudio() {
        var audio = _this.audio.current; // if video is playing

        if (!audio.paused) {
          audio.pause();
        } // then reload video


        audio.load(); // make sure auido is playing after reload

        if (audio.paused) {
          audio.play()["catch"](_this.playErrorHandler);

          _this.setState({
            isPlay: true
          });
        }
      };

      var updateAudio = function updateAudio() {
        _this.setState({
          nowPlaying: _this.props.playlist.musics[_this.state.currentIndex]
        }, reloadAudio);
      };

      var playlistLen = _this.props.playlist.musics.length; // if this is the first song in the playlist, roll back to last one

      if (_this.state.currentIndex - 1 < 0) {
        _this.setState({
          currentIndex: playlistLen - 1
        }, updateAudio);
      } else {
        _this.setState({
          currentIndex: _this.state.currentIndex - 1
        }, updateAudio);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMuiscSelect", function (index) {
      var reloadAudio = function reloadAudio() {
        var audio = _this.audio.current; // if video is playing

        if (!audio.paused) {
          audio.pause();
        } // then reload video


        audio.load(); // make sure auido is playing after reload

        if (audio.paused) {
          audio.play()["catch"](_this.playErrorHandler);

          _this.setState({
            isPlay: true
          });
        }
      };

      var updateAudio = function updateAudio() {
        _this.setState({
          nowPlaying: _this.props.playlist.musics[index]
        }, reloadAudio);
      }; // update currentIndex then update nowplaying


      _this.setState({
        currentIndex: index
      }, updateAudio);
    });

    _defineProperty(_assertThisInitialized(_this), "removeFromPlaylist", function (index) {
      if (index === _this.state.currentIndex) {
        _this.setState({
          currentIndex: _this.state.currentIndex - 1
        });
      }

      _this.props.removeFromPlaylist(index);
    });

    _defineProperty(_assertThisInitialized(_this), "onModeChange", function () {
      var currMode = _this.state.mode; // playback mode: 0 none/1 list-repeat/2 shuffle

      if (currMode === 2) {
        _this.setState({
          mode: 0
        });
      } else if (currMode + 1 === 2) {
        _this.setState({
          mode: currMode + 1
        }); // as the playlist is shuffle, we need change the current index


        var findIndex = function findIndex() {
          var nowplaying = _this.state.nowPlaying;

          _this.props.playlist.musics.forEach(function (element, index) {
            if (element.src === nowplaying.src) {
              _this.setState({
                currentIndex: index
              });
            }
          });
        }; // pass in as call back


        _this.props.shufflePlaylist(findIndex);
      } else {
        _this.setState({
          mode: currMode + 1
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPlayheadClick", function (e) {
      e.stopPropagation();

      _this.setState({
        seeking: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onPlayheadMove", function (e, element) {
      e.stopPropagation();

      if (_this.state.seeking) {
        var offset = e.pageX - element.getBoundingClientRect().left;

        if (offset < 0) {
          offset = 0;
        }

        if (offset > element.offsetWidth) {
          offset = element.offsetWidth;
        } // calculate relative position(% of the processbar)


        var offsetPercentage = offset / element.offsetWidth;
        var currentTime = offsetPercentage * _this.state.totalTime;

        _this.setState({
          currentTime: currentTime
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPlayheadRelease", function (e, element) {
      e.stopPropagation();

      if (_this.state.seeking) {
        // when mouse up, the seeking finished
        _this.setState({
          seeking: false
        });

        var offset = e.pageX - element.getBoundingClientRect().left;

        if (offset < 0) {
          offset = 0;
        }

        if (offset > element.offsetWidth) {
          offset = element.offsetWidth;
        } // calculate relative position(% of the processbar)


        var offsetPercentage = offset / element.offsetWidth;
        var currentTime = offsetPercentage * _this.state.totalTime;

        _this.onTimeUpdate(currentTime);
      }
    });

    _this.state = {
      nowPlaying: {
        src: '',
        title: '',
        author: '',
        thumbnail: ''
      },
      isPlay: false,
      totalTime: 0,
      currentTime: 0,
      buffered: 0,
      volume: 1,
      // current position at playlist
      currentIndex: 0,
      // playback mode: 0 none/1 list-repeat/2 shuffle
      mode: 0,
      // is the mouse drag the playhead to seek(change currentTime)?
      seeking: false
    }; // audio element reference

    _this.audio = /*#__PURE__*/React__default['default'].createRef();
    return _this;
  }

  _createClass(Player, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // handle the update due to playlist change
      if (prevProps.playlist.name !== this.props.playlist.name) {
        // reset the currentIndex if there is musics
        if (this.props.playlist.musics.length > 0) {
          this.setState({
            currentIndex: 0,
            nowPlaying: this.props.playlist.musics[0]
          }, this.reloadAudio);
        } else {
          this.setState({
            currentIndex: 0
          });
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.playlist.musics.length > 0) {
        this.setState({
          nowPlaying: this.props.playlist.musics[0]
        });
      } // audio reference


      var audio = this.audio.current; // error handling

      audio.addEventListener('error', function () {
        // !debug, log audio erro event
        console.log("".concat(new Date(), ": audio error occurred during the loading"));
        console.log(audio.error);

        _this2.setState({
          isPlay: false
        }); // try to reload the element


        audio.load();
      }); // add listener to event canplay, get total play time

      audio.addEventListener('canplay', function () {
        var totalTime = parseInt(audio.duration);

        _this2.setState({
          totalTime: totalTime
        });
      }); // add listener when playing (timeupdate event)

      audio.addEventListener('timeupdate', function () {
        // only update when not seeking
        if (!_this2.state.seeking) {
          var currentTime = parseInt(audio.currentTime);

          _this2.setState({
            currentTime: currentTime
          });
        }
      }); // add listener to display buffer when downloading start

      audio.addEventListener('progress', function () {
        if (audio.duration > 0) {
          for (var i = 0; i < audio.buffered.length; i++) {
            if (audio.buffered.start(audio.buffered.length - 1 - i) < audio.currentTime) {
              _this2.setState({
                buffered: audio.buffered.end(audio.buffered.length - 1 - i)
              });

              break;
            }
          }
        }
      }); // add listener to play/pause to handle unexpected play/pause

      audio.addEventListener('play', function () {
        if (!_this2.state.isPlay) {
          _this2.setState({
            isPlay: true
          });
        }
      });
      audio.addEventListener('pause', function () {
        if (_this2.state.isPlay) {
          _this2.setState({
            isPlay: false
          });
        }
      }); // add listener to end event, decided on the play mode

      audio.addEventListener('ended', function () {
        // playback mode: 0 none/1 shuffle/2 list-repeat
        if (_this2.state.mode === 1 || _this2.state.mode === 2) {
          _this2.onNextClick();
        }
      }); // initialize volume

      this.setState({
        volume: 1
      });

      if (this.state.volume) {
        audio.volume = this.state.volume;
      }
    } // helper function, handle play promise error

  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          src = _this$state.nowPlaying.src,
          currentTime = _this$state.currentTime,
          totalTime = _this$state.totalTime,
          buffered = _this$state.buffered,
          volume = _this$state.volume;
      var prevNextEnable = this.props.playlist.musics.length === 0 ? false : true;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: "player",
        style: this.props.hide ? {
          display: 'none'
        } : {}
      }, /*#__PURE__*/React__default['default'].createElement("audio", {
        ref: this.audio
      }, /*#__PURE__*/React__default['default'].createElement("source", {
        src: src
      })), /*#__PURE__*/React__default['default'].createElement(Container, {
        fluid: true
      }, /*#__PURE__*/React__default['default'].createElement(Row, null, /*#__PURE__*/React__default['default'].createElement(Col, {
        sm: 12,
        md: 4
      }, /*#__PURE__*/React__default['default'].createElement(Info, {
        nowPlaying: this.state.nowPlaying
      })), /*#__PURE__*/React__default['default'].createElement(Col, {
        xs: 12,
        md: 4
      }, /*#__PURE__*/React__default['default'].createElement(Container, null, /*#__PURE__*/React__default['default'].createElement(Row, null, /*#__PURE__*/React__default['default'].createElement(Col, {
        style: {
          paddingTop: "10px"
        }
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: "controlButton"
      }, /*#__PURE__*/React__default['default'].createElement(PrevButton, {
        enable: prevNextEnable,
        onPrevClick: this.onPrevClick
      }), /*#__PURE__*/React__default['default'].createElement(PlayButton, {
        onPlayClick: this.onPlayClick,
        isPlay: this.state.isPlay
      }), /*#__PURE__*/React__default['default'].createElement(NextButton, {
        enable: prevNextEnable,
        onNextClick: this.onNextClick
      })))), /*#__PURE__*/React__default['default'].createElement(Row, null, /*#__PURE__*/React__default['default'].createElement(Col, null, /*#__PURE__*/React__default['default'].createElement(TimeDisplay, {
        currentTime: currentTime,
        totalTime: totalTime
      }))), /*#__PURE__*/React__default['default'].createElement(Row, null, /*#__PURE__*/React__default['default'].createElement(Col, {
        style: {
          padding: 0,
          paddingBottom: "25px"
        }
      }, /*#__PURE__*/React__default['default'].createElement(ProgerssBar, {
        currentTime: currentTime,
        totalTime: totalTime,
        buffered: buffered,
        onTimeUpdate: this.onTimeUpdate,
        onPlayheadClick: this.onPlayheadClick,
        onPlayheadMove: this.onPlayheadMove,
        onPlayheadRelease: this.onPlayheadRelease
      }))))), /*#__PURE__*/React__default['default'].createElement(Col, {
        sm: 12,
        md: 3
      }, /*#__PURE__*/React__default['default'].createElement(Container, null, /*#__PURE__*/React__default['default'].createElement(Row, {
        style: {
          padding: "10px"
        }
      }, /*#__PURE__*/React__default['default'].createElement(Col, null, /*#__PURE__*/React__default['default'].createElement(ModeChange, {
        mode: this.state.mode,
        onModeChange: this.onModeChange
      })), /*#__PURE__*/React__default['default'].createElement(Col, null, /*#__PURE__*/React__default['default'].createElement(Playlist, {
        playlist: this.props.playlist,
        onMuiscSelect: this.onMuiscSelect,
        removeFromPlaylist: this.removeFromPlaylist
      })), /*#__PURE__*/React__default['default'].createElement(Col, null, /*#__PURE__*/React__default['default'].createElement(VolumeBar, {
        volume: volume,
        onVolumeUpdate: this.onVolumeUpdate
      }))))))));
    }
  }]);

  return Player;
}(React__default['default'].Component);

exports.Player = Player;
