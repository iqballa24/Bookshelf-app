import "./item-book.js";

class ListBook extends HTMLElement {
  set books(books) {
    this._books = books;
    this.render();
  }

  render() {
    this._books.forEach((book) => {
      const bookItemElement = document.createElement("item-book");
      bookItemElement.book = book;
      this.appendChild(bookItemElement);
    });
  }

  renderError() {
    this.innerHTML = `
        <style>
            .placeholder {
            font-weight: lighter;
            color: rgba(0,0,0,0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            }
            
        </style>`;
    this.innerHTML += `<h2 class="placeholder">Tester</h2>`;
  }
}

customElements.define("list-book", ListBook);
