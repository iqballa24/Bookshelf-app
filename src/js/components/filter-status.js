class FilterStatus extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#filterStatus").value;
  }

  render() {
    this.innerHTML = `
          <div class="box-list-book">
              <div class="filter-container">
                  <object data="public/icon/icon-filter.svg"> </object>
                  <select id="filterStatus" name="filter-status">
                      <option value="all">All</option>
                      <option value="read">Read</option>
                      <option value="unread">Unread</option>
                  </select>
              </div>
          </div>
        `;

    this.querySelector("#filterStatus").addEventListener(
      "change",
      this._clickEvent
    );
  }
}

customElements.define("filter-status", FilterStatus);
