import { categhory } from "../constant/index.js";
class Form extends HTMLElement {
  connectedCallback() {
    this.isShow = this.getAttribute("isShow") || null;
    this.render();
  }

  render() {
    let itemCateghory = "";
    categhory.map((item) => {
      itemCateghory += `<option value="${item.value}">${item.text}</option>`;
    });

    this.innerHTML = `
    <div class="form-container">
        <div class="form-content">
            <span class="close">&times;</span>
            <h1 class="text-green" style="margin-bottom: 3.5rem">New Book</h1>
            <form action="#" id="form">
                <label for="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Fill title"
                    required
                />
                <label for="title">Author</label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    placeholder="Fill author"
                    required
                />
                <label for="yaer">Year</label>
                <input
                    type="text"
                    id="year"
                    name="year"
                    placeholder="Fill year"
                    required
                />
                <label for="title">Categhory</label>
                <select id="categhory" name="categhory" required>
                    <option value="" disabled selected>Select categhory</option>
                    ${itemCateghory}
                </select>
                <input id="isComplete" type="checkbox"> <label style="margin-left: .8rem">Read</label>
                <div class="flex-row" style="margin-top: 5rem">
                <div class="w-sm-12 w-6">
                    <button id="btnReset" type="button" class="btn btn-reset">Reset</button>
                </div>
                <div class="w-sm-12 w-6">
                    <button type="submit" class="btn btn-save">Save</button>
                </div>
                </div>
            </form>
        </div>
    </div>`;

    this.querySelector(".close").addEventListener("click", function () {
      let formContainer = document.querySelector(".form-container");
      formContainer.style.display = "none";
    });
  }
}

customElements.define("form-input", Form);
