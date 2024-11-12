const toggleMenu = document.querySelector(".toggle-menu");
const navUl = document.querySelector("header nav ul");

// Toggle Menu
toggleMenu.addEventListener("click", () => {
  navUl.classList.toggle("is-open");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    navUl.classList.remove("is-open");
  }
});

// Typed
var typed = new Typed(".auto-type", {
  strings: ["Frontend Developer", "Software Engineer"],
  typeSpeed: 60,
  backSpeed: 60,
  startDelay: 1000,
  loop: true,
});

// Clone the skills list and tools list to enhance the animation
var skillsList = document.querySelector(".skills-list");
var toolsList = document.querySelector(".tools-list");

var clonedSkillsList = skillsList.cloneNode(true);
document.querySelector(".skills").appendChild(clonedSkillsList);

var clonedToolsList = toolsList.cloneNode(true);
var clonedToolsList2 = toolsList.cloneNode(true);
document.querySelector(".tools").appendChild(clonedToolsList);
document.querySelector(".tools").appendChild(clonedToolsList2);
document.querySelector(".tools").appendChild(clonedToolsList);

// Mode
// Window.localStorage.setItem("mode", "dark");

// Contact Form
var email = document.querySelector(".contact input[type='email']");
var userName = document.querySelector(".contact input[type='text']");
var message = document.querySelector(".contact textarea");
const contactForm = document.querySelector(".contact form");

// Send Email
const sendEmail = async () => {
  if (!userName.value) {
    document.querySelector(".name-error").style.display = "block";
    return;
  } else {
    document.querySelector(".name-error").style.display = "none";
  }

  if (!email.value || !email.value.includes("@")) {
    document.querySelector(".email-error").style.display = "block";
    return;
  } else {
    document.querySelector(".email-error").style.display = "none";
  }

  if (!message.value) {
    document.querySelector(".message-error").style.display = "block";
    return;
  } else {
    document.querySelector(".message-error").style.display = "none";
  }

  await emailjs
    .send("service_pqp34hf", "template_wgq50gz", {
      userName: userName.value,
      email: email.value,
      message: message.value,
    })
    .then(
      (res) => {
        contactForm.reset();
        alert("Your message has been sent successfully!");
      },
      (err) => {
        alert("Something went wrong, please try again later!", err);
      }
    );
};

// Submit Form
contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  await sendEmail();
  contactForm.reset();
});
