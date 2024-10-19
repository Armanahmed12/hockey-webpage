const ulTagOfNav = document.getElementById("nav-lists-container");
const menuBar = document.getElementById("menuBarr");
const bannerCarouselImgContainer = document.getElementById(
  "bannerCarouselSection"
);
// navigation bar
document.getElementById("menuBar").addEventListener("click", () => {
  bannerCarouselImgContainer.style.zIndex = -20;

  const styles = [...ulTagOfNav.classList];

  styles.forEach((element) => {
    if (element.startsWith("top-")) {
      if (element !== "top-[80px]") {
        ulTagOfNav.classList.remove("top-[-600px]");
        ulTagOfNav.classList.add("top-[80px]");
      } else {
        ulTagOfNav.classList.remove("top-[80px]");
        ulTagOfNav.classList.add("top-[-600px]");
        setTimeout(() => {
          bannerCarouselImgContainer.removeAttribute("style");
        }, 1000);
      }
    }
  });
});
