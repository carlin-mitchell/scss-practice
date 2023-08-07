import Element from "./Element";

const NavBar = () => {
  //
  const nav = Element("nav", {
    className: `navbar mb-4 bg-primary text-white p-1
  `,
  });

  const siteTitle = (innerText, className) =>
    Element("h2", { innerText, className });
  const p = (innerText, className) => Element("p", { innerText, className });

  nav.appendChild(
    Element("div", { className: "container" }, [
      siteTitle("Custom CSS Library"),
      p("A lightweight css library I made myself"),
    ])
  );
  return nav;
};

export default NavBar;
