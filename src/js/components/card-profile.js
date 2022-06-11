class CardProfile extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="card-container">
            <div class="card-profile">
                <div class="header flex-row">
                    <div class="img-wrapper w-lg-12 w-4">
                    <img
                        src="./public/img/profile/profile-1.png"
                        alt="image profile"
                    />
                    </div>
                    <div class="text-wrapper w-lg-12 w-8 align-self-center">
                    <h1 class="text-green">Tengku Iqbal Nugraha</h1>
                    <p class="text-light_green">
                        <img
                        src="./public/icon/icon-rocket.svg"
                        alt="icon-rocket"
                        />
                        Front end developer
                    </p>
                    </div>
                </div>
                <div class="footer flex-row">
                    <div class="box-stats w-4">
                    <p class="text-sm text-dark_grey">Total</p>
                    <h1 class="text-dark_grey">4</h1>
                    </div>
                    <div class="box-stats w-4">
                    <p class="text-sm text-dark_grey">Read</p>
                    <h1 class="text-dark_grey">3</h1>
                    </div>
                    <div class="box-stats w-4">
                    <p class="text-sm text-dark_grey">Unread</p>
                    <h1 class="text-dark_grey">1</h1>
                    </div>
                </div>
            </div>
        </div>
        `;
  }
}

customElements.define("card-profile", CardProfile);
