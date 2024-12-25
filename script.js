// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.error("Target element not found:", this.getAttribute("href"));
    }
  });
});

// Handle contact form submission
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you shortly.");
    contactForm.reset(); // Clear form fields
  });
} else {
  console.error("Contact form not found.");
}

// Reveal services on scroll
const services = document.querySelectorAll(".service-item");

function revealServices() {
  const triggerPoint = window.innerHeight * 0.9; // 90% of the viewport height
  services.forEach((service) => {
    const top = service.getBoundingClientRect().top;
    if (top < triggerPoint) {
      service.classList.add("show");
    }
  });
}

// Debounce scrolling for performance
let scrollTimeout;
window.addEventListener("scroll", () => {
  if (scrollTimeout) clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(revealServices, 50); // Adjust debounce timing if needed
});

// Initial reveal on page load
document.addEventListener("DOMContentLoaded", () => {
  revealServices(); // Run initial reveal
  setLanguage("en"); // Default language set to English
});

// Dropdown menu behavior (hover and click outside to close)
const dropdown = document.querySelector(".dropdown");
if (dropdown) {
  const menu = dropdown.querySelector(".dropdown-menu");

  // Show dropdown menu on hover
  dropdown.addEventListener("mouseover", function () {
    if (menu) {
      menu.style.display = "block";
    }
  });

  // Hide dropdown menu when mouse leaves
  dropdown.addEventListener("mouseleave", function () {
    if (menu) {
      menu.style.display = "none";
    }
  });

  // Close dropdown on click outside
  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
      if (menu) {
        menu.style.display = "none";
      }
    }
  });
}

// Language toggle functionality
document.querySelectorAll('.lang-switch button').forEach((button) => {
  button.addEventListener('click', function () {
    const selectedLanguage = this.getAttribute('data-lang');
    setLanguage(selectedLanguage); // Use the setLanguage function
  });
});

const translations = {
  en: {
    home: "Home",
    products: "Products",
    product1: "Product 1 ",
    product2: "Product 2",
    product3: "Product 3",
    services: "Services",
    contact: "Contact",
    welcome: "Welcome to Nexus Tech",
    slogan: "Innovate the Future",
    explore: "Explore More",
    "vision-title": "Our Vision",
    "vision-description1":
      "At Nexus Tech, we are a startup with a mission to build future-ready products that solve real-world problems. Our goal is to innovate and create solutions that make life simpler, more efficient, and better for everyone.",
    "vision-description2":
      "Stay tuned as we develop groundbreaking products to address your needs!",
    "services-title": "Our Services",
    "service1-title": "Web Development",
    "service1-description": "Create modern, responsive websites for your business.",
    "service2-title": "App Development",
    "service2-description": "Build fast, scalable mobile apps for iOS and Android.",
    "service3-title": "AI Solutions for Businesses",
    "service3-description": "Streamline business operations with AI-driven solutions designed to enhance efficiency and decision-making.",
    footer: "© 2024 Nexus Tech. All rights reserved.",
    // Contact section translations
    "contact-name": "Your Name",
    "contact-email": "Your Email",
    "contact-message": "Your Message",
    "contact-submit": "Send Message",
  },
  vi: {
    home: "Trang chủ",
    products: "Sản phẩm",
    product1: "Sản phẩm 1",
    product2: "Sản phẩm 2",
    product3: "Sản phẩm 3",
    services: "Dịch vụ",
    contact: "Liên hệ",
    welcome: "Chào mừng đến với Nexus Tech",
    slogan: "Đổi mới tương lai",
    explore: "Khám phá thêm",
    "vision-title": "Tầm nhìn của chúng tôi",
    "vision-description1":
      "Tại Nexus Tech, chúng tôi là một startup với sứ mệnh xây dựng các sản phẩm sẵn sàng cho tương lai giải quyết các vấn đề thực tế. Mục tiêu của chúng tôi là đổi mới và tạo ra các giải pháp làm cho cuộc sống trở nên đơn giản hơn, hiệu quả hơn và tốt đẹp hơn cho tất cả mọi người.",
    "vision-description2":
      "Hãy đón chờ những sản phẩm đột phá của chúng tôi để đáp ứng nhu cầu của bạn!",
    "services-title": "Dịch vụ của chúng tôi",
    "service1-title": "Phát triển Web",
    "service1-description": "Tạo các trang web hiện đại, đáp ứng cho doanh nghiệp của bạn.",
    "service2-title": "Phát triển Ứng dụng",
    "service2-description": "Xây dựng các ứng dụng di động nhanh, có thể mở rộng cho iOS và Android.",
    "service3-title": "Giải pháp AI cho doanh nghiệp",
    "service3-description": "Tối ưu hóa hoạt động kinh doanh với giải pháp AI nâng cao hiệu quả và hỗ trợ ra quyết định.",
    footer: "© 2024 Nexus Tech. Bản quyền thuộc về chúng tôi.",
    // Contact section translations
    "contact-name": "Tên của bạn",
    "contact-email": "Email của bạn",
    "contact-message": "Lời nhắn của bạn",
    "contact-submit": "Gửi Tin Nhắn",
  },
};

// Set Language Function
function setLanguage(language) {
  const elements = document.querySelectorAll(".translate");
  elements.forEach((element) => {
    const key = element.getAttribute("data-key");
    if (translations[language][key]) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.setAttribute("placeholder", translations[language][key]);
      } else {
        element.textContent = translations[language][key];
      }
    }
  });
}

// Default to English on Load
document.addEventListener("DOMContentLoaded", () => {
  setLanguage("en");
});