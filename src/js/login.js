import { isStorageExist, loadDataStorage, saveToStorage } from "./view/main.js";

document.addEventListener("DOMContentLoaded", () => {
  if (isStorageExist()) {
    console.log("okee");
  } else {
    console.log("tidak oke");
  }
});
