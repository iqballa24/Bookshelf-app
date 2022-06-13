import { Swal, ToastShow } from "./swal.js";
import { RENDER_EVENT } from "./constant/index.js";
import {
  renderListBook,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
  switchStatusRead,
  resetForm,
  onSubmitForm,
} from "./data/action.js";
import searchStates from "./search.js";

let initialBooks = [
  {
    id: 1,
    title: "Si kancil",
    author: "iqbal nugraha",
    year: "2021",
    isComplete: false,
    categhory: "kids",
  },
  {
    id: 2,
    title: "Bandoeng Lautan Api",
    author: "Jajang Nurjaman",
    year: "2021",
    isComplete: false,
    categhory: "science",
  },
  {
    id: 3,
    title: "Islam Itu Indah",
    author: "Ustad Maulana",
    year: "2022",
    isComplete: true,
    categhory: "education",
  },
];
let initialBooksOld = initialBooks;

let idBook = null;
const searchElement = document.querySelector("#searchElement");
const filterElement = document.querySelector("#filterElement");
const btnReset = document.querySelector("#btnReset");
const btnSave = document.querySelector("#btnSave");
const btnAdd = document.querySelector("#btnAdd");

const clearListBooks = () => {
  document.querySelector("#list-book").innerHTML = "";
};

const toggleShowForm = (show) => {
  const formContainer = document.querySelector(".form-container");

  return show
    ? (formContainer.style.display = "block")
    : (formContainer.style.display = "none");
};

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
      document.dispatchEvent(new Event(RENDER_EVENT));
    });
  }
};

searchElement.addEventListener("keyup", () => {
  clearListBooks();
  initialBooks = initialBooksOld;

  if (searchElement.value == "") {
    renderListBook(initialBooks);
  } else {
    const data = searchStates(searchElement.value, initialBooks);
    initialBooks = data;
    renderListBook(data);
  }
  eventActionItemBook();
});

filterElement.addEventListener("change", () => {
  console.log(filterElement.value);
});

btnAdd.addEventListener("click", () => {
  toggleShowForm(true);
});

btnReset.addEventListener("click", () => {
  resetForm();
});

btnSave.addEventListener("click", () => {
  if (idBook != null) {
    onSubmitForm((initialBooks = updateBook(idBook, initialBooks)));
    ToastShow("success", "Edit data succesfully");
    idBook = null;
  } else {
    onSubmitForm(initialBooks.push(addBook()));
    ToastShow("success", "Add data succesfully");
    initialBooksOld.push(addBook())
  }
  document.dispatchEvent(new Event(RENDER_EVENT));
});

document.addEventListener(RENDER_EVENT, function () {
  clearListBooks();
  renderListBook(initialBooks);
  eventActionItemBook();
});

document.addEventListener("DOMContentLoaded", () => {
  renderListBook(initialBooks);
  document.dispatchEvent(new Event(RENDER_EVENT));
});

export { eventActionItemBook };
