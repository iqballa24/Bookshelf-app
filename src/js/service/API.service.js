export default class APIService {
  constructor() {
    this.form = document.getElementById("form");
    this.listBook = document.querySelector("#list-book");
    this.formContainer = document.querySelector(".form-container");
    this.title = document.getElementById("title");
    this.author = document.getElementById("author");
    this.year = document.getElementById("year");
    this.categhory = document.getElementById("categhory");
    this.isComplete = document.getElementById("isComplete");
    this.textTotal = document.querySelector("#textTotal");
    this.textTotalRead = document.querySelector("#textTotalRead");
    this.textTotalUnread = document.querySelector("#textTotalUnread");
  }

  generateId() {
    return +new Date();
  }

  resetForm() {
    return this.form.reset();
  }

  generateTodoObject(id, title, author, year, categhory, isComplete) {
    return {
      id,
      title,
      author,
      year,
      categhory,
      isComplete,
    };
  }

  clearListBooks() {
    this.listBook.innerHTML = "";
  }

  renderListBook(books) {
    const bookListElement = document.createElement("list-book");
    bookListElement.books = books;

    return this.listBook.appendChild(bookListElement);
  }

  findIndexBook(idBook, books) {
    return books.findIndex((book) => book.id == idBook);
  }

  toggleShowForm(show) {
    return show
      ? (this.formContainer.style.display = "block")
      : (this.formContainer.style.display = "none");
  }

  getBookById(idBook, books) {
    let data = books.find(({ id }) => id == idBook);
    return data;
  }

  getValueForm() {
    const title = this.title.value.trim();
    const author = this.author.value.trim();
    const year = this.year.value.trim();
    const categhory = this.categhory.value.trim();
    const isComplete = this.isComplete.checked;

    return { title, author, year, categhory, isComplete };
  }

  addBook() {
    const data = this.getValueForm();
    const id = this.generateId();
    const dataBook = this.generateTodoObject(
      id,
      data.title,
      data.author,
      Number(data.year),
      data.categhory,
      data.isComplete
    );

    return dataBook;
  }

  deleteBook(idBook, books) {
    return books.filter(({ id }) => id != idBook);
  }

  updateBook(idBook, books) {
    const data = this.getValueForm();
    const index = this.findIndexBook(idBook, books);

    books[index].title = data.title;
    books[index].author = data.author;
    books[index].year = Number(data.year);
    books[index].categhory = data.categhory;
    books[index].isComplete = data.isComplete;

    return books;
  }

  switchStatusRead(idBook, books) {
    const index = this.findIndexBook(idBook, books);
    books[index].isComplete = !books[index].isComplete;

    return books;
  }

  onSubmitForm(action) {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      action;
      this.formContainer.style.display = "none";
      this.resetForm();
    });
  }

  getTotalShelf(books){  
    const totalRead = books.filter((book) => {
      return book.isComplete;
    });
  
    const totalUnread = books.filter((book) => {
      return !book.isComplete;
    });
  
    return (
      (this.textTotal.innerHTML = books.length),
      (this.textTotalRead.innerHTML = totalRead.length),
      (this.textTotalUnread.innerHTML = totalUnread.length)
    );
  };
}
