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
            <img src="public/icon/icon-search.svg">
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
