import Swal from "https://cdn.jsdelivr.net/npm/sweetalert2@11.4.17/src/sweetalert2.js";
import "./components/card-profile.js";
import "./components/box-filter.js";
import "./components/list-book.js";
import "./components/form.js";
import { RENDER_EVENT } from "./constant/index.js";
import {
  renderListBook,
  addBook,
  deleteBook,
  switchStatusRead,
  resetForm,
} from "./data/action.js";

let initialBooks = [
  {
    id: 1,
    title: "Si kancil",
    author: "iqbal nugraha",
    year: "2021",
    isComplete: false,
    categhory: "education",
  },
];
const clearListBooks = () => {
  document.querySelector("#list-book").innerHTML = "";
};

document.addEventListener(RENDER_EVENT, function () {
  clearListBooks();
  renderListBook(initialBooks);

  // TRIGER ON CLICK BTN DELETE
  const btnTrash = document.querySelectorAll("#btnTrash");
  for (const btn of btnTrash) {
    btn.addEventListener("click", () => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          initialBooks = deleteBook(btn.dataset.id, initialBooks);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
        document.dispatchEvent(new Event(RENDER_EVENT));
      });
    });
  }

  // TRIGER ON CLICK BTN EDIT
  const btnEdit = document.querySelectorAll("#btnEdit");
  for (const btn of btnEdit) {
    btn.addEventListener("click", () => {
      console.log("okee");
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
});

document.addEventListener("DOMContentLoaded", () => {
  renderListBook(initialBooks);
  document.dispatchEvent(new Event(RENDER_EVENT));
  const formContainer = document.querySelector(".form-container");
  const searchElement = document.querySelector("#searchElement");
  const filterElement = document.querySelector("#filterElement");
  const btnReset = document.querySelector("#btnReset");
  const btnAdd = document.querySelector("#btnAdd");
  const form = document.getElementById("form");

  searchElement.addEventListener("keyup", (e) => {
    console.log(searchElement.value);
  });

  filterElement.addEventListener("change", () => {
    console.log(filterElement.value);
  });

  btnAdd.addEventListener("click", () => {
    formContainer.style.display = "block";
  });

  btnReset.addEventListener("click", () => {
    resetForm();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addBook(initialBooks);
    document.dispatchEvent(new Event(RENDER_EVENT));
  });
});
