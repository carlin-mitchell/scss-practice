import Element from "./Element";

const FontSize = () => {
  const fonts = Element("div", {});
  const example = (innerText, className) => {
    return Element("div", { className, innerText });
  };

  const sharedClasses = " mb-1";
  const sizeClasses = ["font-sm", "font-md", "font-lg", "font-xl", "font-xxl"];
  sizeClasses.forEach((classStr) =>
    fonts.appendChild(example(classStr, classStr + sharedClasses))
  );

  return fonts;
};

export default FontSize;
