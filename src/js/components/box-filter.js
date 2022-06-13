import "./search-bar.js"
import "./filter-categhory.js"
import "./filter-shelf.js"

class BoxFilter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="box-filter flex-row">
            <div class="box-item w-md-12 w-6">
                <search-bar></search-bar>
            </div>
            <div class="box-item w-md-6 w-3">
              <filter-categhory></filter-categhory>
            </div>
            <div class="box-item w-md-6 w-3">
              <filter-shelf></filter-shelf>
            </div>
        </div>
      `;
  }
}

customElements.define("box-filter", BoxFilter);
