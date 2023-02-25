//const emailjs = require("@emailjs/browser");
const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("main section");
const form = document.querySelector("form");
const button = form.querySelector("button");
const formData = new FormData(form);
let from_name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;
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

button
  .addEventListener("click", async function sendEmail() {
    // Initialize EmailJS with your user ID
    emailjs.init("YOUR_USER_ID");

    // Define the email parameters
    const params = {
      from_name: from_name,
      email: email,
      message: message,
    };

    // Send the email
    emailjs.send(
      "service_28z21xf",
      "template_mnnw3ag",
      data,
      "zcm001YeOLTHzPhMu"
    );
    console.log("Email sent successfully!");
  })
  .catch((error) => {
    console.error("Error sending email:", error);
  });
