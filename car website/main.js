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
