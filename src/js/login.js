import { isStorageExist, checkUserLogin, saveToStorage } from "./view/main.js";
import { ToastShow } from "./swal.js";
import { USER_STORAGE_KEY } from "./constant/index.js";

const form = document.getElementById("formLogin");
const inputName = document.querySelector("#name");
const inputProffesion = document.querySelector("#profession");

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

  if(isStorageExist()){
    saveToStorage(data, USER_STORAGE_KEY);
    return (window.location.pathname = "Bookshelf-app/index.html");
  }else{
    return (window.location.pathname = "Bookshelf-app/index.html");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (isStorageExist()) {
    if (checkUserLogin()) {
      return (window.location.pathname = "Bookshelf-app/index.html");
    }
  }else{
    return (window.location.pathname = "Bookshelf-app/index.html");
  }
});
