import Element from "./Element";

import Card from "./Card";
import Colors from "./Colors";

const Content = () => {
  const cardsHeader = Element("h2", { innerText: `Cards` });
  const colorsHeader = Element("h2", { innerText: `Colors` });

  const content = Element("div", { className: `content` }, [
    colorsHeader,
    Colors(),
    Element("hr", { className: `bg-black` }),
    cardsHeader,
    Card(),
    Element("hr", { className: `bg-black` }),
  ]);
  return content;
};

export default Content;
