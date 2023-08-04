/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var e={"./src/styles/index.scss":(e,t,a)=>{a.r(t)},"./src/components/Card.js":(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var s=a("./src/components/Element.js");const n=()=>{const e=(0,s.default)("div",{className:"card"}),t=(0,s.default)("h1",{innerText:"This is a card title",className:"card-title"}),a=`Lorem ipsum dolor sit amet consectetur ${(0,s.default)("a",{href:"#",innerText:"adipisicing elit"}).outerHTML}. Recusandae ea similique quos doloremque modi ipsam tempore repellendus facilis dicta quia?`,n=(0,s.default)("p",{className:"card-body",innerHTML:a});return e.appendChild(t),e.appendChild(n),e}},"./src/components/Colors.js":(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var s=a("./src/components/Element.js");const n=()=>{const e=(0,s.default)("div",{}),t=["primary","secondary","error","info","blue","red","yellow","green","orange","purple","gray","black","pink","white"],a=t.length-1,n=(0,s.default)("div");t.forEach(((e,t)=>{const r="text-"+e,l=(0,s.default)("span",{className:[`${r} ${t===a?"bg-black":""}`],innerText:" "+e+" text "},[(0,s.default)("div",{innerText:t===a?"":"|",className:"text-black inline-block mb-sm  "})]);l.classList.add(`text-${e}`),n.appendChild(l)}));const r=(0,s.default)("div",{className:"display-flex-base"});t.forEach(((e,t)=>{r.appendChild((0,s.default)("span",{className:`bg-${e} text-nowrap mb-sm p-xs ${t===a?"text-black":"text-white"}`,innerText:" bg-"+e+" "})),r.appendChild((0,s.default)("div",{innerText:t===a?"":"|",className:"text-black inline-block p-xs"}))}));const l=(0,s.default)("div",{className:"display-flex-base"});for(let e=1;e<=9;e++)l.appendChild((0,s.default)("span",{className:`bg-primary-dark-${e} text-nowrap mb-sm p-xs text-white`,innerText:`primary dark ${e}`})),l.appendChild((0,s.default)("div",{innerText:9===e?"":"|",className:"text-black inline-block p-xs"}));const d=(0,s.default)("div",{className:"display-flex-base"});for(let e=1;e<=9;e++)d.appendChild((0,s.default)("span",{className:`bg-primary-light-${e} text-nowrap mb-sm p-xs text-black`,innerText:`primary light ${e}`})),d.appendChild((0,s.default)("div",{innerText:9===e?"":"|",className:"text-black inline-block p-xs"}));return e.appendChild(n),e.appendChild(r),e.appendChild(l),e.appendChild(d),e}},"./src/components/Content.js":(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var s=a("./src/components/Element.js"),n=a("./src/components/Card.js"),r=a("./src/components/Colors.js");const l=()=>{const e=(e,t,a=!0)=>{const n=a?[(0,s.default)("hr",{className:"bg-black"})]:[];return(0,s.default)("div",{},[(r=e,(0,s.default)("h2",{innerText:`${r}`,className:""})),t,...n]);var r};return(0,s.default)("div",{className:"content"},[e("Colors",(0,r.default)()),e("Cards",(0,n.default)(),!1)])}},"./src/components/Element.js":(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});const s=(e,t,a=null)=>{a&&!Array.isArray(a)&&(a=[a]);const s=Object.assign(document.createElement(e),t);return a&&a.forEach((e=>s.appendChild(e))),s}}},t={};function a(s){var n=t[s];if(void 0!==n)return n.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,a),r.exports}a.d=(e,t)=>{for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};(()=>{a.r(s),a("./src/styles/index.scss");var e=a("./src/components/Content.js");document.body.appendChild((0,e.default)())})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Z0xBRUEsTUF3QkEsRUF4QmEsS0FDWCxNQUFNQSxHQUFPLGFBQVEsTUFBTyxDQUFFQyxVQUFXLFNBRW5DQyxHQUFZLGFBQVEsS0FBTSxDQUM5QkMsVUFBVyx1QkFDWEYsVUFBVyxlQU9QRyxFQUFVLDJDQUpILGFBQVEsSUFBSyxDQUN4QkMsS0FBTSxJQUNORixVQUFXLHFCQUNWRyx3R0FFR0MsR0FBVyxhQUFRLElBQUssQ0FDNUJOLFVBQVcsWUFDWE8sVUFBV0osSUFNYixPQUhBSixFQUFLUyxZQUFZUCxHQUNqQkYsRUFBS1MsWUFBWUYsR0FFVlAsQ0FBSSwrR0NyQmIsTUFxR0EsRUFyR2UsS0FDYixNQUFNVSxHQUFTLGFBQVEsTUFBTyxDQUFDLEdBRXpCQyxFQUFhLENBQ2pCLFVBQ0EsWUFDQSxRQUNBLE9BQ0EsT0FDQSxNQUNBLFNBQ0EsUUFDQSxTQUNBLFNBQ0EsT0FDQSxRQUNBLE9BQ0EsU0FHSUMsRUFBZ0JELEVBQVdFLE9BQVMsRUFFcENDLEdBQWdCLGFBQVEsT0FDOUJILEVBQVdJLFNBQVEsQ0FBQ0MsRUFBT0MsS0FDekIsTUFBTUMsRUFBYSxRQUFVRixFQUN2QkcsR0FBVSxhQUNkLE9BQ0EsQ0FDRWxCLFVBQVcsQ0FDVCxHQUFHaUIsS0FBY0QsSUFBVUwsRUFBZ0IsV0FBYSxNQUUxRFQsVUFBVyxJQUFNYSxFQUFOLFVBRWIsRUFDRSxhQUFRLE1BQU8sQ0FDYmIsVUFBY2MsSUFBVUwsRUFBZ0IsR0FBSyxJQUM3Q1gsVUFBVyxzQ0FJakJrQixFQUFRQyxVQUFVQyxJQUFJLFFBQVFMLEtBQzlCRixFQUFjTCxZQUFZVSxFQUFRLElBR3BDLE1BQU1HLEdBQWMsYUFBUSxNQUFPLENBQUVyQixVQUFXLHNCQUNoRFUsRUFBV0ksU0FBUSxDQUFDQyxFQUFPQyxLQUN6QkssRUFBWWIsYUFDVixhQUFRLE9BQVEsQ0FDZFIsVUFBVyxNQUFNZSw0QkFDZkMsSUFBVUwsRUFBZ0IsYUFBZSxlQUUzQ1QsVUFBVyxPQUFjYSxFQUFRLE9BR3JDTSxFQUFZYixhQUNWLGFBQVEsTUFBTyxDQUNiTixVQUFjYyxJQUFVTCxFQUFnQixHQUFLLElBQzdDWCxVQUFXLGlDQUVkLElBR0gsTUFBTXNCLEdBQW1CLGFBQVEsTUFBTyxDQUFFdEIsVUFBVyxzQkFDckQsSUFBSyxJQUFJdUIsRUFBSSxFQUFHQSxHQUFLLEVBQUdBLElBQ3RCRCxFQUFpQmQsYUFDZixhQUFRLE9BQVEsQ0FDZFIsVUFBVyxtQkFBbUJ1QixzQ0FDOUJyQixVQUFXLGdCQUFnQnFCLE9BRy9CRCxFQUFpQmQsYUFDZixhQUFRLE1BQU8sQ0FDYk4sVUFBb0IsSUFBTnFCLEVBQVUsR0FBSyxJQUM3QnZCLFVBQVcsa0NBS2pCLE1BQU13QixHQUFvQixhQUFRLE1BQU8sQ0FBRXhCLFVBQVcsc0JBQ3RELElBQUssSUFBSXVCLEVBQUksRUFBR0EsR0FBSyxFQUFHQSxJQUN0QkMsRUFBa0JoQixhQUNoQixhQUFRLE9BQVEsQ0FDZFIsVUFBVyxvQkFBb0J1QixzQ0FDL0JyQixVQUFXLGlCQUFpQnFCLE9BR2hDQyxFQUFrQmhCLGFBQ2hCLGFBQVEsTUFBTyxDQUNiTixVQUFvQixJQUFOcUIsRUFBVSxHQUFLLElBQzdCdkIsVUFBVyxrQ0FTakIsT0FKQVMsRUFBT0QsWUFBWUssR0FDbkJKLEVBQU9ELFlBQVlhLEdBQ25CWixFQUFPRCxZQUFZYyxHQUNuQmIsRUFBT0QsWUFBWWdCLEdBQ1pmLENBQU0sa0xDL0ZmLE1BbUJBLEVBbkJnQixLQUNkLE1BTU1nQixFQUFVLENBQUNDLEVBQU9DLEVBQWtCQyxHQUFvQixLQUM1RCxNQUFNQyxFQUFLRCxFQUFvQixFQUZoQixhQUFRLEtBQU0sQ0FBRTVCLFVBQVcsY0FFRixHQUN4QyxPQUFPLGFBQVEsTUFBTyxDQUFDLEVBQUcsRUFSWjhCLEVBUW9CSixHQVBsQyxhQUFRLEtBQU0sQ0FDWnhCLFVBQVcsR0FBRzRCLElBQ2Q5QixVQUFXLE1BSzZCMkIsS0FBcUJFLElBUmxELElBQUNDLENBUXFELEVBT3JFLE9BSmdCLGFBQVEsTUFBTyxDQUFFOUIsVUFBVyxXQUFhLENBQ3ZEeUIsRUFBUSxVQUFVLGdCQUNsQkEsRUFBUSxTQUFTLGdCQUFRLElBRWIseUVDZGhCLE1BaUJBLEVBakJnQixDQUFDTSxFQUFTQyxFQUFVQyxFQUFXLFFBQ3pDQSxJQUFhQyxNQUFNQyxRQUFRRixLQUM3QkEsRUFBVyxDQUFDQSxJQUdkLE1BQU1HLEVBQWdCQyxPQUFPQyxPQUMzQkMsU0FBU0MsY0FBY1QsR0FDdkJDLEdBT0YsT0FKSUMsR0FDRkEsRUFBU25CLFNBQVMyQixHQUFVTCxFQUFjNUIsWUFBWWlDLEtBR2pETCxDQUFhLElDcEJsQk0sRUFBMkIsQ0FBQyxFQUdoQyxTQUFTQyxFQUFvQkMsR0FFNUIsSUFBSUMsRUFBZUgsRUFBeUJFLEdBQzVDLFFBQXFCRSxJQUFqQkQsRUFDSCxPQUFPQSxFQUFhRSxRQUdyQixJQUFJQyxFQUFTTixFQUF5QkUsR0FBWSxDQUdqREcsUUFBUyxDQUFDLEdBT1gsT0FIQUUsRUFBb0JMLEdBQVVJLEVBQVFBLEVBQU9ELFFBQVNKLEdBRy9DSyxFQUFPRCxPQUNmLENDckJBSixFQUFvQk8sRUFBSSxDQUFDSCxFQUFTSSxLQUNqQyxJQUFJLElBQUlDLEtBQU9ELEVBQ1hSLEVBQW9CVSxFQUFFRixFQUFZQyxLQUFTVCxFQUFvQlUsRUFBRU4sRUFBU0ssSUFDNUVmLE9BQU9pQixlQUFlUCxFQUFTSyxFQUFLLENBQUVHLFlBQVksRUFBTUMsSUFBS0wsRUFBV0MsSUFFMUUsRUNORFQsRUFBb0JVLEVBQUksQ0FBQ0ksRUFBS0MsSUFBVXJCLE9BQU9zQixVQUFVQyxlQUFlQyxLQUFLSixFQUFLQyxHQ0NsRmYsRUFBb0JtQixFQUFLZixJQUNILG9CQUFYZ0IsUUFBMEJBLE9BQU9DLGFBQzFDM0IsT0FBT2lCLGVBQWVQLEVBQVNnQixPQUFPQyxZQUFhLENBQUVDLE1BQU8sV0FFN0Q1QixPQUFPaUIsZUFBZVAsRUFBUyxhQUFjLENBQUVrQixPQUFPLEdBQU8sNEZDRDlEMUIsU0FBUzJCLEtBQUsxRCxhQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQ29sb3JzLmpzIiwid2VicGFjazovL2JvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvQ29udGVudC5qcyIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ib2lsZXJwbGF0ZS8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vRWxlbWVudFwiO1xuXG5jb25zdCBDYXJkID0gKCkgPT4ge1xuICBjb25zdCBjYXJkID0gRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYGNhcmRgIH0pO1xuXG4gIGNvbnN0IGNhcmRUaXRsZSA9IEVsZW1lbnQoXCJoMVwiLCB7XG4gICAgaW5uZXJUZXh0OiBgVGhpcyBpcyBhIGNhcmQgdGl0bGVgLFxuICAgIGNsYXNzTmFtZTogYGNhcmQtdGl0bGVgLFxuICB9KTtcblxuICBjb25zdCBsaW5rID0gRWxlbWVudChcImFcIiwge1xuICAgIGhyZWY6IFwiI1wiLFxuICAgIGlubmVyVGV4dDogXCJhZGlwaXNpY2luZyBlbGl0XCIsXG4gIH0pLm91dGVySFRNTDtcbiAgY29uc3QgY29udGVudCA9IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciAke2xpbmt9LiBSZWN1c2FuZGFlIGVhIHNpbWlsaXF1ZSBxdW9zIGRvbG9yZW1xdWUgbW9kaSBpcHNhbSB0ZW1wb3JlIHJlcGVsbGVuZHVzIGZhY2lsaXMgZGljdGEgcXVpYT9gO1xuICBjb25zdCBjYXJkQm9keSA9IEVsZW1lbnQoXCJwXCIsIHtcbiAgICBjbGFzc05hbWU6IGBjYXJkLWJvZHlgLFxuICAgIGlubmVySFRNTDogY29udGVudCxcbiAgfSk7XG5cbiAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xuICBjYXJkLmFwcGVuZENoaWxkKGNhcmRCb2R5KTtcblxuICByZXR1cm4gY2FyZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJpbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9FbGVtZW50XCI7XG5cbmNvbnN0IENvbG9ycyA9ICgpID0+IHtcbiAgY29uc3QgY29sb3JzID0gRWxlbWVudChcImRpdlwiLCB7fSk7XG5cbiAgY29uc3QgdGV4dENvbG9ycyA9IFtcbiAgICBcInByaW1hcnlcIixcbiAgICBcInNlY29uZGFyeVwiLFxuICAgIFwiZXJyb3JcIixcbiAgICBcImluZm9cIixcbiAgICBcImJsdWVcIixcbiAgICBcInJlZFwiLFxuICAgIFwieWVsbG93XCIsXG4gICAgXCJncmVlblwiLFxuICAgIFwib3JhbmdlXCIsXG4gICAgXCJwdXJwbGVcIixcbiAgICBcImdyYXlcIixcbiAgICBcImJsYWNrXCIsXG4gICAgXCJwaW5rXCIsXG4gICAgXCJ3aGl0ZVwiLFxuICBdO1xuXG4gIGNvbnN0IGxhc3RJdGVtSW5kZXggPSB0ZXh0Q29sb3JzLmxlbmd0aCAtIDE7XG5cbiAgY29uc3QgdGV4dENvbG9yc0RpdiA9IEVsZW1lbnQoXCJkaXZcIik7XG4gIHRleHRDb2xvcnMuZm9yRWFjaCgoY29sb3IsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgY29sb3JDbGFzcyA9IFwidGV4dC1cIiArIGNvbG9yO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBFbGVtZW50KFxuICAgICAgXCJzcGFuXCIsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogW1xuICAgICAgICAgIGAke2NvbG9yQ2xhc3N9ICR7aW5kZXggPT09IGxhc3RJdGVtSW5kZXggPyBcImJnLWJsYWNrXCIgOiBcIlwifWAsXG4gICAgICAgIF0sXG4gICAgICAgIGlubmVyVGV4dDogXCIgXCIgKyBjb2xvciArIFwiIHRleHRcIiArIFwiIFwiLFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgaW5uZXJUZXh0OiBgJHtpbmRleCA9PT0gbGFzdEl0ZW1JbmRleCA/IFwiXCIgOiBcInxcIn1gLFxuICAgICAgICAgIGNsYXNzTmFtZTogYHRleHQtYmxhY2sgaW5saW5lLWJsb2NrIG1iLXNtICBgLFxuICAgICAgICB9KSxcbiAgICAgIF1cbiAgICApO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgdGV4dC0ke2NvbG9yfWApO1xuICAgIHRleHRDb2xvcnNEaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH0pO1xuXG4gIGNvbnN0IGJnQ29sb3JzRGl2ID0gRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYGRpc3BsYXktZmxleC1iYXNlYCB9KTtcbiAgdGV4dENvbG9ycy5mb3JFYWNoKChjb2xvciwgaW5kZXgpID0+IHtcbiAgICBiZ0NvbG9yc0Rpdi5hcHBlbmRDaGlsZChcbiAgICAgIEVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBgYmctJHtjb2xvcn0gdGV4dC1ub3dyYXAgbWItc20gcC14cyAke1xuICAgICAgICAgIGluZGV4ID09PSBsYXN0SXRlbUluZGV4ID8gXCJ0ZXh0LWJsYWNrXCIgOiBcInRleHQtd2hpdGVcIlxuICAgICAgICB9YCxcbiAgICAgICAgaW5uZXJUZXh0OiBcIiBcIiArIFwiYmctXCIgKyBjb2xvciArIFwiIFwiLFxuICAgICAgfSlcbiAgICApO1xuICAgIGJnQ29sb3JzRGl2LmFwcGVuZENoaWxkKFxuICAgICAgRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGlubmVyVGV4dDogYCR7aW5kZXggPT09IGxhc3RJdGVtSW5kZXggPyBcIlwiIDogXCJ8XCJ9YCxcbiAgICAgICAgY2xhc3NOYW1lOiBgdGV4dC1ibGFjayBpbmxpbmUtYmxvY2sgcC14c2AsXG4gICAgICB9KVxuICAgICk7XG4gIH0pO1xuXG4gIGNvbnN0IGJnU2hhZGluZ0RpdkRhcmsgPSBFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBgZGlzcGxheS1mbGV4LWJhc2VgIH0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSA5OyBpKyspIHtcbiAgICBiZ1NoYWRpbmdEaXZEYXJrLmFwcGVuZENoaWxkKFxuICAgICAgRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IGBiZy1wcmltYXJ5LWRhcmstJHtpfSB0ZXh0LW5vd3JhcCBtYi1zbSBwLXhzIHRleHQtd2hpdGVgLFxuICAgICAgICBpbm5lclRleHQ6IGBwcmltYXJ5IGRhcmsgJHtpfWAsXG4gICAgICB9KVxuICAgICk7XG4gICAgYmdTaGFkaW5nRGl2RGFyay5hcHBlbmRDaGlsZChcbiAgICAgIEVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBpbm5lclRleHQ6IGAke2kgPT09IDkgPyBcIlwiIDogXCJ8XCJ9YCxcbiAgICAgICAgY2xhc3NOYW1lOiBgdGV4dC1ibGFjayBpbmxpbmUtYmxvY2sgcC14c2AsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBjb25zdCBiZ1NoYWRpbmdEaXZMaWdodCA9IEVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGBkaXNwbGF5LWZsZXgtYmFzZWAgfSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDk7IGkrKykge1xuICAgIGJnU2hhZGluZ0RpdkxpZ2h0LmFwcGVuZENoaWxkKFxuICAgICAgRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IGBiZy1wcmltYXJ5LWxpZ2h0LSR7aX0gdGV4dC1ub3dyYXAgbWItc20gcC14cyB0ZXh0LWJsYWNrYCxcbiAgICAgICAgaW5uZXJUZXh0OiBgcHJpbWFyeSBsaWdodCAke2l9YCxcbiAgICAgIH0pXG4gICAgKTtcbiAgICBiZ1NoYWRpbmdEaXZMaWdodC5hcHBlbmRDaGlsZChcbiAgICAgIEVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBpbm5lclRleHQ6IGAke2kgPT09IDkgPyBcIlwiIDogXCJ8XCJ9YCxcbiAgICAgICAgY2xhc3NOYW1lOiBgdGV4dC1ibGFjayBpbmxpbmUtYmxvY2sgcC14c2AsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBjb2xvcnMuYXBwZW5kQ2hpbGQodGV4dENvbG9yc0Rpdik7XG4gIGNvbG9ycy5hcHBlbmRDaGlsZChiZ0NvbG9yc0Rpdik7XG4gIGNvbG9ycy5hcHBlbmRDaGlsZChiZ1NoYWRpbmdEaXZEYXJrKTtcbiAgY29sb3JzLmFwcGVuZENoaWxkKGJnU2hhZGluZ0RpdkxpZ2h0KTtcbiAgcmV0dXJuIGNvbG9ycztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbG9ycztcbiIsImltcG9ydCBFbGVtZW50IGZyb20gXCIuL0VsZW1lbnRcIjtcblxuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xuaW1wb3J0IENvbG9ycyBmcm9tIFwiLi9Db2xvcnNcIjtcblxuY29uc3QgQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgSGVhZGVyID0gKHRleHQpID0+XG4gICAgRWxlbWVudChcImgyXCIsIHtcbiAgICAgIGlubmVyVGV4dDogYCR7dGV4dH1gLFxuICAgICAgY2xhc3NOYW1lOiBgYCxcbiAgICB9KTtcbiAgY29uc3QgSHIgPSAoKSA9PiBFbGVtZW50KFwiaHJcIiwgeyBjbGFzc05hbWU6IGBiZy1ibGFja2AgfSk7XG4gIGNvbnN0IFNlY3Rpb24gPSAodGl0bGUsIGNvbnRlbnRDb21wb25lbnQsIHVzZUhvcml6b250YWxSdWxlID0gdHJ1ZSkgPT4ge1xuICAgIGNvbnN0IGhyID0gdXNlSG9yaXpvbnRhbFJ1bGUgPyBbSHIoKV0gOiBbXTtcbiAgICByZXR1cm4gRWxlbWVudChcImRpdlwiLCB7fSwgW0hlYWRlcih0aXRsZSksIGNvbnRlbnRDb21wb25lbnQsIC4uLmhyXSk7XG4gIH07XG5cbiAgY29uc3QgY29udGVudCA9IEVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGBjb250ZW50YCB9LCBbXG4gICAgU2VjdGlvbihcIkNvbG9yc1wiLCBDb2xvcnMoKSksXG4gICAgU2VjdGlvbihcIkNhcmRzXCIsIENhcmQoKSwgZmFsc2UpLFxuICBdKTtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuIiwiLyoqXG4gKiBUaGlzIEZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gY3JlYXRlIGEgZG9tIGVsZW1lbnQgd2l0aCBpdHMgaW5pdGlhbCBhdHRyaWJ1dGVzIGFuZCBjaGlsZCBlbGVtZW50cyBkZWZpbmVkIGJ5IGEgcGFzc2VkLWluIG9iamVjdCBhbmQgYXJyYXkgb2YgY2hpbGQgZWxlbWVudHNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlU3RyIHRoZSB0YWcgbmFtZSBvZiB0aGUgZWxlbWVudCB0byBiZSByZXR1cm5lZCB5b3Ugd291bGQgdXNlIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoKVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzT2JqIChvcHRpb25hbCkgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGluaXRpYWwgcHJvcGVydGllcy9hdHRyaWJ1dGVzIHlvdSB3YW50IHRoZSBlbGVtZW50IHRvIGhhdmVcbiAqIEBwYXJhbSB7YXJyYXl9IGNoaWxkQXJyIChvcHRpb25hbCkgYW4gb2YgZWxlbWVudCBvYmplY3RzIHRvIGJlIGFwcGVuZGVkIGFzIGNoaWxkcmVuIHRvIHRoaXMgZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IHRoZSBhIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCBjcmVhdGVkIGluIG1lbW9yeVxuICovXG5jb25zdCBFbGVtZW50ID0gKHR5cGVTdHIsIHByb3BzT2JqLCBjaGlsZEFyciA9IG51bGwpID0+IHtcbiAgaWYgKGNoaWxkQXJyICYmICFBcnJheS5pc0FycmF5KGNoaWxkQXJyKSkge1xuICAgIGNoaWxkQXJyID0gW2NoaWxkQXJyXTtcbiAgfVxuXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBPYmplY3QuYXNzaWduKFxuICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZVN0ciksXG4gICAgcHJvcHNPYmpcbiAgKTtcblxuICBpZiAoY2hpbGRBcnIpIHtcbiAgICBjaGlsZEFyci5mb3JFYWNoKChjaGlsZCkgPT4gcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmltcG9ydCBDb250ZW50IGZyb20gXCIuL2NvbXBvbmVudHMvQ29udGVudFwiO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKENvbnRlbnQoKSk7XG4iXSwibmFtZXMiOlsiY2FyZCIsImNsYXNzTmFtZSIsImNhcmRUaXRsZSIsImlubmVyVGV4dCIsImNvbnRlbnQiLCJocmVmIiwib3V0ZXJIVE1MIiwiY2FyZEJvZHkiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImNvbG9ycyIsInRleHRDb2xvcnMiLCJsYXN0SXRlbUluZGV4IiwibGVuZ3RoIiwidGV4dENvbG9yc0RpdiIsImZvckVhY2giLCJjb2xvciIsImluZGV4IiwiY29sb3JDbGFzcyIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJiZ0NvbG9yc0RpdiIsImJnU2hhZGluZ0RpdkRhcmsiLCJpIiwiYmdTaGFkaW5nRGl2TGlnaHQiLCJTZWN0aW9uIiwidGl0bGUiLCJjb250ZW50Q29tcG9uZW50IiwidXNlSG9yaXpvbnRhbFJ1bGUiLCJociIsInRleHQiLCJ0eXBlU3RyIiwicHJvcHNPYmoiLCJjaGlsZEFyciIsIkFycmF5IiwiaXNBcnJheSIsInBhcmVudEVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiZCIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=