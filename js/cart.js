
/**
 * This function updates the shopping cart on the checkout page. It uses retrieves
 * cart items from localStorage and clears the existing cart display. It also dynamically creates 
 * and appends element for each item in the cart. The function calculates and updates the total
 * cart price for everything added and adds event listeners to remove items.
 * 
 * @returns {void}
 * 
 */

function updateCart(){
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    while (cartContainer.firstChild) {
        cartContainer.removeChild(cartContainer.firstChild);
    }

    let totalPrice = 0;

    cartItems.forEach(item => {
        const newColDivNode = document.createElement('div');
        newColDivNode.className = 'col-12 col-md-6 col-lg-4';

        const newCardDivNode = document.createElement("div");
        newCardDivNode.className = "card m-2 p-2";

        const imgNode = document.createElement('img');
        imgNode.src = item.image;
        imgNode.alt = item.title;
        imgNode.className = 'card-img-top';

        const bodyDivNode = document.createElement('div');
        bodyDivNode.className = 'card-body';

        const titleNode = document.createElement('h5');
        titleNode.className = 'card-title';
        titleNode.textContent = item.title;

        const priceNode = document.createElement('p');
        priceNode.className = 'card-text';
        priceNode.textContent = `Price: $${item.price}`;

        const quantityNode = document.createElement('p');
        quantityNode.className =  'card-text';
        quantityNode.textContent = `Quantity ${item.quantity}`

        const removeBtn = document.createElement('button');
        removeBtn.className = 'btn btn-danger';
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
            removeFromCart(item.id)
        });

        bodyDivNode.appendChild(titleNode);
        bodyDivNode.appendChild(priceNode);
        bodyDivNode.appendChild(quantityNode);
        bodyDivNode.appendChild(removeBtn);
        newCardDivNode.appendChild(imgNode);
        newCardDivNode.appendChild(bodyDivNode);
        newColDivNode.append(newCardDivNode);
        cartContainer.appendChild(newColDivNode);

        const subtotal = item.price * item.quantity;
        totalPrice += subtotal;
        
    });
    totalPriceElement.textContent = `${totalPrice.toFixed(2)}`;
}

/**
 * This function removes a product from the shopping cart based on its ID or reduces the quantity
 * it is greater than 1. It retrieves the current cart from localStorage and filters out the item
 * with the specified product ID. It the saves the updated cart back to localStorage and calls 
 * updateCart() to refresh the cart.
 * 
 * @param {number} productId - The ID of the product to remove from the cart.
 * @returns {void}
 */
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = cart.find(item => item.id === productId);

    if (product) {
        if (product.quantity > 1) {
            product.quantity -= 1;
        } else {
            cart = cart.filter(item => item.id !== productId);
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

updateCart();

document.getElementById("checkout-btn").addEventListener("click", checkoutCart)

/**
 * This function simulates the checkout process. It clears the cart from localStorage,
 * shows a confirmation alert, and then redirects the user back to the homepage.
 * 
 * @returns {void}
 */

function checkoutCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return
    }

    localStorage.removeItem('cart');

    updateCart();

    alert("Thank you for your purchase!")

    window.location.href = "index.html"
}