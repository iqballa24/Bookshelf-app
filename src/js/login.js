import { ToastShow } from "./vendor";
import { BOOKS_STORAGE_KEY, USER_STORAGE_KEY } from "./constant/index.js";
import StorageService from "./service/storage.service.js";

const form = document.getElementById("formLogin");
const inputName = document.querySelector("#name");
const inputProffesion = document.querySelector("#profession");
const storageService = new StorageService(BOOKS_STORAGE_KEY, USER_STORAGE_KEY);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inputName.value == "") {
    return ToastShow("warning", "Fill-in your name");
  }

  if (inputProffesion.value == "") {
    return ToastShow("warning", "Fill-in your profession");
  }

  let data = {
    name: inputName.value,
    profession: inputProffesion.value,
  };

  if (storageService.isStorageExist()) {
    storageService.saveToStorage(data, USER_STORAGE_KEY);
    return (window.location.pathname = "Bookshelf-app/dist/index.html");
  } else {
    return (window.location.pathname = "Bookshelf-app/dist/index.html");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (storageService.isStorageExist()) {
    if (storageService.checkUserLogin()) {
      return (window.location.pathname = "Bookshelf-app/dist/index.html");
    }
  } else {
    return (window.location.pathname = "Bookshelf-app/dist/index.html");
  }
});
