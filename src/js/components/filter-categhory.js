import { categhory } from "../constant/index.js";
class FilterCateghory extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#filterElement").value;
  }

  render() {
    let itemCateghory = "";
    categhory.map((item) => {
      itemCateghory += `<option value="${item.value}">${item.text}</option>`;
    });

    this.innerHTML = `
        <div class="box-list-book">
            <div class="filter-container">
                <span>
                  <i class="fa-solid fa-sort-down"></i>
                </span>
                <select id="filterCathegory" name="filter-categhory">
                    <option value="all">All</option>
                    ${itemCateghory}
                </select>
            </div>
        </div>
      `;

    this.querySelector("#filterCathegory").addEventListener(
      "change",
      this._clickEvent
    );
  }
}

customElements.define("filter-categhory", FilterCateghory);
