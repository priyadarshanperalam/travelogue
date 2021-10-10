class Modal {
  constructor() {
    this.injectHTML();
		this.modal = document.querySelector('.modal');
    this.openModalBtn = document.querySelectorAll('.modal__open');
		this.closeIcon = document.querySelector('.modal__close');
    this.events();
  }

  events() {
		this.closeIcon.addEventListener("click", () => this.closeTheModal());
		document.addEventListener("keyup", e => this.keyPressHandler(e));
  }

	openTheModal() {
		this.modal.classList.add('modal__is-visible');
	}

	closeTheModal() {
		this.modal.classList.remove('modal__is-visible');
	}

	keyPressHandler(e) {
		if (e.keyCode == 27) {
			this.modal.classList.remove('modal__is-visible');
		}
	}

  injectHTML() {
    document.body.insertAdjacentHTML("beforeend", `
			<div class="modal">
				<div class="modal__inner">
					<h2 class="section-title section-title__blue section-title__less-margin">
						<img src="assets/images/icons/mail.svg"> Get in <strong>Touch</strong>
					</h2>
					<div class="wrapper wrapper__narrow">
						<p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>
					</div>
					<div class="social-icons">
						<a href="#" class="social-icons__icon" ><img src="assets/images/icons/facebook.svg"></a>
						<a href="#" class="social-icons__icon" ><img src="assets/images/icons/instagram.svg"></a>
						<a href="#" class="social-icons__icon" ><img src="assets/images/icons/twitter.svg"></a>
						<a href="#" class="social-icons__icon" ><img src="assets/images/icons/youtube.svg"></a>
					</div>
					<div class="modal__close">X</div>
				</div>
			</div>
		`
    );
  }
}

export default Modal;
