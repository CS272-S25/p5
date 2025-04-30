const container = document.getElementById("featuredProducts");

fetch("https://fakestoreapi.com/products?limit=5")
.then(res => res.json())
.then(products => {
    products.forEach((productData) => {
        let newCard = createProductCard(productData);
        container.appendChild(newCard)
    })
});

function createProductCard(productData) {
    const newColDivNode = document.createElement("div");
    newColDivNode.className = ("col-xs-12 col-sm-6 col-md-4 col-lg-3");

    const newCardDivNode = document.createElement("div");
    newCardDivNode.className = "card m-2 p-2 h-100 shadow-sm";

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
    newPriceNode.innerHTML = `<strong>$${productData.price}</strong>`;

    const newDescNode = document.createElement("p");
    newDescNode.classList.add("card-text");
    newDescNode.textContent = productData.description.slice(0,100) + "...";

    const addToCartBtn = document.createElement("button");
    addToCartBtn.className = "btn btn-sm btn-outline-primary mt-2";
    addToCartBtn.textContent = "Add to Cart";

    addToCartBtn.addEventListener("click", () => {
        let cart = JSON.parse(localStorage.getItem("cart"))
        const exists = cart.find(item => item.id === productData.id);
        if (!exists) {
            cart.push({...productData, quantity: 1});
            localStorage.setItem("cart", JSON.stringify(cart));
            addToCartBtn.textContent = "Added!";
            addToCartBtn.classList.replace("btn-outline-primary", "btn-success");
        }
    })

    const bodyDivNode = document.createElement("div");
    bodyDivNode.className = ("card-body 0-2");


    bodyDivNode.appendChild(newTitleNode);
    bodyDivNode.appendChild(newDescNode);
    bodyDivNode.appendChild(newPriceNode);
    bodyDivNode.appendChild(addToCartBtn);
    newCardDivNode.appendChild(newImgNode);
    newCardDivNode.appendChild(bodyDivNode);
    newColDivNode.appendChild(newCardDivNode);

    return newColDivNode;
}
