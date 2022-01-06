(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors.restart"],{

/***/ "./node_modules/@restart/hooks/esm/useCallbackRef.js":
/*!***********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useCallbackRef.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCallbackRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

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
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useCommittedRef.js":
/*!************************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useCommittedRef.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

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
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current = value;
  }, [value]);
  return ref;
}

/* harmony default export */ __webpack_exports__["default"] = (useCommittedRef);

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useEventCallback.js":
/*!*************************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useEventCallback.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useEventCallback; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useCommittedRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCommittedRef */ "./node_modules/@restart/hooks/esm/useCommittedRef.js");


function useEventCallback(fn) {
  var ref = Object(_useCommittedRef__WEBPACK_IMPORTED_MODULE_1__["default"])(fn);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return ref.current && ref.current.apply(ref, arguments);
  }, [ref]);
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useIsomorphicEffect.js":
/*!****************************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useIsomorphicEffect.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var isReactNative = typeof global !== 'undefined' && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === 'ReactNative';
var isDOM = typeof document !== 'undefined';
/**
 * Is `useLayoutEffect` in a DOM or React Native environment, otherwise resolves to useEffect
 * Only useful to avoid the console warning.
 *
 * PREFER `useEffect` UNLESS YOU KNOW WHAT YOU ARE DOING.
 *
 * @category effects
 */

/* harmony default export */ __webpack_exports__["default"] = (isDOM || isReactNative ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useMergedRefs.js":
/*!**********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useMergedRefs.js ***!
  \**********************************************************/
/*! exports provided: mergeRefs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeRefs", function() { return mergeRefs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


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
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return mergeRefs(refA, refB);
  }, [refA, refB]);
}

/* harmony default export */ __webpack_exports__["default"] = (useMergedRefs);

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useMounted.js":
/*!*******************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useMounted.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMounted; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

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
  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  var isMounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(function () {
    return mounted.current;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useTimeout.js":
/*!*******************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useTimeout.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTimeout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useMounted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMounted */ "./node_modules/@restart/hooks/esm/useMounted.js");
/* harmony import */ var _useWillUnmount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useWillUnmount */ "./node_modules/@restart/hooks/esm/useWillUnmount.js");



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
 *
 *
 *
 * ```tsx
 * const { set, clear } = useTimeout();
 * const [hello, showHello] = useState(false);
 * //Display hello after 5 seconds
 * set(() => showHello(true), 5000);
 * return (
 *   <div className="App">
 *     {hello ? <h3>Hello</h3> : null}
 *   </div>
 * );
 * ```
 */


function useTimeout() {
  var isMounted = Object(_useMounted__WEBPACK_IMPORTED_MODULE_1__["default"])(); // types are confused between node and web here IDK

  var handleRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(_useWillUnmount__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    return clearTimeout(handleRef.current);
  });
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
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

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useUpdateEffect.js":
/*!************************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useUpdateEffect.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Runs an effect only when the dependencies have changed, skipping the
 * initial "on mount" run. Caution, if the dependency list never changes,
 * the effect is **never run**
 *
 * ```ts
 *  const ref = useRef<HTMLInput>(null);
 *
 *  // focuses an element only if the focus changes, and not on mount
 *  useUpdateEffect(() => {
 *    const element = ref.current?.children[focusedIdx] as HTMLElement
 *
 *    element?.focus()
 *
 *  }, [focusedIndex])
 * ```
 * @param effect An effect to run on mount
 *
 * @category effects
 */

function useUpdateEffect(fn, deps) {
  var isFirst = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    return fn();
  }, deps);
}

/* harmony default export */ __webpack_exports__["default"] = (useUpdateEffect);

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useUpdatedRef.js":
/*!**********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useUpdatedRef.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useUpdatedRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Returns a ref that is immediately updated with the new value
 *
 * @param value The Ref value
 * @category refs
 */

function useUpdatedRef(value) {
  var valueRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
  valueRef.current = value;
  return valueRef;
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useWillUnmount.js":
/*!***********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useWillUnmount.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useWillUnmount; });
/* harmony import */ var _useUpdatedRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useUpdatedRef */ "./node_modules/@restart/hooks/esm/useUpdatedRef.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Attach a callback that fires when a component unmounts
 *
 * @param fn Handler to run when the component unmounts
 * @category effects
 */

function useWillUnmount(fn) {
  var onUnmount = Object(_useUpdatedRef__WEBPACK_IMPORTED_MODULE_0__["default"])(fn);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return function () {
      return onUnmount.current();
    };
  }, []);
}

/***/ }),

/***/ "./node_modules/@restart/ui/esm/Anchor.js":
/*!************************************************!*\
  !*** ./node_modules/@restart/ui/esm/Anchor.js ***!
  \************************************************/
/*! exports provided: isTrivialHref, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTrivialHref", function() { return isTrivialHref; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _restart_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @restart/hooks */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./node_modules/@restart/ui/esm/Button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["onKeyDown"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/anchor-has-content */




function isTrivialHref(href) {
  return !href || href.trim() === '#';
}

/**
 * An generic `<a>` component that covers a few A11y cases, ensuring that
 * cases where the `href` is missing or trivial like "#" are treated like buttons.
 */
const Anchor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]((_ref, ref) => {
  let {
    onKeyDown
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const [buttonProps] = Object(_Button__WEBPACK_IMPORTED_MODULE_2__["useButtonProps"])(Object.assign({
    tagName: 'a'
  }, props));
  const handleKeyDown = Object(_restart_hooks__WEBPACK_IMPORTED_MODULE_1__["useEventCallback"])(e => {
    buttonProps.onKeyDown(e);
    onKeyDown == null ? void 0 : onKeyDown(e);
  });

  if (isTrivialHref(props.href) && !props.role || props.role === 'button') {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", Object.assign({
      ref: ref
    }, props, buttonProps, {
      onKeyDown: handleKeyDown
    }));
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", Object.assign({
    ref: ref
  }, props, {
    onKeyDown: onKeyDown
  }));
});
Anchor.displayName = 'Anchor';
/* harmony default export */ __webpack_exports__["default"] = (Anchor);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/Button.js":
/*!************************************************!*\
  !*** ./node_modules/@restart/ui/esm/Button.js ***!
  \************************************************/
/*! exports provided: isTrivialHref, useButtonProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTrivialHref", function() { return isTrivialHref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useButtonProps", function() { return useButtonProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["as", "disabled"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function isTrivialHref(href) {
  return !href || href.trim() === '#';
}
function useButtonProps({
  tagName,
  disabled,
  href,
  target,
  rel,
  onClick,
  tabIndex = 0,
  type
}) {
  if (!tagName) {
    if (href != null || target != null || rel != null) {
      tagName = 'a';
    } else {
      tagName = 'button';
    }
  }

  const meta = {
    tagName
  };

  if (tagName === 'button') {
    return [{
      type: type || 'button',
      disabled
    }, meta];
  }

  const handleClick = event => {
    if (disabled || tagName === 'a' && isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    onClick == null ? void 0 : onClick(event);
  };

  const handleKeyDown = event => {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };

  return [{
    role: 'button',
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: undefined,
    tabIndex: disabled ? undefined : tabIndex,
    href: tagName === 'a' && disabled ? undefined : href,
    target: tagName === 'a' ? target : undefined,
    'aria-disabled': !disabled ? undefined : disabled,
    rel: tagName === 'a' ? rel : undefined,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  }, meta];
}
const Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]((_ref, ref) => {
  let {
    as: asProp,
    disabled
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const [buttonProps, {
    tagName: Component
  }] = useButtonProps(Object.assign({
    tagName: asProp,
    disabled
  }, props));
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Component, Object.assign({}, props, buttonProps, {
    ref: ref
  }));
});
Button.displayName = 'Button';
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/DataKey.js":
/*!*************************************************!*\
  !*** ./node_modules/@restart/ui/esm/DataKey.js ***!
  \*************************************************/
/*! exports provided: ATTRIBUTE_PREFIX, PROPERTY_PREFIX, dataAttr, dataProp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_PREFIX", function() { return ATTRIBUTE_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROPERTY_PREFIX", function() { return PROPERTY_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataAttr", function() { return dataAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataProp", function() { return dataProp; });
const ATTRIBUTE_PREFIX = `data-rr-ui-`;
const PROPERTY_PREFIX = `rrUi`;
function dataAttr(property) {
  return `${ATTRIBUTE_PREFIX}${property}`;
}
function dataProp(property) {
  return `${PROPERTY_PREFIX}${property}`;
}

/***/ }),

/***/ "./node_modules/@restart/ui/esm/Dropdown.js":
/*!**************************************************!*\
  !*** ./node_modules/@restart/ui/esm/Dropdown.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dom_helpers_querySelectorAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-helpers/querySelectorAll */ "./node_modules/dom-helpers/esm/querySelectorAll.js");
/* harmony import */ var dom_helpers_addEventListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-helpers/addEventListener */ "./node_modules/dom-helpers/esm/addEventListener.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/lib/esm/index.js");
/* harmony import */ var _restart_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @restart/hooks/usePrevious */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/usePrevious.js");
/* harmony import */ var _restart_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @restart/hooks/useForceUpdate */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useForceUpdate.js");
/* harmony import */ var _restart_hooks_useEventListener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @restart/hooks/useEventListener */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventListener.js");
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var _DropdownContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DropdownContext */ "./node_modules/@restart/ui/esm/DropdownContext.js");
/* harmony import */ var _DropdownMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DropdownMenu */ "./node_modules/@restart/ui/esm/DropdownMenu.js");
/* harmony import */ var _DropdownToggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DropdownToggle */ "./node_modules/@restart/ui/esm/DropdownToggle.js");
/* harmony import */ var _DropdownItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DropdownItem */ "./node_modules/@restart/ui/esm/DropdownItem.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/@restart/ui/esm/SelectableContext.js");
/* harmony import */ var _DataKey__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DataKey */ "./node_modules/@restart/ui/esm/DataKey.js");
/* harmony import */ var _useWindow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./useWindow */ "./node_modules/@restart/ui/esm/useWindow.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);


















function useRefWithUpdate() {
  const forceUpdate = Object(_restart_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const attachRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(element => {
    ref.current = element; // ensure that a menu set triggers an update for consumers

    forceUpdate();
  }, [forceUpdate]);
  return [ref, attachRef];
}
/**
 * @displayName Dropdown
 * @public
 */


function Dropdown({
  defaultShow,
  show: rawShow,
  onSelect,
  onToggle: rawOnToggle,
  itemSelector = `* [${Object(_DataKey__WEBPACK_IMPORTED_MODULE_13__["dataAttr"])('dropdown-item')}]`,
  focusFirstItemOnShow,
  placement = 'bottom-start',
  children
}) {
  const window = Object(_useWindow__WEBPACK_IMPORTED_MODULE_14__["default"])();
  const [show, onToggle] = Object(uncontrollable__WEBPACK_IMPORTED_MODULE_3__["useUncontrolledProp"])(rawShow, defaultShow, rawOnToggle); // We use normal refs instead of useCallbackRef in order to populate the
  // the value as quickly as possible, otherwise the effect to focus the element
  // may run before the state value is set

  const [menuRef, setMenu] = useRefWithUpdate();
  const menuElement = menuRef.current;
  const [toggleRef, setToggle] = useRefWithUpdate();
  const toggleElement = toggleRef.current;
  const lastShow = Object(_restart_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_4__["default"])(show);
  const lastSourceEvent = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const focusInDropdown = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  const onSelectCtx = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_SelectableContext__WEBPACK_IMPORTED_MODULE_12__["default"]);
  const toggle = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])((nextShow, event, source = event == null ? void 0 : event.type) => {
    onToggle(nextShow, {
      originalEvent: event,
      source
    });
  }, [onToggle]);
  const handleSelect = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_7__["default"])((key, event) => {
    onSelect == null ? void 0 : onSelect(key, event);
    toggle(false, event, 'select');

    if (!event.isPropagationStopped()) {
      onSelectCtx == null ? void 0 : onSelectCtx(key, event);
    }
  });
  const context = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => ({
    toggle,
    placement,
    show,
    menuElement,
    toggleElement,
    setMenu,
    setToggle
  }), [toggle, placement, show, menuElement, toggleElement, setMenu, setToggle]);

  if (menuElement && lastShow && !show) {
    focusInDropdown.current = menuElement.contains(menuElement.ownerDocument.activeElement);
  }

  const focusToggle = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(() => {
    if (toggleElement && toggleElement.focus) {
      toggleElement.focus();
    }
  });
  const maybeFocusFirst = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_7__["default"])(() => {
    const type = lastSourceEvent.current;
    let focusType = focusFirstItemOnShow;

    if (focusType == null) {
      focusType = menuRef.current && Object(_DropdownToggle__WEBPACK_IMPORTED_MODULE_10__["isRoleMenu"])(menuRef.current) ? 'keyboard' : false;
    }

    if (focusType === false || focusType === 'keyboard' && !/^key.+$/.test(type)) {
      return;
    }

    const first = Object(dom_helpers_querySelectorAll__WEBPACK_IMPORTED_MODULE_0__["default"])(menuRef.current, itemSelector)[0];
    if (first && first.focus) first.focus();
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (show) maybeFocusFirst();else if (focusInDropdown.current) {
      focusInDropdown.current = false;
      focusToggle();
    } // only `show` should be changing
  }, [show, focusInDropdown, focusToggle, maybeFocusFirst]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    lastSourceEvent.current = null;
  });

  const getNextFocusedChild = (current, offset) => {
    if (!menuRef.current) return null;
    const items = Object(dom_helpers_querySelectorAll__WEBPACK_IMPORTED_MODULE_0__["default"])(menuRef.current, itemSelector);
    let index = items.indexOf(current) + offset;
    index = Math.max(0, Math.min(index, items.length));
    return items[index];
  };

  Object(_restart_hooks_useEventListener__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => window.document, [window]), 'keydown', event => {
    var _menuRef$current, _toggleRef$current;

    const {
      key
    } = event;
    const target = event.target;
    const fromMenu = (_menuRef$current = menuRef.current) == null ? void 0 : _menuRef$current.contains(target);
    const fromToggle = (_toggleRef$current = toggleRef.current) == null ? void 0 : _toggleRef$current.contains(target); // Second only to https://github.com/twbs/bootstrap/blob/8cfbf6933b8a0146ac3fbc369f19e520bd1ebdac/js/src/dropdown.js#L400
    // in inscrutability

    const isInput = /input|textarea/i.test(target.tagName);

    if (isInput && (key === ' ' || key !== 'Escape' && fromMenu)) {
      return;
    }

    if (!fromMenu && !fromToggle) {
      return;
    }

    if (key === 'Tab' && (!menuRef.current || !show)) {
      return;
    }

    lastSourceEvent.current = event.type;
    const meta = {
      originalEvent: event,
      source: event.type
    };

    switch (key) {
      case 'ArrowUp':
        {
          const next = getNextFocusedChild(target, -1);
          if (next && next.focus) next.focus();
          event.preventDefault();
          return;
        }

      case 'ArrowDown':
        event.preventDefault();

        if (!show) {
          onToggle(true, meta);
        } else {
          const next = getNextFocusedChild(target, 1);
          if (next && next.focus) next.focus();
        }

        return;

      case 'Tab':
        // on keydown the target is the element being tabbed FROM, we need that
        // to know if this event is relevant to this dropdown (e.g. in this menu).
        // On `keyup` the target is the element being tagged TO which we use to check
        // if focus has left the menu
        Object(dom_helpers_addEventListener__WEBPACK_IMPORTED_MODULE_1__["default"])(target.ownerDocument, 'keyup', e => {
          var _menuRef$current2;

          if (e.key === 'Tab' && !e.target || !((_menuRef$current2 = menuRef.current) != null && _menuRef$current2.contains(e.target))) {
            onToggle(false, meta);
          }
        }, {
          once: true
        });
        break;

      case 'Escape':
        if (key === 'Escape') {
          event.preventDefault();
          event.stopPropagation();
        }

        onToggle(false, meta);
        break;

      default:
    }
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_SelectableContext__WEBPACK_IMPORTED_MODULE_12__["default"].Provider, {
    value: handleSelect,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_DropdownContext__WEBPACK_IMPORTED_MODULE_8__["default"].Provider, {
      value: context,
      children: children
    })
  });
}

Dropdown.displayName = 'Dropdown';
Dropdown.Menu = _DropdownMenu__WEBPACK_IMPORTED_MODULE_9__["default"];
Dropdown.Toggle = _DropdownToggle__WEBPACK_IMPORTED_MODULE_10__["default"];
Dropdown.Item = _DropdownItem__WEBPACK_IMPORTED_MODULE_11__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/DropdownContext.js":
/*!*********************************************************!*\
  !*** ./node_modules/@restart/ui/esm/DropdownContext.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const DropdownContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"](null);
/* harmony default export */ __webpack_exports__["default"] = (DropdownContext);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/DropdownItem.js":
/*!******************************************************!*\
  !*** ./node_modules/@restart/ui/esm/DropdownItem.js ***!
  \******************************************************/
/*! exports provided: useDropdownItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDropdownItem", function() { return useDropdownItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/@restart/ui/esm/SelectableContext.js");
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavContext */ "./node_modules/@restart/ui/esm/NavContext.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./node_modules/@restart/ui/esm/Button.js");
/* harmony import */ var _DataKey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DataKey */ "./node_modules/@restart/ui/esm/DataKey.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
const _excluded = ["eventKey", "disabled", "onClick", "active", "as"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










/**
 * Create a dropdown item. Returns a set of props for the dropdown item component
 * including an `onClick` handler that prevents selection when the item is disabled
 */
function useDropdownItem({
  key,
  href,
  active,
  disabled,
  onClick
}) {
  const onSelectCtx = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_SelectableContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const navContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_NavContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const {
    activeKey
  } = navContext || {};
  const eventKey = Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_2__["makeEventKey"])(key, href);
  const isActive = active == null && key != null ? Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_2__["makeEventKey"])(activeKey) === eventKey : active;
  const handleClick = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_1__["default"])(event => {
    if (disabled) return;
    onClick == null ? void 0 : onClick(event);

    if (onSelectCtx && !event.isPropagationStopped()) {
      onSelectCtx(eventKey, event);
    }
  });
  return [{
    onClick: handleClick,
    'aria-disabled': disabled || undefined,
    'aria-selected': isActive,
    [Object(_DataKey__WEBPACK_IMPORTED_MODULE_5__["dataAttr"])('dropdown-item')]: ''
  }, {
    isActive
  }];
}
const DropdownItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]((_ref, ref) => {
  let {
    eventKey,
    disabled,
    onClick,
    active,
    as: Component = _Button__WEBPACK_IMPORTED_MODULE_4__["default"]
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const [dropdownItemProps] = useDropdownItem({
    key: eventKey,
    href: props.href,
    disabled,
    onClick,
    active
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(Component, Object.assign({}, props, {
    ref: ref
  }, dropdownItemProps));
});
DropdownItem.displayName = 'DropdownItem';
/* harmony default export */ __webpack_exports__["default"] = (DropdownItem);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/DropdownMenu.js":
/*!******************************************************!*\
  !*** ./node_modules/@restart/ui/esm/DropdownMenu.js ***!
  \******************************************************/
/*! exports provided: useDropdownMenu, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDropdownMenu", function() { return useDropdownMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _restart_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @restart/hooks/useCallbackRef */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCallbackRef.js");
/* harmony import */ var _DropdownContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropdownContext */ "./node_modules/@restart/ui/esm/DropdownContext.js");
/* harmony import */ var _usePopper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usePopper */ "./node_modules/@restart/ui/esm/usePopper.js");
/* harmony import */ var _useRootClose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useRootClose */ "./node_modules/@restart/ui/esm/useRootClose.js");
/* harmony import */ var _mergeOptionsWithPopperConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mergeOptionsWithPopperConfig */ "./node_modules/@restart/ui/esm/mergeOptionsWithPopperConfig.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
const _excluded = ["children"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const noop = () => {};
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


function useDropdownMenu(options = {}) {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_DropdownContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const [arrowElement, attachArrowRef] = Object(_restart_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const hasShownRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  const {
    flip,
    offset,
    rootCloseEvent,
    fixed = false,
    placement: placementOverride,
    popperConfig = {},
    enableEventListeners = true,
    usePopper: shouldUsePopper = !!context
  } = options;
  const show = (context == null ? void 0 : context.show) == null ? !!options.show : context.show;

  if (show && !hasShownRef.current) {
    hasShownRef.current = true;
  }

  const handleClose = e => {
    context == null ? void 0 : context.toggle(false, e);
  };

  const {
    placement,
    setMenu,
    menuElement,
    toggleElement
  } = context || {};
  const popper = Object(_usePopper__WEBPACK_IMPORTED_MODULE_3__["default"])(toggleElement, menuElement, Object(_mergeOptionsWithPopperConfig__WEBPACK_IMPORTED_MODULE_5__["default"])({
    placement: placementOverride || placement || 'bottom-start',
    enabled: shouldUsePopper,
    enableEvents: enableEventListeners == null ? show : enableEventListeners,
    offset,
    flip,
    fixed,
    arrowElement,
    popperConfig
  }));
  const menuProps = Object.assign({
    ref: setMenu || noop,
    'aria-labelledby': toggleElement == null ? void 0 : toggleElement.id
  }, popper.attributes.popper, {
    style: popper.styles.popper
  });
  const metadata = {
    show,
    placement,
    hasShown: hasShownRef.current,
    toggle: context == null ? void 0 : context.toggle,
    popper: shouldUsePopper ? popper : null,
    arrowProps: shouldUsePopper ? Object.assign({
      ref: attachArrowRef
    }, popper.attributes.arrow, {
      style: popper.styles.arrow
    }) : {}
  };
  Object(_useRootClose__WEBPACK_IMPORTED_MODULE_4__["default"])(menuElement, handleClose, {
    clickTrigger: rootCloseEvent,
    disabled: !show
  });
  return [menuProps, metadata];
}
const defaultProps = {
  usePopper: true
};

/**
 * Also exported as `<Dropdown.Menu>` from `Dropdown`.
 *
 * @displayName DropdownMenu
 * @memberOf Dropdown
 */
function DropdownMenu(_ref) {
  let {
    children
  } = _ref,
      options = _objectWithoutPropertiesLoose(_ref, _excluded);

  const [props, meta] = useDropdownMenu(options);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: children(props, meta)
  });
}

DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu.defaultProps = defaultProps;
/** @component */

/* harmony default export */ __webpack_exports__["default"] = (DropdownMenu);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/DropdownToggle.js":
/*!********************************************************!*\
  !*** ./node_modules/@restart/ui/esm/DropdownToggle.js ***!
  \********************************************************/
/*! exports provided: isRoleMenu, useDropdownToggle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRoleMenu", function() { return isRoleMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDropdownToggle", function() { return useDropdownToggle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ssr */ "./node_modules/@restart/ui/esm/ssr.js");
/* harmony import */ var _DropdownContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropdownContext */ "./node_modules/@restart/ui/esm/DropdownContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const isRoleMenu = el => {
  var _el$getAttribute;

  return ((_el$getAttribute = el.getAttribute('role')) == null ? void 0 : _el$getAttribute.toLowerCase()) === 'menu';
};

const noop = () => {};
/**
 * Wires up Dropdown toggle functionality, returning a set a props to attach
 * to the element that functions as the dropdown toggle (generally a button).
 *
 * @memberOf Dropdown
 */


function useDropdownToggle() {
  const id = Object(_ssr__WEBPACK_IMPORTED_MODULE_1__["useSSRSafeId"])();
  const {
    show = false,
    toggle = noop,
    setToggle,
    menuElement
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_DropdownContext__WEBPACK_IMPORTED_MODULE_2__["default"]) || {};
  const handleClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    toggle(!show, e);
  }, [show, toggle]);
  const props = {
    id,
    ref: setToggle || noop,
    onClick: handleClick,
    'aria-expanded': !!show
  }; // This is maybe better down in an effect, but
  // the component is going to update anyway when the menu element
  // is set so might return new props.

  if (menuElement && isRoleMenu(menuElement)) {
    props['aria-haspopup'] = true;
  }

  return [props, {
    show,
    toggle
  }];
}

/**
 * Also exported as `<Dropdown.Toggle>` from `Dropdown`.
 *
 * @displayName DropdownToggle
 * @memberOf Dropdown
 */
function DropdownToggle({
  children
}) {
  const [props, meta] = useDropdownToggle();
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: children(props, meta)
  });
}

DropdownToggle.displayName = 'DropdownToggle';
/** @component */

/* harmony default export */ __webpack_exports__["default"] = (DropdownToggle);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/Modal.js":
/*!***********************************************!*\
  !*** ./node_modules/@restart/ui/esm/Modal.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dom_helpers_activeElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-helpers/activeElement */ "./node_modules/dom-helpers/esm/activeElement.js");
/* harmony import */ var dom_helpers_contains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-helpers/contains */ "./node_modules/dom-helpers/esm/contains.js");
/* harmony import */ var dom_helpers_canUseDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dom-helpers/canUseDOM */ "./node_modules/dom-helpers/esm/canUseDOM.js");
/* harmony import */ var dom_helpers_listen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dom-helpers/listen */ "./node_modules/dom-helpers/esm/listen.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _restart_hooks_useMounted__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @restart/hooks/useMounted */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMounted.js");
/* harmony import */ var _restart_hooks_useWillUnmount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @restart/hooks/useWillUnmount */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useWillUnmount.js");
/* harmony import */ var _restart_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @restart/hooks/usePrevious */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/usePrevious.js");
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var _ModalManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ModalManager */ "./node_modules/@restart/ui/esm/ModalManager.js");
/* harmony import */ var _useWaitForDOMRef__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useWaitForDOMRef */ "./node_modules/@restart/ui/esm/useWaitForDOMRef.js");
/* harmony import */ var _useWindow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./useWindow */ "./node_modules/@restart/ui/esm/useWindow.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
const _excluded = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "backdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable @typescript-eslint/no-use-before-define, react/prop-types */

















let manager;

function getManager(window) {
  if (!manager) manager = new _ModalManager__WEBPACK_IMPORTED_MODULE_10__["default"]({
    ownerDocument: window == null ? void 0 : window.document
  });
  return manager;
}

function useModalManager(provided) {
  const window = Object(_useWindow__WEBPACK_IMPORTED_MODULE_12__["default"])();
  const modalManager = provided || getManager(window);
  const modal = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])({
    dialog: null,
    backdrop: null
  });
  return Object.assign(modal.current, {
    add: () => modalManager.add(modal.current),
    remove: () => modalManager.remove(modal.current),
    isTopModal: () => modalManager.isTopModal(modal.current),
    setDialogRef: Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(ref => {
      modal.current.dialog = ref;
    }, []),
    setBackdropRef: Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(ref => {
      modal.current.backdrop = ref;
    }, [])
  });
}

const Modal = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])((_ref, ref) => {
  let {
    show = false,
    role = 'dialog',
    className,
    style,
    children,
    backdrop = true,
    keyboard = true,
    onBackdropClick,
    onEscapeKeyDown,
    transition,
    backdropTransition,
    autoFocus = true,
    enforceFocus = true,
    restoreFocus = true,
    restoreFocusOptions,
    renderDialog,
    renderBackdrop = props => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", Object.assign({}, props)),
    manager: providedManager,
    container: containerRef,
    onShow,
    onHide = () => {},
    onExit,
    onExited,
    onExiting,
    onEnter,
    onEntering,
    onEntered
  } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  const container = Object(_useWaitForDOMRef__WEBPACK_IMPORTED_MODULE_11__["default"])(containerRef);
  const modal = useModalManager(providedManager);
  const isMounted = Object(_restart_hooks_useMounted__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const prevShow = Object(_restart_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_8__["default"])(show);
  const [exited, setExited] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(!show);
  const lastFocusRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useImperativeHandle"])(ref, () => modal, [modal]);

  if (dom_helpers_canUseDOM__WEBPACK_IMPORTED_MODULE_2__["default"] && !prevShow && show) {
    lastFocusRef.current = Object(dom_helpers_activeElement__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }

  if (!transition && !show && !exited) {
    setExited(true);
  } else if (show && exited) {
    setExited(false);
  }

  const handleShow = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(() => {
    modal.add();
    removeKeydownListenerRef.current = Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_3__["default"])(document, 'keydown', handleDocumentKeyDown);
    removeFocusListenerRef.current = Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_3__["default"])(document, 'focus', // the timeout is necessary b/c this will run before the new modal is mounted
    // and so steals focus from it
    () => setTimeout(handleEnforceFocus), true);

    if (onShow) {
      onShow();
    } // autofocus after onShow to not trigger a focus event for previous
    // modals before this one is shown.


    if (autoFocus) {
      const currentActiveElement = Object(dom_helpers_activeElement__WEBPACK_IMPORTED_MODULE_0__["default"])(document);

      if (modal.dialog && currentActiveElement && !Object(dom_helpers_contains__WEBPACK_IMPORTED_MODULE_1__["default"])(modal.dialog, currentActiveElement)) {
        lastFocusRef.current = currentActiveElement;
        modal.dialog.focus();
      }
    }
  });
  const handleHide = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(() => {
    modal.remove();
    removeKeydownListenerRef.current == null ? void 0 : removeKeydownListenerRef.current();
    removeFocusListenerRef.current == null ? void 0 : removeFocusListenerRef.current();

    if (restoreFocus) {
      var _lastFocusRef$current;

      // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
      (_lastFocusRef$current = lastFocusRef.current) == null ? void 0 : _lastFocusRef$current.focus == null ? void 0 : _lastFocusRef$current.focus(restoreFocusOptions);
      lastFocusRef.current = null;
    }
  }); // TODO: try and combine these effects: https://github.com/react-bootstrap/react-overlays/pull/794#discussion_r409954120
  // Show logic when:
  //  - show is `true` _and_ `container` has resolved

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    if (!show || !container) return;
    handleShow();
  }, [show, container,
  /* should never change: */
  handleShow]); // Hide cleanup logic when:
  //  - `exited` switches to true
  //  - component unmounts;

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    if (!exited) return;
    handleHide();
  }, [exited, handleHide]);
  Object(_restart_hooks_useWillUnmount__WEBPACK_IMPORTED_MODULE_7__["default"])(() => {
    handleHide();
  }); // --------------------------------

  const handleEnforceFocus = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(() => {
    if (!enforceFocus || !isMounted() || !modal.isTopModal()) {
      return;
    }

    const currentActiveElement = Object(dom_helpers_activeElement__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (modal.dialog && currentActiveElement && !Object(dom_helpers_contains__WEBPACK_IMPORTED_MODULE_1__["default"])(modal.dialog, currentActiveElement)) {
      modal.dialog.focus();
    }
  });
  const handleBackdropClick = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(e => {
    if (e.target !== e.currentTarget) {
      return;
    }

    onBackdropClick == null ? void 0 : onBackdropClick(e);

    if (backdrop === true) {
      onHide();
    }
  });
  const handleDocumentKeyDown = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_9__["default"])(e => {
    if (keyboard && e.keyCode === 27 && modal.isTopModal()) {
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(e);

      if (!e.defaultPrevented) {
        onHide();
      }
    }
  });
  const removeFocusListenerRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  const removeKeydownListenerRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();

  const handleHidden = (...args) => {
    setExited(true);
    onExited == null ? void 0 : onExited(...args);
  };

  const Transition = transition;

  if (!container || !(show || Transition && !exited)) {
    return null;
  }

  const dialogProps = Object.assign({
    role,
    ref: modal.setDialogRef,
    // apparently only works on the dialog role element
    'aria-modal': role === 'dialog' ? true : undefined
  }, rest, {
    style,
    className,
    tabIndex: -1
  });
  let dialog = renderDialog ? renderDialog(dialogProps) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", Object.assign({}, dialogProps, {
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["cloneElement"](children, {
      role: 'document'
    })
  }));

  if (Transition) {
    dialog = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(Transition, {
      appear: true,
      unmountOnExit: true,
      in: !!show,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleHidden,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered,
      children: dialog
    });
  }

  let backdropElement = null;

  if (backdrop) {
    const BackdropTransition = backdropTransition;
    backdropElement = renderBackdrop({
      ref: modal.setBackdropRef,
      onClick: handleBackdropClick
    });

    if (BackdropTransition) {
      backdropElement = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(BackdropTransition, {
        appear: true,
        in: !!show,
        children: backdropElement
      });
    }
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["Fragment"], {
    children: /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.createPortal( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["Fragment"], {
      children: [backdropElement, dialog]
    }), container)
  });
});
Modal.displayName = 'Modal';
/* harmony default export */ __webpack_exports__["default"] = (Object.assign(Modal, {
  Manager: _ModalManager__WEBPACK_IMPORTED_MODULE_10__["default"]
}));

/***/ }),

/***/ "./node_modules/@restart/ui/esm/ModalManager.js":
/*!******************************************************!*\
  !*** ./node_modules/@restart/ui/esm/ModalManager.js ***!
  \******************************************************/
/*! exports provided: OPEN_DATA_ATTRIBUTE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_DATA_ATTRIBUTE", function() { return OPEN_DATA_ATTRIBUTE; });
/* harmony import */ var dom_helpers_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-helpers/css */ "./node_modules/dom-helpers/esm/css.js");
/* harmony import */ var _DataKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataKey */ "./node_modules/@restart/ui/esm/DataKey.js");
/* harmony import */ var _getScrollbarWidth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getScrollbarWidth */ "./node_modules/@restart/ui/esm/getScrollbarWidth.js");



const OPEN_DATA_ATTRIBUTE = Object(_DataKey__WEBPACK_IMPORTED_MODULE_1__["dataAttr"])('modal-open');
/**
 * Manages a stack of Modals as well as ensuring
 * body scrolling is is disabled and padding accounted for
 */

class ModalManager {
  constructor({
    ownerDocument,
    handleContainerOverflow = true,
    isRTL = false
  } = {}) {
    this.handleContainerOverflow = handleContainerOverflow;
    this.isRTL = isRTL;
    this.modals = [];
    this.ownerDocument = ownerDocument;
  }

  getScrollbarWidth() {
    return Object(_getScrollbarWidth__WEBPACK_IMPORTED_MODULE_2__["default"])(this.ownerDocument);
  }

  getElement() {
    return (this.ownerDocument || document).body;
  }

  setModalAttributes(_modal) {// For overriding
  }

  removeModalAttributes(_modal) {// For overriding
  }

  setContainerStyle(containerState) {
    const style = {
      overflow: 'hidden'
    }; // we are only interested in the actual `style` here
    // because we will override it

    const paddingProp = this.isRTL ? 'paddingLeft' : 'paddingRight';
    const container = this.getElement();
    containerState.style = {
      overflow: container.style.overflow,
      [paddingProp]: container.style[paddingProp]
    };

    if (containerState.scrollBarWidth) {
      // use computed style, here to get the real padding
      // to add our scrollbar width
      style[paddingProp] = `${parseInt(Object(dom_helpers_css__WEBPACK_IMPORTED_MODULE_0__["default"])(container, paddingProp) || '0', 10) + containerState.scrollBarWidth}px`;
    }

    container.setAttribute(OPEN_DATA_ATTRIBUTE, '');
    Object(dom_helpers_css__WEBPACK_IMPORTED_MODULE_0__["default"])(container, style);
  }

  reset() {
    [...this.modals].forEach(m => this.remove(m));
  }

  removeContainerStyle(containerState) {
    const container = this.getElement();
    container.removeAttribute(OPEN_DATA_ATTRIBUTE);
    Object.assign(container.style, containerState.style);
  }

  add(modal) {
    let modalIdx = this.modals.indexOf(modal);

    if (modalIdx !== -1) {
      return modalIdx;
    }

    modalIdx = this.modals.length;
    this.modals.push(modal);
    this.setModalAttributes(modal);

    if (modalIdx !== 0) {
      return modalIdx;
    }

    this.state = {
      scrollBarWidth: this.getScrollbarWidth(),
      style: {}
    };

    if (this.handleContainerOverflow) {
      this.setContainerStyle(this.state);
    }

    return modalIdx;
  }

  remove(modal) {
    const modalIdx = this.modals.indexOf(modal);

    if (modalIdx === -1) {
      return;
    }

    this.modals.splice(modalIdx, 1); // if that was the last modal in a container,
    // clean up the container

    if (!this.modals.length && this.handleContainerOverflow) {
      this.removeContainerStyle(this.state);
    }

    this.removeModalAttributes(modal);
  }

  isTopModal(modal) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ModalManager);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/Nav.js":
/*!*********************************************!*\
  !*** ./node_modules/@restart/ui/esm/Nav.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dom_helpers_querySelectorAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-helpers/querySelectorAll */ "./node_modules/dom-helpers/esm/querySelectorAll.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _restart_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @restart/hooks/useForceUpdate */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useForceUpdate.js");
/* harmony import */ var _restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @restart/hooks/useMergedRefs */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergedRefs.js");
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavContext */ "./node_modules/@restart/ui/esm/NavContext.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/@restart/ui/esm/SelectableContext.js");
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TabContext */ "./node_modules/@restart/ui/esm/TabContext.js");
/* harmony import */ var _DataKey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DataKey */ "./node_modules/@restart/ui/esm/DataKey.js");
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NavItem */ "./node_modules/@restart/ui/esm/NavItem.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
const _excluded = ["as", "onSelect", "activeKey", "role", "onKeyDown"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const EVENT_KEY_ATTR = Object(_DataKey__WEBPACK_IMPORTED_MODULE_7__["dataAttr"])('event-key');
const Nav = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"]((_ref, ref) => {
  let {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    onSelect,
    activeKey,
    role,
    onKeyDown
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // A ref and forceUpdate for refocus, b/c we only want to trigger when needed
  // and don't want to reset the set in the effect
  const forceUpdate = Object(_restart_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const needsRefocusRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  const parentOnSelect = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_SelectableContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const tabContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_TabContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  let getControlledId, getControllerId;

  if (tabContext) {
    role = role || 'tablist';
    activeKey = tabContext.activeKey; // TODO: do we need to duplicate these?

    getControlledId = tabContext.getControlledId;
    getControllerId = tabContext.getControllerId;
  }

  const listNode = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  const getNextActiveTab = offset => {
    const currentListNode = listNode.current;
    if (!currentListNode) return null;
    const items = Object(dom_helpers_querySelectorAll__WEBPACK_IMPORTED_MODULE_0__["default"])(currentListNode, `[${EVENT_KEY_ATTR}]:not([aria-disabled=true])`);
    const activeChild = currentListNode.querySelector('[aria-selected=true]');
    if (!activeChild) return null;
    const index = items.indexOf(activeChild);
    if (index === -1) return null;
    let nextIndex = index + offset;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    return items[nextIndex];
  };

  const handleSelect = (key, event) => {
    if (key == null) return;
    onSelect == null ? void 0 : onSelect(key, event);
    parentOnSelect == null ? void 0 : parentOnSelect(key, event);
  };

  const handleKeyDown = event => {
    onKeyDown == null ? void 0 : onKeyDown(event);

    if (!tabContext) {
      return;
    }

    let nextActiveChild;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        nextActiveChild = getNextActiveTab(-1);
        break;

      case 'ArrowRight':
      case 'ArrowDown':
        nextActiveChild = getNextActiveTab(1);
        break;

      default:
        return;
    }

    if (!nextActiveChild) return;
    event.preventDefault();
    handleSelect(nextActiveChild.dataset[Object(_DataKey__WEBPACK_IMPORTED_MODULE_7__["dataProp"])('EventKey')] || null, event);
    needsRefocusRef.current = true;
    forceUpdate();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (listNode.current && needsRefocusRef.current) {
      const activeChild = listNode.current.querySelector(`[${EVENT_KEY_ATTR}][aria-selected=true]`);
      activeChild == null ? void 0 : activeChild.focus();
    }

    needsRefocusRef.current = false;
  });
  const mergedRef = Object(_restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_3__["default"])(ref, listNode);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_SelectableContext__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
    value: handleSelect,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_NavContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
      value: {
        role,
        // used by NavLink to determine it's role
        activeKey: Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_5__["makeEventKey"])(activeKey),
        getControlledId: getControlledId || noop,
        getControllerId: getControllerId || noop
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(Component, Object.assign({}, props, {
        onKeyDown: handleKeyDown,
        ref: mergedRef,
        role: role
      }))
    })
  });
});
Nav.displayName = 'Nav';
/* harmony default export */ __webpack_exports__["default"] = (Object.assign(Nav, {
  Item: _NavItem__WEBPACK_IMPORTED_MODULE_8__["default"]
}));

/***/ }),

/***/ "./node_modules/@restart/ui/esm/NavContext.js":
/*!****************************************************!*\
  !*** ./node_modules/@restart/ui/esm/NavContext.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const NavContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"](null);
NavContext.displayName = 'NavContext';
/* harmony default export */ __webpack_exports__["default"] = (NavContext);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/NavItem.js":
/*!*************************************************!*\
  !*** ./node_modules/@restart/ui/esm/NavItem.js ***!
  \*************************************************/
/*! exports provided: useNavItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useNavItem", function() { return useNavItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavContext */ "./node_modules/@restart/ui/esm/NavContext.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/@restart/ui/esm/SelectableContext.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./node_modules/@restart/ui/esm/Button.js");
/* harmony import */ var _DataKey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DataKey */ "./node_modules/@restart/ui/esm/DataKey.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
const _excluded = ["as", "active", "eventKey"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









function useNavItem({
  key,
  onClick,
  active,
  id,
  role,
  disabled
}) {
  const parentOnSelect = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_SelectableContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const navContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_NavContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  let isActive = active;
  const props = {
    role
  };

  if (navContext) {
    if (!role && navContext.role === 'tablist') props.role = 'tab';
    const contextControllerId = navContext.getControllerId(key != null ? key : null);
    const contextControlledId = navContext.getControlledId(key != null ? key : null); // @ts-ignore

    props[Object(_DataKey__WEBPACK_IMPORTED_MODULE_5__["dataAttr"])('event-key')] = key;
    props.id = contextControllerId || id;
    props['aria-controls'] = contextControlledId;
    isActive = active == null && key != null ? navContext.activeKey === key : active;
  }

  if (props.role === 'tab') {
    if (disabled) {
      props.tabIndex = -1;
      props['aria-disabled'] = true;
    }

    if (isActive) {
      props['aria-selected'] = isActive;
    } else {
      props.tabIndex = -1;
    }
  }

  props.onClick = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_1__["default"])(e => {
    if (disabled) return;
    onClick == null ? void 0 : onClick(e);

    if (key == null) {
      return;
    }

    if (parentOnSelect && !e.isPropagationStopped()) {
      parentOnSelect(key, e);
    }
  });
  return [props, {
    isActive
  }];
}
const NavItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]((_ref, ref) => {
  let {
    as: Component = _Button__WEBPACK_IMPORTED_MODULE_4__["default"],
    active,
    eventKey
  } = _ref,
      options = _objectWithoutPropertiesLoose(_ref, _excluded);

  const [props, meta] = useNavItem(Object.assign({
    key: Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_3__["makeEventKey"])(eventKey, options.href),
    active
  }, options)); // @ts-ignore

  props[Object(_DataKey__WEBPACK_IMPORTED_MODULE_5__["dataAttr"])('active')] = meta.isActive;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(Component, Object.assign({}, options, props, {
    ref: ref
  }));
});
NavItem.displayName = 'NavItem';
/* harmony default export */ __webpack_exports__["default"] = (NavItem);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/NoopTransition.js":
/*!********************************************************!*\
  !*** ./node_modules/@restart/ui/esm/NoopTransition.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function NoopTransition({
  children,
  in: inProp,
  mountOnEnter,
  unmountOnExit
}) {
  const hasEnteredRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(inProp);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (inProp) hasEnteredRef.current = true;
  }, [inProp]);
  if (inProp) return children; // not in
  //
  // if (!mountOnEnter && !unmountOnExit) {
  //   return children;
  // }

  if (unmountOnExit) {
    return null;
  }

  if (!hasEnteredRef.current && mountOnEnter) {
    return null;
  }

  return children;
}

/* harmony default export */ __webpack_exports__["default"] = (NoopTransition);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/Overlay.js":
/*!*************************************************!*\
  !*** ./node_modules/@restart/ui/esm/Overlay.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _restart_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @restart/hooks/useCallbackRef */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCallbackRef.js");
/* harmony import */ var _restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @restart/hooks/useMergedRefs */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergedRefs.js");
/* harmony import */ var _usePopper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usePopper */ "./node_modules/@restart/ui/esm/usePopper.js");
/* harmony import */ var _useRootClose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useRootClose */ "./node_modules/@restart/ui/esm/useRootClose.js");
/* harmony import */ var _useWaitForDOMRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useWaitForDOMRef */ "./node_modules/@restart/ui/esm/useWaitForDOMRef.js");
/* harmony import */ var _mergeOptionsWithPopperConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mergeOptionsWithPopperConfig */ "./node_modules/@restart/ui/esm/mergeOptionsWithPopperConfig.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);











/**
 * Built on top of `Popper.js`, the overlay component is
 * great for custom tooltip overlays.
 */
const Overlay = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]((props, outerRef) => {
  const {
    flip,
    offset,
    placement,
    containerPadding,
    popperConfig = {},
    transition: Transition
  } = props;
  const [rootElement, attachRef] = Object(_restart_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const [arrowElement, attachArrowRef] = Object(_restart_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const mergedRef = Object(_restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_3__["default"])(attachRef, outerRef);
  const container = Object(_useWaitForDOMRef__WEBPACK_IMPORTED_MODULE_6__["default"])(props.container);
  const target = Object(_useWaitForDOMRef__WEBPACK_IMPORTED_MODULE_6__["default"])(props.target);
  const [exited, setExited] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!props.show);
  const popper = Object(_usePopper__WEBPACK_IMPORTED_MODULE_4__["default"])(target, rootElement, Object(_mergeOptionsWithPopperConfig__WEBPACK_IMPORTED_MODULE_7__["default"])({
    placement,
    enableEvents: !!props.show,
    containerPadding: containerPadding || 5,
    flip,
    offset,
    arrowElement,
    popperConfig
  }));

  if (props.show) {
    if (exited) setExited(false);
  } else if (!props.transition && !exited) {
    setExited(true);
  }

  const handleHidden = (...args) => {
    setExited(true);

    if (props.onExited) {
      props.onExited(...args);
    }
  }; // Don't un-render the overlay while it's transitioning out.


  const mountOverlay = props.show || Transition && !exited;
  Object(_useRootClose__WEBPACK_IMPORTED_MODULE_5__["default"])(rootElement, props.onHide, {
    disabled: !props.rootClose || props.rootCloseDisabled,
    clickTrigger: props.rootCloseEvent
  });

  if (!mountOverlay) {
    // Don't bother showing anything if we don't have to.
    return null;
  }

  let child = props.children(Object.assign({}, popper.attributes.popper, {
    style: popper.styles.popper,
    ref: mergedRef
  }), {
    popper,
    placement,
    show: !!props.show,
    arrowProps: Object.assign({}, popper.attributes.arrow, {
      style: popper.styles.arrow,
      ref: attachArrowRef
    })
  });

  if (Transition) {
    const {
      onExit,
      onExiting,
      onEnter,
      onEntering,
      onEntered
    } = props;
    child = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Transition, {
      in: props.show,
      appear: true,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleHidden,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered,
      children: child
    });
  }

  return container ? /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(child, container) : null;
});
Overlay.displayName = 'Overlay';
/* harmony default export */ __webpack_exports__["default"] = (Overlay);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/SelectableContext.js":
/*!***********************************************************!*\
  !*** ./node_modules/@restart/ui/esm/SelectableContext.js ***!
  \***********************************************************/
/*! exports provided: makeEventKey, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeEventKey", function() { return makeEventKey; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SelectableContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"](null);
const makeEventKey = (eventKey, href = null) => {
  if (eventKey != null) return String(eventKey);
  return href || null;
};
/* harmony default export */ __webpack_exports__["default"] = (SelectableContext);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/TabContext.js":
/*!****************************************************!*\
  !*** ./node_modules/@restart/ui/esm/TabContext.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const TabContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"](null);
/* harmony default export */ __webpack_exports__["default"] = (TabContext);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/TabPanel.js":
/*!**************************************************!*\
  !*** ./node_modules/@restart/ui/esm/TabPanel.js ***!
  \**************************************************/
/*! exports provided: useTabPanel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTabPanel", function() { return useTabPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabContext */ "./node_modules/@restart/ui/esm/TabContext.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/@restart/ui/esm/SelectableContext.js");
/* harmony import */ var _NoopTransition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NoopTransition */ "./node_modules/@restart/ui/esm/NoopTransition.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
const _excluded = ["active", "eventKey", "mountOnEnter", "transition", "unmountOnExit"],
      _excluded2 = ["activeKey", "getControlledId", "getControllerId"],
      _excluded3 = ["as"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function useTabPanel(_ref) {
  let {
    active,
    eventKey,
    mountOnEnter,
    transition,
    unmountOnExit
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_TabContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  if (!context) return [props, {
    eventKey,
    isActive: active,
    mountOnEnter,
    transition,
    unmountOnExit
  }];

  const {
    activeKey,
    getControlledId,
    getControllerId
  } = context,
        rest = _objectWithoutPropertiesLoose(context, _excluded2);

  const key = Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_2__["makeEventKey"])(eventKey);
  return [Object.assign({}, props, {
    id: getControlledId(eventKey),
    'aria-labelledby': getControllerId(eventKey)
  }), {
    eventKey,
    isActive: active == null && key != null ? Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_2__["makeEventKey"])(activeKey) === key : active,
    transition: transition || rest.transition,
    mountOnEnter: mountOnEnter != null ? mountOnEnter : rest.mountOnEnter,
    unmountOnExit: unmountOnExit != null ? unmountOnExit : rest.unmountOnExit
  }];
}
const TabPanel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(_ref2, ref) => {
  let {
    as: Component = 'div'
  } = _ref2,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded3);

  const [tabPanelProps, {
    isActive,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    mountOnEnter,
    unmountOnExit,
    transition: Transition = _NoopTransition__WEBPACK_IMPORTED_MODULE_3__["default"]
  }] = useTabPanel(props); // We provide an empty the TabContext so `<Nav>`s in `<TabPanel>`s don't
  // conflict with the top level one.

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_TabContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: null,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_SelectableContext__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
      value: null,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(Transition, {
        in: isActive,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: onExited,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(Component, Object.assign({}, tabPanelProps, {
          ref: ref,
          role: "tabpanel",
          hidden: !isActive,
          "aria-hidden": !isActive
        }))
      })
    })
  });
});
TabPanel.displayName = 'TabPanel';
/* harmony default export */ __webpack_exports__["default"] = (TabPanel);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/Tabs.js":
/*!**********************************************!*\
  !*** ./node_modules/@restart/ui/esm/Tabs.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/lib/esm/index.js");
/* harmony import */ var _ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ssr */ "./node_modules/@restart/ui/esm/ssr.js");
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TabContext */ "./node_modules/@restart/ui/esm/TabContext.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/@restart/ui/esm/SelectableContext.js");
/* harmony import */ var _TabPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TabPanel */ "./node_modules/@restart/ui/esm/TabPanel.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









const Tabs = props => {
  const {
    id: userId,
    generateChildId: generateCustomChildId,
    onSelect: propsOnSelect,
    activeKey: propsActiveKey,
    defaultActiveKey,
    transition,
    mountOnEnter,
    unmountOnExit,
    children
  } = props;
  const [activeKey, onSelect] = Object(uncontrollable__WEBPACK_IMPORTED_MODULE_1__["useUncontrolledProp"])(propsActiveKey, defaultActiveKey, propsOnSelect);
  const id = Object(_ssr__WEBPACK_IMPORTED_MODULE_2__["useSSRSafeId"])(userId);
  const generateChildId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => generateCustomChildId || ((key, type) => id ? `${id}-${type}-${key}` : null), [id, generateCustomChildId]);
  const tabContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    onSelect,
    activeKey,
    transition,
    mountOnEnter: mountOnEnter || false,
    unmountOnExit: unmountOnExit || false,
    getControlledId: key => generateChildId(key, 'tabpane'),
    getControllerId: key => generateChildId(key, 'tab')
  }), [onSelect, activeKey, transition, mountOnEnter, unmountOnExit, generateChildId]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_TabContext__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, {
    value: tabContext,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_SelectableContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
      value: onSelect || null,
      children: children
    })
  });
};

Tabs.Panel = _TabPanel__WEBPACK_IMPORTED_MODULE_5__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/getScrollbarWidth.js":
/*!***********************************************************!*\
  !*** ./node_modules/@restart/ui/esm/getScrollbarWidth.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBodyScrollbarWidth; });
/**
 * Get the width of the vertical window scrollbar if it's visible
 */
function getBodyScrollbarWidth(ownerDocument = document) {
  const window = ownerDocument.defaultView;
  return Math.abs(window.innerWidth - ownerDocument.documentElement.clientWidth);
}

/***/ }),

/***/ "./node_modules/@restart/ui/esm/mergeOptionsWithPopperConfig.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@restart/ui/esm/mergeOptionsWithPopperConfig.js ***!
  \**********************************************************************/
/*! exports provided: toModifierMap, toModifierArray, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toModifierMap", function() { return toModifierMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toModifierArray", function() { return toModifierArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeOptionsWithPopperConfig; });
function toModifierMap(modifiers) {
  const result = {};

  if (!Array.isArray(modifiers)) {
    return modifiers || result;
  } // eslint-disable-next-line no-unused-expressions


  modifiers == null ? void 0 : modifiers.forEach(m => {
    result[m.name] = m;
  });
  return result;
}
function toModifierArray(map = {}) {
  if (Array.isArray(map)) return map;
  return Object.keys(map).map(k => {
    map[k].name = k;
    return map[k];
  });
}
function mergeOptionsWithPopperConfig({
  enabled,
  enableEvents,
  placement,
  flip,
  offset,
  fixed,
  containerPadding,
  arrowElement,
  popperConfig = {}
}) {
  var _modifiers$preventOve, _modifiers$preventOve2, _modifiers$offset, _modifiers$arrow;

  const modifiers = toModifierMap(popperConfig.modifiers);
  return Object.assign({}, popperConfig, {
    placement,
    enabled,
    strategy: fixed ? 'fixed' : popperConfig.strategy,
    modifiers: toModifierArray(Object.assign({}, modifiers, {
      eventListeners: {
        enabled: enableEvents
      },
      preventOverflow: Object.assign({}, modifiers.preventOverflow, {
        options: containerPadding ? Object.assign({
          padding: containerPadding
        }, (_modifiers$preventOve = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve.options) : (_modifiers$preventOve2 = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve2.options
      }),
      offset: {
        options: Object.assign({
          offset
        }, (_modifiers$offset = modifiers.offset) == null ? void 0 : _modifiers$offset.options)
      },
      arrow: Object.assign({}, modifiers.arrow, {
        enabled: !!arrowElement,
        options: Object.assign({}, (_modifiers$arrow = modifiers.arrow) == null ? void 0 : _modifiers$arrow.options, {
          element: arrowElement
        })
      }),
      flip: Object.assign({
        enabled: !!flip
      }, modifiers.flip)
    }))
  });
}

/***/ }),

/***/ "./node_modules/@restart/ui/esm/popper.js":
/*!************************************************!*\
  !*** ./node_modules/@restart/ui/esm/popper.js ***!
  \************************************************/
/*! exports provided: createPopper, placements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony import */ var _popperjs_core_lib_modifiers_arrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/arrow */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _popperjs_core_lib_modifiers_computeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/computeStyles */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _popperjs_core_lib_modifiers_eventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/eventListeners */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _popperjs_core_lib_modifiers_flip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/flip */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _popperjs_core_lib_modifiers_hide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/hide */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _popperjs_core_lib_modifiers_offset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/offset */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _popperjs_core_lib_modifiers_popperOffsets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/popperOffsets */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _popperjs_core_lib_modifiers_preventOverflow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/preventOverflow */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony import */ var _popperjs_core_lib_enums__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @popperjs/core/lib/enums */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return _popperjs_core_lib_enums__WEBPACK_IMPORTED_MODULE_8__["placements"]; });

/* harmony import */ var _popperjs_core_lib_popper_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @popperjs/core/lib/popper-base */ "./node_modules/@popperjs/core/lib/popper-base.js");









 // For the common JS build we will turn this file into a bundle with no imports.
// This is b/c the Popper lib is all esm files, and would break in a common js only environment

const createPopper = Object(_popperjs_core_lib_popper_base__WEBPACK_IMPORTED_MODULE_9__["popperGenerator"])({
  defaultModifiers: [_popperjs_core_lib_modifiers_hide__WEBPACK_IMPORTED_MODULE_4__["default"], _popperjs_core_lib_modifiers_popperOffsets__WEBPACK_IMPORTED_MODULE_6__["default"], _popperjs_core_lib_modifiers_computeStyles__WEBPACK_IMPORTED_MODULE_1__["default"], _popperjs_core_lib_modifiers_eventListeners__WEBPACK_IMPORTED_MODULE_2__["default"], _popperjs_core_lib_modifiers_offset__WEBPACK_IMPORTED_MODULE_5__["default"], _popperjs_core_lib_modifiers_flip__WEBPACK_IMPORTED_MODULE_3__["default"], _popperjs_core_lib_modifiers_preventOverflow__WEBPACK_IMPORTED_MODULE_7__["default"], _popperjs_core_lib_modifiers_arrow__WEBPACK_IMPORTED_MODULE_0__["default"]]
});


/***/ }),

/***/ "./node_modules/@restart/ui/esm/ssr.js":
/*!*********************************************!*\
  !*** ./node_modules/@restart/ui/esm/ssr.js ***!
  \*********************************************/
/*! exports provided: useSSRSafeId, useIsSSR, SSRProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_aria_ssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-aria/ssr */ "./node_modules/@react-aria/ssr/dist/module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSSRSafeId", function() { return _react_aria_ssr__WEBPACK_IMPORTED_MODULE_0__["useSSRSafeId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIsSSR", function() { return _react_aria_ssr__WEBPACK_IMPORTED_MODULE_0__["useIsSSR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SSRProvider", function() { return _react_aria_ssr__WEBPACK_IMPORTED_MODULE_0__["SSRProvider"]; });




/***/ }),

/***/ "./node_modules/@restart/ui/esm/usePopper.js":
/*!***************************************************!*\
  !*** ./node_modules/@restart/ui/esm/usePopper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dequal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dequal */ "./node_modules/dequal/dist/index.mjs");
/* harmony import */ var _restart_hooks_useSafeState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @restart/hooks/useSafeState */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useSafeState.js");
/* harmony import */ var _popper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popper */ "./node_modules/@restart/ui/esm/popper.js");
const _excluded = ["enabled", "placement", "strategy", "modifiers"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const disabledApplyStylesModifier = {
  name: 'applyStyles',
  enabled: false,
  phase: 'afterWrite',
  fn: () => undefined
}; // until docjs supports type exports...

const ariaDescribedByModifier = {
  name: 'ariaDescribedBy',
  enabled: true,
  phase: 'afterWrite',
  effect: ({
    state
  }) => () => {
    const {
      reference,
      popper
    } = state.elements;

    if ('removeAttribute' in reference) {
      const ids = (reference.getAttribute('aria-describedby') || '').split(',').filter(id => id.trim() !== popper.id);
      if (!ids.length) reference.removeAttribute('aria-describedby');else reference.setAttribute('aria-describedby', ids.join(','));
    }
  },
  fn: ({
    state
  }) => {
    var _popper$getAttribute;

    const {
      popper,
      reference
    } = state.elements;
    const role = (_popper$getAttribute = popper.getAttribute('role')) == null ? void 0 : _popper$getAttribute.toLowerCase();

    if (popper.id && role === 'tooltip' && 'setAttribute' in reference) {
      const ids = reference.getAttribute('aria-describedby');

      if (ids && ids.split(',').indexOf(popper.id) !== -1) {
        return;
      }

      reference.setAttribute('aria-describedby', ids ? `${ids},${popper.id}` : popper.id);
    }
  }
};
const EMPTY_MODIFIERS = [];
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
 * @param {function=}   options.onCreate called when the popper is created
 * @param {function=}   options.onUpdate called when the popper is updated
 *
 * @returns {UsePopperState} The popper state
 */

function usePopper(referenceElement, popperElement, _ref = {}) {
  let {
    enabled = true,
    placement = 'bottom',
    strategy = 'absolute',
    modifiers = EMPTY_MODIFIERS
  } = _ref,
      config = _objectWithoutPropertiesLoose(_ref, _excluded);

  const prevModifiers = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(modifiers);
  const popperInstanceRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const update = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    var _popperInstanceRef$cu;

    (_popperInstanceRef$cu = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu.update();
  }, []);
  const forceUpdate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    var _popperInstanceRef$cu2;

    (_popperInstanceRef$cu2 = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu2.forceUpdate();
  }, []);
  const [popperState, setState] = Object(_restart_hooks_useSafeState__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    placement,
    update,
    forceUpdate,
    attributes: {},
    styles: {
      popper: {},
      arrow: {}
    }
  }));
  const updateModifier = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    name: 'updateStateModifier',
    enabled: true,
    phase: 'write',
    requires: ['computeStyles'],
    fn: ({
      state
    }) => {
      const styles = {};
      const attributes = {};
      Object.keys(state.elements).forEach(element => {
        styles[element] = state.styles[element];
        attributes[element] = state.attributes[element];
      });
      setState({
        state,
        styles,
        attributes,
        update,
        forceUpdate,
        placement: state.placement
      });
    }
  }), [update, forceUpdate, setState]);
  const nextModifiers = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    if (!Object(dequal__WEBPACK_IMPORTED_MODULE_1__["dequal"])(prevModifiers.current, modifiers)) {
      prevModifiers.current = modifiers;
    }

    return prevModifiers.current;
  }, [modifiers]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!popperInstanceRef.current || !enabled) return;
    popperInstanceRef.current.setOptions({
      placement,
      strategy,
      modifiers: [...nextModifiers, updateModifier, disabledApplyStylesModifier]
    });
  }, [strategy, placement, updateModifier, enabled, nextModifiers]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!enabled || referenceElement == null || popperElement == null) {
      return undefined;
    }

    popperInstanceRef.current = Object(_popper__WEBPACK_IMPORTED_MODULE_3__["createPopper"])(referenceElement, popperElement, Object.assign({}, config, {
      placement,
      strategy,
      modifiers: [...nextModifiers, ariaDescribedByModifier, updateModifier]
    }));
    return () => {
      if (popperInstanceRef.current != null) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = undefined;
        setState(s => Object.assign({}, s, {
          attributes: {},
          styles: {
            popper: {}
          }
        }));
      }
    }; // This is only run once to _create_ the popper
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, referenceElement, popperElement]);
  return popperState;
}

/* harmony default export */ __webpack_exports__["default"] = (usePopper);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/useRootClose.js":
/*!******************************************************!*\
  !*** ./node_modules/@restart/ui/esm/useRootClose.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dom_helpers_contains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-helpers/contains */ "./node_modules/dom-helpers/esm/contains.js");
/* harmony import */ var dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-helpers/listen */ "./node_modules/dom-helpers/esm/listen.js");
/* harmony import */ var dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dom-helpers/ownerDocument */ "./node_modules/dom-helpers/esm/ownerDocument.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_5__);






const escapeKeyCode = 27;

const noop = () => {};

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

const getRefTarget = ref => ref && ('current' in ref ? ref.current : ref);

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
function useRootClose(ref, onRootClose, {
  disabled,
  clickTrigger = 'click'
} = {}) {
  const preventMouseRootCloseRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);
  const onClose = onRootClose || noop;
  const handleMouseCapture = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(e => {
    const currentTarget = getRefTarget(ref);
    warning__WEBPACK_IMPORTED_MODULE_5___default()(!!currentTarget, 'RootClose captured a close event but does not have a ref to compare it to. ' + 'useRootClose(), should be passed a ref that resolves to a DOM node');
    preventMouseRootCloseRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!Object(dom_helpers_contains__WEBPACK_IMPORTED_MODULE_0__["default"])(currentTarget, e.target);
  }, [ref]);
  const handleMouse = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(e => {
    if (!preventMouseRootCloseRef.current) {
      onClose(e);
    }
  });
  const handleKeyUp = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(e => {
    if (e.keyCode === escapeKeyCode) {
      onClose(e);
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (disabled || ref == null) return undefined;
    const doc = Object(dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_2__["default"])(getRefTarget(ref)); // Store the current event to avoid triggering handlers immediately
    // https://github.com/facebook/react/issues/20074

    let currentEvent = (doc.defaultView || window).event; // Use capture for this listener so it fires before React's listener, to
    // avoid false positives in the contains() check below if the target DOM
    // element is removed in the React mouse callback.

    const removeMouseCaptureListener = Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__["default"])(doc, clickTrigger, handleMouseCapture, true);
    const removeMouseListener = Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__["default"])(doc, clickTrigger, e => {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }

      handleMouse(e);
    });
    const removeKeyupListener = Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__["default"])(doc, 'keyup', e => {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }

      handleKeyUp(e);
    });
    let mobileSafariHackListeners = [];

    if ('ontouchstart' in doc.documentElement) {
      mobileSafariHackListeners = [].slice.call(doc.body.children).map(el => Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__["default"])(el, 'mousemove', noop));
    }

    return () => {
      removeMouseCaptureListener();
      removeMouseListener();
      removeKeyupListener();
      mobileSafariHackListeners.forEach(remove => remove());
    };
  }, [ref, disabled, clickTrigger, handleMouseCapture, handleMouse, handleKeyUp]);
}

/* harmony default export */ __webpack_exports__["default"] = (useRootClose);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/useWaitForDOMRef.js":
/*!**********************************************************!*\
  !*** ./node_modules/@restart/ui/esm/useWaitForDOMRef.js ***!
  \**********************************************************/
/*! exports provided: resolveContainerRef, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveContainerRef", function() { return resolveContainerRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useWaitForDOMRef; });
/* harmony import */ var dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-helpers/ownerDocument */ "./node_modules/dom-helpers/esm/ownerDocument.js");
/* harmony import */ var dom_helpers_canUseDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-helpers/canUseDOM */ "./node_modules/dom-helpers/esm/canUseDOM.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useWindow */ "./node_modules/@restart/ui/esm/useWindow.js");




const resolveContainerRef = (ref, document) => {
  var _ref;

  if (!dom_helpers_canUseDOM__WEBPACK_IMPORTED_MODULE_1__["default"]) return null;
  if (ref == null) return (document || Object(dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_0__["default"])()).body;
  if (typeof ref === 'function') ref = ref();
  if (ref && 'current' in ref) ref = ref.current;
  if ((_ref = ref) != null && _ref.nodeType) return ref || null;
  return null;
};
function useWaitForDOMRef(ref, onResolved) {
  const window = Object(_useWindow__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const [resolvedRef, setRef] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(() => resolveContainerRef(ref, window == null ? void 0 : window.document));

  if (!resolvedRef) {
    const earlyRef = resolveContainerRef(ref);
    if (earlyRef) setRef(earlyRef);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (onResolved && resolvedRef) {
      onResolved(resolvedRef);
    }
  }, [onResolved, resolvedRef]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const nextRef = resolveContainerRef(ref);

    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);
  return resolvedRef;
}

/***/ }),

/***/ "./node_modules/@restart/ui/esm/useWindow.js":
/*!***************************************************!*\
  !*** ./node_modules/@restart/ui/esm/useWindow.js ***!
  \***************************************************/
/*! exports provided: WindowProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowProvider", function() { return WindowProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useWindow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dom_helpers_canUseDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-helpers/canUseDOM */ "./node_modules/dom-helpers/esm/canUseDOM.js");


const Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(dom_helpers_canUseDOM__WEBPACK_IMPORTED_MODULE_1__["default"] ? window : undefined);
const WindowProvider = Context.Provider;
/**
 * The document "window" placed in React context. Helpful for determining
 * SSR context, or when rendering into an iframe.
 *
 * @returns the current window
 */

function useWindow() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(Context);
}

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/index.js ***!
  \***************************************************************************/
/*! exports provided: useCallbackRef, useCommittedRef, useEventCallback, useEventListener, useGlobalListener, useInterval, useRafInterval, useMergeState, useMergeStateFromProps, useMounted, usePrevious, useImage, useResizeObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useCallbackRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useCallbackRef */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCallbackRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCallbackRef", function() { return _useCallbackRef__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _useCommittedRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCommittedRef */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCommittedRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCommittedRef", function() { return _useCommittedRef__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _useEventCallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useEventCallback */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEventCallback", function() { return _useEventCallback__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useEventListener */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventListener.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEventListener", function() { return _useEventListener__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _useGlobalListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useGlobalListener */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useGlobalListener.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useGlobalListener", function() { return _useGlobalListener__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _useInterval__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useInterval */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useInterval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useInterval", function() { return _useInterval__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _useRafInterval__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useRafInterval */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useRafInterval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRafInterval", function() { return _useRafInterval__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _useMergeState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useMergeState */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergeState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMergeState", function() { return _useMergeState__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _useMergeStateFromProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useMergeStateFromProps */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergeStateFromProps.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMergeStateFromProps", function() { return _useMergeStateFromProps__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _useMounted__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useMounted */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMounted.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMounted", function() { return _useMounted__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _usePrevious__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./usePrevious */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/usePrevious.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePrevious", function() { return _usePrevious__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _useImage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useImage */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useImage", function() { return _useImage__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _useResizeObserver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./useResizeObserver */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useResizeObserver.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useResizeObserver", function() { return _useResizeObserver__WEBPACK_IMPORTED_MODULE_12__["default"]; });
















/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCallbackRef.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCallbackRef.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCallbackRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

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
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
}

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCommittedRef.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCommittedRef.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded before being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */

function useCommittedRef(value) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current = value;
  }, [value]);
  return ref;
}

/* harmony default export */ __webpack_exports__["default"] = (useCommittedRef);

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventCallback.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventCallback.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useEventCallback; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useCommittedRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCommittedRef */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCommittedRef.js");


function useEventCallback(fn) {
  var ref = Object(_useCommittedRef__WEBPACK_IMPORTED_MODULE_1__["default"])(fn);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return ref.current && ref.current.apply(ref, arguments);
  }, [ref]);
}

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventListener.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventListener.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useEventListener; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useEventCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEventCallback */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventCallback.js");



/**
 * Attaches an event handler outside directly to specified DOM element
 * bypassing the react synthetic event system.
 *
 * @param element The target to listen for events on
 * @param event The DOM event name
 * @param handler An event handler
 * @param capture Whether or not to listen during the capture event phase
 */
function useEventListener(eventTarget, event, listener, capture) {
  if (capture === void 0) {
    capture = false;
  }

  var handler = Object(_useEventCallback__WEBPACK_IMPORTED_MODULE_1__["default"])(listener);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var target = typeof eventTarget === 'function' ? eventTarget() : eventTarget;
    target.addEventListener(event, handler, capture);
    return function () {
      return target.removeEventListener(event, handler, capture);
    };
  }, [eventTarget]);
}

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useForceUpdate.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useForceUpdate.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useForceUpdate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

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
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(function (state) {
    return !state;
  }, false),
      dispatch = _useReducer[1];

  return dispatch;
}

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useGlobalListener.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useGlobalListener.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useGlobalListener; });
/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useEventListener */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventListener.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Attaches an event handler outside directly to the `document`,
 * bypassing the react synthetic event system.
 *
 * ```ts
 * useGlobalListener('keydown', (event) => {
 *  console.log(event.key)
 * })
 * ```
 *
 * @param event The DOM event name
 * @param handler An event handler
 * @param capture Whether or not to listen during the capture event phase
 */
function useGlobalListener(event, handler, capture) {
  if (capture === void 0) {
    capture = false;
  }

  var documentTarget = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    return document;
  }, []);
  return Object(_useEventListener__WEBPACK_IMPORTED_MODULE_0__["default"])(documentTarget, event, handler, capture);
}

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useImage.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useImage.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useImage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Fetch and load an image for programatic use such as in a `<canvas>` element.
 *
 * @param imageOrUrl The `HtmlImageElement` or image url to load
 * @param crossOrigin The `crossorigin` attribute to set
 *
 * ```ts
 * const { image, error } = useImage('/static/kittens.png')
 * const ref = useRef<HTMLCanvasElement>()
 *
 * useEffect(() => {
 *   const ctx = ref.current.getContext('2d')
 *
 *   if (image) {
 *     ctx.drawImage(image, 0, 0)
 *   }
 * }, [ref, image])
 *
 * return (
 *   <>
 *     {error && "there was a problem loading the image"}
 *     <canvas ref={ref} />
 *   </>
 * ```
 */
function useImage(imageOrUrl, crossOrigin) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    image: null,
    error: null
  }),
      state = _useState[0],
      setState = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!imageOrUrl) return undefined;
    var image;

    if (typeof imageOrUrl === 'string') {
      image = new Image();
      if (crossOrigin) image.crossOrigin = crossOrigin;
      image.src = imageOrUrl;
    } else {
      image = imageOrUrl;

      if (image.complete && image.naturalHeight > 0) {
        setState({
          image: image,
          error: null
        });
        return;
      }
    }

    function onLoad() {
      setState({
        image: image,
        error: null
      });
    }

    function onError(error) {
      setState({
        image: image,
        error: error
      });
    }

    image.addEventListener('load', onLoad);
    image.addEventListener('error', onError);
    return function () {
      image.removeEventListener('load', onLoad);
      image.removeEventListener('error', onError);
    };
  }, [imageOrUrl, crossOrigin]);
  return state;
}

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useInterval.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useInterval.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useCommittedRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCommittedRef */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCommittedRef.js");


/**
 * Creates a `setInterval` that is properly cleaned up when a component unmounted
 *
 * ```tsx
 *  function Timer() {
 *    const [timer, setTimer] = useState(0)
 *    useInterval(() => setTimer(i => i + 1), 1000)
 *
 *    return <span>{timer} seconds past</span>
 *  }
 * ```
 *
 * @param fn an function run on each interval
 * @param ms The milliseconds duration of the interval
 */

function useInterval(fn, ms, paused, runImmediately) {
  if (paused === void 0) {
    paused = false;
  }

  if (runImmediately === void 0) {
    runImmediately = false;
  }

  var handle;
  var fnRef = Object(_useCommittedRef__WEBPACK_IMPORTED_MODULE_1__["default"])(fn); // this ref is necessary b/c useEffect will sometimes miss a paused toggle
  // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.

  var pausedRef = Object(_useCommittedRef__WEBPACK_IMPORTED_MODULE_1__["default"])(paused);

  var tick = function tick() {
    if (pausedRef.current) return;
    fnRef.current();
    schedule(); // eslint-disable-line no-use-before-define
  };

  var schedule = function schedule() {
    clearTimeout(handle);
    handle = setTimeout(tick, ms);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (runImmediately) {
      tick();
    } else {
      schedule();
    }

    return function () {
      return clearTimeout(handle);
    };
  }, [paused, runImmediately]);
}

/* harmony default export */ __webpack_exports__["default"] = (useInterval);

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useIsomorphicEffect.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useIsomorphicEffect.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var isReactNative = typeof global !== 'undefined' && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === 'ReactNative';
var isDOM = typeof document !== 'undefined';
/**
 * Is `useLayoutEffect` in a DOM or React Native environment, otherwise resolves to useEffect
 * Only useful to avoid the console warning.
 *
 * PREFER `useEffect` UNLESS YOU KNOW WHAT YOU ARE DOING.
 *
 * @category effects
 */

/* harmony default export */ __webpack_exports__["default"] = (isDOM || isReactNative ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergeState.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergeState.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMergeState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



/**
 * Mimics a React class component's state model, of having a single unified
 * `state` object and an updater that merges updates into the existing state, as
 * opposed to replacing it.
 *
 * ```js
 * const [state, setState] = useMergeState({ name: 'Betsy', age: 24 })
 *
 * setState({ name: 'Johan' }) // { name: 'Johan', age: 24 }
 *
 * setState(state => ({ age: state.age + 10 })) // { name: 'Johan', age: 34 }
 * ```
 *
 * @param initialState The initial state object
 */
function useMergeState(initialState) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState),
      state = _useState[0],
      setState = _useState[1];

  var updater = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (update) {
    if (update === null) return;

    if (typeof update === 'function') {
      setState(function (state) {
        var nextState = update(state);
        return nextState == null ? state : _extends({}, state, nextState);
      });
    } else {
      setState(function (state) {
        return _extends({}, state, update);
      });
    }
  }, [setState]);
  return [state, updater];
}

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergeStateFromProps.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergeStateFromProps.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMergeStateFromProps; });
/* harmony import */ var _useMergeState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useMergeState */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergeState.js");

function useMergeStateFromProps(props, gDSFP, initialState) {
  var _useMergeState = Object(_useMergeState__WEBPACK_IMPORTED_MODULE_0__["default"])(initialState),
      state = _useMergeState[0],
      setState = _useMergeState[1];

  var nextState = gDSFP(props, state);
  if (nextState !== null) setState(nextState);
  return [state, setState];
}

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergedRefs.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergedRefs.js ***!
  \***********************************************************************************/
/*! exports provided: mergeRefs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeRefs", function() { return mergeRefs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


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
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return mergeRefs(refA, refB);
  }, [refA, refB]);
}

/* harmony default export */ __webpack_exports__["default"] = (useMergedRefs);

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMounted.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMounted.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMounted; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

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
  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  var isMounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(function () {
    return mounted.current;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/usePrevious.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/usePrevious.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePrevious; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

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
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current = value;
  });
  return ref.current;
}

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useRafInterval.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useRafInterval.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useCommittedRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCommittedRef */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCommittedRef.js");



function useRafInterval(fn, ms, paused) {
  if (paused === void 0) {
    paused = false;
  }

  var handle;
  var start = new Date().getTime();
  var fnRef = Object(_useCommittedRef__WEBPACK_IMPORTED_MODULE_1__["default"])(fn); // this ref is necessary b/c useEffect will sometimes miss a paused toggle
  // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.

  var pausedRef = Object(_useCommittedRef__WEBPACK_IMPORTED_MODULE_1__["default"])(paused);

  function loop() {
    var current = new Date().getTime();
    var delta = current - start;
    if (pausedRef.current) return;

    if (delta >= ms && fnRef.current) {
      fnRef.current();
      start = new Date().getTime();
    }

    cancelAnimationFrame(handle);
    handle = requestAnimationFrame(loop);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    handle = requestAnimationFrame(loop);
    return function () {
      return cancelAnimationFrame(handle);
    };
  }, []);
}

/* harmony default export */ __webpack_exports__["default"] = (useRafInterval);

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useResizeObserver.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useResizeObserver.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useResizeObserver; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useIsomorphicEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useIsomorphicEffect */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useIsomorphicEffect.js");


var targetMap = new WeakMap();
var resizeObserver;

function getResizeObserver() {
  // eslint-disable-next-line no-return-assign
  return resizeObserver = resizeObserver || new window.ResizeObserver(function (entries) {
    entries.forEach(function (entry) {
      var handler = targetMap.get(entry.target);
      if (handler) handler(entry.contentRect);
    });
  });
}
/**
 * Efficiently observe size changes on an element. Depends on the `ResizeObserver` api,
 * and polyfills are needed in older browsers.
 *
 * ```ts
 * const [ref, attachRef] = useCallbackRef(null);
 *
 * const rect = useResizeObserver(ref);
 *
 * return (
 *  <div ref={attachRef}>
 *    {JSON.stringify(rect)}
 *  </div>
 * )
 * ```
 *
 * @param element The DOM element to observe
 */


function useResizeObserver(element) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      rect = _useState[0],
      setRect = _useState[1];

  Object(_useIsomorphicEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
    if (!element) return;
    getResizeObserver().observe(element);
    setRect(element.getBoundingClientRect());
    targetMap.set(element, function (rect) {
      setRect(rect);
    });
    return function () {
      targetMap.delete(element);
    };
  }, [element]);
  return rect;
}

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useSafeState.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useSafeState.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useMounted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMounted */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMounted.js");



function useSafeState(state) {
  var isMounted = Object(_useMounted__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return [state[0], Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (nextState) {
    if (!isMounted()) return;
    return state[1](nextState);
  }, [isMounted, state[1]])];
}

/* harmony default export */ __webpack_exports__["default"] = (useSafeState);

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useUpdatedRef.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useUpdatedRef.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useUpdatedRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Returns a ref that is immediately updated with the new value
 *
 * @param value The Ref value
 * @category refs
 */

function useUpdatedRef(value) {
  var valueRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
  valueRef.current = value;
  return valueRef;
}

/***/ }),

/***/ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useWillUnmount.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useWillUnmount.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useWillUnmount; });
/* harmony import */ var _useUpdatedRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useUpdatedRef */ "./node_modules/@restart/ui/node_modules/@restart/hooks/esm/useUpdatedRef.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Attach a callback that fires when a component unmounts
 *
 * @param fn Handler to run when the component unmounts
 * @category effects
 */

function useWillUnmount(fn) {
  var onUnmount = Object(_useUpdatedRef__WEBPACK_IMPORTED_MODULE_0__["default"])(fn);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return function () {
      return onUnmount.current();
    };
  }, []);
}

/***/ })

}]);
//# sourceMappingURL=vendors.restart.4e05e178.js.map