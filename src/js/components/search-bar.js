class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement").value;
  }

  render() {
    this.innerHTML = `
        <div class="search-container">
          <span>
            <i class="fa-solid fa-search"></i>
          </span>
            <input placeholder="Search" id="searchElement" type="text">
        </div>
    `;

    this.querySelector("#searchElement").addEventListener(
      "keyup",
      this._clickEvent
    );
  }
}

customElements.define("search-bar", SearchBar);
