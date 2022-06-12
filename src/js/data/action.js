const generateId = () => {
  return +new Date();
};

const generateTodoObject = (id, title, author, year, categhory, isComplete) => {
  return {
    id,
    title,
    author,
    year,
    categhory,
    isComplete,
  };
};

const resetForm = () => {
  const form = document.getElementById("form");
  return form.reset();
};

const renderListBook = (books) => {
  const bookListElement = document.createElement("list-book");
  bookListElement.books = books;

  return document.querySelector("#list-book").appendChild(bookListElement);
};

const findIndexBook = (idBook, books) => {
  return books.findIndex((book => book.id == idBook))
}

const getBookById = (idBook, books) => {
  let data = books.find(({ id }) => id == idBook);
  return data;
};

const addBook = (books) => {
  const id = generateId();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const year = document.getElementById("year").value;
  const categhory = document.getElementById("categhory").value;
  const isComplete = document.getElementById("isComplete").checked;

  const dataBook = generateTodoObject(
    id,
    title,
    author,
    year,
    categhory,
    isComplete
  );
  return books.push(dataBook);
};

const deleteBook = (idBook, books) => {
  return books.filter(({ id }) => id != idBook);
};

const switchStatusRead = (idBook, books) => {
  const index = findIndexBook(idBook, books)
  books[index].isComplete = !books[index].isComplete;

  return books;
};

export {
  generateTodoObject,
  renderListBook,
  getBookById,
  addBook,
  deleteBook,
  switchStatusRead,
  resetForm,
};
