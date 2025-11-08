let currentSlide = 0;

function changeSlide(direction) {
    currentSlide += direction;
    console.log('Slide changed to:', currentSlide);
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0.5';
    setTimeout(() => {
        heroContent.style.opacity = '1';
    }, 300);
}
setInterval(() => {
    changeSlide(1);
}, 5000);
document.addEventListener('DOMContentLoaded', function() {
    const categoryItems = document.querySelectorAll('.category-item');
    
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            navigateToCategory(category);
        });
        item.addEventListener('mouseenter', function() {
            const img = this.querySelector('.product-img');
            img.style.transform = 'scale(1.05) rotate(2deg)';
        });
        
        item.addEventListener('mouseleave', function() {
            const img = this.querySelector('.product-img');
            img.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});
function navigateToCategory(category) {
    console.log(`Navigating to ${category} category`);
    alert(`You clicked on ${category.toUpperCase()} category!`);
}
window.addEventListener('scroll', function() {
    const therapySection = document.querySelector('.therapy-section');
    const sectionPosition = therapySection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (sectionPosition < screenPosition) {
        therapySection.style.opacity = '1';
        therapySection.style.transform = 'translateY(0)';
    }
});
document.querySelector('.therapy-section').style.opacity = '0';
document.querySelector('.therapy-section').style.transform = 'translateY(30px)';
document.querySelector('.therapy-section').style.transition = 'all 0.6s ease';
