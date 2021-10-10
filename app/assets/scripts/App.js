import "../styles/style.css";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";

let stickyHeader = new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 90);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 80);
new MobileMenu();
let modal;

document.querySelectorAll(".modal__open").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    if (typeof modal == "undefined") {
			import(/* webpackChunkName: "modal"*/ "./modules/Modal")
      .then((x) => {
        modal = new x.default();
				setTimeout(() => modal.openTheModal(), 200);
      })
      .catch(() => console.log("There was a problem."));
		} else {
			modal.openTheModal();
		}
  });
});

if (module.hot) {
  module.hot.accept();
}
