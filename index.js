

// JSON data
const data = {
  "profile": {
    "name": "Natasha Karwitha",
    "title": "Graphic Designer",
    "bio": "Dedicated to creating visually compelling and meaningful designs. Specializing in logos, brand identities, illustrations, and digital media. Combining creativity, strategy, and precision to transform ideas into memorable designs that make an impact."
  },
  "about": {
    "title": "About Me",
    "description": "My expertise lies in Adobe Creative Suite (Photoshop, Illustrator), combined with a deep understanding of layout, color theory, typography, and composition. I have worked with a range of clients, from startups to established businesses, creating designs that not only stand out visually but also connect with their target audience."
  },
  "services": [
    {
      "title": "Logo Design",
      "description": "A great logo is the cornerstone of any brand. I create custom logos that reflect your brand’s identity and values, are memorable, timeless, visually striking, and versatile across platforms (web, print, social media). Delivered in multiple formats (JPEG, PNG, SVG)."
    },
    {
      "title": "Photo Editing",
      "description": "Make your images stand out with professional photo editing. I can enhance lighting, color balance, sharpness, remove imperfections, adjust composition, apply stylized effects, and optimize images for websites, social media, or print."
    },
    {
      "title": "Social Media Posts and Banners",
      "description": "Make an impact with bold, eye-catching posts and banners that grab attention instantly. Designs optimized for print and digital platforms (social media, websites, events), following best practices for readability, balance, and visual flow."
    }
  ]
};
document.addEventListener("DOMContentLoaded", () => {
  // ---- API Data ----

  // Profile section from API
  fetch("http://localhost:3000/profile")
    .then(res => res.json())
    .then(profile => {
      document.querySelector(".home-content h1").textContent = profile.name;
      document.querySelector(".home-content h3").textContent = profile.title;
      document.querySelector(".home-content p").textContent = profile.bio;
    })
    .catch(err => {
      console.error("Failed to fetch profile:", err);
    });

  // About section from API
  fetch("http://localhost:3000/about")
    .then(res => res.json())
    .then(about => {
      document.querySelector(".about .me h2").textContent = about.title;
      document.querySelector(".about .me p").textContent = about.description;
    })
    .catch(err => {
      console.error("Failed to fetch about:", err);
    });

  // Services section from API
  fetch("http://localhost:3000/services")
    .then(res => res.json())
    .then(services => {
      const serviceList = document.querySelector(".service-list");
      if (serviceList) {
        serviceList.innerHTML = "";
        services.forEach(service => {
          const div = document.createElement("div");
          div.className = "service-item";
          div.innerHTML = `
            <h2>${service.title}</h2>
            <p>${service.description}</p>
            <a href="mailto:natashakarwitha6@gmail.com" class="read">get</a>
          `;
          serviceList.appendChild(div);
        });
      }
    })
    .catch(err => {
      console.error("Failed to fetch services:", err);
    });


  const themeBtn = document.getElementById("toggle-theme");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      contactForm.reset();
      const userName = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const subject = document.querySelector("#subject").value;
      const message = document.querySelector("#message").value;

     
      console.log("Form submitted:", { userName, email, subject, message });
    });
  }
});
