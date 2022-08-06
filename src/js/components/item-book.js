import "./tag-box.js";
class ItemBook extends HTMLElement {
  set book(book) {
    this._book = book;
    this.render();
  }

  render() {
    let status = this._book.isComplete ? "read" : "unread";
    this.innerHTML = `
        <div class="card-container" style="margin-bottom: 5rem;">
            <div class="card-item-book">
                <div class="header flex-row">
                    <div class="w-sm-12 w-6 text-wrapper">
                      <h1 class="text-light_green" style="margin-bottom: .5rem;">${this._book.title}</h1>
                      <p class="text-light_green">${this._book.author}, ${this._book.year}</p>
                    </div>
                    <div class="w-6 img-wrapper sm-hidden">
                      <div class="img-box">
                          <object data="public/icon/icon-${this._book.categhory}.svg" aria-labelledby="${this._book.categhory}"></object>
                      </div>
                    </div>
                </div>
                <div class="footer flex-row">
                    <div class="w-sm-12 w-8 flex-row tag-wrapper">
                      <tag-box class="" text="${this._book.categhory}"></tag-box>
                      <tag-box class="tag-${status}" text="${status}"></tag-box>
                    </div>
                    <div class="w-sm-12 w-4 action-wrapper">
                      <div class="flex-row">
                        <button class="w-4 box-switch" id="btnSwitch" type="button" data-id="${this._book.id}">
                          <img src="public/icon/icon-switch.svg" width="80%" alt="icon-switch"/>
                        </button>
                        <button class="w-4 box-edit" id="btnEdit" type="button" data-id="${this._book.id}">
                          <img src="public/icon/icon-pen.svg" width="80%" alt="icon-pen"/>
                        </button>
                        <button class="w-4 box-trash" id="btnTrash" type="button" data-id="${this._book.id}">
                          <img src="public/icon/icon-trash.svg" width="80%" alt="icon-trash"/>
                        </button>
                      </div>
                    </div>
                </div>
            </div>              
        </div>
      `;
  }
}

customElements.define("item-book", ItemBook);
