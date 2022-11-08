export default class StorageService {
  constructor(BOOKS_STORAGE_KEY, USER_STORAGE_KEY, RENDER_EVENT) {
    this.booksStorageKey = BOOKS_STORAGE_KEY;
    this.userStorageKey = USER_STORAGE_KEY;
    this.renderEvent = RENDER_EVENT;
  }

  isStorageExist() {
    if (typeof Storage === undefined) {
      console.log("Browser kamu tidak mendukung local storage!");
      return false;
    }
    return true;
  }

  loadDataStorage(books) {
    const serializeData = localStorage.getItem(this.booksStorageKey);
    let data = JSON.parse(serializeData);

    if (data !== null) {
      for (const book of data) {
        books.push(book);
      }
    }
    document.dispatchEvent(new Event(this.renderEvent));
  }

  checkUserLogin() {
    const serializeData = localStorage.getItem(this.userStorageKey);
    let data = JSON.parse(serializeData);

    if (data !== null) {
      console.log("USER IS LOGGED IN");
      return true;
    }
    console.log("USER NOT LOGGED IN");
    return false;
  }

  saveToStorage(books, BOOKS_STORAGE_KEY) {
    if (this.isStorageExist()) {
      const parsed = JSON.stringify(books);
      localStorage.setItem(BOOKS_STORAGE_KEY, parsed);
    }
  }
}
