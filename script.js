function setActive(element, contentId) {
  const h1Elements = document.querySelectorAll(".option h1");
  h1Elements.forEach((h1) => h1.classList.remove("active"));
  const contentSections = document.querySelectorAll(".content-box .content");
  contentSections.forEach((content) => (content.style.display = "none"));
  element.classList.add("active");
  document.getElementById(contentId).style.display = "flex";
}
document.addEventListener("DOMContentLoaded", function () {
  setActive(document.querySelector(".option h1.active"), "option-1");
});