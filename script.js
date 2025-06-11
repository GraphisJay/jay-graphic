// script.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector("input[type='text']").value;
    const email = form.querySelector("input[type='email']").value;
    const message = form.querySelector("textarea").value;

    if (name && email && message) {
      alert("Thank you for contacting Jay Graphics! We'll get back to you soon.");
      form.reset();
    } else {
      alert("Please fill out all fields before submitting.");
    }
  });
});
