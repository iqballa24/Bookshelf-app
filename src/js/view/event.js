import searchStates from "./search.js";
import {
  BOOKS_STORAGE_KEY,
  USER_STORAGE_KEY,
  RENDER_EVENT,
} from "../constant/index.js";
import { Swal, ToastShow } from "../swal.js";
import {
  renderListBook,
  clearListBooks,
  toggleShowForm,
  getBookById,
  getTotalShelf,
  addBook,
  updateBook,
  deleteBook,
  switchStatusRead,
  resetForm,
  onSubmitForm,
} from "./action.js";
import {
  isStorageExist,
  loadDataStorage,
  saveToStorage,
  checkUserLogin,
} from "./main.js";

const searchElement = document.querySelector("#searchElement");
const filterCathegory = document.querySelector("#filterCathegory");
const filterShelf = document.querySelector("#filterShelf");
const btnReset = document.querySelector("#btnReset");
const btnSave = document.querySelector("#btnSave");
const btnAdd = document.querySelector("#btnAdd");
let initialBooks = [];
let dataFilter = [];
let idBook = null;

const eventActionItemBook = () => {
  // TRIGER ON CLICK BTN DELETE
  const btnTrash = document.querySelectorAll("#btnTrash");
  for (const btn of btnTrash) {
    btn.addEventListener("click", () => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#829C4E",
        cancelButtonColor: "#FF9696",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          initialBooks = deleteBook(btn.dataset.id, initialBooks);
          dataFilter = searchStates(
            searchElement.value,
            initialBooks,
            filterCathegory.value,
            filterShelf.value
          );
          saveToStorage(initialBooks, BOOKS_STORAGE_KEY);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          document.dispatchEvent(new Event(RENDER_EVENT));
        }
      });
    });
  }

  // TRIGER ON CLICK BTN EDIT
  const btnEdit = document.querySelectorAll("#btnEdit");
  for (const btn of btnEdit) {
    btn.addEventListener("click", () => {
      const data = getBookById(btn.dataset.id, initialBooks);

      document.getElementById("title").value = data.title;
      document.getElementById("author").value = data.author;
      document.getElementById("year").value = data.year;
      document.getElementById("categhory").value = data.categhory;
      document.getElementById("isComplete").checked = data.isComplete;

      toggleShowForm(true);
      idBook = btn.dataset.id;
      document.dispatchEvent(new Event(RENDER_EVENT));
    });
  }

  // TRIGER ON CLICK BTN SWITCH
  const btnSwitch = document.querySelectorAll("#btnSwitch");
  for (const btn of btnSwitch) {
    btn.addEventListener("click", () => {
      initialBooks = switchStatusRead(btn.dataset.id, initialBooks);
      dataFilter = searchStates(
        searchElement.value,
        initialBooks,
        filterCathegory.value,
        filterShelf.value
      );
      saveToStorage(initialBooks, BOOKS_STORAGE_KEY);
      document.dispatchEvent(new Event(RENDER_EVENT));
    });
  }
};

searchElement.addEventListener("keyup", () => {
  clearListBooks();

  if (searchElement.value == "") {
    if (filterCathegory.value == "all" && filterShelf.value == "all") {
      renderListBook(initialBooks);
    } else {
      dataFilter = searchStates(
        searchElement.value,
        initialBooks,
        filterCathegory.value,
        filterShelf.value
      );
      renderListBook(dataFilter);
    }
  } else {
    dataFilter = searchStates(
      searchElement.value,
      initialBooks,
      filterCathegory.value,
      filterShelf.value
    );
    renderListBook(dataFilter);
  }
  eventActionItemBook();
});

filterCathegory.addEventListener("change", () => {
  clearListBooks();

  if (filterCathegory.value == "all") {
    if (searchElement.value == "" && filterShelf.value == "all") {
      renderListBook(initialBooks);
    } else {
      dataFilter = searchStates(
        searchElement.value,
        initialBooks,
        filterCathegory.value,
        filterShelf.value
      );
      renderListBook(dataFilter);
    }
  } else {
    dataFilter = searchStates(
      searchElement.value,
      initialBooks,
      filterCathegory.value,
      filterShelf.value
    );
    renderListBook(dataFilter);
  }
  eventActionItemBook();
});

filterShelf.addEventListener("change", () => {
  clearListBooks();
  if (filterShelf.value == "all") {
    if (searchElement.value == "" && filterCathegory.value == "all") {
      renderListBook(initialBooks);
    } else {
      dataFilter = searchStates(
        searchElement.value,
        initialBooks,
        filterCathegory.value,
        filterShelf.value
      );
      renderListBook(dataFilter);
    }
  } else {
    dataFilter = searchStates(
      searchElement.value,
      initialBooks,
      filterCathegory.value,
      filterShelf.value
    );
    renderListBook(dataFilter);
  }
  eventActionItemBook();
});

btnAdd.addEventListener("click", () => {
  toggleShowForm(true);
});

btnReset.addEventListener("click", () => {
  resetForm();
});

btnSave.addEventListener("click", (e) => {
  e.preventDefault()
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const year = document.getElementById("year").value;
  const categhory = document.getElementById("categhory").value;
  const isComplete = document.getElementById("isComplete").checked;
  if (
    title == "" ||
    author == "" ||
    year == "" ||
    categhory == "" ||
    isComplete == ""
  ) {
    return;
  }
  if (idBook != null) {
    onSubmitForm(initialBooks = updateBook(idBook, initialBooks));
    saveToStorage(initialBooks, BOOKS_STORAGE_KEY);
    ToastShow("success", "Edit data succesfully");
    idBook = null;
  } else {
    onSubmitForm(initialBooks.push(addBook(initialBooks)));
    saveToStorage(initialBooks, BOOKS_STORAGE_KEY);
    ToastShow("success", "Add data succesfully");
  }
  dataFilter = searchStates(
    searchElement.value,
    initialBooks,
    filterCathegory.value,
    filterShelf.value
  );
  document.dispatchEvent(new Event(RENDER_EVENT));
});

document.addEventListener("DOMContentLoaded", () => {
  renderListBook(initialBooks);
  document.dispatchEvent(new Event(RENDER_EVENT));

  if (isStorageExist) {
    loadDataStorage(initialBooks);
    if (checkUserLogin() == false) {
      return (window.location.pathname = "Bookshelf-app/login.html");
    } else {
      const serializeData = localStorage.getItem(USER_STORAGE_KEY);
      const data = JSON.parse(serializeData);
      document.getElementById("userName").innerText = data.name;
      document.getElementById("userProfession").innerText = data.profession;
    }
  }
});

document.addEventListener(RENDER_EVENT, function () {
  getTotalShelf(initialBooks);
  clearListBooks();

  if (
    searchElement.value != "" ||
    filterCathegory.value != "all" ||
    filterShelf.value != "all"
  ) {
    renderListBook(dataFilter);
  } else {
    renderListBook(initialBooks);
  }
  eventActionItemBook();
});
