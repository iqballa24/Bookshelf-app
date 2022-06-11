class FilterCateghory extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#filterCateghory").value;
  }

  render() {
    this.innerHTML = `
        <div class="box-list-book">
            <div class="filter-container">
                <img src="public/icon/icon-filter.svg">
                <select id="filterCateghory" name="filter-categhory">
                    <option value="all">All</option>
                    <option value="science">Science</option>
                    <option value="education">Education</option>
                    <option value="nature">Nature</option>
                    <option value="math">Math</option>
                    <option value="general">General</option>
                    <option value="animal">Animal</option>
                    <option value="animal">Animal</option>
                    <option value="technology">Technology</option>
                    <option value="kids">Kids</option>
                </select>
            </div>
        </div>
      `;

    this.querySelector("#filterCateghory").addEventListener(
      "change",
      this._clickEvent
    );
  }
}

customElements.define("filter-categhory", FilterCateghory);
