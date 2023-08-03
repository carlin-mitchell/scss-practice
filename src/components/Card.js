import Element from "./Element";

const Card = () => {
  const card = Element("div", { className: `card` });

  const cardTitle = Element("h1", {
    innerText: `This is a card title`,
    className: `card-title`,
  });

  const link = Element("a", {
    href: "#",
    innerText: "adipisicing elit",
  }).outerHTML;
  const content = `Lorem ipsum dolor sit amet consectetur ${link}. Recusandae ea similique quos doloremque modi ipsam tempore repellendus facilis dicta quia?`;
  const cardBody = Element("p", {
    className: `card-body`,
    innerHTML: content,
  });

  card.appendChild(cardTitle);
  card.appendChild(cardBody);

  return card;
};

export default Card;
