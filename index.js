

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
  
  function updateText(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.textContent = value;
}

updateText(".home-content h1", data.profile.name);
updateText(".home-content p", data.profile.bio);
updateText(".about .me h2", data.about.title);
updateText(".about .me p", data.about.description);

  
  }
  
  );
  // ---- Contact Section ----
  const contactForm = document.getElementById("contact-form");
  

if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    contactForm.reset(); 
    

    // Get user input
    const userName = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const subject = document.querySelector("#subject").value;
    const message = document.querySelector("#message").value;

   
  });
}
 