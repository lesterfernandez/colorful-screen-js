const colorDivs = document.querySelectorAll(".square");

colorDivs.forEach((div) => {
  div.addEventListener("click", (e) => {
    e.target.style.backgroundColor = randomBg();
  });
});

function randomBg() {
  return `rgb(${Math.floor(Math.random() * 255)}, 
  ${Math.floor(Math.random() * 255)}, 
  ${Math.floor(Math.random() * 255)})`;
}
