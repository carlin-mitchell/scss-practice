import Element from "./Element";

import Card from "./Card";
import Colors from "./Colors";
import Buttons from "./Buttons";

const Content = () => {
  const Header = (text) =>
    Element("h2", {
      innerText: `${text}`,
      className: ``,
    });
  const Hr = () => Element("hr", { className: `bg-black` });
  const Section = (title, contentComponent, useHorizontalRule = true) => {
    const hr = useHorizontalRule ? [Hr()] : [];
    return Element("div", {}, [Header(title), contentComponent, ...hr]);
  };

  const content = Element("div", { className: `content` }, [
    Section("Colors", Colors()),
    Section("Cards", Card()),
    Section("Buttons", Buttons(), true),
  ]);
  return content;
};

export default Content;
