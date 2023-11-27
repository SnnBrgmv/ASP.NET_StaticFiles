import { products } from "./data.js";


const productContainer = document.querySelector("#product-container");
const cartContainer = document.querySelector(".cart-container");
const totalPrice = document.querySelector(".total-price");
let cart = [];

// Create product cards for each product
products.forEach((product) => {
    let { id, title, price, imgSrc, backgroundClass, badge } = product;
    let productCard = generateProductCard(id, title, price, imgSrc, backgroundClass, badge);
    productContainer.innerHTML += productCard;
});

// Function to generate a product card HTML
function generateProductCard(id, title, price, imgSrc, backgroundClass, badge) {
    let productCard = `
        <div class="col-md-4 col-sm-12 col-lg-3 position-relative">
        <div class="section__cart__img ${backgroundClass}">
        <img src="${imgSrc}" alt="${title}">
        ${badge ? `<span class="badge">${badge}</span>` : ''}
        <div class="section__cart__img__add">
          <a href="#product-container" data-id=${id} class="add-to-cart-btn">Add to cart</a>
          <span class="section__cart__img__add__span">
            <a href="#product-container"><i class="bi bi-heart"></i></a>
            <a href="#product-container" data-bs-toggle="modal" data-bs-target="#detailModal"><i class="bi bi-arrows-fullscreen"></i></a>
          </span>
        </div>
      </div>
      <div class="section__cart__stars">
        <div class="section__cart__stars__title">
          <h3><a href="#">${title}</a></h3>
          <span>$${price}</span>
        </div>
        <span class="section__cart__stars__icons">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-half"></i>
            <i class="bi bi-star-half"></i>
        </span>
      </div>
        </div>`;
    return productCard;
}

// Load the cart from localStorage when the page is loaded
window.addEventListener('load', () => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
        cart = storedCart;
        renderCart();
        updateCartCount();
    }
});

// Function to update the cart in localStorage and render the updated cart
function updateCart(cart) {
    // Update localStorage
    updateLocalStorage(cart);

    // Render the cart
    renderCart(cart);
    updateCartCount(cart);
}

// Function to update the cart in localStorage
function updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Add-to-cart button click event listeners
document.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
    btn.onclick = (e) => {
        let id = e.target.getAttribute("data-id");
        let product = products.find((p) => p.id == id);

        if (product) {

            let cartItem = cart.find((item) => item.id == id);
            if (cartItem) {
                cartItem.quantity++;
            } else {
                cart.push({ id, product, quantity: 1 });
            }

            renderCart();
            updateCartCount();
            updateLocalStorage();
            updateCart(cart);
        }
    };
});

// Function to render the cart
function renderCart() {

    cartContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p class='fw-bold fs-4'>The basket is empty.</p>";
        totalPrice.innerHTML = "";
        hideCheckoutSection();
        cartContainer.style.overflowY = 'hidden';
    } else {
        cart.forEach((cartItem) => {
            let { id, product, quantity } = cartItem;
            let cartItemHTML = `
            <div class="modal__product__section__cart__list">
                <div class="modal__product__section__cart__list__img">
                  <img src="${product.imgSrc}" alt="${product.title}">
                </div>
                <div class="modal__product__section__cart__list__info">
                  <a href="#">${product.title}</a>
                  <small class="text-muted">Quantity: ${quantity}</small>
                  <strong>$${product.price * quantity}</strong>
                </div>
                <div class="modal__product__section__cart__list__close mb-3">
                  <i class="bi bi-x-lg delete-btn" data-id="${id}"></i>
                </div>
                <hr class="pb-3 w-100">
              </div>`;
            cartContainer.innerHTML += cartItemHTML;

            total += product.price * quantity;
            showCheckoutSection();
            cartContainer.style.overflowY = 'auto';
        });
    }

    totalPrice.innerHTML = `<h3>Subtotal:</h3>
                    <span>$${total.toFixed(2)}</span>`;
}

// Hide/Show total and button sections
function hideCheckoutSection() {
    const checkoutSection = document.querySelector('.modal__product__section__total');
    checkoutSection.style.display = 'none';

    const checkoutButtons = document.querySelectorAll('.modal__product__section__btn a');
    checkoutButtons.forEach(button => {
        button.style.display = 'none';
    });
}

function showCheckoutSection() {
    const checkoutSection = document.querySelector('.modal__product__section__total');
    checkoutSection.style.display = 'flex';

    const checkoutButtons = document.querySelectorAll('.modal__product__section__btn a');
    checkoutButtons.forEach(button => {
        button.style.display = 'block';
    });
}

// Click event listener for the cart items
cartContainer.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('delete-btn')) {
        const id = target.getAttribute('data-id');
        cart = cart.filter((item) => item.id != id);
        renderCart();
        updateCartCount();
        updateCart(cart);
    }
});

function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = count;
}
