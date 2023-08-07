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

  const textColors = [
    "primary",
    "secondary",
    "error",
    "info",
    "blue",
    "red",
    "yellow",
    "green",
    "orange",
    "purple",
    "gray",
    "black",
    "pink",
    "white",
  ];

  const lastItemIndex = textColors.length - 1;

  const textColorsDiv = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div");
  textColors.forEach((color, index) => {
    const colorClass = "text-" + color;
    const element = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])(
      "span",
      {
        className: [
          `${colorClass} ${index === lastItemIndex ? "bg-black" : ""}`,
        ],
        innerText: " " + color + " text" + " ",
      },
      [
        (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
          innerText: `${index === lastItemIndex ? "" : "|"}`,
          className: `text-black inline-block mb-sm  `,
        }),
      ]
    );
    element.classList.add(`text-${color}`);
    textColorsDiv.appendChild(element);
  });

  const bgColorsDiv = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { className: `display-flex-base` });
  textColors.forEach((color, index) => {
    bgColorsDiv.appendChild(
      (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
        className: `bg-${color} text-nowrap mb-sm p-xs ${
          index === lastItemIndex ? "text-black" : "text-white"
        }`,
        innerText: " " + "bg-" + color + " ",
      })
    );
    bgColorsDiv.appendChild(
      (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
        innerText: `${index === lastItemIndex ? "" : "|"}`,
        className: `text-black inline-block p-xs`,
      })
    );
  });

  const bgShadingDivDark = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { className: `display-flex-base` });
  for (let i = 1; i <= 9; i++) {
    bgShadingDivDark.appendChild(
      (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
        className: `bg-primary-dark-${i} text-nowrap mb-sm p-xs text-white`,
        innerText: `primary dark ${i}`,
      })
    );
    bgShadingDivDark.appendChild(
      (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
        innerText: `${i === 9 ? "" : "|"}`,
        className: `text-black inline-block p-xs`,
      })
    );
  }

  const bgShadingDivLight = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { className: `display-flex-base` });
  for (let i = 1; i <= 9; i++) {
    bgShadingDivLight.appendChild(
      (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
        className: `bg-primary-light-${i} text-nowrap mb-sm p-xs text-black`,
        innerText: `primary light ${i}`,
      })
    );
    bgShadingDivLight.appendChild(
      (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
        innerText: `${i === 9 ? "" : "|"}`,
        className: `text-black inline-block p-xs`,
      })
    );
  }

  const hoverColorDiv = (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { className: `display-flex-base` });
  const hoverColorElem = (className, innerText) =>
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { className, innerText });
  const pipeChar = () =>
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
      className: `text-black inline-block p-xs`,
      innerText: "|",
    });

  const sharedClasses = "cursor-pointer mb-sm p-xs";
  const hoverColorDivs = [
    hoverColorElem("text-hover-purple " + sharedClasses, "text-hover-purple"),
    pipeChar(),
    hoverColorElem("bg-hover-orange " + sharedClasses, "bg-hover-orange"),
  ];

  hoverColorDivs.forEach((element) => hoverColorDiv.appendChild(element));

  colors.appendChild(textColorsDiv);
  colors.appendChild(bgColorsDiv);
  colors.appendChild(bgShadingDivDark);
  colors.appendChild(bgShadingDivLight);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLFdBQVcsb0RBQU8sVUFBVTtBQUM1Qjs7QUFFQSxrQkFBa0Isb0RBQU8sVUFBVSxzQkFBc0I7QUFDekQsc0JBQXNCLG1EQUFNO0FBQzVCLHFCQUFxQixpREFBSTtBQUN6Qix1QkFBdUIsb0RBQU87QUFDOUI7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJ2QjtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLE9BQU87QUFDbEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7O1VDeEJ2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ042Qjs7QUFFYzs7QUFFM0MsMEJBQTBCLCtEQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/MzhhNSIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQ29sb3JzLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQ29udGVudC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vRWxlbWVudFwiO1xuXG5jb25zdCBCdXR0b25zID0gKCkgPT4ge1xuICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJkaXNwbGF5LWZsZXgtYmFzZVwiIH0pO1xuICBjb25zdCBidXR0b24gPSAoY2xhc3NOYW1lLCBpbm5lclRleHQpID0+XG4gICAgRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzTmFtZSwgaW5uZXJUZXh0IH0pO1xuXG4gIGNvbnN0IHNoYXJlZENsYXNzZXMgPSBcIiBtLXNtXCI7XG4gIGNvbnN0IGJ1dHRvbkVsZW1zID0gW1xuICAgIGJ1dHRvbihcImJ0bi1wcmltYXJ5XCIgKyBzaGFyZWRDbGFzc2VzLCBcImJ0bi1wcmltYXJ5XCIpLFxuICAgIGJ1dHRvbihcImJ0bi1zZWNvbmRhcnlcIiArIHNoYXJlZENsYXNzZXMsIFwiYnRuLXNlY29uZGFyeVwiKSxcbiAgICBidXR0b24oXCJidG4tZXJyb3JcIiArIHNoYXJlZENsYXNzZXMsIFwiYnRuLWVycm9yXCIpLFxuICAgIGJ1dHRvbihcImJ0bi1pbmZvXCIgKyBzaGFyZWRDbGFzc2VzLCBcImJ0bi1pbmZvXCIpLFxuICAgIGJ1dHRvbihcImJ0bi1ncmVlblwiICsgc2hhcmVkQ2xhc3NlcywgXCJidG4tZ3JlZW5cIiksXG4gICAgYnV0dG9uKFwiYnRuLXB1cnBsZVwiICsgc2hhcmVkQ2xhc3NlcywgXCJidG4tcHVycGxlXCIpLFxuXG4gICAgYnV0dG9uKFwiYnRuLW91dGxpbmUtcHJpbWFyeVwiICsgc2hhcmVkQ2xhc3NlcywgXCJidG4tb3V0bGluZS1wcmltYXJ5XCIpLFxuICAgIGJ1dHRvbihcImJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiICsgc2hhcmVkQ2xhc3NlcywgXCJidG4tb3V0bGluZS1zZWNvbmRhcnlcIiksXG4gICAgYnV0dG9uKFwiYnRuLW91dGxpbmUtZXJyb3JcIiArIHNoYXJlZENsYXNzZXMsIFwiYnRuLW91dGxpbmUtZXJyb3JcIiksXG4gICAgYnV0dG9uKFwiYnRuLW91dGxpbmUtaW5mb1wiICsgc2hhcmVkQ2xhc3NlcywgXCJidG4tb3V0bGluZS1pbmZvXCIpLFxuICAgIGJ1dHRvbihcImJ0bi1vdXRsaW5lLWdyZWVuXCIgKyBzaGFyZWRDbGFzc2VzLCBcImJ0bi1vdXRsaW5lLWdyZWVuXCIpLFxuICAgIGJ1dHRvbihcImJ0bi1vdXRsaW5lLXB1cnBsZVwiICsgc2hhcmVkQ2xhc3NlcywgXCJidG4tb3V0bGluZS1wdXJwbGVcIiksXG5cbiAgICBidXR0b24oXCJidG4tY29tcGxpbWVudC1wcmltYXJ5XCIgKyBzaGFyZWRDbGFzc2VzLCBcImJ0bi1jb21wbGltZW50LXByaW1hcnlcIiksXG4gICAgYnV0dG9uKFxuICAgICAgXCJidG4tY29tcGxpbWVudC1zZWNvbmRhcnlcIiArIHNoYXJlZENsYXNzZXMsXG4gICAgICBcImJ0bi1jb21wbGltZW50LXNlY29uZGFyeVwiXG4gICAgKSxcbiAgICBidXR0b24oXCJidG4tY29tcGxpbWVudC1lcnJvclwiICsgc2hhcmVkQ2xhc3NlcywgXCJidG4tY29tcGxpbWVudC1lcnJvclwiKSxcbiAgICBidXR0b24oXCJidG4tY29tcGxpbWVudC1pbmZvXCIgKyBzaGFyZWRDbGFzc2VzLCBcImJ0bi1jb21wbGltZW50LWluZm9cIiksXG4gICAgYnV0dG9uKFwiYnRuLWNvbXBsaW1lbnQtZ3JlZW5cIiArIHNoYXJlZENsYXNzZXMsIFwiYnRuLWNvbXBsaW1lbnQtZ3JlZW5cIiksXG4gICAgYnV0dG9uKFwiYnRuLWNvbXBsaW1lbnQtcHVycGxlXCIgKyBzaGFyZWRDbGFzc2VzLCBcImJ0bi1jb21wbGltZW50LXB1cnBsZVwiKSxcbiAgXTtcblxuICBidXR0b25FbGVtcy5mb3JFYWNoKChlbGVtKSA9PiBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW0pKTtcbiAgcmV0dXJuIGJ1dHRvbnNDb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25zO1xuIiwiaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vRWxlbWVudFwiO1xuXG5jb25zdCBDYXJkID0gKCkgPT4ge1xuICBjb25zdCBjYXJkID0gRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYGNhcmRgIH0pO1xuXG4gIGNvbnN0IGNhcmRUaXRsZSA9IEVsZW1lbnQoXCJoMVwiLCB7XG4gICAgaW5uZXJUZXh0OiBgVGhpcyBpcyBhIGNhcmQgdGl0bGVgLFxuICAgIGNsYXNzTmFtZTogYGNhcmQtdGl0bGVgLFxuICB9KTtcblxuICBjb25zdCBsaW5rID0gRWxlbWVudChcImFcIiwge1xuICAgIGhyZWY6IFwiI1wiLFxuICAgIGlubmVyVGV4dDogXCJhZGlwaXNpY2luZyBlbGl0XCIsXG4gIH0pLm91dGVySFRNTDtcbiAgY29uc3QgY29udGVudCA9IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciAke2xpbmt9LiBSZWN1c2FuZGFlIGVhIHNpbWlsaXF1ZSBxdW9zIGRvbG9yZW1xdWUgbW9kaSBpcHNhbSB0ZW1wb3JlIHJlcGVsbGVuZHVzIGZhY2lsaXMgZGljdGEgcXVpYT9gO1xuICBjb25zdCBjYXJkQm9keSA9IEVsZW1lbnQoXCJwXCIsIHtcbiAgICBjbGFzc05hbWU6IGBjYXJkLWJvZHlgLFxuICAgIGlubmVySFRNTDogY29udGVudCxcbiAgfSk7XG5cbiAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xuICBjYXJkLmFwcGVuZENoaWxkKGNhcmRCb2R5KTtcblxuICByZXR1cm4gY2FyZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJpbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9FbGVtZW50XCI7XG5cbmNvbnN0IENvbG9ycyA9ICgpID0+IHtcbiAgY29uc3QgY29sb3JzID0gRWxlbWVudChcImRpdlwiLCB7fSk7XG5cbiAgY29uc3QgdGV4dENvbG9ycyA9IFtcbiAgICBcInByaW1hcnlcIixcbiAgICBcInNlY29uZGFyeVwiLFxuICAgIFwiZXJyb3JcIixcbiAgICBcImluZm9cIixcbiAgICBcImJsdWVcIixcbiAgICBcInJlZFwiLFxuICAgIFwieWVsbG93XCIsXG4gICAgXCJncmVlblwiLFxuICAgIFwib3JhbmdlXCIsXG4gICAgXCJwdXJwbGVcIixcbiAgICBcImdyYXlcIixcbiAgICBcImJsYWNrXCIsXG4gICAgXCJwaW5rXCIsXG4gICAgXCJ3aGl0ZVwiLFxuICBdO1xuXG4gIGNvbnN0IGxhc3RJdGVtSW5kZXggPSB0ZXh0Q29sb3JzLmxlbmd0aCAtIDE7XG5cbiAgY29uc3QgdGV4dENvbG9yc0RpdiA9IEVsZW1lbnQoXCJkaXZcIik7XG4gIHRleHRDb2xvcnMuZm9yRWFjaCgoY29sb3IsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgY29sb3JDbGFzcyA9IFwidGV4dC1cIiArIGNvbG9yO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBFbGVtZW50KFxuICAgICAgXCJzcGFuXCIsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogW1xuICAgICAgICAgIGAke2NvbG9yQ2xhc3N9ICR7aW5kZXggPT09IGxhc3RJdGVtSW5kZXggPyBcImJnLWJsYWNrXCIgOiBcIlwifWAsXG4gICAgICAgIF0sXG4gICAgICAgIGlubmVyVGV4dDogXCIgXCIgKyBjb2xvciArIFwiIHRleHRcIiArIFwiIFwiLFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgaW5uZXJUZXh0OiBgJHtpbmRleCA9PT0gbGFzdEl0ZW1JbmRleCA/IFwiXCIgOiBcInxcIn1gLFxuICAgICAgICAgIGNsYXNzTmFtZTogYHRleHQtYmxhY2sgaW5saW5lLWJsb2NrIG1iLXNtICBgLFxuICAgICAgICB9KSxcbiAgICAgIF1cbiAgICApO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgdGV4dC0ke2NvbG9yfWApO1xuICAgIHRleHRDb2xvcnNEaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH0pO1xuXG4gIGNvbnN0IGJnQ29sb3JzRGl2ID0gRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYGRpc3BsYXktZmxleC1iYXNlYCB9KTtcbiAgdGV4dENvbG9ycy5mb3JFYWNoKChjb2xvciwgaW5kZXgpID0+IHtcbiAgICBiZ0NvbG9yc0Rpdi5hcHBlbmRDaGlsZChcbiAgICAgIEVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBgYmctJHtjb2xvcn0gdGV4dC1ub3dyYXAgbWItc20gcC14cyAke1xuICAgICAgICAgIGluZGV4ID09PSBsYXN0SXRlbUluZGV4ID8gXCJ0ZXh0LWJsYWNrXCIgOiBcInRleHQtd2hpdGVcIlxuICAgICAgICB9YCxcbiAgICAgICAgaW5uZXJUZXh0OiBcIiBcIiArIFwiYmctXCIgKyBjb2xvciArIFwiIFwiLFxuICAgICAgfSlcbiAgICApO1xuICAgIGJnQ29sb3JzRGl2LmFwcGVuZENoaWxkKFxuICAgICAgRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGlubmVyVGV4dDogYCR7aW5kZXggPT09IGxhc3RJdGVtSW5kZXggPyBcIlwiIDogXCJ8XCJ9YCxcbiAgICAgICAgY2xhc3NOYW1lOiBgdGV4dC1ibGFjayBpbmxpbmUtYmxvY2sgcC14c2AsXG4gICAgICB9KVxuICAgICk7XG4gIH0pO1xuXG4gIGNvbnN0IGJnU2hhZGluZ0RpdkRhcmsgPSBFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBgZGlzcGxheS1mbGV4LWJhc2VgIH0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSA5OyBpKyspIHtcbiAgICBiZ1NoYWRpbmdEaXZEYXJrLmFwcGVuZENoaWxkKFxuICAgICAgRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IGBiZy1wcmltYXJ5LWRhcmstJHtpfSB0ZXh0LW5vd3JhcCBtYi1zbSBwLXhzIHRleHQtd2hpdGVgLFxuICAgICAgICBpbm5lclRleHQ6IGBwcmltYXJ5IGRhcmsgJHtpfWAsXG4gICAgICB9KVxuICAgICk7XG4gICAgYmdTaGFkaW5nRGl2RGFyay5hcHBlbmRDaGlsZChcbiAgICAgIEVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBpbm5lclRleHQ6IGAke2kgPT09IDkgPyBcIlwiIDogXCJ8XCJ9YCxcbiAgICAgICAgY2xhc3NOYW1lOiBgdGV4dC1ibGFjayBpbmxpbmUtYmxvY2sgcC14c2AsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBjb25zdCBiZ1NoYWRpbmdEaXZMaWdodCA9IEVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGBkaXNwbGF5LWZsZXgtYmFzZWAgfSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDk7IGkrKykge1xuICAgIGJnU2hhZGluZ0RpdkxpZ2h0LmFwcGVuZENoaWxkKFxuICAgICAgRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IGBiZy1wcmltYXJ5LWxpZ2h0LSR7aX0gdGV4dC1ub3dyYXAgbWItc20gcC14cyB0ZXh0LWJsYWNrYCxcbiAgICAgICAgaW5uZXJUZXh0OiBgcHJpbWFyeSBsaWdodCAke2l9YCxcbiAgICAgIH0pXG4gICAgKTtcbiAgICBiZ1NoYWRpbmdEaXZMaWdodC5hcHBlbmRDaGlsZChcbiAgICAgIEVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBpbm5lclRleHQ6IGAke2kgPT09IDkgPyBcIlwiIDogXCJ8XCJ9YCxcbiAgICAgICAgY2xhc3NOYW1lOiBgdGV4dC1ibGFjayBpbmxpbmUtYmxvY2sgcC14c2AsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBjb25zdCBob3ZlckNvbG9yRGl2ID0gRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYGRpc3BsYXktZmxleC1iYXNlYCB9KTtcbiAgY29uc3QgaG92ZXJDb2xvckVsZW0gPSAoY2xhc3NOYW1lLCBpbm5lclRleHQpID0+XG4gICAgRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZSwgaW5uZXJUZXh0IH0pO1xuICBjb25zdCBwaXBlQ2hhciA9ICgpID0+XG4gICAgRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IGB0ZXh0LWJsYWNrIGlubGluZS1ibG9jayBwLXhzYCxcbiAgICAgIGlubmVyVGV4dDogXCJ8XCIsXG4gICAgfSk7XG5cbiAgY29uc3Qgc2hhcmVkQ2xhc3NlcyA9IFwiY3Vyc29yLXBvaW50ZXIgbWItc20gcC14c1wiO1xuICBjb25zdCBob3ZlckNvbG9yRGl2cyA9IFtcbiAgICBob3ZlckNvbG9yRWxlbShcInRleHQtaG92ZXItcHVycGxlIFwiICsgc2hhcmVkQ2xhc3NlcywgXCJ0ZXh0LWhvdmVyLXB1cnBsZVwiKSxcbiAgICBwaXBlQ2hhcigpLFxuICAgIGhvdmVyQ29sb3JFbGVtKFwiYmctaG92ZXItb3JhbmdlIFwiICsgc2hhcmVkQ2xhc3NlcywgXCJiZy1ob3Zlci1vcmFuZ2VcIiksXG4gIF07XG5cbiAgaG92ZXJDb2xvckRpdnMuZm9yRWFjaCgoZWxlbWVudCkgPT4gaG92ZXJDb2xvckRpdi5hcHBlbmRDaGlsZChlbGVtZW50KSk7XG5cbiAgY29sb3JzLmFwcGVuZENoaWxkKHRleHRDb2xvcnNEaXYpO1xuICBjb2xvcnMuYXBwZW5kQ2hpbGQoYmdDb2xvcnNEaXYpO1xuICBjb2xvcnMuYXBwZW5kQ2hpbGQoYmdTaGFkaW5nRGl2RGFyayk7XG4gIGNvbG9ycy5hcHBlbmRDaGlsZChiZ1NoYWRpbmdEaXZMaWdodCk7XG4gIGNvbG9ycy5hcHBlbmRDaGlsZChob3ZlckNvbG9yRGl2KTtcbiAgcmV0dXJuIGNvbG9ycztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbG9ycztcbiIsImltcG9ydCBFbGVtZW50IGZyb20gXCIuL0VsZW1lbnRcIjtcblxuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xuaW1wb3J0IENvbG9ycyBmcm9tIFwiLi9Db2xvcnNcIjtcbmltcG9ydCBCdXR0b25zIGZyb20gXCIuL0J1dHRvbnNcIjtcblxuY29uc3QgQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgSGVhZGVyID0gKHRleHQpID0+XG4gICAgRWxlbWVudChcImgyXCIsIHtcbiAgICAgIGlubmVyVGV4dDogYCR7dGV4dH1gLFxuICAgICAgY2xhc3NOYW1lOiBgYCxcbiAgICB9KTtcbiAgY29uc3QgSHIgPSAoKSA9PiBFbGVtZW50KFwiaHJcIiwgeyBjbGFzc05hbWU6IGBiZy1ibGFja2AgfSk7XG4gIGNvbnN0IFNlY3Rpb24gPSAodGl0bGUsIGNvbnRlbnRDb21wb25lbnQsIHVzZUhvcml6b250YWxSdWxlID0gdHJ1ZSkgPT4ge1xuICAgIGNvbnN0IGhyID0gdXNlSG9yaXpvbnRhbFJ1bGUgPyBbSHIoKV0gOiBbXTtcbiAgICByZXR1cm4gRWxlbWVudChcImRpdlwiLCB7fSwgW0hlYWRlcih0aXRsZSksIGNvbnRlbnRDb21wb25lbnQsIC4uLmhyXSk7XG4gIH07XG5cbiAgY29uc3QgY29udGVudCA9IEVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGBjb250ZW50YCB9LCBbXG4gICAgU2VjdGlvbihcIkNvbG9yc1wiLCBDb2xvcnMoKSksXG4gICAgU2VjdGlvbihcIkNhcmRzXCIsIENhcmQoKSksXG4gICAgU2VjdGlvbihcIkJ1dHRvbnNcIiwgQnV0dG9ucygpLCBmYWxzZSksXG4gIF0pO1xuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG4iLCIvKipcbiAqIFRoaXMgRnVuY3Rpb24gYWxsb3dzIHlvdSB0byBjcmVhdGUgYSBkb20gZWxlbWVudCB3aXRoIGl0cyBpbml0aWFsIGF0dHJpYnV0ZXMgYW5kIGNoaWxkIGVsZW1lbnRzIGRlZmluZWQgYnkgYSBwYXNzZWQtaW4gb2JqZWN0IGFuZCBhcnJheSBvZiBjaGlsZCBlbGVtZW50c1xuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVTdHIgdGhlIHRhZyBuYW1lIG9mIHRoZSBlbGVtZW50IHRvIGJlIHJldHVybmVkIHlvdSB3b3VsZCB1c2UgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgpXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNPYmogKG9wdGlvbmFsKSBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgaW5pdGlhbCBwcm9wZXJ0aWVzL2F0dHJpYnV0ZXMgeW91IHdhbnQgdGhlIGVsZW1lbnQgdG8gaGF2ZVxuICogQHBhcmFtIHthcnJheX0gY2hpbGRBcnIgKG9wdGlvbmFsKSBhbiBvZiBlbGVtZW50IG9iamVjdHMgdG8gYmUgYXBwZW5kZWQgYXMgY2hpbGRyZW4gdG8gdGhpcyBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gdGhlIGEgcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IGNyZWF0ZWQgaW4gbWVtb3J5XG4gKi9cbmNvbnN0IEVsZW1lbnQgPSAodHlwZVN0ciwgcHJvcHNPYmosIGNoaWxkQXJyID0gbnVsbCkgPT4ge1xuICBpZiAoY2hpbGRBcnIgJiYgIUFycmF5LmlzQXJyYXkoY2hpbGRBcnIpKSB7XG4gICAgY2hpbGRBcnIgPSBbY2hpbGRBcnJdO1xuICB9XG5cbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IE9iamVjdC5hc3NpZ24oXG4gICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlU3RyKSxcbiAgICBwcm9wc09ialxuICApO1xuXG4gIGlmIChjaGlsZEFycikge1xuICAgIGNoaWxkQXJyLmZvckVhY2goKGNoaWxkKSA9PiBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG4gIH1cblxuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Db250ZW50XCI7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoQ29udGVudCgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==