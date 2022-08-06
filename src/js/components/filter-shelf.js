class FilterShelf extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#filterShelf").value;
  }

  render() {
    this.innerHTML = `
          <div class="box-list-book">
              <div class="filter-container">
                  <span>
                    <i class="fa-solid fa-sort-down"></i>
                  </span>
                  <select id="filterShelf" name="filter-shelf">
                      <option value="all">All</option>
                      <option value="read">Read</option>
                      <option value="unread">Unread</option>
                  </select>
              </div>
          </div>
        `;

    this.querySelector("#filterShelf").addEventListener(
      "change",
      this._clickEvent
    );
  }
}

customElements.define("filter-shelf", FilterShelf);
