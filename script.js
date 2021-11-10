const boxs = document.querySelectorAll(".box");

function showBox() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxs.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", showBox);
