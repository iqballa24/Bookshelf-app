import { STORAGE_KEY, RENDER_EVENT } from "../constant/index.js";

const isStorageExist = () => {
  if (typeof(Storage) === undefined) {
    console.log("Browser kamu tidak mendukung local storage!");
    return false;
  }
  return true;
};

const loadDataStorage = (books) => {
  const serializeData = localStorage.getItem(STORAGE_KEY);
  let data = JSON.parse(serializeData);

  if (data !== null) {
    for (const book of data) {
      books.push(book);
    }
  }

  document.dispatchEvent(new Event(RENDER_EVENT));
};

const saveToStorage = (books) => {
  if (isStorageExist()) {
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
  }
};

export { isStorageExist, loadDataStorage, saveToStorage};
