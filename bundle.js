/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Buttons.js":
/*!***********************************!*\
  !*** ./src/components/Buttons.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Element */ "./src/components/Element.js");


const Buttons = () => {
  const buttonsContainer = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { className: "display-flex-base" });
  const button = (className, innerText) =>
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("button", { className, innerText });

  const sharedClasses = " m-sm";
  const buttonElems = [
    button("btn-primary" + sharedClasses, "btn-primary"),
    button("btn-secondary" + sharedClasses, "btn-secondary"),
    button("btn-error" + sharedClasses, "btn-error"),
    button("btn-info" + sharedClasses, "btn-info"),
    button("btn-green" + sharedClasses, "btn-green"),
    button("btn-purple" + sharedClasses, "btn-purple"),

    button("btn-outline-primary" + sharedClasses, "btn-outline-primary"),
    button("btn-outline-secondary" + sharedClasses, "btn-outline-secondary"),
    button("btn-outline-error" + sharedClasses, "btn-outline-error"),
    button("btn-outline-info" + sharedClasses, "btn-outline-info"),
    button("btn-outline-green" + sharedClasses, "btn-outline-green"),
    button("btn-outline-purple" + sharedClasses, "btn-outline-purple"),

    button("btn-compliment-primary" + sharedClasses, "btn-compliment-primary"),
    button(
      "btn-compliment-secondary" + sharedClasses,
      "btn-compliment-secondary"
    ),
    button("btn-compliment-error" + sharedClasses, "btn-compliment-error"),
    button("btn-compliment-info" + sharedClasses, "btn-compliment-info"),
    button("btn-compliment-green" + sharedClasses, "btn-compliment-green"),
    button("btn-compliment-purple" + sharedClasses, "btn-compliment-purple"),
  ];

  buttonElems.forEach((elem) => buttonsContainer.appendChild(elem));
  return buttonsContainer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Buttons);


/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Element */ "./src/components/Element.js");


const Card = () => {
  const card = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { className: `card` });

  const cardTitle = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("h1", {
    innerText: `This is a card title`,
    className: `card-title`,
  });

  const link = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("a", {
    href: "#",
    innerText: "adipisicing elit",
  }).outerHTML;
  const content = `Lorem ipsum dolor sit amet consectetur ${link}. Recusandae ea similique quos doloremque modi ipsam tempore repellendus facilis dicta quia?`;
  const cardBody = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("p", {
    className: `card-body`,
    innerHTML: content,
  });

  card.appendChild(cardTitle);
  card.appendChild(cardBody);

  return card;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ "./src/components/Colors.js":
/*!**********************************!*\
  !*** ./src/components/Colors.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Element */ "./src/components/Element.js");


const Colors = () => {
  const colors = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {});

  const colorElement = (className, textBlack = false, bgBlack = false) =>
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
      className: `${className} ${textBlack ? " text-black" : ""} ${
        textBlack === "white" ? "text-white" : ""
      } ${bgBlack ? " bg-black" : ""} mb-sm`,
      innerText: className,
    });

  const pipeElement = () =>
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
      className: `text-black inline-block mb-sm  `,
      innerText: "|",
    });

  const textColorElems = [
    colorElement("text-primary"),
    pipeElement(),
    colorElement("text-secondary"),
    pipeElement(),
    colorElement("text-error"),
    pipeElement(),
    colorElement("text-info"),
    pipeElement(),
    colorElement("text-blue"),
    pipeElement(),
    colorElement("text-red"),
    pipeElement(),
    colorElement("text-green"),
    pipeElement(),
    colorElement("text-orange"),
    pipeElement(),
    colorElement("text-purple"),
    pipeElement(),
    colorElement("text-gray"),
    pipeElement(),
    colorElement("text-black"),
    pipeElement(),
    colorElement("text-pink"),
    pipeElement(),
    colorElement("text-white", false, true),
  ];
  const textColorsDiv = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
    className: "display-flex base mb-sm",
  });
  textColorElems.forEach((elem) => textColorsDiv.appendChild(elem));

  const bgColorElems = [
    colorElement("bg-primary"),
    pipeElement(),
    colorElement("bg-secondary"),
    pipeElement(),
    colorElement("bg-error"),
    pipeElement(),
    colorElement("bg-info"),
    pipeElement(),
    colorElement("bg-blue"),
    pipeElement(),
    colorElement("bg-red"),
    pipeElement(),
    colorElement("bg-green"),
    pipeElement(),
    colorElement("bg-orange"),
    pipeElement(),
    colorElement("bg-purple"),
    pipeElement(),
    colorElement("bg-gray"),
    pipeElement(),
    colorElement("bg-black", "white"),
    pipeElement(),
    colorElement("bg-pink"),
    pipeElement(),
    colorElement("bg-white"),
  ];
  const bgColorsDiv = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div");
  bgColorElems.forEach((elem) => bgColorsDiv.appendChild(elem));

  const bgShadingElems = [
    colorElement("bg-primary-dark-1", "white"),
    pipeElement(),
    colorElement("bg-primary-dark-2", "white"),
    pipeElement(),
    colorElement("bg-primary-dark-3", "white"),
    pipeElement(),
    colorElement("bg-primary-dark-4", "white"),
    pipeElement(),
    colorElement("bg-primary-dark-5", "white"),
    pipeElement(),
    colorElement("bg-primary-dark-6", "white"),
    pipeElement(),
    colorElement("bg-primary-dark-7", "white"),
    pipeElement(),
    colorElement("bg-primary-dark-8", "white"),
    pipeElement(),
    colorElement("bg-primary-dark-9", "white"),
    pipeElement(),
    colorElement("bg-primary-light-1"),
    pipeElement(),
    colorElement("bg-primary-light-2"),
    pipeElement(),
    colorElement("bg-primary-light-3"),
    pipeElement(),
    colorElement("bg-primary-light-4"),
    pipeElement(),
    colorElement("bg-primary-light-5"),
    pipeElement(),
    colorElement("bg-primary-light-6"),
    pipeElement(),
    colorElement("bg-primary-light-7"),
    pipeElement(),
    colorElement("bg-primary-light-8"),
    pipeElement(),
    colorElement("bg-primary-light-9"),
  ];
  const bgShadingDiv = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { className: `display-flex-base` });
  bgShadingElems.forEach((elem) => bgShadingDiv.appendChild(elem));

  const sharedClasses = `cursor-pointer`;
  const hoverDivElems = [
    colorElement("text-hover-purple " + sharedClasses),
    pipeElement(),
    colorElement("bg-hover-orange " + sharedClasses),
  ];
  const hoverColorDiv = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { className: `display-flex-base` });
  hoverDivElems.forEach((element) => hoverColorDiv.appendChild(element));

  colors.appendChild(textColorsDiv);
  colors.appendChild(bgColorsDiv);
  colors.appendChild(bgShadingDiv);
  colors.appendChild(hoverColorDiv);
  return colors;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Colors);


/***/ }),

/***/ "./src/components/Content.js":
/*!***********************************!*\
  !*** ./src/components/Content.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Element */ "./src/components/Element.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./src/components/Card.js");
/* harmony import */ var _Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Colors */ "./src/components/Colors.js");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Buttons */ "./src/components/Buttons.js");






const Content = () => {
  const Header = (text) =>
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("h2", {
      innerText: `${text}`,
      className: ``,
    });
  const Hr = () => (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("hr", { className: `bg-black` });
  const Section = (title, contentComponent, useHorizontalRule = true) => {
    const hr = useHorizontalRule ? [Hr()] : [];
    return (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {}, [Header(title), contentComponent, ...hr]);
  };

  const content = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { className: `content` }, [
    Section("Colors", (0,_Colors__WEBPACK_IMPORTED_MODULE_2__["default"])()),
    Section("Cards", (0,_Card__WEBPACK_IMPORTED_MODULE_1__["default"])()),
    Section("Buttons", (0,_Buttons__WEBPACK_IMPORTED_MODULE_3__["default"])(), false),
  ]);
  return content;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);


/***/ }),

/***/ "./src/components/Element.js":
/*!***********************************!*\
  !*** ./src/components/Element.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This Function allows you to create a dom element with its initial attributes and child elements defined by a passed-in object and array of child elements
 * @param {string} typeStr the tag name of the element to be returned you would use in document.createElement()
 * @param {object} propsObj (optional) an object containing the initial properties/attributes you want the element to have
 * @param {array} childArr (optional) an of element objects to be appended as children to this element
 * @returns {Element} the a reference to the element created in memory
 */
const Element = (typeStr, propsObj, childArr = null) => {
  if (childArr && !Array.isArray(childArr)) {
    childArr = [childArr];
  }

  const parentElement = Object.assign(
    document.createElement(typeStr),
    propsObj
  );

  if (childArr) {
    childArr.forEach((child) => parentElement.appendChild(child));
  }

  return parentElement;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Element);


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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Content */ "./src/components/Content.js");




document.body.appendChild((0,_components_Content__WEBPACK_IMPORTED_MODULE_1__["default"])());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7VUN4QnZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjZCOztBQUVjOztBQUUzQywwQkFBMEIsK0RBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz8zOGE1Iiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9Db2xvcnMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9Db250ZW50LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9FbGVtZW50XCI7XG5cbmNvbnN0IEJ1dHRvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImRpc3BsYXktZmxleC1iYXNlXCIgfSk7XG4gIGNvbnN0IGJ1dHRvbiA9IChjbGFzc05hbWUsIGlubmVyVGV4dCkgPT5cbiAgICBFbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3NOYW1lLCBpbm5lclRleHQgfSk7XG5cbiAgY29uc3Qgc2hhcmVkQ2xhc3NlcyA9IFwiIG0tc21cIjtcbiAgY29uc3QgYnV0dG9uRWxlbXMgPSBbXG4gICAgYnV0dG9uKFwiYnRuLXByaW1hcnlcIiArIHNoYXJlZENsYXNzZXMsIFwiYnRuLXByaW1hcnlcIiksXG4gICAgYnV0dG9uKFwiYnRuLXNlY29uZGFyeVwiICsgc2hhcmVkQ2xhc3NlcywgXCJidG4tc2Vjb25kYXJ5XCIpLFxuICAgIGJ1dHRvbihcImJ0bi1lcnJvclwiICsgc2hhcmVkQ2xhc3NlcywgXCJidG4tZXJyb3JcIiksXG4gICAgYnV0dG9uKFwiYnRuLWluZm9cIiArIHNoYXJlZENsYXNzZXMsIFwiYnRuLWluZm9cIiksXG4gICAgYnV0dG9uKFwiYnRuLWdyZWVuXCIgKyBzaGFyZWRDbGFzc2VzLCBcImJ0bi1ncmVlblwiKSxcbiAgICBidXR0b24oXCJidG4tcHVycGxlXCIgKyBzaGFyZWRDbGFzc2VzLCBcImJ0bi1wdXJwbGVcIiksXG5cbiAgICBidXR0b24oXCJidG4tb3V0bGluZS1wcmltYXJ5XCIgKyBzaGFyZWRDbGFzc2VzLCBcImJ0bi1vdXRsaW5lLXByaW1hcnlcIiksXG4gICAgYnV0dG9uKFwiYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIgKyBzaGFyZWRDbGFzc2VzLCBcImJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiKSxcbiAgICBidXR0b24oXCJidG4tb3V0bGluZS1lcnJvclwiICsgc2hhcmVkQ2xhc3NlcywgXCJidG4tb3V0bGluZS1lcnJvclwiKSxcbiAgICBidXR0b24oXCJidG4tb3V0bGluZS1pbmZvXCIgKyBzaGFyZWRDbGFzc2VzLCBcImJ0bi1vdXRsaW5lLWluZm9cIiksXG4gICAgYnV0dG9uKFwiYnRuLW91dGxpbmUtZ3JlZW5cIiArIHNoYXJlZENsYXNzZXMsIFwiYnRuLW91dGxpbmUtZ3JlZW5cIiksXG4gICAgYnV0dG9uKFwiYnRuLW91dGxpbmUtcHVycGxlXCIgKyBzaGFyZWRDbGFzc2VzLCBcImJ0bi1vdXRsaW5lLXB1cnBsZVwiKSxcblxuICAgIGJ1dHRvbihcImJ0bi1jb21wbGltZW50LXByaW1hcnlcIiArIHNoYXJlZENsYXNzZXMsIFwiYnRuLWNvbXBsaW1lbnQtcHJpbWFyeVwiKSxcbiAgICBidXR0b24oXG4gICAgICBcImJ0bi1jb21wbGltZW50LXNlY29uZGFyeVwiICsgc2hhcmVkQ2xhc3NlcyxcbiAgICAgIFwiYnRuLWNvbXBsaW1lbnQtc2Vjb25kYXJ5XCJcbiAgICApLFxuICAgIGJ1dHRvbihcImJ0bi1jb21wbGltZW50LWVycm9yXCIgKyBzaGFyZWRDbGFzc2VzLCBcImJ0bi1jb21wbGltZW50LWVycm9yXCIpLFxuICAgIGJ1dHRvbihcImJ0bi1jb21wbGltZW50LWluZm9cIiArIHNoYXJlZENsYXNzZXMsIFwiYnRuLWNvbXBsaW1lbnQtaW5mb1wiKSxcbiAgICBidXR0b24oXCJidG4tY29tcGxpbWVudC1ncmVlblwiICsgc2hhcmVkQ2xhc3NlcywgXCJidG4tY29tcGxpbWVudC1ncmVlblwiKSxcbiAgICBidXR0b24oXCJidG4tY29tcGxpbWVudC1wdXJwbGVcIiArIHNoYXJlZENsYXNzZXMsIFwiYnRuLWNvbXBsaW1lbnQtcHVycGxlXCIpLFxuICBdO1xuXG4gIGJ1dHRvbkVsZW1zLmZvckVhY2goKGVsZW0pID0+IGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbSkpO1xuICByZXR1cm4gYnV0dG9uc0NvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbnM7XG4iLCJpbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9FbGVtZW50XCI7XG5cbmNvbnN0IENhcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcmQgPSBFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBgY2FyZGAgfSk7XG5cbiAgY29uc3QgY2FyZFRpdGxlID0gRWxlbWVudChcImgxXCIsIHtcbiAgICBpbm5lclRleHQ6IGBUaGlzIGlzIGEgY2FyZCB0aXRsZWAsXG4gICAgY2xhc3NOYW1lOiBgY2FyZC10aXRsZWAsXG4gIH0pO1xuXG4gIGNvbnN0IGxpbmsgPSBFbGVtZW50KFwiYVwiLCB7XG4gICAgaHJlZjogXCIjXCIsXG4gICAgaW5uZXJUZXh0OiBcImFkaXBpc2ljaW5nIGVsaXRcIixcbiAgfSkub3V0ZXJIVE1MO1xuICBjb25zdCBjb250ZW50ID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyICR7bGlua30uIFJlY3VzYW5kYWUgZWEgc2ltaWxpcXVlIHF1b3MgZG9sb3JlbXF1ZSBtb2RpIGlwc2FtIHRlbXBvcmUgcmVwZWxsZW5kdXMgZmFjaWxpcyBkaWN0YSBxdWlhP2A7XG4gIGNvbnN0IGNhcmRCb2R5ID0gRWxlbWVudChcInBcIiwge1xuICAgIGNsYXNzTmFtZTogYGNhcmQtYm9keWAsXG4gICAgaW5uZXJIVE1MOiBjb250ZW50LFxuICB9KTtcblxuICBjYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZEJvZHkpO1xuXG4gIHJldHVybiBjYXJkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImltcG9ydCBFbGVtZW50IGZyb20gXCIuL0VsZW1lbnRcIjtcblxuY29uc3QgQ29sb3JzID0gKCkgPT4ge1xuICBjb25zdCBjb2xvcnMgPSBFbGVtZW50KFwiZGl2XCIsIHt9KTtcblxuICBjb25zdCBjb2xvckVsZW1lbnQgPSAoY2xhc3NOYW1lLCB0ZXh0QmxhY2sgPSBmYWxzZSwgYmdCbGFjayA9IGZhbHNlKSA9PlxuICAgIEVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NOYW1lfSAke3RleHRCbGFjayA/IFwiIHRleHQtYmxhY2tcIiA6IFwiXCJ9ICR7XG4gICAgICAgIHRleHRCbGFjayA9PT0gXCJ3aGl0ZVwiID8gXCJ0ZXh0LXdoaXRlXCIgOiBcIlwiXG4gICAgICB9ICR7YmdCbGFjayA/IFwiIGJnLWJsYWNrXCIgOiBcIlwifSBtYi1zbWAsXG4gICAgICBpbm5lclRleHQ6IGNsYXNzTmFtZSxcbiAgICB9KTtcblxuICBjb25zdCBwaXBlRWxlbWVudCA9ICgpID0+XG4gICAgRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IGB0ZXh0LWJsYWNrIGlubGluZS1ibG9jayBtYi1zbSAgYCxcbiAgICAgIGlubmVyVGV4dDogXCJ8XCIsXG4gICAgfSk7XG5cbiAgY29uc3QgdGV4dENvbG9yRWxlbXMgPSBbXG4gICAgY29sb3JFbGVtZW50KFwidGV4dC1wcmltYXJ5XCIpLFxuICAgIHBpcGVFbGVtZW50KCksXG4gICAgY29sb3JFbGVtZW50KFwidGV4dC1zZWNvbmRhcnlcIiksXG4gICAgcGlwZUVsZW1lbnQoKSxcbiAgICBjb2xvckVsZW1lbnQoXCJ0ZXh0LWVycm9yXCIpLFxuICAgIHBpcGVFbGVtZW50KCksXG4gICAgY29sb3JFbGVtZW50KFwidGV4dC1pbmZvXCIpLFxuICAgIHBpcGVFbGVtZW50KCksXG4gICAgY29sb3JFbGVtZW50KFwidGV4dC1ibHVlXCIpLFxuICAgIHBpcGVFbGVtZW50KCksXG4gICAgY29sb3JFbGVtZW50KFwidGV4dC1yZWRcIiksXG4gICAgcGlwZUVsZW1lbnQoKSxcbiAgICBjb2xvckVsZW1lbnQoXCJ0ZXh0LWdyZWVuXCIpLFxuICAgIHBpcGVFbGVtZW50KCksXG4gICAgY29sb3JFbGVtZW50KFwidGV4dC1vcmFuZ2VcIiksXG4gICAgcGlwZUVsZW1lbnQoKSxcbiAgICBjb2xvckVsZW1lbnQoXCJ0ZXh0LXB1cnBsZVwiKSxcbiAgICBwaXBlRWxlbWVudCgpLFxuICAgIGNvbG9yRWxlbWVudChcInRleHQtZ3JheVwiKSxcbiAgICBwaXBlRWxlbWVudCgpLFxuICAgIGNvbG9yRWxlbWVudChcInRleHQtYmxhY2tcIiksXG4gICAgcGlwZUVsZW1lbnQoKSxcbiAgICBjb2xvckVsZW1lbnQoXCJ0ZXh0LXBpbmtcIiksXG4gICAgcGlwZUVsZW1lbnQoKSxcbiAgICBjb2xvckVsZW1lbnQoXCJ0ZXh0LXdoaXRlXCIsIGZhbHNlLCB0cnVlKSxcbiAgXTtcbiAgY29uc3QgdGV4dENvbG9yc0RpdiA9IEVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJkaXNwbGF5LWZsZXggYmFzZSBtYi1zbVwiLFxuICB9KTtcbiAgdGV4dENvbG9yRWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4gdGV4dENvbG9yc0Rpdi5hcHBlbmRDaGlsZChlbGVtKSk7XG5cbiAgY29uc3QgYmdDb2xvckVsZW1zID0gW1xuICAgIGNvbG9yRWxlbWVudChcImJnLXByaW1hcnlcIiksXG4gICAgcGlwZUVsZW1lbnQoKSxcbiAgICBjb2xvckVsZW1lbnQoXCJiZy1zZWNvbmRhcnlcIiksXG4gICAgcGlwZUVsZW1lbnQoKSxcbiAgICBjb2xvckVsZW1lbnQoXCJiZy1lcnJvclwiKSxcbiAgICBwaXBlRWxlbWVudCgpLFxuICAgIGNvbG9yRWxlbWVudChcImJnLWluZm9cIiksXG4gICAgcGlwZUVsZW1lbnQoKSxcbiAgICBjb2xvckVsZW1lbnQoXCJiZy1ibHVlXCIpLFxuICAgIHBpcGVFbGVtZW50KCksXG4gICAgY29sb3JFbGVtZW50KFwiYmctcmVkXCIpLFxuICAgIHBpcGVFbGVtZW50KCksXG4gICAgY29sb3JFbGVtZW50KFwiYmctZ3JlZW5cIiksXG4gICAgcGlwZUVsZW1lbnQoKSxcbiAgICBjb2xvckVsZW1lbnQoXCJiZy1vcmFuZ2VcIiksXG4gICAgcGlwZUVsZW1lbnQoKSxcbiAgICBjb2xvckVsZW1lbnQoXCJiZy1wdXJwbGVcIiksXG4gICAgcGlwZUVsZW1lbnQoKSxcbiAgICBjb2xvckVsZW1lbnQoXCJiZy1ncmF5XCIpLFxuICAgIHBpcGVFbGVtZW50KCksXG4gICAgY29sb3JFbGVtZW50KFwiYmctYmxhY2tcIiwgXCJ3aGl0ZVwiKSxcbiAgICBwaXBlRWxlbWVudCgpLFxuICAgIGNvbG9yRWxlbWVudChcImJnLXBpbmtcIiksXG4gICAgcGlwZUVsZW1lbnQoKSxcbiAgICBjb2xvckVsZW1lbnQoXCJiZy13aGl0ZVwiKSxcbiAgXTtcbiAgY29uc3QgYmdDb2xvcnNEaXYgPSBFbGVtZW50KFwiZGl2XCIpO1xuICBiZ0NvbG9yRWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4gYmdDb2xvcnNEaXYuYXBwZW5kQ2hpbGQoZWxlbSkpO1xuXG4gIGNvbnN0IGJnU2hhZGluZ0VsZW1zID0gW1xuICAgIGNvbG9yRWxlbWVudChcImJnLXByaW1hcnktZGFyay0xXCIsIFwid2hpdGVcIiksXG4gICAgcGlwZUVsZW1lbnQoKSxcbiAgICBjb2xvckVsZW1lbnQoXCJiZy1wcmltYXJ5LWRhcmstMlwiLCBcIndoaXRlXCIpLFxuICAgIHBpcGVFbGVtZW50KCksXG4gICAgY29sb3JFbGVtZW50KFwiYmctcHJpbWFyeS1kYXJrLTNcIiwgXCJ3aGl0ZVwiKSxcbiAgICBwaXBlRWxlbWVudCgpLFxuICAgIGNvbG9yRWxlbWVudChcImJnLXByaW1hcnktZGFyay00XCIsIFwid2hpdGVcIiksXG4gICAgcGlwZUVsZW1lbnQoKSxcbiAgICBjb2xvckVsZW1lbnQoXCJiZy1wcmltYXJ5LWRhcmstNVwiLCBcIndoaXRlXCIpLFxuICAgIHBpcGVFbGVtZW50KCksXG4gICAgY29sb3JFbGVtZW50KFwiYmctcHJpbWFyeS1kYXJrLTZcIiwgXCJ3aGl0ZVwiKSxcbiAgICBwaXBlRWxlbWVudCgpLFxuICAgIGNvbG9yRWxlbWVudChcImJnLXByaW1hcnktZGFyay03XCIsIFwid2hpdGVcIiksXG4gICAgcGlwZUVsZW1lbnQoKSxcbiAgICBjb2xvckVsZW1lbnQoXCJiZy1wcmltYXJ5LWRhcmstOFwiLCBcIndoaXRlXCIpLFxuICAgIHBpcGVFbGVtZW50KCksXG4gICAgY29sb3JFbGVtZW50KFwiYmctcHJpbWFyeS1kYXJrLTlcIiwgXCJ3aGl0ZVwiKSxcbiAgICBwaXBlRWxlbWVudCgpLFxuICAgIGNvbG9yRWxlbWVudChcImJnLXByaW1hcnktbGlnaHQtMVwiKSxcbiAgICBwaXBlRWxlbWVudCgpLFxuICAgIGNvbG9yRWxlbWVudChcImJnLXByaW1hcnktbGlnaHQtMlwiKSxcbiAgICBwaXBlRWxlbWVudCgpLFxuICAgIGNvbG9yRWxlbWVudChcImJnLXByaW1hcnktbGlnaHQtM1wiKSxcbiAgICBwaXBlRWxlbWVudCgpLFxuICAgIGNvbG9yRWxlbWVudChcImJnLXByaW1hcnktbGlnaHQtNFwiKSxcbiAgICBwaXBlRWxlbWVudCgpLFxuICAgIGNvbG9yRWxlbWVudChcImJnLXByaW1hcnktbGlnaHQtNVwiKSxcbiAgICBwaXBlRWxlbWVudCgpLFxuICAgIGNvbG9yRWxlbWVudChcImJnLXByaW1hcnktbGlnaHQtNlwiKSxcbiAgICBwaXBlRWxlbWVudCgpLFxuICAgIGNvbG9yRWxlbWVudChcImJnLXByaW1hcnktbGlnaHQtN1wiKSxcbiAgICBwaXBlRWxlbWVudCgpLFxuICAgIGNvbG9yRWxlbWVudChcImJnLXByaW1hcnktbGlnaHQtOFwiKSxcbiAgICBwaXBlRWxlbWVudCgpLFxuICAgIGNvbG9yRWxlbWVudChcImJnLXByaW1hcnktbGlnaHQtOVwiKSxcbiAgXTtcbiAgY29uc3QgYmdTaGFkaW5nRGl2ID0gRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYGRpc3BsYXktZmxleC1iYXNlYCB9KTtcbiAgYmdTaGFkaW5nRWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4gYmdTaGFkaW5nRGl2LmFwcGVuZENoaWxkKGVsZW0pKTtcblxuICBjb25zdCBzaGFyZWRDbGFzc2VzID0gYGN1cnNvci1wb2ludGVyYDtcbiAgY29uc3QgaG92ZXJEaXZFbGVtcyA9IFtcbiAgICBjb2xvckVsZW1lbnQoXCJ0ZXh0LWhvdmVyLXB1cnBsZSBcIiArIHNoYXJlZENsYXNzZXMpLFxuICAgIHBpcGVFbGVtZW50KCksXG4gICAgY29sb3JFbGVtZW50KFwiYmctaG92ZXItb3JhbmdlIFwiICsgc2hhcmVkQ2xhc3NlcyksXG4gIF07XG4gIGNvbnN0IGhvdmVyQ29sb3JEaXYgPSBFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBgZGlzcGxheS1mbGV4LWJhc2VgIH0pO1xuICBob3ZlckRpdkVsZW1zLmZvckVhY2goKGVsZW1lbnQpID0+IGhvdmVyQ29sb3JEaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCkpO1xuXG4gIGNvbG9ycy5hcHBlbmRDaGlsZCh0ZXh0Q29sb3JzRGl2KTtcbiAgY29sb3JzLmFwcGVuZENoaWxkKGJnQ29sb3JzRGl2KTtcbiAgY29sb3JzLmFwcGVuZENoaWxkKGJnU2hhZGluZ0Rpdik7XG4gIGNvbG9ycy5hcHBlbmRDaGlsZChob3ZlckNvbG9yRGl2KTtcbiAgcmV0dXJuIGNvbG9ycztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbG9ycztcbiIsImltcG9ydCBFbGVtZW50IGZyb20gXCIuL0VsZW1lbnRcIjtcblxuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xuaW1wb3J0IENvbG9ycyBmcm9tIFwiLi9Db2xvcnNcIjtcbmltcG9ydCBCdXR0b25zIGZyb20gXCIuL0J1dHRvbnNcIjtcblxuY29uc3QgQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgSGVhZGVyID0gKHRleHQpID0+XG4gICAgRWxlbWVudChcImgyXCIsIHtcbiAgICAgIGlubmVyVGV4dDogYCR7dGV4dH1gLFxuICAgICAgY2xhc3NOYW1lOiBgYCxcbiAgICB9KTtcbiAgY29uc3QgSHIgPSAoKSA9PiBFbGVtZW50KFwiaHJcIiwgeyBjbGFzc05hbWU6IGBiZy1ibGFja2AgfSk7XG4gIGNvbnN0IFNlY3Rpb24gPSAodGl0bGUsIGNvbnRlbnRDb21wb25lbnQsIHVzZUhvcml6b250YWxSdWxlID0gdHJ1ZSkgPT4ge1xuICAgIGNvbnN0IGhyID0gdXNlSG9yaXpvbnRhbFJ1bGUgPyBbSHIoKV0gOiBbXTtcbiAgICByZXR1cm4gRWxlbWVudChcImRpdlwiLCB7fSwgW0hlYWRlcih0aXRsZSksIGNvbnRlbnRDb21wb25lbnQsIC4uLmhyXSk7XG4gIH07XG5cbiAgY29uc3QgY29udGVudCA9IEVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGBjb250ZW50YCB9LCBbXG4gICAgU2VjdGlvbihcIkNvbG9yc1wiLCBDb2xvcnMoKSksXG4gICAgU2VjdGlvbihcIkNhcmRzXCIsIENhcmQoKSksXG4gICAgU2VjdGlvbihcIkJ1dHRvbnNcIiwgQnV0dG9ucygpLCBmYWxzZSksXG4gIF0pO1xuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG4iLCIvKipcbiAqIFRoaXMgRnVuY3Rpb24gYWxsb3dzIHlvdSB0byBjcmVhdGUgYSBkb20gZWxlbWVudCB3aXRoIGl0cyBpbml0aWFsIGF0dHJpYnV0ZXMgYW5kIGNoaWxkIGVsZW1lbnRzIGRlZmluZWQgYnkgYSBwYXNzZWQtaW4gb2JqZWN0IGFuZCBhcnJheSBvZiBjaGlsZCBlbGVtZW50c1xuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVTdHIgdGhlIHRhZyBuYW1lIG9mIHRoZSBlbGVtZW50IHRvIGJlIHJldHVybmVkIHlvdSB3b3VsZCB1c2UgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgpXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNPYmogKG9wdGlvbmFsKSBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgaW5pdGlhbCBwcm9wZXJ0aWVzL2F0dHJpYnV0ZXMgeW91IHdhbnQgdGhlIGVsZW1lbnQgdG8gaGF2ZVxuICogQHBhcmFtIHthcnJheX0gY2hpbGRBcnIgKG9wdGlvbmFsKSBhbiBvZiBlbGVtZW50IG9iamVjdHMgdG8gYmUgYXBwZW5kZWQgYXMgY2hpbGRyZW4gdG8gdGhpcyBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gdGhlIGEgcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IGNyZWF0ZWQgaW4gbWVtb3J5XG4gKi9cbmNvbnN0IEVsZW1lbnQgPSAodHlwZVN0ciwgcHJvcHNPYmosIGNoaWxkQXJyID0gbnVsbCkgPT4ge1xuICBpZiAoY2hpbGRBcnIgJiYgIUFycmF5LmlzQXJyYXkoY2hpbGRBcnIpKSB7XG4gICAgY2hpbGRBcnIgPSBbY2hpbGRBcnJdO1xuICB9XG5cbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IE9iamVjdC5hc3NpZ24oXG4gICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlU3RyKSxcbiAgICBwcm9wc09ialxuICApO1xuXG4gIGlmIChjaGlsZEFycikge1xuICAgIGNoaWxkQXJyLmZvckVhY2goKGNoaWxkKSA9PiBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG4gIH1cblxuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Db250ZW50XCI7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoQ29udGVudCgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==