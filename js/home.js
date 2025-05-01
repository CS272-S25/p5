const container = document.getElementById("featuredProducts");

fetch("https://fakestoreapi.com/products?limit=4")
.then(res => res.json())
.then(products => {
    products.forEach((productData) => {
        let newCard = createProductCard(productData);
        container.appendChild(newCard)
    })
});

/**
 * This function creates a product cart HTML element using te provided product data. This function
 * generates a card layout that includes the product image, title, description, price, and an
 * add to cart button. When the button is clicked the product is added to the shopping cart in
 * localStorage. If the product is already in the cart the quantity is increased by 1.
 * 
 * @param {object} productData - The product data object containing the product's details 
 * such as id, title, price, description, and image.
 * @returns {HTMLElement} A new HTML element representing the product card to be added to the
 * webpage.
 */

function createProductCard(productData) {
    const newColDivNode = document.createElement("div");
    newColDivNode.className = ('col-12 col-md-6 col-lg-4');

    const newCardDivNode = document.createElement("div");
    newCardDivNode.className = "card m-2 p-2 h-100 shadow-sm";

    const bodyDivNode = document.createElement("div");
    bodyDivNode.className = ("card-body 0-2");

    const newImgNode = document.createElement("img");
    newImgNode.className = "card-img-top";
    newImgNode.src = productData.image;
    newImgNode.alt = productData.title;
    newImgNode.style.height = "200px";

    const newTitleNode = document.createElement("h5");
    newTitleNode.className = "card-title";
    newTitleNode.textContent = productData.title;
    newImgNode.style.objectFit = "contain";

    const newPriceNode = document.createElement("p");
    newPriceNode.classList.add("card-text");
    newPriceNode.innerText = `$${productData.price.toFixed(2)}`;

    const newRatingDivNode = document.createElement("div");
    newRatingDivNode.className = "mt-2"

    let fullStars = Math.floor(productData.rating.rate);
    let hasHalfStar = productData.rating.rate % 1 >= 0.5;
    let emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
        const star = document.createElement("i");
        star.className = "bi bi-star-fill";
        newRatingDivNode.appendChild(star);
    }

    if (hasHalfStar) {
        const halfStar = document.createElement("i");
        halfStar.className = "bi bi-star-half";
        newRatingDivNode.appendChild(halfStar);
    }

    for (let i = 0; i < emptyStars; i++) {
        const star = document.createElement("i");
        star.className = "bi bi-star";
        newRatingDivNode.appendChild(star);
    }

    const newDescNode = document.createElement("p");
    newDescNode.classList.add("card-text");
    newDescNode.textContent = productData.description.slice(0,100) + "...";

    const newReadMoreBtnNode = document.createElement("button");
    newReadMoreBtnNode.className = "btn btn-outline-secondary";
    newReadMoreBtnNode.innerText = "Read More";
    newReadMoreBtnNode.addEventListener("click", () => {
        if (newReadMoreBtnNode.innerText === "Read More") {
            newDescNode.innerText = productData.description;
            newReadMoreBtnNode.innerText = "Read Less";
        } else {
            newDescNode.innerText = productData.description.substring(0, 100) + "...";
            newReadMoreBtnNode.innerText = "Read More"; 
        }
    })

    const addToCartBtn = document.createElement("button");
    addToCartBtn.className = "btn btn-sm btn-outline-primary mt-2";
    addToCartBtn.textContent = "Add to Cart";

    addToCartBtn.addEventListener("click", () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const exists = cart.find(item => item.id === productData.id);
        if (exists) {
            exists.quantity += 1;
        } else {
            cart.push({
                id: productData.id,
                title: productData.title,
                price: productData.price,
                image: productData.image,
                quantity: 1 
            });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${productData.title} added to cart!`);
    });


    
    bodyDivNode.appendChild(newTitleNode);
    bodyDivNode.appendChild(newRatingDivNode);
    bodyDivNode.appendChild(newDescNode);
    bodyDivNode.appendChild(newReadMoreBtnNode);
    bodyDivNode.appendChild(newPriceNode);
    bodyDivNode.appendChild(addToCartBtn);
    newCardDivNode.appendChild(newImgNode);
    newCardDivNode.appendChild(bodyDivNode);
    newColDivNode.appendChild(newCardDivNode);

    return newColDivNode;
}
