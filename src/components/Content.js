import Element from "./Element";

import Card from "./Card";
import Colors from "./Colors";

const Content = () => {
  const Header = (text) =>
    Element("h2", {
      innerText: `${text}`,
      className: ``,
    });
  const Hr = () => Element("hr", { className: `bg-black` });
  const Section = (title, contentComponent) =>
    Element("div", {}, [Header(title), contentComponent, Hr()]);

  const content = Element("div", { className: `content` }, [
    Section("Colors", Colors()),
    Section("Cards", Card()),
  ]);
  return content;
};

export default Content;
