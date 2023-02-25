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

  try {
    const response = await fetch("http://localhost:3000/send-email", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Email sent successfully!");
      form.reset();
    } else {
      throw new Error("Failed to send email.");
    }
  } catch (error) {
    console.error(error);
    alert("An error occurred while sending the email.");
  }
});
