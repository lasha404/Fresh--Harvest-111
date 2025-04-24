// მობილური მენიუს გადართვა
const mobileMenuButton = document.querySelector('.mobile-menu-btn');
const mainNav = document.getElementById('main-nav');
const dropdowns = document.querySelectorAll('.dropdown'); // დარწმუნდით, რომ ეს ცვლადი აქაც არის ხელმისაწვდომი

mobileMenuButton.addEventListener('click', () => {
    mainNav.classList.toggle('active');

    // თუ მენიუ იხურება, დახურეთ ყველა ღია დროპდაუნი
    if (!mainNav.classList.contains('active')) {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

// dropdown menu
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
            if (window.innerWidth < 768) {
                // დახურეთ ყველა ღია დროპდაუნი პროდუქტის გვერდზე გადასვლამდე
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
                // დახურეთ მობილური მენიუც
                mainNav.classList.remove('active');
            }
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
