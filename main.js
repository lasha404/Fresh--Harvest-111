// მობილური მენიუს გადართვა
const mobileMenuButton = document.querySelector('.mobile-menu-btn');
const mainNav = document.getElementById('main-nav');

mobileMenuButton.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// dropdown menu
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const dropdownToggle = dropdown.querySelector('a');

    dropdownToggle.addEventListener('click', (event) => {
        if (window.innerWidth < 768) {
            event.preventDefault();

            // დახურეთ ყველა სხვა ღია დროპდაუნი
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown && otherDropdown.classList.contains('active')) {
                    otherDropdown.classList.remove('active');
                }
            });

            // გახსენით/დახურეთ მიმდინარე დროპდაუნი
            dropdown.classList.toggle('active');
        }
    });
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

