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

const clearListBooks = () => {
  document.querySelector("#list-book").innerHTML = "";
};

const renderListBook = (books) => {
  const bookListElement = document.createElement("list-book");
  bookListElement.books = books;

  return document.querySelector("#list-book").appendChild(bookListElement);
};

const toggleShowForm = (show) => {
  const formContainer = document.querySelector(".form-container");

  return show
    ? (formContainer.style.display = "block")
    : (formContainer.style.display = "none");
};

const findIndexBook = (idBook, books) => {
  return books.findIndex((book) => book.id == idBook);
};

const getBookById = (idBook, books) => {
  let data = books.find(({ id }) => id == idBook);
  return data;
};

const getValueForm = () => {
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const year = document.getElementById("year").value.trim();
  const categhory = document.getElementById("categhory").value.trim();
  const isComplete = document.getElementById("isComplete").checked;

  return { title, author, year, categhory, isComplete };
};

const addBook = () => {
  const data = getValueForm();
  const id = generateId();
  const dataBook = generateTodoObject(
    id,
    data.title,
    data.author,
    data.year,
    data.categhory,
    data.isComplete
  );
  return dataBook;
};

const deleteBook = (idBook, books) => {
  return books.filter(({ id }) => id != idBook);
};

const updateBook = (idBook, books) => {
  const data = getValueForm();
  const index = findIndexBook(idBook, books);

  books[index].title = data.title;
  books[index].author = data.author;
  books[index].year = data.year;
  books[index].categhory = data.categhory;
  books[index].isComplete = data.isComplete;

  return books;
};

const switchStatusRead = (idBook, books) => {
  const index = findIndexBook(idBook, books);
  books[index].isComplete = !books[index].isComplete;

  return books;
};

const onSubmitForm = (action) => {
  const formContainer = document.querySelector(".form-container");
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    action;
    formContainer.style.display = "none";
    resetForm();
  });
};

const getTotalShelf = (books) => {
  const textTotal = document.querySelector("#textTotal");
  const textTotalRead = document.querySelector("#textTotalRead");
  const textTotalUnread = document.querySelector("#textTotalUnread");

  const totalRead = books.filter((book) => {
    return book.isComplete;
  });

  const totalUnread = books.filter((book) => {
    return !book.isComplete;
  });

  return (
    (textTotal.innerHTML = books.length),
    (textTotalRead.innerHTML = totalRead.length),
    (textTotalUnread.innerHTML = totalUnread.length)
  );
};

export {
  generateTodoObject,
  clearListBooks,
  renderListBook,
  toggleShowForm,
  getBookById,
  getTotalShelf,
  addBook,
  updateBook,
  deleteBook,
  switchStatusRead,
  resetForm,
  onSubmitForm,
};
