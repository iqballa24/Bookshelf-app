import Swal from "https://cdn.jsdelivr.net/npm/sweetalert2@11.4.17/src/sweetalert2.js";
import { RENDER_EVENT } from "./constant/index.js";

const Toast = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const ToastShow = (icon, title) => {
  return Toast.fire({
    icon: icon,
    title: title,
  });
};

export { Swal, ToastShow };
