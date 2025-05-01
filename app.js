const products = {
  notebooks: [
    {
      name: "Spiral Notebook",
      image: "images/notebook1.jpg",
      description: "College-ruled, 100 pages, assorted colors.",
      price: "$2.99",
    },
    {
      name: "3-Ring Binder",
      image: "images/binder1.jpg",
      description: "1.5 inch, durable plastic, comes with pockets.",
      price: "$4.49",
    },
    {
      name: "Composition Notebook",
      image: "images/notebook2.jpg",
      description: "Wide-ruled, 80 pages, marble cover.",
      price: "$1.99",
    },
    {
      name: "Leather Journal",
      image: "images/notebook3.jpg",
      description: "Hardcover with lined pages and elastic strap.",
      price: "$6.49",
    },
    {
      name: "Mini Pocket Notebook",
      image: "images/notebook4.jpg",
      description: "3x5 inch size, set of 3 small notebooks.",
      price: "$3.29",
    },
    {
      name: "Binder with Zipper",
      image: "images/binder2.jpg",
      description: "2-inch ring, zippered closure, with file compartments.",
      price: "$7.99",
    },
    {
      name: "Eco-Friendly Notebook",
      image: "images/notebook5.jpeg",
      description: "Recycled paper, kraft cover, college-ruled.",
      price: "$2.49",
    },
    {
      name: "Decorative Binder",
      image: "images/binder3.jpg",
      description: "Floral print, 1-inch rings, perfect for school.",
      price: "$3.99",
    },
    {
      name: "5-Subject Notebook",
      image: "images/notebook6.jpg",
      description: "Thick notebook with tabs for subjects.",
      price: "$4.99",
    },
    {
      name: "Clear View Binder",
      image: "images/binder4.jpg",
      description: "Allows custom cover insert, 1.5-inch rings.",
      price: "$4.79",
    },
    {
      name: "Graph Paper Notebook",
      image: "images/notebook7.jpeg",
      description: "Perfect for math & engineering students.",
      price: "$3.59",
    },
    {
      name: "Heavy-Duty Binder",
      image: "images/binder5.jpg",
      description: "Extra strong spine, reinforced rings.",
      price: "$5.89",
    }
  ],

  pensandpencils: [
    {
      name: "Pilot G2 Premium Gel Roller Pens, Bold Point 1 mm, Pack of 2, Black",
      image: "images/G2_premium_pens.jpg",
      description: "Smooth & Long-lasting: Enjoy a smooth writing experience thanks to the gel ink that glides effortlessly across paper.",
      price: "$2.98"
    },
    {
      name: "Sharpie S-Gel, Gel Pens, 12 Count, Black Ink",
      image: "images/sharpie_premium_pens.jpg",
      description: "Sharpie Quality: Reliable performance and best-in-class ink quality.",
      price: "$12.65"
    },
    {
      name: "Paper Mate Clearpoint Mechanical Pencils, 0.7mm, Assorted Colors, 6 Count",
      image: "images/papermate_clearpoint.jpg",
      description: "Mechanical pencils that create clear, precise lines every time.",
      price: "$12.99"
    },
    {
      name: "Ticonderoga Wood-Cased Pencils, #2 HB Soft, Yellow, 12 Count",
      image: "images/ticonderoga_pencils.jpg",
      description: "Exclusive #2 graphite formula for extra smooth performance; thick graphite core delivers broad consistent lines.",
      price: "$2.94"
    },
  ],

  accessories: [
    {
      name: "Wisconsin Badger Stickers",
      image: "images/wisconsin_badger_stickers.jpg",
      description: "Badger stickers to show your school pride!",
      price: "$8.99",
      link: "https://a.co/d/e50wuZy"
    }
  ]
};

function renderProducts(category) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  products[category].forEach((product) => {
      const col = document.createElement("div");
      col.className = "col-md-4";

      col.innerHTML = `
          <div class="card mb-4 shadow-sm h-100">
              <img src="${product.image}" class="card-img-top" alt="${product.name}">
              <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">${product.description}</p>
                  <p class="text-success fw-bold">${product.price}</p>
                  ${product.link ? `<a class="btn btn-primary" href="${product.link}" target="_blank">Buy on Amazon</a>` : `<button class="btn btn-outline-primary" onclick="addToCart('${product.name}')">Add to Cart</button>`}
              </div>
          </div>
      `;
      container.appendChild(col);
  });
}

function addToCart(item) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${item} added to cart!`);
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.getAttribute("data-page");
  if (page) renderProducts(page);

  const filterForm = document.getElementById("filterForm");
  if (filterForm) {
      filterForm.addEventListener("submit", function (e) {
          e.preventDefault();
          const searchText = document.getElementById("search").value.toLowerCase();
          const filtered = products[page].filter((p) => p.name.toLowerCase().includes(searchText));
          const container = document.getElementById("productContainer");
          container.innerHTML = "";

          filtered.forEach((product) => {
              const col = document.createElement("div");
              col.className = "col-md-4";
              col.innerHTML = `
                  <div class="card mb-4 shadow-sm h-100">
                      <img src="${product.image}" class="card-img-top" alt="${product.name}">
                      <div class="card-body">
                          <h5 class="card-title">${product.name}</h5>
                          <p class="card-text">${product.description}</p>
                          <p class="text-success fw-bold">${product.price}</p>
                          ${product.link ? `<a class="btn btn-primary" href="${product.link}" target="_blank">Buy on Amazon</a>` : `<button class="btn btn-outline-primary" onclick="addToCart('${product.name}')">Add to Cart</button>`}
                      </div>
                  </div>
              `;
              container.appendChild(col);
          });
      });
  }
});
