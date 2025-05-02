const products = {
  notebooks: [
    {
      name: "Spiral Notebook",
      image: "https://m.media-amazon.com/images/I/714gcIZmZML._AC_UL640_FMwebp_QL65_.jpg",
      description: "College-ruled, 100 pages, assorted colors.",
      price: "$2.99",
    },
    {
      name: "3-Ring Binder",
      image: "https://m.media-amazon.com/images/I/31ztnUlsg-L._SY445_SX342_QL70_FMwebp_.jpg",
      description: "1.5 inch, durable plastic, comes with pockets.",
      price: "$4.49",
    },
    {
      name: "Composition Notebook",
      image: "https://m.media-amazon.com/images/I/81LjL8LQtIL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      description: "Wide-ruled, 80 pages, marble cover.",
      price: "$1.99",
    },
    {
      name: "Leather Journal",
      image: "https://m.media-amazon.com/images/I/71-t+mZNV+L._AC_SY300_SX300_.jpg",
      description: "Hardcover with lined pages and elastic strap.",
      price: "$6.49",
    },
    {
      name: "Mini Pocket Notebook",
      image: "https://m.media-amazon.com/images/I/71N9-EkmS6L._AC_SX679_.jpg",
      description: "3x5 inch size, set of 3 small notebooks.",
      price: "$3.29",
    },
    {
      name: "Binder with Zipper",
      image: "https://m.media-amazon.com/images/I/91UzGrcSgvL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      description: "2-inch ring, zippered closure, with file compartments.",
      price: "$7.99",
    },
    {
      name: "Eco-Friendly Notebook",
      image: "https://m.media-amazon.com/images/I/71BWToSQ-SL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      description: "Recycled paper, kraft cover, college-ruled.",
      price: "$2.49",
    },
    {
      name: "Decorative Binder",
      image: "https://m.media-amazon.com/images/I/61w5NTkkZML.__AC_SY300_SX300_QL70_FMwebp_.jpg",
      description: "Floral print, 1-inch rings, perfect for school.",
      price: "$3.99",
    },
    {
      name: "5-Subject Notebook",
      image: "https://m.media-amazon.com/images/I/81QgjDqTWUL._AC_SX679_.jpg",
      description: "Thick notebook with tabs for subjects.",
      price: "$4.99",
    },
    {
      name: "Clear View Binder",
      image: "https://m.media-amazon.com/images/I/71UwcyqNBmL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      description: "Allows custom cover insert, 1.5-inch rings.",
      price: "$4.79",
    },
    {
      name: "Graph Paper Notebook",
      image: "https://m.media-amazon.com/images/I/714c99F7YJL._SY425_.jpg",
      description: "Perfect for math & engineering students.",
      price: "$3.59",
    },
    {
      name: "Heavy-Duty Binder",
      image: "https://m.media-amazon.com/images/I/91ERHUu37TS.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      description: "Extra strong spine, reinforced rings.",
      price: "$5.89",
    }
  ],

  pensandpencils: [
    {
      name: "Bic Mechanical Pencil #2 EXTRA SMOOTH, 40 Pack Of Twenty 0.5mm, and Twenty 0.7 mm - Assorted Colored Barrels - Variety Pack of Bic Lead Pencils",
        image: "https://m.media-amazon.com/images/I/81LGb9fhIoL._AC_SX679_.jpg",
        description: "Large Convenient value pack of 40 count click mechanical pencils.",
        price: "$17.99"
    },
    {
    name: "Nicpro Gold Art Mechanical Pencil Set, Metal Drafting Pencil 0.5, 0.7, 0.9mm & 2mm Lead Holder(2B HB 2H) For Sketching Drawing With Lead Refills Case",
        image: "https://m.media-amazon.com/images/I/819W64VtPuL._AC_SX679_.jpg",
        description: "Value Package :Come With 6 PCS mechanical drafting pencils ",
        price: "$16.99"
  },
  {
    name: "Pentel Twist-Erase III Mechanical Pencil, (0.9mm), Assorted Barrel Colors with 2 Eraser Refills, Pack of 2",
        image: "https://m.media-amazon.com/images/I/71abG3L-dGL._AC_SX679_.jpg",
        description: "Sturdy, well-balanced barrel makes this the most popular Twist-Erase Pencil.",
        price: "$10.09"
  },
  
    {
      name: "Paper Mate Clearpoint Mechanical Pencils, 0.7mm, Assorted Colors, 6 Count",
      image: "https://m.media-amazon.com/images/I/81kMzn3SrEL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      description: "Mechanical pencils that create clear, precise lines every time.",
      price: "$12.99"
    },
    {
      name: "Ticonderoga Wood-Cased Pencils, #2 HB Soft, Yellow, 12 Count",
      image: "https://m.media-amazon.com/images/I/71ZBiCWIo-L._AC_SX679_.jpg",
      description: "Exclusive #2 graphite formula for extra smooth performance; thick graphite core delivers broad consistent lines.",
      price: "$4.50"
    },
    {
    name: "Write Dudes USA Gold Premium Cedar No. 2 Pre-Sharpened Pencils 12-Count",
      image: "https://m.media-amazon.com/images/I/81g2YlJBmdL._AC_SY879_.jpg",
      description: "Write Dudes USA Gold Premium Cedar No. 2 Pre-Sharpened Pencils 12-Count.",
      price: "$2.79"
  },
  {
    name: "Gel Pens, 5 Pcs 0.5mm Black Ink Pens Fine Point Smooth Writing Pens, High-End Series Pens for Journaling Note Taking",
      image: "https://m.media-amazon.com/images/I/61pXbtOUuRL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      description: "Package Included: These journal pens included 5 pcs of high-end morandi gel pens. They are great retractable pens for aesthetic school supplies, office supplies, journaling, note taking and planning.",
      price: "$7.99"
  },
  {
    name: "Scriveiner Black Lacquer Rollerball Pen - Stunning Luxury Pen with real gold plating Finish, Schmidt Ink Refill, Best Roller Ball Gift Set for Men & Women, Professional, Executive Office, Nice Pens",
      image: "https://m.media-amazon.com/images/I/71XerdLrgrL._AC_SX679_.jpg",
      description: "Enjoy the feel of a true luxury pen in your hand, Stunning luxury rollerball pen by Scriveiner. Brass with jet-black lacquer finished in real gold plating. Premium quality and understated luxury from a boutique British brand.",
      price: "$32.99"
  },
  {
    name: "Paper Mate Flair Felt Tip Pens, Medium Point (0.7mm), Assorted Colors, 12 Count",
        image: "https://m.media-amazon.com/images/I/81X1SjEnOyL._AC_SX679_.jpg",
        description: "Add a blast of fun to all your writing with bright colors.",
        price: "$9.49"
  },
  {
    name: "30 Colors Felt Tip Pens, 30 Pack, 0.7mm Premium Medium Fine Point",
        image: "https://m.media-amazon.com/images/I/91eqZyHRlwL._AC_SX679_.jpg",
        description: "VALUE PACK: 30 multi colors bulk pack Ezzgol felt tip pens set.",
        price: "$13.99"
  },
  {
    name: "Pilot G2 Premium Gel Roller Pens, Bold Point 1 mm, Pack of 2, Black",
    image: "https://www.ndsubookstore.com/Product%20Images/07283831014_media-01.default.jpeg?resizeid=3&resizeh=600&resizew=600",
    description: "Smooth & Long-lasting: Enjoy a smooth writing experience thanks to the gel ink that glides effortlessly across paper.",
    price: "$2.98"
  },
  {
    name: "Sharpie S-Gel, Gel Pens, 12 Count, Black Ink",
    image: "https://m.media-amazon.com/images/I/81gFhr9VWLL._AC_SX679_.jpg",
    description: "Sharpie Quality: Reliable performance and best-in-class ink quality.",
    price: "$12.65"
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

