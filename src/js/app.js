import "./components/card-profile.js";
import "./components/form.js";
import "./components/box-filter.js"

document.addEventListener("DOMContentLoaded", () => {
  const formContainer = document.querySelector(".form-container");
  const searchElement = document.querySelector("#searchElement");
  const btnReset = document.querySelector('#btnReset')
  const btnAdd = document.querySelector("#btnAdd");
  const form = document.getElementById("form");

  searchElement.addEventListener("keyup", (e)=> {
    console.log(searchElement.value)
  })

  btnAdd.addEventListener("click", () => {
    formContainer.style.display = "block";
  });

  btnReset.addEventListener("click", ()=>{
    form.reset();
  })

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e)
  });
});
