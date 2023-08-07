import Element from "./Element";

const Colors = () => {
  const colors = Element("div", {});

  const colorElement = (className, textBlack = false, bgBlack = false) =>
    Element("span", {
      className: `${className} ${textBlack ? " text-black" : ""} ${
        textBlack === "white" ? "text-white" : ""
      } ${bgBlack ? " bg-black" : ""} mb-1 display-i-b white-space-no-wrap`,
      innerText: className,
    });

  const pipeElement = () =>
    Element("div", {
      className: `text-black display-i-b mb-1`,
      innerText: "|",
    });

  const sharedContainerClasses = "display-f flex-wrap";

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
  const textColorsDiv = Element("div", {
    className: sharedContainerClasses,
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
  const bgColorsDiv = Element("div", {
    className: sharedContainerClasses,
  });
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
  const bgShadingDiv = Element("div", {
    className: sharedContainerClasses,
  });
  bgShadingElems.forEach((elem) => bgShadingDiv.appendChild(elem));

  const sharedClasses = `cursor-pointer`;
  const hoverDivElems = [
    colorElement("text-hover-purple " + sharedClasses),
    pipeElement(),
    colorElement("bg-hover-orange " + sharedClasses),
  ];
  const hoverColorDiv = Element("div", { className: `display-f` });
  hoverDivElems.forEach((element) => hoverColorDiv.appendChild(element));

  colors.appendChild(textColorsDiv);
  colors.appendChild(bgColorsDiv);
  colors.appendChild(bgShadingDiv);
  colors.appendChild(hoverColorDiv);
  return colors;
};

export default Colors;
