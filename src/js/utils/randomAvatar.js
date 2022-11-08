import avatar1 from "../../../public/img/profile/profile-1.png";
import avatar2 from "../../../public/img/profile/profile-2.png";
import avatar3 from "../../../public/img/profile/profile-3.png";
import avatar4 from "../../../public/img/profile/profile-4.png";
import avatar5 from "../../../public/img/profile/profile-5.png";
import avatar6 from "../../../public/img/profile/profile-6.png";
import avatar7 from "../../../public/img/profile/profile-7.png";
import avatar8 from "../../../public/img/profile/profile-8.png";
import avatar9 from "../../../public/img/profile/profile-9.png";
import avatar10 from "../../../public/img/profile/profile-10.png";
import avatar11 from "../../../public/img/profile/profile-11.png";
import avatar12 from "../../../public/img/profile/profile-12.png";
import avatar13 from "../../../public/img/profile/profile-13.png";
import avatar14 from "../../../public/img/profile/profile-14.png";
import avatar15 from "../../../public/img/profile/profile-15.png";

const randomAvatar = () => {
  const listAvatar = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
    avatar9,
    avatar10,
    avatar11,
    avatar12,
    avatar13,
    avatar14,
    avatar15,
  ];

  return listAvatar[Math.floor(Math.random() * listAvatar.length)];
};

export default randomAvatar;
