import "./components/card-profile.js";
import "./components/box-filter.js";
import "./components/list-book.js";
import "./components/form.js";

import searchStates from "./utils/search.js";
import {
  BOOKS_STORAGE_KEY,
  USER_STORAGE_KEY,
  RENDER_EVENT,
} from "./constant/index.js";
import { Swal, ToastShow } from "./vendor.js";
import StorageService from "./service/storage.service.js";
import APIService from "./service/API.service.js";

const apiService = new APIService();
const storageService = new StorageService(
  BOOKS_STORAGE_KEY,
  USER_STORAGE_KEY,
  RENDER_EVENT
);

const searchElement = document.querySelector("#searchElement");
const filterCathegory = document.querySelector("#filterCathegory");
const filterShelf = document.querySelector("#filterShelf");
const btnReset = document.querySelector("#btnReset");
const btnSave = document.querySelector("#btnSave");
const btnAdd = document.querySelector("#btnAdd");

let initialBooks = [];
let dataFilter = [];
let idBook = null;
let debounce;

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
          initialBooks = apiService.deleteBook(btn.dataset.id, initialBooks);
          dataFilter = searchStates(
            searchElement.value,
            initialBooks,
            filterCathegory.value,
            filterShelf.value
          );
          storageService.saveToStorage(initialBooks, BOOKS_STORAGE_KEY);
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
      const data = apiService.getBookById(btn.dataset.id, initialBooks);

      document.getElementById("title").value = data.title;
      document.getElementById("author").value = data.author;
      document.getElementById("year").value = data.year;
      document.getElementById("categhory").value = data.categhory;
      document.getElementById("isComplete").checked = data.isComplete;

      apiService.toggleShowForm(true);
      idBook = btn.dataset.id;
      document.dispatchEvent(new Event(RENDER_EVENT));
    });
  }

  // TRIGER ON CLICK BTN SWITCH
  const btnSwitch = document.querySelectorAll("#btnSwitch");
  for (const btn of btnSwitch) {
    btn.addEventListener("click", () => {
      initialBooks = apiService.switchStatusRead(btn.dataset.id, initialBooks);
      dataFilter = searchStates(
        searchElement.value,
        initialBooks,
        filterCathegory.value,
        filterShelf.value
      );
      storageService.saveToStorage(initialBooks, BOOKS_STORAGE_KEY);
      document.dispatchEvent(new Event(RENDER_EVENT));
    });
  }
};

searchElement.addEventListener("keyup", () => {
  clearTimeout(debounce);

  debounce = setTimeout(() => {
    apiService.clearListBooks();

    if (searchElement.value == "") {
      if (filterCathegory.value == "all" && filterShelf.value == "all") {
        apiService.renderListBook(initialBooks);
      } else {
        dataFilter = searchStates(
          searchElement.value,
          initialBooks,
          filterCathegory.value,
          filterShelf.value
        );
        apiService.renderListBook(dataFilter);
      }
    } else {
      dataFilter = searchStates(
        searchElement.value,
        initialBooks,
        filterCathegory.value,
        filterShelf.value
      );
      apiService.renderListBook(dataFilter);
    }
    eventActionItemBook();
  }, 600);
});

filterCathegory.addEventListener("change", () => {
  apiService.clearListBooks();

  if (filterCathegory.value == "all") {
    if (searchElement.value == "" && filterShelf.value == "all") {
      apiService.renderListBook(initialBooks);
    } else {
      dataFilter = searchStates(
        searchElement.value,
        initialBooks,
        filterCathegory.value,
        filterShelf.value
      );
      apiService.renderListBook(dataFilter);
    }
  } else {
    dataFilter = searchStates(
      searchElement.value,
      initialBooks,
      filterCathegory.value,
      filterShelf.value
    );
    apiService.renderListBook(dataFilter);
  }
  eventActionItemBook();
});

filterShelf.addEventListener("change", () => {
  apiService.clearListBooks();

  if (filterShelf.value == "all") {
    if (searchElement.value == "" && filterCathegory.value == "all") {
      apiService.renderListBook(initialBooks);
    } else {
      dataFilter = searchStates(
        searchElement.value,
        initialBooks,
        filterCathegory.value,
        filterShelf.value
      );
      apiService.renderListBook(dataFilter);
    }
  } else {
    dataFilter = searchStates(
      searchElement.value,
      initialBooks,
      filterCathegory.value,
      filterShelf.value
    );
    apiService.renderListBook(dataFilter);
  }
  eventActionItemBook();
});

btnAdd.addEventListener("click", () => {
  apiService.toggleShowForm(true);
});

btnReset.addEventListener("click", () => {
  apiService.resetForm();
});

btnSave.addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const year = document.getElementById("year").value;
  const categhory = document.getElementById("categhory").value;
  const isComplete = document.getElementById("isComplete").checked;

  if (
    title != "" ||
    author != "" ||
    year != "" ||
    categhory != "" ||
    isComplete != ""
  ) {
    if (idBook != null) {
      apiService.onSubmitForm(
        (initialBooks = apiService.updateBook(idBook, initialBooks))
      );
      ToastShow("success", "Edit data succesfully");
      idBook = null;
    } else {
      apiService.onSubmitForm(
        initialBooks.push(apiService.addBook(initialBooks))
      );
      ToastShow("success", "Add data succesfully");
    }
    storageService.saveToStorage(initialBooks, BOOKS_STORAGE_KEY);

    dataFilter = searchStates(
      searchElement.value,
      initialBooks,
      filterCathegory.value,
      filterShelf.value
    );
    document.dispatchEvent(new Event(RENDER_EVENT));
  } else {
    ToastShow("warning", "Please to fill all data");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  apiService.renderListBook(initialBooks);
  document.dispatchEvent(new Event(RENDER_EVENT));

  if (storageService.isStorageExist()) {
    storageService.loadDataStorage(initialBooks);
    if (storageService.checkUserLogin()) {
      const serializeData = localStorage.getItem(USER_STORAGE_KEY);
      const data = JSON.parse(serializeData);
      document.getElementById("userName").innerText = data.name;
      document.getElementById("userProfession").innerText = data.profession;
    } else {
      return (window.location.pathname = "Bookshelf-app/dist/login.html");
    }
  }
});

document.addEventListener(RENDER_EVENT, function () {
  apiService.getTotalShelf(initialBooks);
  apiService.clearListBooks();

  if (
    searchElement.value != "" ||
    filterCathegory.value != "all" ||
    filterShelf.value != "all"
  ) {
    apiService.renderListBook(dataFilter);
  } else {
    apiService.renderListBook(initialBooks);
  }
  eventActionItemBook();
});
