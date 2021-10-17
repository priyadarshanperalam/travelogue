import Axios from "axios";

class ClientArea {
  constructor() {
    this.injectHTML();
    this.form = document.querySelector(".client-area__form");
    this.field = document.querySelector(".client-area__input");
    this.contentArea = document.querySelector(".client-area__content-area");
    this.events();
  }

  events() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.sendRequest();
    });
  }

  sendRequest() {
		let url = '';
		let params = {
			password: this.field.value
		};

    Axios.post(url, params)
      .then((response) => {
        this.form.remove();
        this.contentArea.innerHTML = response.data;
      })
      .catch(() => {
        this.contentArea.innerHTML = `<p class='clinet-area__error>That secret phrase is not correct, try again!</p>`;
        this.field.value = "";
        this.field.focus();
      });
  }

  injectHTML() {
    document.body.insertAdjacentHTML(
      "beforeend",
      `
			<div class="clinet-area">
				<div class="wrapper wrapper__medium">
					<h2>Secret client area</h2>
					<form class="client-area__form">
						<input class="client-area__input" type="text" >
						<button class="btn btn__orange">Submit</button>
					</form>
					<div class="client-area__content-area"></div>
				</div>
			</div>
		`
    );
  }
}

export default ClientArea;
