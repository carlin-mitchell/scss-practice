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
    Section("Buttons", (0,_Buttons__WEBPACK_IMPORTED_MODULE_3__["default"])(), true),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsc0JBQXNCO0FBQ3pELHNCQUFzQixtREFBTTtBQUM1QixxQkFBcUIsaURBQUk7QUFDekIsdUJBQXVCLG9EQUFPO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzFCdkI7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7OztVQ3hCdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONkI7O0FBRWM7O0FBRTNDLDBCQUEwQiwrREFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9Db2xvcnMuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9Db250ZW50LmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9FbGVtZW50XCI7XG5cbmNvbnN0IEJ1dHRvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImRpc3BsYXktZmxleC1iYXNlXCIgfSk7XG4gIGNvbnN0IGJ1dHRvbiA9IChjbGFzc05hbWUsIGlubmVyVGV4dCkgPT5cbiAgICBFbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3NOYW1lLCBpbm5lclRleHQgfSk7XG5cbiAgY29uc3Qgc2hhcmVkQ2xhc3NlcyA9IFwiIG0tc21cIjtcbiAgY29uc3QgYnV0dG9uRWxlbXMgPSBbXG4gICAgYnV0dG9uKFwiYnRuLXByaW1hcnlcIiArIHNoYXJlZENsYXNzZXMsIFwiYnRuLXByaW1hcnlcIiksXG4gICAgYnV0dG9uKFwiYnRuLXNlY29uZGFyeVwiICsgc2hhcmVkQ2xhc3NlcywgXCJidG4tc2Vjb25kYXJ5XCIpLFxuICAgIGJ1dHRvbihcImJ0bi1lcnJvclwiICsgc2hhcmVkQ2xhc3NlcywgXCJidG4tZXJyb3JcIiksXG4gICAgYnV0dG9uKFwiYnRuLWluZm9cIiArIHNoYXJlZENsYXNzZXMsIFwiYnRuLWluZm9cIiksXG4gICAgYnV0dG9uKFwiYnRuLWdyZWVuXCIgKyBzaGFyZWRDbGFzc2VzLCBcImJ0bi1ncmVlblwiKSxcbiAgICBidXR0b24oXCJidG4tcHVycGxlXCIgKyBzaGFyZWRDbGFzc2VzLCBcImJ0bi1wdXJwbGVcIiksXG4gICAgYnV0dG9uKFwiYnRuLW91dGxpbmUtcHJpbWFyeVwiICsgc2hhcmVkQ2xhc3NlcywgXCJidG4tb3V0bGluZS1wcmltYXJ5XCIpLFxuICAgIGJ1dHRvbihcImJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiICsgc2hhcmVkQ2xhc3NlcywgXCJidG4tb3V0bGluZS1zZWNvbmRhcnlcIiksXG4gICAgYnV0dG9uKFwiYnRuLW91dGxpbmUtZXJyb3JcIiArIHNoYXJlZENsYXNzZXMsIFwiYnRuLW91dGxpbmUtZXJyb3JcIiksXG4gICAgYnV0dG9uKFwiYnRuLW91dGxpbmUtaW5mb1wiICsgc2hhcmVkQ2xhc3NlcywgXCJidG4tb3V0bGluZS1pbmZvXCIpLFxuICAgIGJ1dHRvbihcImJ0bi1vdXRsaW5lLWdyZWVuXCIgKyBzaGFyZWRDbGFzc2VzLCBcImJ0bi1vdXRsaW5lLWdyZWVuXCIpLFxuICAgIGJ1dHRvbihcImJ0bi1vdXRsaW5lLXB1cnBsZVwiICsgc2hhcmVkQ2xhc3NlcywgXCJidG4tb3V0bGluZS1wdXJwbGVcIiksXG4gIF07XG5cbiAgYnV0dG9uRWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4gYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtKSk7XG4gIHJldHVybiBidXR0b25zQ29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9ucztcbiIsImltcG9ydCBFbGVtZW50IGZyb20gXCIuL0VsZW1lbnRcIjtcblxuY29uc3QgQ2FyZCA9ICgpID0+IHtcbiAgY29uc3QgY2FyZCA9IEVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGBjYXJkYCB9KTtcblxuICBjb25zdCBjYXJkVGl0bGUgPSBFbGVtZW50KFwiaDFcIiwge1xuICAgIGlubmVyVGV4dDogYFRoaXMgaXMgYSBjYXJkIHRpdGxlYCxcbiAgICBjbGFzc05hbWU6IGBjYXJkLXRpdGxlYCxcbiAgfSk7XG5cbiAgY29uc3QgbGluayA9IEVsZW1lbnQoXCJhXCIsIHtcbiAgICBocmVmOiBcIiNcIixcbiAgICBpbm5lclRleHQ6IFwiYWRpcGlzaWNpbmcgZWxpdFwiLFxuICB9KS5vdXRlckhUTUw7XG4gIGNvbnN0IGNvbnRlbnQgPSBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgJHtsaW5rfS4gUmVjdXNhbmRhZSBlYSBzaW1pbGlxdWUgcXVvcyBkb2xvcmVtcXVlIG1vZGkgaXBzYW0gdGVtcG9yZSByZXBlbGxlbmR1cyBmYWNpbGlzIGRpY3RhIHF1aWE/YDtcbiAgY29uc3QgY2FyZEJvZHkgPSBFbGVtZW50KFwicFwiLCB7XG4gICAgY2xhc3NOYW1lOiBgY2FyZC1ib2R5YCxcbiAgICBpbm5lckhUTUw6IGNvbnRlbnQsXG4gIH0pO1xuXG4gIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcbiAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQm9keSk7XG5cbiAgcmV0dXJuIGNhcmQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vRWxlbWVudFwiO1xuXG5jb25zdCBDb2xvcnMgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbG9ycyA9IEVsZW1lbnQoXCJkaXZcIiwge30pO1xuXG4gIGNvbnN0IHRleHRDb2xvcnMgPSBbXG4gICAgXCJwcmltYXJ5XCIsXG4gICAgXCJzZWNvbmRhcnlcIixcbiAgICBcImVycm9yXCIsXG4gICAgXCJpbmZvXCIsXG4gICAgXCJibHVlXCIsXG4gICAgXCJyZWRcIixcbiAgICBcInllbGxvd1wiLFxuICAgIFwiZ3JlZW5cIixcbiAgICBcIm9yYW5nZVwiLFxuICAgIFwicHVycGxlXCIsXG4gICAgXCJncmF5XCIsXG4gICAgXCJibGFja1wiLFxuICAgIFwicGlua1wiLFxuICAgIFwid2hpdGVcIixcbiAgXTtcblxuICBjb25zdCBsYXN0SXRlbUluZGV4ID0gdGV4dENvbG9ycy5sZW5ndGggLSAxO1xuXG4gIGNvbnN0IHRleHRDb2xvcnNEaXYgPSBFbGVtZW50KFwiZGl2XCIpO1xuICB0ZXh0Q29sb3JzLmZvckVhY2goKGNvbG9yLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGNvbG9yQ2xhc3MgPSBcInRleHQtXCIgKyBjb2xvcjtcbiAgICBjb25zdCBlbGVtZW50ID0gRWxlbWVudChcbiAgICAgIFwic3BhblwiLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6IFtcbiAgICAgICAgICBgJHtjb2xvckNsYXNzfSAke2luZGV4ID09PSBsYXN0SXRlbUluZGV4ID8gXCJiZy1ibGFja1wiIDogXCJcIn1gLFxuICAgICAgICBdLFxuICAgICAgICBpbm5lclRleHQ6IFwiIFwiICsgY29sb3IgKyBcIiB0ZXh0XCIgKyBcIiBcIixcbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIEVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGlubmVyVGV4dDogYCR7aW5kZXggPT09IGxhc3RJdGVtSW5kZXggPyBcIlwiIDogXCJ8XCJ9YCxcbiAgICAgICAgICBjbGFzc05hbWU6IGB0ZXh0LWJsYWNrIGlubGluZS1ibG9jayBtYi1zbSAgYCxcbiAgICAgICAgfSksXG4gICAgICBdXG4gICAgKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYHRleHQtJHtjb2xvcn1gKTtcbiAgICB0ZXh0Q29sb3JzRGl2LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICB9KTtcblxuICBjb25zdCBiZ0NvbG9yc0RpdiA9IEVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGBkaXNwbGF5LWZsZXgtYmFzZWAgfSk7XG4gIHRleHRDb2xvcnMuZm9yRWFjaCgoY29sb3IsIGluZGV4KSA9PiB7XG4gICAgYmdDb2xvcnNEaXYuYXBwZW5kQ2hpbGQoXG4gICAgICBFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogYGJnLSR7Y29sb3J9IHRleHQtbm93cmFwIG1iLXNtIHAteHMgJHtcbiAgICAgICAgICBpbmRleCA9PT0gbGFzdEl0ZW1JbmRleCA/IFwidGV4dC1ibGFja1wiIDogXCJ0ZXh0LXdoaXRlXCJcbiAgICAgICAgfWAsXG4gICAgICAgIGlubmVyVGV4dDogXCIgXCIgKyBcImJnLVwiICsgY29sb3IgKyBcIiBcIixcbiAgICAgIH0pXG4gICAgKTtcbiAgICBiZ0NvbG9yc0Rpdi5hcHBlbmRDaGlsZChcbiAgICAgIEVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBpbm5lclRleHQ6IGAke2luZGV4ID09PSBsYXN0SXRlbUluZGV4ID8gXCJcIiA6IFwifFwifWAsXG4gICAgICAgIGNsYXNzTmFtZTogYHRleHQtYmxhY2sgaW5saW5lLWJsb2NrIHAteHNgLFxuICAgICAgfSlcbiAgICApO1xuICB9KTtcblxuICBjb25zdCBiZ1NoYWRpbmdEaXZEYXJrID0gRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYGRpc3BsYXktZmxleC1iYXNlYCB9KTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gOTsgaSsrKSB7XG4gICAgYmdTaGFkaW5nRGl2RGFyay5hcHBlbmRDaGlsZChcbiAgICAgIEVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBgYmctcHJpbWFyeS1kYXJrLSR7aX0gdGV4dC1ub3dyYXAgbWItc20gcC14cyB0ZXh0LXdoaXRlYCxcbiAgICAgICAgaW5uZXJUZXh0OiBgcHJpbWFyeSBkYXJrICR7aX1gLFxuICAgICAgfSlcbiAgICApO1xuICAgIGJnU2hhZGluZ0RpdkRhcmsuYXBwZW5kQ2hpbGQoXG4gICAgICBFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgaW5uZXJUZXh0OiBgJHtpID09PSA5ID8gXCJcIiA6IFwifFwifWAsXG4gICAgICAgIGNsYXNzTmFtZTogYHRleHQtYmxhY2sgaW5saW5lLWJsb2NrIHAteHNgLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgY29uc3QgYmdTaGFkaW5nRGl2TGlnaHQgPSBFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBgZGlzcGxheS1mbGV4LWJhc2VgIH0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSA5OyBpKyspIHtcbiAgICBiZ1NoYWRpbmdEaXZMaWdodC5hcHBlbmRDaGlsZChcbiAgICAgIEVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBgYmctcHJpbWFyeS1saWdodC0ke2l9IHRleHQtbm93cmFwIG1iLXNtIHAteHMgdGV4dC1ibGFja2AsXG4gICAgICAgIGlubmVyVGV4dDogYHByaW1hcnkgbGlnaHQgJHtpfWAsXG4gICAgICB9KVxuICAgICk7XG4gICAgYmdTaGFkaW5nRGl2TGlnaHQuYXBwZW5kQ2hpbGQoXG4gICAgICBFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgaW5uZXJUZXh0OiBgJHtpID09PSA5ID8gXCJcIiA6IFwifFwifWAsXG4gICAgICAgIGNsYXNzTmFtZTogYHRleHQtYmxhY2sgaW5saW5lLWJsb2NrIHAteHNgLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgY29uc3QgaG92ZXJDb2xvckRpdiA9IEVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGBkaXNwbGF5LWZsZXgtYmFzZWAgfSk7XG4gIGNvbnN0IGhvdmVyQ29sb3JFbGVtID0gKGNsYXNzTmFtZSwgaW5uZXJUZXh0KSA9PlxuICAgIEVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWUsIGlubmVyVGV4dCB9KTtcbiAgY29uc3QgcGlwZUNoYXIgPSAoKSA9PlxuICAgIEVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBgdGV4dC1ibGFjayBpbmxpbmUtYmxvY2sgcC14c2AsXG4gICAgICBpbm5lclRleHQ6IFwifFwiLFxuICAgIH0pO1xuXG4gIGNvbnN0IHNoYXJlZENsYXNzZXMgPSBcImN1cnNvci1wb2ludGVyIG1iLXNtIHAteHNcIjtcbiAgY29uc3QgaG92ZXJDb2xvckRpdnMgPSBbXG4gICAgaG92ZXJDb2xvckVsZW0oXCJ0ZXh0LWhvdmVyLXB1cnBsZSBcIiArIHNoYXJlZENsYXNzZXMsIFwidGV4dC1ob3Zlci1wdXJwbGVcIiksXG4gICAgcGlwZUNoYXIoKSxcbiAgICBob3ZlckNvbG9yRWxlbShcImJnLWhvdmVyLW9yYW5nZSBcIiArIHNoYXJlZENsYXNzZXMsIFwiYmctaG92ZXItb3JhbmdlXCIpLFxuICBdO1xuXG4gIGhvdmVyQ29sb3JEaXZzLmZvckVhY2goKGVsZW1lbnQpID0+IGhvdmVyQ29sb3JEaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCkpO1xuXG4gIGNvbG9ycy5hcHBlbmRDaGlsZCh0ZXh0Q29sb3JzRGl2KTtcbiAgY29sb3JzLmFwcGVuZENoaWxkKGJnQ29sb3JzRGl2KTtcbiAgY29sb3JzLmFwcGVuZENoaWxkKGJnU2hhZGluZ0RpdkRhcmspO1xuICBjb2xvcnMuYXBwZW5kQ2hpbGQoYmdTaGFkaW5nRGl2TGlnaHQpO1xuICBjb2xvcnMuYXBwZW5kQ2hpbGQoaG92ZXJDb2xvckRpdik7XG4gIHJldHVybiBjb2xvcnM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb2xvcnM7XG4iLCJpbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9FbGVtZW50XCI7XG5cbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcbmltcG9ydCBDb2xvcnMgZnJvbSBcIi4vQ29sb3JzXCI7XG5pbXBvcnQgQnV0dG9ucyBmcm9tIFwiLi9CdXR0b25zXCI7XG5cbmNvbnN0IENvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IEhlYWRlciA9ICh0ZXh0KSA9PlxuICAgIEVsZW1lbnQoXCJoMlwiLCB7XG4gICAgICBpbm5lclRleHQ6IGAke3RleHR9YCxcbiAgICAgIGNsYXNzTmFtZTogYGAsXG4gICAgfSk7XG4gIGNvbnN0IEhyID0gKCkgPT4gRWxlbWVudChcImhyXCIsIHsgY2xhc3NOYW1lOiBgYmctYmxhY2tgIH0pO1xuICBjb25zdCBTZWN0aW9uID0gKHRpdGxlLCBjb250ZW50Q29tcG9uZW50LCB1c2VIb3Jpem9udGFsUnVsZSA9IHRydWUpID0+IHtcbiAgICBjb25zdCBociA9IHVzZUhvcml6b250YWxSdWxlID8gW0hyKCldIDogW107XG4gICAgcmV0dXJuIEVsZW1lbnQoXCJkaXZcIiwge30sIFtIZWFkZXIodGl0bGUpLCBjb250ZW50Q29tcG9uZW50LCAuLi5ocl0pO1xuICB9O1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBgY29udGVudGAgfSwgW1xuICAgIFNlY3Rpb24oXCJDb2xvcnNcIiwgQ29sb3JzKCkpLFxuICAgIFNlY3Rpb24oXCJDYXJkc1wiLCBDYXJkKCkpLFxuICAgIFNlY3Rpb24oXCJCdXR0b25zXCIsIEJ1dHRvbnMoKSwgdHJ1ZSksXG4gIF0pO1xuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG4iLCIvKipcbiAqIFRoaXMgRnVuY3Rpb24gYWxsb3dzIHlvdSB0byBjcmVhdGUgYSBkb20gZWxlbWVudCB3aXRoIGl0cyBpbml0aWFsIGF0dHJpYnV0ZXMgYW5kIGNoaWxkIGVsZW1lbnRzIGRlZmluZWQgYnkgYSBwYXNzZWQtaW4gb2JqZWN0IGFuZCBhcnJheSBvZiBjaGlsZCBlbGVtZW50c1xuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVTdHIgdGhlIHRhZyBuYW1lIG9mIHRoZSBlbGVtZW50IHRvIGJlIHJldHVybmVkIHlvdSB3b3VsZCB1c2UgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgpXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNPYmogKG9wdGlvbmFsKSBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgaW5pdGlhbCBwcm9wZXJ0aWVzL2F0dHJpYnV0ZXMgeW91IHdhbnQgdGhlIGVsZW1lbnQgdG8gaGF2ZVxuICogQHBhcmFtIHthcnJheX0gY2hpbGRBcnIgKG9wdGlvbmFsKSBhbiBvZiBlbGVtZW50IG9iamVjdHMgdG8gYmUgYXBwZW5kZWQgYXMgY2hpbGRyZW4gdG8gdGhpcyBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gdGhlIGEgcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IGNyZWF0ZWQgaW4gbWVtb3J5XG4gKi9cbmNvbnN0IEVsZW1lbnQgPSAodHlwZVN0ciwgcHJvcHNPYmosIGNoaWxkQXJyID0gbnVsbCkgPT4ge1xuICBpZiAoY2hpbGRBcnIgJiYgIUFycmF5LmlzQXJyYXkoY2hpbGRBcnIpKSB7XG4gICAgY2hpbGRBcnIgPSBbY2hpbGRBcnJdO1xuICB9XG5cbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IE9iamVjdC5hc3NpZ24oXG4gICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlU3RyKSxcbiAgICBwcm9wc09ialxuICApO1xuXG4gIGlmIChjaGlsZEFycikge1xuICAgIGNoaWxkQXJyLmZvckVhY2goKGNoaWxkKSA9PiBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG4gIH1cblxuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Db250ZW50XCI7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoQ29udGVudCgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==