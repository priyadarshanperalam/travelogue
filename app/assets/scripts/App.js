import '../styles/style.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

new RevealOnScroll(document.querySelectorAll('.feature-item'), 90);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 80);
new MobileMenu();

if (module.hot) {
 	module.hot.accept();
}

