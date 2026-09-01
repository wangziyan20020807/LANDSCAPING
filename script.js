const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const modal = document.getElementById("contactModal");
const contactButton = document.getElementById("contactButton");
const closeButton = document.querySelector(".modal-close");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactButton.addEventListener("click", () => {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
});

closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent =
    "Thank you! Your enquiry has been recorded. Please call 0401 482 078 for immediate assistance.";
  contactForm.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
