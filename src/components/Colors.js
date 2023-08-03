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
    "white",
  ];

  const lastItemIndex = textColors.length - 1;

  const textColorsDiv = Element("div");
  textColors.forEach((color, index) => {
    textColorsDiv.appendChild(
      Element(
        "span",
        {
          className: `text-${color} ${
            index === lastItemIndex ? "bg-black" : ""
          }`,
          innerText: " " + color + " text" + " ",
        },
        [
          Element("div", {
            innerText: `${index === lastItemIndex ? "" : "|"}`,
            className: `text-black inline-block mb-sm  `,
          }),
        ]
      )
    );
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

  colors.appendChild(textColorsDiv);
  colors.appendChild(bgColorsDiv);
  return colors;
};

export default Colors;
