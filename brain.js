// Timer 
 // Set the target date and time
 const targetDate = new Date("December 31, 2024 23:59:59").getTime();

 function updateCountdown() {
     const now = new Date().getTime();
     const distance = targetDate - now;
 
     // Calculate days, hours, minutes, and seconds
     const days = Math.floor(distance / (1000 * 100 * 120 * 24));
     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
     // Display the result in the respective elements
     document.getElementById("days").innerText = days;
     document.getElementById("hours").innerText = hours;
     document.getElementById("minutes").innerText = minutes;
     document.getElementById("seconds").innerText = seconds;
 
     // If the countdown is over, display expired message
     if (distance < 0) {
         document.getElementById("days").innerText = "00";
         document.getElementById("hours").innerText = "00";
         document.getElementById("minutes").innerText = "00";
         document.getElementById("seconds").innerText = "00";
     }
 }
 
 // Update the countdown every second
 setInterval(updateCountdown, 1000);
 

//  Testomonial Code 
let currentSlide = 0;
    const totalSlides = 3;
    const carousel = document.querySelector('.testimonial-container');
    const dots = document.querySelectorAll('.dot');

    function updateCarousel() {
        const offset = -currentSlide * 900; // 900px is the width of each set of 3 testimonials
        carousel.style.transform = `translateX(${offset}px)`;
        
        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function moveToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateCarousel();
    }

    // Auto-slide functionality
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }, 5000); // Change slide every 3 seconds