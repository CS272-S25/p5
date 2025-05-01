function cart(){
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

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

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    cart();
}

cart();