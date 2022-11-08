// import "sweetalert2/src/sweetalert2.scss";
import Swal from "sweetalert2/dist/sweetalert2.js";
import 'sweetalert2/src/sweetalert2.scss';

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
