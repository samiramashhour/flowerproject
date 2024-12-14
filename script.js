window.addEventListener('load', () => {
    const animatedImage = document.querySelector('.animated-image');
    animatedImage.classList.add('visible');
});



document.addEventListener("scroll", function () {
    const image = document.querySelector(".about-image img");
    const imagePosition = image.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (imagePosition < windowHeight - 100) {
        image.classList.add("visible");
    }
});



document.addEventListener("scroll", function () {
    const products = document.querySelectorAll(".product");
    const windowHeight = window.innerHeight;

    products.forEach(function (product) {
        const productPosition = product.getBoundingClientRect().top;
        if (productPosition < windowHeight - 100) {
            product.classList.add("visible");
        }
    });
});



document.addEventListener("scroll", function () {
    const reviews = document.querySelectorAll(".review-box");
    const windowHeight = window.innerHeight;

    reviews.forEach(function (review) {
        const reviewPosition = review.getBoundingClientRect().top;
        if (reviewPosition < windowHeight - 100) {
            review.classList.add("visible");
        }
    });
});



document.addEventListener("scroll", function () {
    const deliveryImage = document.querySelector(".delivery-image");
    const windowHeight = window.innerHeight;
    const deliveryPosition = deliveryImage.getBoundingClientRect().top;
    
    if (deliveryPosition < windowHeight - 100) {
        deliveryImage.classList.add("visible");
    }
});



document.addEventListener("scroll", function () {
    const image = document.querySelector(".store-image");
    const windowHeight = window.innerHeight; 
    const imagePosition = image.getBoundingClientRect().top; 
    if (imagePosition < windowHeight - 100) {
        image.classList.add("visible"); 
    }
});