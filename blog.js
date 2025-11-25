// Slider functionality
function slide(id, direction) {
    const slider = document.getElementById(id);
    const slideWidth = 310; // width of slide + gap
    slider.scrollLeft += direction * slideWidth;

    // Update active slide after animation
    setTimeout(() => updateActive(id), 400);
}

// Update which slide is active (centered/enlarged)
function updateActive(id) {
    const slider = document.getElementById(id);
    const slides = slider.querySelectorAll(".slide");
    const sliderRect = slider.getBoundingClientRect();
    const sliderCenter = sliderRect.left + sliderRect.width / 2;

    let minDiff = Infinity;
    let activeIndex = 0;

    slides.forEach((slide, index) => {
        const rect = slide.getBoundingClientRect();
        const slideCenter = rect.left + rect.width / 2;
        const diff = Math.abs(slideCenter - sliderCenter);

        if (diff < minDiff) {
            minDiff = diff;
            activeIndex = index;
        }
    });

    // Remove active class from all slides
    slides.forEach(s => s.classList.remove("active"));
    
    // Add active class to centered slide
    if (slides[activeIndex]) {
        slides[activeIndex].classList.add("active");
    }
}

// Toggle category dropdown
function toggleDropdown() {
    const dropdown = document.getElementById("dropdown");
    dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById("dropdown");
    const dropdownBtn = document.querySelector(".dropdown-btn");
    
    if (!dropdownBtn.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = "none";
    }
});

// Smooth scroll to category when clicked in dropdown
document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const offset = 100; // Account for fixed nav
            const targetPosition = targetElement.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close dropdown after selection
            document.getElementById("dropdown").style.display = "none";
        }
    });
});

// Search functionality
function searchArticles() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const slides = document.querySelectorAll(".slide");

    slides.forEach(slide => {
        const title = slide.querySelector("h3").textContent.toLowerCase();
        const description = slide.querySelector("p").textContent.toLowerCase();
        
        if (title.includes(filter) || description.includes(filter)) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
}

// Initialize active slides on page load
window.addEventListener('load', function() {
    const sliders = ['popular', 'tips', 'cultureS', 'location', 'activity', 'vr'];
    sliders.forEach(sliderId => {
        updateActive(sliderId);
    });
});

// Update active slides on window resize
window.addEventListener('resize', function() {
    const sliders = ['popular', 'tips', 'cultureS', 'location', 'activity', 'vr'];
    sliders.forEach(sliderId => {
        updateActive(sliderId);
    });
});

// Update active slide on scroll within slider
document.querySelectorAll('.slider').forEach(slider => {
    slider.addEventListener('scroll', function() {
        const sliderId = this.id;
        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = setTimeout(() => {
            updateActive(sliderId);
        }, 150);
    });
});