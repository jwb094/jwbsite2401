/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/gallery_lightbox.js":
/*!***************************************!*\
  !*** ./public/js/gallery_lightbox.js ***!
  \***************************************/
/***/ (() => {

function _slicedToArray2(arr, i) { return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest2(); }
function _nonIterableRest2() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray2(o, minLen); }
function _arrayLikeToArray2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit2(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles2(arr) { if (Array.isArray(arr)) return arr; }
/******/(function () {
  // webpackBootstrap
  /******/
  var __webpack_modules__ = {
    /***/"./public/js/gallery_lightbox.js": (
    /*!***************************************!*\
      !*** ./public/js/gallery_lightbox.js ***!
      \***************************************/
    /***/
    function publicJsGallery_lightboxJs() {
      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _iterableToArrayLimit(r, l) {
        var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (null != t) {
          var e,
            n,
            i,
            u,
            a = [],
            f = !0,
            o = !1;
          try {
            if (i = (t = t.call(r)).next, 0 === l) {
              if (Object(t) !== t) return;
              f = !1;
            } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
          } catch (r) {
            o = !0, n = r;
          } finally {
            try {
              if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally {
              if (o) throw n;
            }
          }
          return a;
        }
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }
      /******/
      (function () {
        // webpackBootstrap
        /******/
        var __webpack_modules__ = {
          /***/"./public/js/gallery_lightbox.js": (
          /*!***************************************!*\
            !*** ./public/js/gallery_lightbox.js ***!
            \***************************************/
          /***/
          function publicJsGallery_lightboxJs() {
            var galleryItem = document.getElementsByClassName("gallery-item");
            //create element for lightbox
            var lightBoxContainer = document.createElement("div");
            //for basic area
            var lightBoxContent = document.createElement("div");
            //for images
            var lightBoxImg = document.createElement("img");
            // for next button 
            var lightBoxNext = document.createElement("div");
            //for prev button
            var lightBoxPrev = document.createElement("div");
            console.log(galleryItem);

            //createclasslist

            lightBoxContainer.classList.add('lightbox');
            lightBoxContent.classList.add('lightbox-content');
            lightBoxPrev.classList.add('prev_btn', 'triangle', 'triangle-left');
            lightBoxNext.classList.add('next_btn', 'triangle', 'triangle-right');
            lightBoxContainer.appendChild(lightBoxContent);
            lightBoxContent.appendChild(lightBoxImg);
            lightBoxContent.appendChild(lightBoxNext);
            lightBoxContent.appendChild(lightBoxPrev);
            document.body.appendChild(lightBoxContainer);
            var index = 1;

            //create function

            function showLightBox(n) {
              if (n > galleryItem.length) {
                index = 1;
              } else if (n < 1) {
                index = galleryItem.length;
              }
              var imageLocation = galleryItem[index - 1].children[0].getAttribute("src");
              lightBoxImg.setAttribute("src", imageLocation);
            }
            function currentImage() {
              lightBoxContainer.style.display = "block";
              var imageIndex = parseInt(this.getAttribute("data-index"));
              showLightBox(index = imageIndex);
            }
            for (var i = 0; i < galleryItem.length; i++) {
              galleryItem[i].addEventListener("click", currentImage);
            }
            function sliderImage(n) {
              showLightBox(index += n);
            }
            function prevImage() {
              sliderImage(-1);
            }
            function nextImage() {
              sliderImage(1);
            }
            lightBoxPrev.addEventListener("click", prevImage);
            lightBoxNext.addEventListener("click", nextImage);

            //close lightbox

            function closeLightBox() {
              if (this === event.target) {
                console.log("hi");
                lightBoxContainer.style.display = "none";
              }
            }
            lightBoxContainer.addEventListener("click", closeLightBox);

            /***/
          }),
          /***/"./public/css/main.scss": (
          /*!******************************!*\
            !*** ./public/css/main.scss ***!
            \******************************/
          /***/
          function publicCssMainScss(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_4472__) {
            "use strict";

            __nested_webpack_require_4472__.r(__nested_webpack_exports__);
            // extracted by mini-css-extract-plugin

            /***/
          })

          /******/
        };
        /************************************************************************/
        /******/ // The module cache
        /******/
        var __webpack_module_cache__ = {};
        /******/
        /******/ // The require function
        /******/
        function __nested_webpack_require_4866__(moduleId) {
          /******/ // Check if module is in cache
          /******/var cachedModule = __webpack_module_cache__[moduleId];
          /******/
          if (cachedModule !== undefined) {
            /******/return cachedModule.exports;
            /******/
          }
          /******/ // Create a new module (and put it into the cache)
          /******/
          var module = __webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/exports: {}
            /******/
          };
          /******/
          /******/ // Execute the module function
          /******/
          __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_4866__);
          /******/
          /******/ // Return the exports of the module
          /******/
          return module.exports;
          /******/
        }
        /******/
        /******/ // expose the modules object (__webpack_modules__)
        /******/
        __nested_webpack_require_4866__.m = __webpack_modules__;
        /******/
        /************************************************************************/
        /******/ /* webpack/runtime/chunk loaded */
        /******/
        (function () {
          /******/var deferred = [];
          /******/
          __nested_webpack_require_4866__.O = function (result, chunkIds, fn, priority) {
            /******/if (chunkIds) {
              /******/priority = priority || 0;
              /******/
              for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
              /******/
              deferred[i] = [chunkIds, fn, priority];
              /******/
              return;
              /******/
            }
            /******/
            var notFulfilled = Infinity;
            /******/
            for (var i = 0; i < deferred.length; i++) {
              /******/var _deferred$i = _slicedToArray(deferred[i], 3),
                chunkIds = _deferred$i[0],
                fn = _deferred$i[1],
                priority = _deferred$i[2];
              /******/
              var fulfilled = true;
              /******/
              for (var j = 0; j < chunkIds.length; j++) {
                /******/if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__nested_webpack_require_4866__.O).every(function (key) {
                  return __nested_webpack_require_4866__.O[key](chunkIds[j]);
                })) {
                  /******/chunkIds.splice(j--, 1);
                  /******/
                } else {
                  /******/fulfilled = false;
                  /******/
                  if (priority < notFulfilled) notFulfilled = priority;
                  /******/
                }
                /******/
              }
              /******/
              if (fulfilled) {
                /******/deferred.splice(i--, 1);
                /******/
                var r = fn();
                /******/
                if (r !== undefined) result = r;
                /******/
              }
              /******/
            }
            /******/
            return result;
            /******/
          };
          /******/
        })();
        /******/
        /******/ /* webpack/runtime/hasOwnProperty shorthand */
        /******/
        (function () {
          /******/__nested_webpack_require_4866__.o = function (obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
          };
          /******/
        })();
        /******/
        /******/ /* webpack/runtime/make namespace object */
        /******/
        (function () {
          /******/ // define __esModule on exports
          /******/__nested_webpack_require_4866__.r = function (exports) {
            /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
              /******/Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
              });
              /******/
            }
            /******/
            Object.defineProperty(exports, '__esModule', {
              value: true
            });
            /******/
          };
          /******/
        })();
        /******/
        /******/ /* webpack/runtime/jsonp chunk loading */
        /******/
        (function () {
          /******/ // no baseURI
          /******/
          /******/ // object to store loaded and loading chunks
          /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
          /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
          /******/var installedChunks = {
            /******/"/public/js/gallery_lightbox": 0,
            /******/"public/css/main": 0
            /******/
          };
          /******/
          /******/ // no chunk on demand loading
          /******/
          /******/ // no prefetching
          /******/
          /******/ // no preloaded
          /******/
          /******/ // no HMR
          /******/
          /******/ // no HMR manifest
          /******/
          /******/
          __nested_webpack_require_4866__.O.j = function (chunkId) {
            return installedChunks[chunkId] === 0;
          };
          /******/
          /******/ // install a JSONP callback for chunk loading
          /******/
          var webpackJsonpCallback = function webpackJsonpCallback(parentChunkLoadingFunction, data) {
            /******/var _data = _slicedToArray(data, 3),
              chunkIds = _data[0],
              moreModules = _data[1],
              runtime = _data[2];
            /******/ // add "moreModules" to the modules object,
            /******/ // then flag all "chunkIds" as loaded and fire callback
            /******/
            var moduleId,
              chunkId,
              i = 0;
            /******/
            if (chunkIds.some(function (id) {
              return installedChunks[id] !== 0;
            })) {
              /******/for (moduleId in moreModules) {
                /******/if (__nested_webpack_require_4866__.o(moreModules, moduleId)) {
                  /******/__nested_webpack_require_4866__.m[moduleId] = moreModules[moduleId];
                  /******/
                }
                /******/
              }
              /******/
              if (runtime) var result = runtime(__nested_webpack_require_4866__);
              /******/
            }
            /******/
            if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
            /******/
            for (; i < chunkIds.length; i++) {
              /******/chunkId = chunkIds[i];
              /******/
              if (__nested_webpack_require_4866__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
                /******/installedChunks[chunkId][0]();
                /******/
              }
              /******/
              installedChunks[chunkId] = 0;
              /******/
            }
            /******/
            return __nested_webpack_require_4866__.O(result);
            /******/
          };
          /******/
          /******/
          var chunkLoadingGlobal = self["webpackChunkwebsite_template"] = self["webpackChunkwebsite_template"] || [];
          /******/
          chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
          /******/
          chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
          /******/
        })();
        /******/
        /************************************************************************/
        /******/
        /******/ // startup
        /******/ // Load entry module and return exports
        /******/ // This entry module depends on other loaded chunks and execution need to be delayed
        /******/
        __nested_webpack_require_4866__.O(undefined, ["public/css/main"], function () {
          return __nested_webpack_require_4866__("./public/js/gallery_lightbox.js");
        });
        /******/
        var __nested_webpack_exports__ = __nested_webpack_require_4866__.O(undefined, ["public/css/main"], function () {
          return __nested_webpack_require_4866__("./public/css/main.scss");
        });
        /******/
        __webpack_exports__ = __nested_webpack_require_4866__.O(__nested_webpack_exports__);
        /******/
        /******/
      })();

      /***/
    }),
    /***/"./public/css/main.scss": (
    /*!******************************!*\
      !*** ./public/css/main.scss ***!
      \******************************/
    /***/
    function publicCssMainScss(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_16614__) {
      "use strict";

      __nested_webpack_require_16614__.r(__nested_webpack_exports__);
      // extracted by mini-css-extract-plugin

      /***/
    })

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/
  var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/
  function __nested_webpack_require_17008__(moduleId) {
    /******/ // Check if module is in cache
    /******/var cachedModule = __webpack_module_cache__[moduleId];
    /******/
    if (cachedModule !== undefined) {
      /******/return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = __webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_17008__);
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/
  __nested_webpack_require_17008__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/chunk loaded */
  /******/
  (function () {
    /******/var deferred = [];
    /******/
    __nested_webpack_require_17008__.O = function (result, chunkIds, fn, priority) {
      /******/if (chunkIds) {
        /******/priority = priority || 0;
        /******/
        for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
        /******/
        deferred[i] = [chunkIds, fn, priority];
        /******/
        return;
        /******/
      }
      /******/
      var notFulfilled = Infinity;
      /******/
      for (var i = 0; i < deferred.length; i++) {
        /******/var _deferred$i2 = _slicedToArray2(deferred[i], 3),
          chunkIds = _deferred$i2[0],
          fn = _deferred$i2[1],
          priority = _deferred$i2[2];
        /******/
        var fulfilled = true;
        /******/
        for (var j = 0; j < chunkIds.length; j++) {
          /******/if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__nested_webpack_require_17008__.O).every(function (key) {
            return __nested_webpack_require_17008__.O[key](chunkIds[j]);
          })) {
            /******/chunkIds.splice(j--, 1);
            /******/
          } else {
            /******/fulfilled = false;
            /******/
            if (priority < notFulfilled) notFulfilled = priority;
            /******/
          }
          /******/
        }
        /******/
        if (fulfilled) {
          /******/deferred.splice(i--, 1);
          /******/
          var r = fn();
          /******/
          if (r !== undefined) result = r;
          /******/
        }
        /******/
      }
      /******/
      return result;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  (function () {
    /******/__nested_webpack_require_17008__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/
  (function () {
    /******/ // define __esModule on exports
    /******/__nested_webpack_require_17008__.r = function (exports) {
      /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/
  (function () {
    /******/ // no baseURI
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/var installedChunks = {
      /******/"/public/js/gallery_lightbox": 0,
      /******/"public/css/main": 0
      /******/
    };
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/
    __nested_webpack_require_17008__.O.j = function (chunkId) {
      return installedChunks[chunkId] === 0;
    };
    /******/
    /******/ // install a JSONP callback for chunk loading
    /******/
    var webpackJsonpCallback = function webpackJsonpCallback(parentChunkLoadingFunction, data) {
      /******/var _data2 = _slicedToArray2(data, 3),
        chunkIds = _data2[0],
        moreModules = _data2[1],
        runtime = _data2[2];
      /******/ // add "moreModules" to the modules object,
      /******/ // then flag all "chunkIds" as loaded and fire callback
      /******/
      var moduleId,
        chunkId,
        i = 0;
      /******/
      if (chunkIds.some(function (id) {
        return installedChunks[id] !== 0;
      })) {
        /******/for (moduleId in moreModules) {
          /******/if (__nested_webpack_require_17008__.o(moreModules, moduleId)) {
            /******/__nested_webpack_require_17008__.m[moduleId] = moreModules[moduleId];
            /******/
          }
          /******/
        }
        /******/
        if (runtime) var result = runtime(__nested_webpack_require_17008__);
        /******/
      }
      /******/
      if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
      /******/
      for (; i < chunkIds.length; i++) {
        /******/chunkId = chunkIds[i];
        /******/
        if (__nested_webpack_require_17008__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
          /******/installedChunks[chunkId][0]();
          /******/
        }
        /******/
        installedChunks[chunkId] = 0;
        /******/
      }
      /******/
      return __nested_webpack_require_17008__.O(result);
      /******/
    };
    /******/
    /******/
    var chunkLoadingGlobal = self["webpackChunkwebsite_template"] = self["webpackChunkwebsite_template"] || [];
    /******/
    chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
    /******/
    chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module depends on other loaded chunks and execution need to be delayed
  /******/
  __nested_webpack_require_17008__.O(undefined, ["public/css/main"], function () {
    return __nested_webpack_require_17008__("./public/js/gallery_lightbox.js");
  });
  /******/
  var __nested_webpack_exports__ = __nested_webpack_require_17008__.O(undefined, ["public/css/main"], function () {
    return __nested_webpack_require_17008__("./public/css/main.scss");
  });
  /******/
  __webpack_exports__ = __nested_webpack_require_17008__.O(__nested_webpack_exports__);
  /******/
  /******/
})();

/***/ }),

/***/ "./public/css/main.scss":
/*!******************************!*\
  !*** ./public/css/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/js/gallery_lightbox": 0,
/******/ 			"public/css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebsite_template"] = self["webpackChunkwebsite_template"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["public/css/main"], () => (__webpack_require__("./public/js/gallery_lightbox.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/css/main"], () => (__webpack_require__("./public/css/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;