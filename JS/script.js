// color buttons const
const colorBtns = document.querySelectorAll(".btn");

// color buttons function
colorBtns.forEach(function (colorBtns) {
  // color buttons listen click
  colorBtns.addEventListener("click", function (event) {
    // btnColor varibale
    let btnColor = event.target.dataset.color;

    // color buttons style set property
    document.documentElement.style.setProperty("--theme-color", btnColor);
  });
});
