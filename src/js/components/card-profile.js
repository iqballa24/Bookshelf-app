import iconRocket from "../../../public/icon/icon-rocket.svg";
import randomAvatar from "../utils/randomAvatar";

class CardProfile extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const avatar = randomAvatar();
    this.innerHTML = `
        <div class="card-container">
            <div class="card-profile">
                <div class="header flex-row">
                    <div class="img-wrapper w-lg-12 w-4">
                    <img
                        width="100%"
                        src="${avatar}"
                        alt="image profile"
                    />
                    </div>
                    <div class="text-wrapper w-lg-12 w-8 align-self-center">
                    <h1 id="userName" class="text-green">Tester</h1>
                    <p class="text-light_green">
                        <img
                        src="${iconRocket}"
                        alt="icon-rocket"
                        width="100%"
                        style="max-width: 1.6rem"
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
