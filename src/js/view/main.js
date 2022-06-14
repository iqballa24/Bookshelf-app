import { BOOKS_STORAGE_KEY, RENDER_EVENT, USER_STORAGE_KEY } from "../constant/index.js";

const isStorageExist = () => {
  if (typeof(Storage) === undefined) {
    console.log("Browser kamu tidak mendukung local storage!");
    return false;
  }
  return true;
};

const loadDataStorage = (books) => {
  const serializeData = localStorage.getItem(BOOKS_STORAGE_KEY);
  let data = JSON.parse(serializeData);

  if (data !== null) {
    for (const book of data) {
      books.push(book);
    }
  }

  document.dispatchEvent(new Event(RENDER_EVENT));
};

const checkUserLogin = () => {
  const serializeData = localStorage.getItem(USER_STORAGE_KEY);
  let data = JSON.parse(serializeData)

  if(data !== null){
    console.log('USER IS LOGGED IN')
    return true
  }
  console.log('USER NOT LOGGED IN')
  return false
}

const saveToStorage = (books, STORAGE_KEY) => {
  if (isStorageExist()) {
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
  }
};

export { isStorageExist, loadDataStorage, saveToStorage, checkUserLogin};
