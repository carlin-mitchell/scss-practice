import Element from "./Element";

const Buttons = () => {
  const buttonsContainer = Element("div", { className: "display-flex-base" });
  const button = (className, innerText) =>
    Element("button", { className, innerText });

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

export default Buttons;
