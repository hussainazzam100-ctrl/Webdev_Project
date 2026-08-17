const FALLBACK_PRODUCTS = [
    {
        id: 1,
        name: "Lenovo LOQ 15.6 FHD Gaming laptop",
        category: "laptop",
        price: 29900,
        oldPrice: 34000,
        image: "https://shop.octotech.mv/storage/products/lsnA0rygVsLN6oVkRT5MKNEc0sd5WnvpZFUJNW49.png",
        description: "High-performance gaming laptop with AMD Ryzen 7 processor, RTX 5060 graphics, fast DDR5 memory, and NVMe storage for gaming and demanding workloads.",
        specifications: [
            "AMD Ryzen 7 250",
            "NVIDIA RTX 5060",
            "16GB RAM DDR5",
            "512 GB NVMe M.2 SSD"
        ]
    },
    {
        id: 2,
        name: "Acer Predator Helios Neo 16S AI Gaming Laptop",
        category: "laptop",
        price: 37000,
        oldPrice: 42450,
        image: "https://shop.octotech.mv/storage/products/dPY8Fii3GVgglx9pi6lhPrA3puuasDqpLE4J6QSO.png",
        description: "Premium gaming laptop featuring Intel Core Ultra 9 processor, OLED high refresh display, RTX 5060 graphics, and powerful hardware for competitive gaming.",
        specifications: [
            "16 inch OLED 240Hz",
            "Ultra 9 RTX 5060",
            "32GB RAM DDR5",
            "Intel Core Ultra 9 275HX"
        ]
    },
    {
        id: 3,
        name: "MSI Thin A15 B7VF-461US Gaming laptop",
        category: "laptop",
        price: 20450,
        oldPrice: 27550,
        image: "https://shop.octotech.mv/storage/products/UtTpVEJJzkzS90UvQ2SA4tZCYDdu4HbVz7s2LUG2.png",
        description: "Affordable gaming laptop powered by AMD Ryzen 5 and RTX 4060 graphics, offering smooth gaming performance with a fast Full HD display.",
        specifications: [
            "AMD Ryzen 5 ",
            "NVIDIA RTX 4060",
            "16GB RAM DDR5",
            "15.6 inch Full HD"
        ]
    },
    {
        id: 4,
        name: "SENZER SG600 Wireless Gaming Headset",
        category: "headset",
        price: 950,
        oldPrice: 1500,
        image: "https://shop.octotech.mv/storage/products/Ppjb1WnqC4z7T9cWWjqbFvypW5VZO8jgVTUbodPN.png",
        description: "Wireless gaming headset with noise-canceling microphone, long battery life, and multi-platform compatibility for gaming and communication.",
        specifications: [
            "Compatibility: PC, PS4, PS5, Mac, iPad, and mobile devices (Xbox requires wired mode only)",
            "Impedance: 16 Ohms",
            "Microphone: Retractable, omnidirectional, and noise-canceling",
            "Battery Capacity: 1200mAh"
        ]
    },
    {
        id: 5,
        name: "CORSAIR VOID RGB ELITE Wireless Gaming Headset",
        category: "headset",
        price: 2650,
        oldPrice: 4150,
        image: "https://shop.octotech.mv/storage/products/B16pRNFsmdlz8MqDqbbEJqluSEuSvgAquFow5zRX.webp",
        description: "Premium wireless RGB gaming headset from CORSAIR featuring immersive audio, comfortable design, and a high-quality detachable microphone.",
        specifications: [
            "Compatibility: PC, Mac, PlayStation 5, and PlayStation 4. ",
            "Impedance: 32 Ohms",
            "Microphone: omnidirectional and Non-detachable",
            "Battery Capacity: 1000mAh"
        ]
    },
    {
        id: 6,
        name: "Fantech TRINITY MH88 Multi Platform Gaming Headset",
        category: "headset",
        price: 1000,
        oldPrice: 1050,
        image: "https://shop.octotech.mv/storage/products/nverlVR7l28UyE6ntvPppzJ74UZ45wW8f8EGq0NE.png",
        description: "Multi-platform wired gaming headset with clear audio, noise-canceling microphone, and compatibility across PC, consoles, and mobile devices.",
        specifications: [
            "Compatibility: PC, PlayStation, Xbox, and Mobile Devices ",
            "Impedance: 32 Ohms",
            "Microphone: omnidirectional and noise-canceling",
            "No Battery Capacity, it is a strictly wired gaming headset"
        ]
    },
    {
        id: 7,
        name: "Redragon M612 Predator RGB Gaming Mouse",
        category: "mouse",
        price: 900,
        oldPrice: 1200,
        image: "https://shop.octotech.mv/storage/products/Ckw7kdkYWy6jF7qOuHZY71pQiQrG9uXPxmbUiX0h.webp",
        description: "RGB gaming mouse featuring customizable lighting, ergonomic design, and accurate tracking for gaming and everyday computer use.",
        specifications: [
            "Compatibility: Windows and macOS",
            "Weight: 110 grams",
            "Lighting: 5 dynamic RGB backlit modes"
        ]
    },
    {
        id: 8,
        name: "Logitech G102 LightSync Gaming Wired Mouse - Black",
        category: "mouse",
        price: 900,
        oldPrice: 1600,
        image: "https://shop.octotech.mv/storage/products/VBnU1FhtvpP4ABkbyOfnTA3KFONeDqBLAtugqIHy.png",
        description: "Reliable wired gaming mouse with LIGHTSYNC RGB lighting, lightweight construction, and precise tracking for competitive gaming.",
        specifications: [
            "OS Compatibility: Windows 7 or later, macOS, Chrome OS",
            "Weight: 85 grams",
            "Lighting: LIGHTSYNC RGB with approximately 16.8 million colors"
        ]
    },
    {
        id: 9,
        name: "Razer DeathAdder Essential Gaming Mouse - Black",
        category: "mouse",
        price: 1000,
        oldPrice: 1350,
        image: "https://shop.octotech.mv/storage/products/zAYNq5yNfjRB0E4FVQejSHDB1SYMGym23hyVnXiw.png",
        description: "Essential gaming mouse from Razer with accurate optical sensor, ergonomic design, and reliable performance for everyday gaming.",
        specifications: [
            "OS Compatibility: Windows 10 or later, macOS",
            "Weight: 96 grams",
            "Lighting: single-color green lighting"
        ]
    },
    {
        id: 10,
        name: "Redragon K671 Mechanical Gaming Keyboard Wired",
        category: "keyboard",
        price: 1750,
        oldPrice: 2050,
        image: "https://shop.octotech.mv/storage/products/PuG9uGQeIXgfL2czobUxTuYMzvANxrbEUNELLqgd.webp",
        description: "Mechanical gaming keyboard with durable key switches, customizable features, and responsive controls designed for gaming and productivity.",
        specifications: [
            "Special Features: Spill-proof design, dedicated Windows key lock, and macro editing support (via software)",
            "Keycaps: Double-shot ABS (or PBT depending on regional variation)",
            "Compatibility: Windows (software), PC, and Mac"
        ]
    },
    {
        id: 11,
        name: "Razer Huntsman Mini 60% Mechanical Gaming Keyboard",
        category: "keyboard",
        price: 2450,
        oldPrice: 3850,
        image: "https://shop.octotech.mv/storage/products/FIXRtW5hHJUlpq1mcTASQeq3T7Ydz1kUqYGWwTEJ.png",
        description: "Compact 60% mechanical gaming keyboard with Razer optical switches, fast response time, and onboard profile storage.",
        specifications: [
            "Switch Types: Razer Clicky Optical (Purple) or Linear Optical (Red)",
            "Polling Rate: Up to 1000 Hz Ultrapolling",
            "Memory: Onboard hybrid storage for up to 5 profiles"
        ]
    },
    {
        id: 12,
        name: "iClever Solar Bluetooth, Wireless with Solar & Indoor Light Charging Keyboard",
        category: "keyboard",
        price: 800,
        oldPrice: 1500,
        image: "https://shop.octotech.mv/storage/products/zmIAwN086EosZJuWVD5GM2lMEk7SfWYi8aGGb3S3.png",
        description: "Wireless solar-powered keyboard with quiet low-profile keys and compatibility across multiple operating systems and devices.",
        specifications: [
            "Compatibility: Fully supports Windows, macOS, iOS, and Android devices.",
            "Key Switches: Quiet, low-profile scissor switches with a 2.1 mm (0.083 in) key travel.",
            "Power: Built-in solar panel and an auxiliary CR2032 coin cell battery slot for backup."
        ]
    },
    {
        id: 13,
        name: "MSI MAG 255XF 24.5inch FHD 300Hz IPS Gaming Monitor",
        category: "monitors",
        price: 5350,
        oldPrice: 6550,
        image: "https://shop.octotech.mv/storage/products/NokdZYswKKCtiHoH4LVajzWdhQ1v5fminpXHOqrw.webp",
        description: "High refresh rate gaming monitor featuring a 300Hz IPS display, fast response time, and eye-care technologies for competitive gaming.",
        specifications: [
            "Screen Size: 24.5 inches (flat)",
            "Eye Care: Less Blue Light and Anti-Flicker technology",
            "Response Time: 0.5ms (GtG, Min.)"
        ]
    },
    {
        id: 14,
        name: "ACER Nitro VG271U 27 IPS WQHD (2560x1440) 180Hz Gaming Monitor",
        category: "monitors",
        price: 5550,
        oldPrice: 8100,
        image: "https://shop.octotech.mv/storage/products/eLiZDJzDHmNNFwfDSZX0PSuVNEbdAKEFcEIVHSm5.png",
        description: "27-inch WQHD gaming monitor with high resolution, smooth 180Hz refresh rate, fast response time, and vibrant IPS panel technology.",
        specifications: [
            "Screen Size: 27 inches",
            "Eye Care: Filters out harmful Blue Light and Anti-Flicker technology",
            "Response Time: 1ms (GtG) with overdrive up to 0.5ms (GtG)"
        ]
    },
    {
        id: 15,
        name: "SAMSUNG Odyssey G4 G40B FHD 240Hz Gaming Monitor",
        category: "monitors",
        price: 6250,
        oldPrice: 8500,
        image: "https://shop.octotech.mv/storage/products/i6Hzac9UgUAVurjJInNpcpBo3DCK9HSpWHK6d6UI.png",
        description: "Samsung Odyssey gaming monitor with 240Hz refresh rate, fast response time, and gaming-focused features for smooth gameplay.",
        specifications: [
            "Screen Size: 25 inches (flat)",
            "Eye Care: Less Blue Light (Eye Saver Mode) and Anti-Flicker technology",
            "Response Time: 1ms (GtG, Min.)"
        ]
    },
    {
        id: 16,
        name: "Kingston FURY Beast RAM",
        category: "ram",
        price: 21100,
        oldPrice: 27800,
        image: "https://shop.octotech.mv/storage/products/fiDic5N5tCWQMcMcJo87tqCCQGTMDf4HKtguEw0T.png",
        description: "High-capacity DDR5 gaming memory kit designed for powerful gaming PCs, multitasking, and demanding applications.",
        specifications: [
            "Memory Type: DDR5",
            "Capacity: 64GB Kit",
            "Speeds Available: 3733 MT/s"
        ]
    },
    {
        id: 17,
        name: "KLEVV CRAS V RAM",
        category: "ram",
        price: 12550,
        oldPrice: 14000,
        image: "https://shop.octotech.mv/storage/products/fNnDBtdatLgA9fbRYFLGncNdoWH0SFeptOYxhrbN.png",
        description: "Premium DDR5 RGB memory kit offering high-speed performance, low latency, and stylish design for modern gaming builds.",
        specifications: [
            "Memory Type: DDR5 Unbuffered DIMM",
            "Capacity: 32GB Kit",
            "Speeds Available: 6000 MT/s"
        ]
    },
    {
        id: 18,
        name: "G.SKILL RipjawsV RAM",
        category: "ram",
        price: 6750,
        oldPrice: 7550,
        image: "https://shop.octotech.mv/storage/products/LIRwup6xrCOtWXoyWEhYWnWL49hDivYrYRFzamvN.png",
        description: "Reliable DDR4 gaming memory kit providing stable performance and improved multitasking capability for compatible systems.",
        specifications: [
            "Memory Type: DDR4",
            "Capacity: 32GB Kit",
            "Speed Ratings: 2133 MHz"
        ]
    }
];

let products = [];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];


function createProductCardHTML(product) {
    return `
      <div class="product-card" data-id="${product.id}">
        <a href="product.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}">
        </a>
        <h3>${product.name}</h3>
        <p class="price-tag">MVR ${product.price.toLocaleString()} <s>MVR ${product.oldPrice.toLocaleString()}</s></p>
        <div class="card-buttons">
          <button class="add-cart" onclick="addToCart(${product.id})">Add to Cart</button>
          <button class="add-wishlist" onclick="addToWishlist(${product.id})" title="Add to Wishlist">❤️</button>
        </div>
      </div>
    `;
}

function renderProductGrids() {
    // Render products into category grids (e.g., Laptops, Headsets, Mouse)
    const gridContainers = document.querySelectorAll('.product_grid');
    if (gridContainers.length > 0) {
        gridContainers.forEach(container => {
            const category = container.getAttribute('data-category');
            const categoryProducts = products.filter(p => p.category === category);
            
            if (categoryProducts.length > 0) {
                container.innerHTML = categoryProducts
                    .map(product => createProductCardHTML(product))
                    .join('');
            } else {
                container.innerHTML = '<p style="color: #888;">No products available in this category.</p>';
            }
        });
    }

    // Render products for generic product pages (e.g., filter.html)
    const generalProductsContainer = document.querySelector('.products');
    if (generalProductsContainer && !document.querySelector('.main-product-card')) {
        generalProductsContainer.innerHTML = products
            .map(product => createProductCardHTML(product))
            .join('');
    }
}


function addToCart(productId) {
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateBadges();
    alert("Item added to cart!");
}


function addToWishlist(productId) {
    const index = wishlist.findIndex(id => id === productId);
    
    if (index > -1) {
        wishlist.splice(index, 1);
        alert("Removed from Wishlist!");
    } else {
        wishlist.push(productId);
        alert("Item added to Wishlist!");
    }

    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateBadges();
}


function updateCartQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== productId);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateBadges();
    openPanel('cart');
}


function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateBadges();
    openPanel('cart');
}


function removeFromWishlist(productId) {
    wishlist = wishlist.filter(id => id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateBadges();
    openPanel('wishlist');
}


function updateBadges() {
    const cartText = document.querySelector('.cart-text');
    if (cartText) {
        cartText.textContent = `Cart`; /* Keep static text without (count) */
    }

    const wishlistText = document.querySelector('.wishlist-text');
    if (wishlistText) {
        wishlistText.textContent = `Wishlist`; /* Keep static text without (count) */
    }
}

// Function to render filtered products on filter.html
function loadFilteredProducts() {
    const filterContainer = document.querySelector('.products');
    if (!filterContainer || document.querySelector('.main-product-card')) return;

    const urlParams = new URLSearchParams(window.location.search);
    const selectedCategory = urlParams.get('category');
    const filterTitle = document.getElementById('filter-title');

    let filtered = products;

    if (selectedCategory) {
        filtered = products.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());
        if (filterTitle) {
            filterTitle.textContent = `${selectedCategory.toUpperCase()} Products`;
        }
    }

    if (filtered.length > 0) {
        filterContainer.innerHTML = filtered.map(p => createProductCardHTML(p)).join('');
    } else {
        filterContainer.innerHTML = `<p style="color: #888;">No products found in category "${selectedCategory}".</p>`;
    }
}

// Attach click listeners to category tabs (game_content.html)
function setupCategoryFilters() {
    const categoryButtons = document.querySelectorAll('.Categories li');
    
    categoryButtons.forEach(button => {
        button.style.cursor = 'pointer';
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            if (category) {
                // Redirect to filter.html with the selected category as a query parameter
                window.location.href = `filter.html?category=${category}`;
            }
        });
    });
}


function openPanel(type) {
    const panel = document.getElementById("sidePanel");
    const content = document.getElementById("panelContent");
    if (!panel || !content) return;

    if (type === "cart") {
        if (cart.length === 0) {
            content.innerHTML = `
                <h2>My Cart</h2>
                <p style="margin-top:20px;">Your cart is currently empty.</p>
            `;
        } else {
            let total = 0;
            let itemsHTML = cart.map(item => {
                const product = products.find(p => p.id === item.id);
                if (!product) return '';
                const itemTotal = product.price * item.quantity;
                total += itemTotal;
                return `
                    <div class="panel-item">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="panel-item-details">
                            <h4>${product.name}</h4>
                            <p>MVR ${product.price.toLocaleString()} x ${item.quantity}</p>
                            <div class="qty-controls">
                                <button onclick="updateCartQuantity(${product.id}, -1)">-</button>
                                <span>${item.quantity}</span>
                                <button onclick="updateCartQuantity(${product.id}, 1)">+</button>
                                <button class="remove-btn" onclick="removeFromCart(${product.id})">Remove</button>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');

            content.innerHTML = `
                <h2>My Cart</h2>
                <div class="panel-items-list" style="margin-top:20px;">${itemsHTML}</div>
                <div class="panel-summary" style="margin-top:20px;">
                    <h3>Total: MVR ${total.toLocaleString()}</h3>
                    <button class="add-cart" style="width:100%; margin-top:15px;">Checkout</button>
                </div>
            `;
        }
    } else if (type === "wishlist") {
        if (wishlist.length === 0) {
            content.innerHTML = `
                <h2>Wishlist</h2>
                <p style="margin-top:20px;">Your wishlist is currently empty.</p>
            `;
        } else {
            let itemsHTML = wishlist.map(id => {
                const product = products.find(p => p.id === id);
                if (!product) return '';
                return `
                    <div class="panel-item">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="panel-item-details">
                            <h4>${product.name}</h4>
                            <p>MVR ${product.price.toLocaleString()}</p>
                            <button class="add-cart" onclick="addToCart(${product.id})" style="margin-top:6px; padding:4px 8px; font-size:0.8rem;">Move to Cart</button>
                            <button class="remove-btn" onclick="removeFromWishlist(${product.id})">Remove</button>
                        </div>
                    </div>
                `;
            }).join('');

            content.innerHTML = `
                <h2>Wishlist</h2>
                <div class="panel-items-list" style="margin-top:20px;">${itemsHTML}</div>
            `;
        }
    } else if (type === "login") {
      content.innerHTML = `
        <h2>Account Login</h2>

        <form id="loginForm"
              style="display:flex; flex-direction:column; gap:15px; margin-top:20px;">

            <input
                type="text"
                name="username"
                placeholder="Username"
                style="padding:10px; border-radius:4px; border:1px solid #333; background:#2a2a2a; color:#fff;"
                required
            >

            <input
                type="password"
                name="password"
                placeholder="Password"
                style="padding:10px; border-radius:4px; border:1px solid #333; background:#2a2a2a; color:#fff;"
                required
            >

            <button type="submit" class="add-cart">
                Login
            </button>

            <p id="loginMessage"></p>
        </form>
    `;

    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const username = loginForm.username.value;
        const password = loginForm.password.value;

        const formData = new URLSearchParams();

        formData.append("username", username);
        formData.append("password", password);

        try {
            const response = await fetch(
                "http://127.0.0.1:8000/login/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    credentials: "include",
                    body: formData
                }
            );

            const data = await response.json();

            const message = document.getElementById("loginMessage");

            if (data.success) {

                message.textContent = "Login successful!";

                console.log("Logged in:", username);
                console.log("Admin:", data.is_staff);

                if (data.is_staff) {
                    message.innerHTML = `
                        Login successful!<br>
                        <a href="http://127.0.0.1:8000/admin/">
                            Open Admin Panel
                        </a>
                    `;
                }

            } else {
                message.textContent = data.message;
            }

        } catch (error) {

            console.error("Login error:", error);

            document.getElementById("loginMessage").textContent =
                "Could not connect to the server.";
        }
    });
}

    panel.classList.add("active");
}

function closePanel() {
    const panel = document.getElementById("sidePanel");
    if (panel) {
        panel.classList.remove("active");
    }
}


function loadProductDetailPage() {
    const mainCard = document.querySelector('.main-product-card');
    if (!mainCard) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 1;

    const product = products.find(p => p.id === productId);
    if (!product) return;

    mainCard.setAttribute('data-id', product.id);
    mainCard.querySelector('img').src = product.image;
    mainCard.querySelector('img').alt = product.name;
    mainCard.querySelector('h2').textContent = product.name;
    mainCard.querySelector('.price-tag').innerHTML = `MVR ${product.price.toLocaleString()} <s class="loq_price">MVR ${product.oldPrice.toLocaleString()}</s>`;

    const specList = mainCard.querySelector('ul');
    if (specList && product.specifications) {
        specList.innerHTML = product.specifications.map(spec => `<li>${spec}</li>`).join('');
    }

    const relatedContainer = document.querySelector('.related-products');
    if (relatedContainer) {
        relatedContainer.innerHTML = '';
        const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id);
        
        if (relatedProducts.length > 0) {
            relatedProducts.forEach(rel => {
                relatedContainer.innerHTML += createProductCardHTML(rel);
            });
        } else {
            products.slice(0, 3).forEach(rel => {
                if (rel.id !== product.id) {
                    relatedContainer.innerHTML += createProductCardHTML(rel);
                }
            });
        }
    }
}

async function loadProducts() {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    try {
        const response = await fetch('http://127.0.0.1:8000/products-data/');

        if (!response.ok) {
            throw new Error('Failed to load products');
        }

        products = await response.json();

        console.log('Products loaded:', products);


    } catch (error) {
        console.error('Error loading products:', error);
        products = FALLBACK_PRODUCTS; //TO allow access ui interaction when backend server is down or not setup 

        const statusBanner = document.getElementById('status-banner');

        if (statusBanner) {
        statusBanner.innerText = 'Demo Mode (Offline)';
        }
    } finally {
        renderProductGrids();
        loadFilteredProducts();
        loadProductDetailPage();
        setupCategoryFilters();
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    updateBadges();

    await loadProducts();
    
    loadProductDetailPage();
    renderProductGrids()
    loadFilteredProducts();
    setupCategoryFilters();

    const searchInput = document.querySelector('.search-container input[type="search"]');
    const searchContainer = document.querySelector('.search-container');

    if (searchInput && searchContainer) {
        
        const dropdown = document.createElement('div');
        dropdown.className = 'search-dropdown';
        dropdown.style.display = 'none';
        searchContainer.appendChild(dropdown);


        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();

            if (!searchTerm) {
                dropdown.style.display = 'none';
                return;
            }

            const filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm) || 
                product.category.toLowerCase().includes(searchTerm)
            );

            if (filteredProducts.length === 0) {
                dropdown.innerHTML = '<div class="dropdown-item no-result">No products found</div>';
            } else {
                dropdown.innerHTML = filteredProducts.map(product => `
                    <a href="product.html?id=${product.id}" class="dropdown-item">
                        <img src="${product.image}" alt="${product.name}" />
                        <div>
                            <h4>${product.name}</h4>
                            <p>MVR ${product.price.toLocaleString()}</p>
                        </div>
                    </a>
                `).join('');
            }

            dropdown.style.display = 'block';
        });

    
        document.addEventListener('click', (e) => {
            if (!searchContainer.contains(e.target)) {
                dropdown.style.display = 'none';
            }
        });
    }
});