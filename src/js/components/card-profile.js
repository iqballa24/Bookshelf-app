class CardProfile extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const avatar = [
      "profile-1",
      "profile-2",
      "profile-3",
      "profile-4",
      "profile-5",
      "profile-6",
      "profile-7",
      "profile-8",
      "profile-9",
      "profile-10",
      "profile-11",
      "profile-12",
      "profile-13",
      "profile-14",
      "profile-15",
    ];
    const randomAvatar = avatar[Math.floor(Math.random() * avatar.length)];
    this.innerHTML = `
        <div class="card-container">
            <div class="card-profile">
                <div class="header flex-row">
                    <div class="img-wrapper w-lg-12 w-4">
                    <img
                        src="./public/img/profile/${randomAvatar}.png"
                        alt="image profile"
                    />
                    </div>
                    <div class="text-wrapper w-lg-12 w-8 align-self-center">
                    <h1 id="userName" class="text-green">Tester</h1>
                    <p class="text-light_green">
                        <img
                        src="./public/icon/icon-rocket.svg"
                        alt="icon-rocket"
                        />
                        <span id="userProfession">Tester<span>
                    </p>
                    </div>
                </div>
                <div class="footer flex-row">
                    <div class="box-stats w-4">
                    <p class="text-sm text-dark_grey">Total</p>
                    <h1 id="textTotal" class="text-dark_grey">0</h1>
                    </div>
                    <div class="box-stats w-4">
                    <p class="text-sm text-dark_grey">Read</p>
                    <h1 id="textTotalRead" class="text-dark_grey">0</h1>
                    </div>
                    <div class="box-stats w-4">
                    <p class="text-sm text-dark_grey">Unread</p>
                    <h1 id="textTotalUnread" class="text-dark_grey">0</h1>
                    </div>
                </div>
            </div>
        </div>
        `;
  }
}

customElements.define("card-profile", CardProfile);
