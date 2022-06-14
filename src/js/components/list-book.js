import "./item-book.js";

class ListBook extends HTMLElement {
  set books(books) {
    if (books.length > 0) {
      this._books = books;
      this.render();
    } else {
      this.renderEmptyState()
    }
  }

  render() {
    this._books.forEach((book) => {
      const bookItemElement = document.createElement("item-book");
      bookItemElement.book = book;
      this.appendChild(bookItemElement);
    });
  }

  renderEmptyState() {
    this.innerHTML = `<h1 class="text-green" style="text-align: center">Book not found</h1>`;
  }
}

customElements.define("list-book", ListBook);
