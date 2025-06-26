var typed = new Typed('.text', {
    strings: ["Graphic Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
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
  // ---- Profile Section ----
  document.querySelector("h1").textContent = data.profile.name;

  const spanText = document.querySelector(".text");
  if (spanText) {
    spanText.textContent = data.profile.title;
  }

  const bioParagraph = document.querySelector(".home-content p");
  if (bioParagraph) {
    bioParagraph.textContent = data.profile.bio;
  }

  // ---- About Section ----
  const aboutSection = document.querySelector(".about .me");
  if (aboutSection) {
    aboutSection.querySelector("h2").textContent = data.about.title;
    aboutSection.querySelector("p").textContent = data.about.description;
  }

  // ---- Services Section ----
  const serviceList = document.querySelector(".service-list");
  if (serviceList) {
    serviceList.innerHTML = ""; // Clear existing services
    data.services.forEach(service => {
      const serviceItem = document.createElement("div");
      serviceItem.classList.add("service-item");
      serviceItem.innerHTML = `
        <h2>${service.title}</h2>
        <p>${service.description}</p>
        <a href="#" class="read">Learn More</a>
      `;
      serviceList.appendChild(serviceItem);
    });
  }
});
