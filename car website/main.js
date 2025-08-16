//  Header Scroll
let nav = document.querySelector("navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 50){
        navbar.classList.add("header-scrolled");
    }else{
        navbar.classList.remove("header-scrolled");
    }
}


// nav hide








var Swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3500,
    }
});


 const targets = {
      client: 1280,
      friendship: 5760,
      rating: 1530,
      breakfast: 6840
    };

    const counters = {};

    function startCounter(id, target) {
      let current = 0;
      const speed = Math.max(10, 3000 / target); // Adjusts animation speed

      counters[id] = setInterval(() => {
        if (current >= target) {
          clearInterval(counters[id]);
        } else {
          current++;
          document.getElementById(id).textContent = current.toLocaleString();
        }
      }, speed);
    }

    window.onload = () => {
      for (let key in targets) {
        startCounter(key, targets[key]);
      }
    };
// Initialize Swiper for the partner logos

// ==================== Scroll Reveal ====================
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2000,
  delay: 200,
});

// Banner
ScrollReveal().reveal(".slide-caption h1, .slide-caption p", {
  origin: "top",
  interval: 200,
});

// About Section
ScrollReveal().reveal(".about_wrapper h3, .about_wrapper p, .about_wrapper a", {
  origin: "left",
  interval: 200,
});
ScrollReveal().reveal(".about_wrapper img", { origin: "right" });

// Rooms Section
ScrollReveal().reveal(".room_wrapper .card", {
  origin: "bottom",
  interval: 200,
});

// Services Section
ScrollReveal().reveal(".services_wrapper h6, .services_wrapper h3", {
  origin: "top",
});
ScrollReveal().reveal(".services_wrapper ul li", {
  origin: "left",
  interval: 200,
});
ScrollReveal().reveal(".services_wrapper img", { origin: "right" });

// Gallery
ScrollReveal().reveal(".gallery_wrapper img", {
  origin: "bottom",
  interval: 100,
});

// Price Section
ScrollReveal().reveal(".price_wrapper .card", {
  origin: "bottom",
  interval: 200,
});

// Blog Section
ScrollReveal().reveal(".blog_wrapper .card", {
  origin: "bottom",
  interval: 200,
});

// Footer
ScrollReveal().reveal(".footer_wrapper h5, .footer_wrapper p, .footer_wrapper form, .footer_wrapper a", {
  origin: "top",
  interval: 100,
});

// ==================== Counter Animation ====================
function animateCounter(id, end) {
  let el = document.getElementById(id);
  let count = 0;
  let speed = Math.floor(2000 / end); // adjust speed
  let counter = setInterval(() => {
    count++;
    el.textContent = count;
    if (count >= end) clearInterval(counter);
  }, speed);
}

window.addEventListener("scroll", function () {
  let counterSection = document.querySelector(".counter");
  let position = counterSection.getBoundingClientRect().top;
  let screenPos = window.innerHeight;

  if (position < screenPos) {
    animateCounter("client", 500);
    animateCounter("friendship", 120);
    animateCounter("rating", 300);
    animateCounter("breakfast", 800);
    // Run only once
    window.removeEventListener("scroll", arguments.callee);
  }
});

// ==================== Smooth Scroll for Navbar ====================
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
