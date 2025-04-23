// // Mobile menu toggle
// document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
//     document.getElementById('main-nav').classList.toggle('active');
// });

// // Dropdown functionality for mobile
// document.querySelectorAll('.dropdown').forEach(dropdown => {
//     const toggle = dropdown.querySelector('a');
//     const menu = dropdown.querySelector('.dropdown-menu');

//     toggle.addEventListener('click', (e) => {
//         if (window.innerWidth < 768) {
//             e.preventDefault();
//             dropdown.classList.toggle('active'); 
//         }
//     });
// });

// // Close menu on link click (mobile)
// document.querySelectorAll('#main-nav a').forEach(link => {
//     link.addEventListener('click', () => {
//         if (window.innerWidth < 768) {
//             document.getElementById('main-nav').classList.remove('active');
//         }
//     });
// });


// მობილური მენიუს გადართვა
const mobileMenuButton = document.querySelector('.mobile-menu-btn');
const mainNav = document.getElementById('main-nav');

mobileMenuButton.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// ჩამოსაშლელი მენიუს ფუნქციონირება მობილურზე
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const dropdownToggle = dropdown.querySelector('a');

    dropdownToggle.addEventListener('click', (event) => {
        if (window.innerWidth < 768) {
            event.preventDefault(); // თავიდან ავიცილოთ ნავიგაცია
            dropdown.classList.toggle('active');
            event.stopPropagation(); //
        }
    });
});

// მენიუს დახურვა ლინკზე დაჭერისას (მობილური)
mainNav.addEventListener('click', (event) => {
    if (window.innerWidth < 768 && event.target.tagName === 'A') {
        mainNav.classList.remove('active');
    }
});

// პროდუქტების სექცია
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        // Get the href value from the child element
        const href = card.querySelector('[href]').getAttribute('href');
        
        // Make the entire card clickable
        card.addEventListener('click', function() {
            window.location.href = href;
        });
        
        // Add pointer cursor on hover
        card.style.cursor = 'pointer';
    });
});



// სლაიდერი

const productSlider = document.querySelector('.custom-slider');
const nextBtn = document.querySelector('.slider-btn.next');
const prevBtn = document.querySelector('.slider-btn.prev');

nextBtn.addEventListener('click', () => {
  productSlider.scrollBy({ left: 300, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  productSlider.scrollBy({ left: -300, behavior: 'smooth' });
});

