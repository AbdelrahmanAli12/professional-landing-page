//const emailjs = require("@emailjs/browser");
const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("main section");
const form = document.querySelector("form");
const button = form.querySelector("button");
const formData = new FormData(form);

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (e) {
    e.preventDefault();
    for (let j = 0; j < sections.length; j++) {
      sections[j].classList.remove("active-section");
    }
    const sectionId = this.getAttribute("href").substring(1);
    document.getElementById(sectionId).classList.add("active-section");
    for (let k = 0; k < links.length; k++) {
      links[k].classList.remove("active");
    }
    this.classList.add("active");
  });
}

button.addEventListener("click", async (event) => {
  event.preventDefault();
  let from_name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  var data = {
    from_name: from_name,
    email: email,
    message: message,
  };
  await emailjs
    .send("service_28z21xf", "template_mnnw3ag", data, "zcm001YeOLTHzPhMu")
    .then(() => {
      console.log("email sent success");
      window.scrollTo(0, 0);
    });
});
