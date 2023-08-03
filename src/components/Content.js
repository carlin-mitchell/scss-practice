import Element from "./Element";

import Card from "./Card";

const Content = () => {
  const cardsHeader = Element("h2", { innerText: `Cards` });
  const cardComponent = Card();

  const content = Element("div", { className: `content` }, [
    cardsHeader,
    cardComponent,
  ]);
  return content;
};

export default Content;
