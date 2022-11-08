import iconAnimal from "../../../public/icon/icon-animal.svg";
import iconEducation from "../../../public/icon/icon-education.svg";
import iconGeneral from "../../../public/icon/icon-general.svg";
import iconKids from "../../../public/icon/icon-kids.svg";
import iconMath from "../../../public/icon/icon-math.svg";
import iconNature from "../../../public/icon/icon-nature.svg";
import iconScience from "../../../public/icon/icon-science.svg";
import iconTechnology from "../../../public/icon/icon-technology.svg";

const selectedCathegory = (categhory) => {
  const listCathegory = [
    {
      name: "math",
      icon: iconMath,
    },
    {
      name: "animal",
      icon: iconAnimal,
    },
    {
      name: "education",
      icon: iconEducation,
    },
    {
      name: "general",
      icon: iconGeneral,
    },
    {
      name: "kids",
      icon: iconKids,
    },
    {
      name: "nature",
      icon: iconNature,
    },
    {
      name: "science",
      icon: iconScience,
    },
    {
      name: "technology",
      icon: iconTechnology,
    },
  ];
  const selectedCathegory = listCathegory.find(
    (item) => item.name === categhory
  );

  return selectedCathegory.icon;
};

export default selectedCathegory;
