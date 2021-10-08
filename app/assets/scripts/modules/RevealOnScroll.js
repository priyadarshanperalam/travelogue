import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class RevealOnScroll {
	constructor(els, thresholdPercent) {
		this.itemsToReveal = els;
		this.thresholdPercent = thresholdPercent;
		this.browserHeight = window.innerHeight;
		this.hideInitially();
		this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
		this.resizeDebounce = debounce(() => {
			console.log('resized');
			this.browserHeight = window.innerHeight;
		}, 333);
		this.events();
	}

	events() {
		window.addEventListener('scroll', this.scrollThrottle);
		window.addEventListener('resize', this.resizeDebounce);
	}

	calcCaller() {
		console.log("call scoll event");
		this.itemsToReveal.forEach(el => {
			if (!el.isRevealed) {
				this.calculateIfScrolledTo(el);
			}
		});
	}

	calculateIfScrolledTo(el) {
		if (window.scrollY + this.browserHeight > el.offsetTop) {
			console.log("calculating");
			let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100;
			if (scrollPercent < this.thresholdPercent) {
				el.classList.add('reveal-item__is-visible');
				el.isRevealed = true;
				if (el.isLastItem) {
					window.removeEventListener('scroll', this.scrollThrottle);
					window.removeEventListener('resize', this.resizeDebounce);
				}
			}
		}
	}

	hideInitially() {
		this.itemsToReveal.forEach(el => {
			el.classList.add('reveal-item');
			el.isRevealed = false;
		});
		this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
	}
}

export default RevealOnScroll;
