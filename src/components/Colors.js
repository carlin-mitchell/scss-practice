import Element from "./Element";

const Colors = () => {
  const colors = Element("div", {});

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

  const textColorsDiv = Element("div");
  textColors.forEach((color, index) => {
    const colorClass = "text-" + color;
    const element = Element(
      "span",
      {
        className: [
          `${colorClass} ${index === lastItemIndex ? "bg-black" : ""}`,
        ],
        innerText: " " + color + " text" + " ",
      },
      [
        Element("div", {
          innerText: `${index === lastItemIndex ? "" : "|"}`,
          className: `text-black inline-block mb-sm  `,
        }),
      ]
    );
    element.classList.add(`text-${color}`);
    textColorsDiv.appendChild(element);
  });

  const bgColorsDiv = Element("div", { className: `display-flex-base` });
  textColors.forEach((color, index) => {
    bgColorsDiv.appendChild(
      Element("span", {
        className: `bg-${color} text-nowrap mb-sm p-xs ${
          index === lastItemIndex ? "text-black" : "text-white"
        }`,
        innerText: " " + "bg-" + color + " ",
      })
    );
    bgColorsDiv.appendChild(
      Element("div", {
        innerText: `${index === lastItemIndex ? "" : "|"}`,
        className: `text-black inline-block p-xs`,
      })
    );
  });

  const bgShadingDivDark = Element("div", { className: `display-flex-base` });
  for (let i = 1; i <= 9; i++) {
    bgShadingDivDark.appendChild(
      Element("span", {
        className: `bg-primary-dark-${i} text-nowrap mb-sm p-xs text-white`,
        innerText: `primary dark ${i}`,
      })
    );
    bgShadingDivDark.appendChild(
      Element("div", {
        innerText: `${i === 9 ? "" : "|"}`,
        className: `text-black inline-block p-xs`,
      })
    );
  }

  const bgShadingDivLight = Element("div", { className: `display-flex-base` });
  for (let i = 1; i <= 9; i++) {
    bgShadingDivLight.appendChild(
      Element("span", {
        className: `bg-primary-light-${i} text-nowrap mb-sm p-xs text-black`,
        innerText: `primary light ${i}`,
      })
    );
    bgShadingDivLight.appendChild(
      Element("div", {
        innerText: `${i === 9 ? "" : "|"}`,
        className: `text-black inline-block p-xs`,
      })
    );
  }

  colors.appendChild(textColorsDiv);
  colors.appendChild(bgColorsDiv);
  colors.appendChild(bgShadingDivDark);
  colors.appendChild(bgShadingDivLight);
  return colors;
};

export default Colors;
