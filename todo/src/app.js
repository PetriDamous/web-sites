import Notes from "./js/notes";
import UI from "./js/uI";
import Storage from "./js/storage";
import { noteValidation, getColorCoords } from "./js/utilis/utilis";

const uI = new UI();

// Keep track of closet color button
let closetColorBtn;

// Form Elements
const $title = document.querySelector("#form-main #title");
const $body = document.querySelector("#form-main #body");

// Color tooltip
const $colorToolTip = document.querySelector(".color-tooltip");

// Load
document.addEventListener("DOMContentLoaded", () => {
  uI.renderNotes();
});

// Notes
document.querySelector("#notes-area").addEventListener("click", (e) => {
  const elm = e.target;

  if (elm.matches(".btn-delete")) {
    Storage.removeNote(elm.closest(".card"));
    uI.displayMsg("delete", "success");
    uI.renderNotes();
    return;
  }

  if (elm.matches(".card__color img")) {
    const isColorOpen = $colorToolTip.style.display === "flex" ? true : false;

    console.log("start", closetColorBtn);

    closetColorBtn = elm.closest(".card");
    console.log(closetColorBtn);
    console.log("not open", closetColorBtn);
    uI.openColor(closetColorBtn);

    // if (closetColorBtn === closetColorBtn) {
    //     console.log("opened", closetColorBtn)
    //     closetColorBtn = elm.closest('.card__color img');
    //     uI.openColor(closetColorBtn);
    //     return;
    // }

    // if (!isColorOpen) {
    //     closetColorBtn = elm.closest('.card__color img');
    //     console.log("not open", closetColorBtn)
    //     uI.openColor(closetColorBtn);
    //     return
    // }

    // if (closetColorBtn === closetColorBtn) {
    //     if (isColorOpen) {
    //         // closetColorBtn = elm.closest('.card__color img');
    //         closetColorBtn = elm.closest('.card');
    //         console.log("not open", closetColorBtn)
    //         uI.openColor(closetColorBtn);
    //         return
    //     } else {
    //         console.log("opened", closetColorBtn)
    //         // closetColorBtn = elm.closest('.card__color img');
    //         closetColorBtn = elm.closest('.card');
    //         uI.openColor(closetColorBtn);
    //         return;
    //     }

    // }

    // if (isColorOpen) {
    //     console.log("close", closetColorBtn)
    //     uI.closeColor();
    //     return;
    // }

    return;
  }

  console.log(elm.closest(".card"));

  uI.openModal(elm.closest(".card"));
});

// Form
document.querySelector("#form-main").addEventListener("click", (e) => {
  if (e.target.id === "body") {
    uI.openForm();
  }

  if (e.target.id === "close-main") {
    e.preventDefault();
    uI.closeForm();
  }

  if (e.target.id === "submit-main") {
    e.preventDefault();

    if (noteValidation($body.value)) {
      const note = new Notes($title.value, $body.value);
      Storage.addNote(note);
      uI.clearForm($title, $body);
      uI.displayMsg("add", "success");
      uI.renderNotes();
    } else {
      uI.displayMsg("validation", "danger");
    }
  }
});

// Modal
document.querySelector(".modal").addEventListener("click", (e) => {
  if (e.target.id === "close-modal") {
    e.preventDefault();
    uI.closeModal();
  }

  if (e.target.id === "submit-modal") {
    e.preventDefault();
    Storage.updateNote(e.currentTarget.dataset.id);
    uI.closeModal();
    uI.displayMsg("update", "success");
    uI.renderNotes();
  }
});

window.addEventListener("resize", () => {
  getColorCoords(closetColorBtn);
});

document.addEventListener("scroll", () => {
  // getColorCoords(closetColorBtn);
  uI.closeColor();
});
