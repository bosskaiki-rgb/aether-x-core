const form = document.querySelector(".form");
const popup = document.getElementById("successPopup");

if (form && popup) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    popup.classList.add("active");

    form.reset();

    setTimeout(() => {
      popup.classList.remove("active");
    }, 2500);
  });
}