
function goToPage2() {
  window.location.href = "page2.html";
}
function goToPage3() {
  window.location.href = "page3.html";
}
if (document.body.classList.contains("page2")) {
  function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (Math.random() * 3 + 5) + "s";
    document.body.appendChild(petal);
    setTimeout(() => { petal.remove(); }, 8000);
  }
  setInterval(createPetal, 300);
}
