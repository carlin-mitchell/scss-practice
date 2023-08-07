import Element from "./Element";

import Card from "./Card";
import Colors from "./Colors";
import Buttons from "./Buttons";
import NavBar from "./NavBar";
import FontSize from "./FontSize";

const Content = () => {
  const Header = (text) =>
    Element("h2", {
      innerText: `${text}`,
      className: ``,
    });
  const Hr = () => Element("hr", { className: `bg-black mt-2` });
  const Section = (title, contentComponent, useHorizontalRule = true) => {
    const hr = useHorizontalRule ? [Hr()] : [];
    return Element("div", {}, [Header(title), contentComponent, ...hr]);
  };

  const content = Element("div", { className: `content p-2` }, [
    Section("Responsive Test", Element("div", { className: "responsiveTest" })),
    Section("Colors", Colors()),
    Section("Cards", Card()),
    Section("Font Size", FontSize()),
    Section("NavBars", NavBar()),
    Section("Buttons", Buttons(), false),
  ]);
  return content;
};

export default Content;
