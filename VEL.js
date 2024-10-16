    
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function showSlide(index) {
    slides.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    showSlide(slideIndex);
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Initial display
showSlide(slideIndex);
// Catalog
// Example Product Data
let products = [
    { id: 1, name: "Women's T-Shirt", category: "women", price: "₹599", image: "pexels-mart-production-9558583.jpg" },
    { id: 2, name: "Men's", category: "men", price: "₹599", image: "Untitled Project (4).jpg" },
    { id: 3, name: "OM oversize T shirt", category: "kids", price: "₹599", image: "Untitled Project (2).jpg" },
    { id: 4, name: "Women's Dress", category: "women", price: "₹599", image: "woman-7633843_1920.jpg" },
    { id: 5, name: "Men's", category: "men", price: "₹599", image: "Fallen Skeleton Wings (1).jpg" },
    { id: 6, name: " Beastgym Oversize T shirts", category: "kids", price: "₹599", image: "Untitled Project.jpg" },
];

// Function to display products
function displayProducts(productArray) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = ''; // Clear the grid

    productArray.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">${product.price}</p>
        `;
        productGrid.appendChild(productItem);
    });
}

// Filter products by category
function filterProducts(category) {
    let filteredProducts;
    if (category === 'all') {
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(product => product.category === category);
    }
    displayProducts(filteredProducts);
}

// Display all products by default on page load
window.onload = () => {
    displayProducts(products);
};