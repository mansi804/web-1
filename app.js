/* ==========================================
   Antigravity Fitness Client-Side Engine
   ========================================== */

// --- Product Catalog Database (8 Premium Products) ---
const PRODUCTS = [
    {
        id: "apex-performance-tee",
        name: "Apex Performance Tee",
        category: "apparel",
        price: 38.00,
        originalPrice: null,
        rating: 4.8,
        reviewsCount: 124,
        image: "images/product_tee.png",
        gallery: [
            "images/product_tee.png",
            "images/product_compression.png"
        ],
        badge: "Best Seller",
        badgeType: "blue",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Electric Blue", "Stealth Black"],
        stock: 8,
        isBestSeller: true,
        isNewArrival: false,
        onSale: false,
        description: "Engineered with our proprietary feather-light synthetic mesh, the Apex Performance Tee offers unparalleled breathability and a second-skin feel that keeps you cool when training intensity peaks.",
        features: [
            "Ultra-lightweight 110gsm moisture-wicking weave",
            "Anti-chafing flatlock seams for zero friction",
            "Silvadur antimicrobial treatment for odor control",
            "Reflective safety detailing for low-light runs"
        ]
    },
    {
        id: "quantum-compression-shirt",
        name: "Quantum Compression Shirt",
        category: "apparel",
        price: 45.00,
        originalPrice: null,
        rating: 4.9,
        reviewsCount: 96,
        image: "images/product_compression.png",
        gallery: [
            "images/product_compression.png",
            "images/product_tee.png"
        ],
        badge: "New",
        badgeType: "green",
        sizes: ["S", "M", "L"],
        colors: ["Neon Green", "Carbon Gray"],
        stock: 5,
        isBestSeller: false,
        isNewArrival: true,
        onSale: false,
        description: "The Quantum Compression Shirt provides targeted muscle support and improves oxygenation during heavy training. Features thermal-regulation panels to keep muscles warm without overheating.",
        features: [
            "Graduated compression grid for muscle stabilization",
            "4-way stretch fabric for complete movement freedom",
            "RapidDry capillary capillary core wicks sweat instantly",
            "UV 50+ sun protection shield"
        ]
    },
    {
        id: "velocity-gym-hoodie",
        name: "Velocity Gym Hoodie",
        category: "apparel",
        price: 68.00,
        originalPrice: 85.00,
        rating: 4.7,
        reviewsCount: 182,
        image: "images/product_hoodie.png",
        gallery: [
            "images/product_hoodie.png",
            "images/product_bottle.png"
        ],
        badge: "Save 20%",
        badgeType: "orange",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Vibrant Orange", "Stealth Black"],
        stock: 3,
        isBestSeller: true,
        isNewArrival: false,
        onSale: true,
        description: "Our heavy-weight premium performance hoodie. Combining dynamic thermal warmth with structured ventilation panels, it's the ultimate layer for outdoor conditioning and warm-ups.",
        features: [
            "Double-knit technical spacer fleece layer",
            "Structured hood with high-collar wind protection",
            "Concealed dynamic zip pockets for gym keys and phone",
            "Ergonomic cuffs with heavy-duty thumbholes"
        ]
    },
    {
        id: "aero-hydrate-bottle",
        name: "Aero-Hydrate Bottle",
        category: "accessories",
        price: 28.00,
        originalPrice: null,
        rating: 4.6,
        reviewsCount: 78,
        image: "images/product_bottle.png",
        gallery: [
            "images/product_bottle.png"
        ],
        badge: null,
        badgeType: null,
        sizes: ["750ml"],
        colors: ["Matte Black", "Cobalt Blue"],
        stock: 12,
        isBestSeller: false,
        isNewArrival: false,
        onSale: false,
        description: "A double-walled vacuum insulated water bottle built to keep liquids ice-cold for 24 hours. Finished with an impact-resistant matte coat and custom-molded leakproof sports lid.",
        features: [
            "Double-walled 18/8 food-grade stainless steel",
            "TempShield vacuum insulation - zero sweating",
            "Durable powder coat finish prevents drops",
            "BPA-free and toxin-free construction"
        ]
    },
    {
        id: "gravity-free-duffle",
        name: "Gravity-Free Duffle Bag",
        category: "accessories",
        price: 75.00,
        originalPrice: 95.00,
        rating: 4.8,
        reviewsCount: 62,
        image: "images/product_compression.png", // Fallback generated asset
        gallery: [
            "images/product_compression.png"
        ],
        badge: "Sale",
        badgeType: "orange",
        sizes: ["45L"],
        colors: ["Carbon Black"],
        stock: 4,
        isBestSeller: false,
        isNewArrival: false,
        onSale: true,
        description: "Engineered with water-resistant TPU armor, this 45-liter gym duffle features dedicated ventilation compartments for sweaty apparel and training shoes, keeping clean gear dry.",
        features: [
            "TPU coated 900D ballistic polyester shell",
            "Dedicated wet/dry shoe tunnel with dual ventilation",
            "Ergonomic padded backpack straps and duffle grips",
            "Internal tech sleeve and shaker cup organizers"
        ]
    },
    {
        id: "helix-resistance-bands",
        name: "Helix Resistance Bands",
        category: "accessories",
        price: 22.00,
        originalPrice: null,
        rating: 4.9,
        reviewsCount: 156,
        image: "images/product_bottle.png", // Fallback generated asset
        gallery: [
            "images/product_bottle.png"
        ],
        badge: "Best Seller",
        badgeType: "blue",
        sizes: ["Pack of 3"],
        colors: ["Tri-Color Set"],
        stock: 15,
        isBestSeller: true,
        isNewArrival: false,
        onSale: false,
        description: "Durable, non-slip fabric loops designed to activate glutes, hips, and core muscles. Crafted from custom cotton-latex blends that will not roll up or snap during exercises.",
        features: [
            "Three resistance levels: Light, Medium, and Elite",
            "Comfort-weave fabric does not pinch skin",
            "Inner grip strips prevent slipping or rolling",
            "Mesh travel pouch included"
        ]
    },
    {
        id: "stratum-socks",
        name: "Stratum Athletic Socks",
        category: "apparel",
        price: 12.00,
        originalPrice: 15.00,
        rating: 4.5,
        reviewsCount: 42,
        image: "images/product_tee.png", // Fallback
        gallery: [
            "images/product_tee.png"
        ],
        badge: "15% Off",
        badgeType: "orange",
        sizes: ["M", "L"],
        colors: ["Stealth White", "Carbon Black"],
        stock: 20,
        isBestSeller: false,
        isNewArrival: false,
        onSale: true,
        description: "Anatomically mapped cushion socks designed to absorb landing forces and improve speed recovery. Elastic arch support keeps socks locked in place, preventing blisters.",
        features: [
            "High-density compression arch band support",
            "Targeted thick cushion pads on heel and toe box",
            "Breathable ventilation channels on upper foot",
            "Seamless toe construction for zero friction"
        ]
    },
    {
        id: "impact-wrist-wraps",
        name: "Impact Training Wrist Wraps",
        category: "accessories",
        price: 18.00,
        originalPrice: null,
        rating: 4.7,
        reviewsCount: 88,
        image: "images/product_bottle.png", // Fallback
        gallery: [
            "images/product_bottle.png"
        ],
        badge: "New",
        badgeType: "green",
        sizes: ["Standard"],
        colors: ["Electric Blue", "Carbon Black"],
        stock: 9,
        isBestSeller: false,
        isNewArrival: true,
        onSale: false,
        description: "Premium heavy-duty support wraps designed to stabilize wrists during compound lifts. Crafted with durable elastic cotton and dynamic hook-and-loop straps.",
        features: [
            "Premium elasticized cotton-polyester construction",
            "Heavy-duty reinforced thumb loop",
            "Extra-wide hook and loop lock security",
            "18-inch length for maximum joint stability"
        ]
    }
];

// --- Testimonials Database ---
const TESTIMONIALS = [
    {
        name: "Sarah Jenkins",
        avatar: "SJ",
        rating: 5,
        text: "The Quantum Compression Shirt is unreal. The dry time is incredibly fast, and I feel lighter during long agility runs. Definitely buying more."
    },
    {
        name: "Marcus Vane",
        avatar: "MV",
        rating: 5,
        text: "Apex performance tees fit exactly how athletes want. They don't restrict arm movements during overhead exercises. Solid 5/5 stars."
    },
    {
        name: "Elena Rostova",
        avatar: "ER",
        rating: 5,
        text: "Best gym hoodie I own. It holds warm air during outside sprints but allows body sweat to exit instantly. The concealed dynamic pockets are perfect."
    }
];

// --- Blog Articles Database (4 Articles) ---
const BLOG_POSTS = [
    {
        id: "how-to-jump-higher",
        title: "Defying Gravity: The Ultimate Guide to Vertical Jump Height",
        category: "performance",
        date: "June 20, 2026",
        excerpt: "Learn the plyometric protocols and force-velocity profiles used by elite athletes to unlock explosive vertical jump height.",
        image: "images/hero_athlete.png",
        readTime: "6 min read",
        content: `<h3>The Science of Vertical Displacement</h3><p>Vertical jump height is directly determined by the impulse generated against the ground. Impulse is the product of average force and the time over which it is applied. To jump higher, you must either increase force production (strength) or decrease the time of force application (velocity).</p><h4>1. The Stretch-Shortening Cycle (SSC)</h4><p>Plyometrics utilize the elastic properties of tendons and the stretch reflex to produce maximum force. Dynamic exercises like depth jumps train your muscles to store elastic energy during the eccentric (landing) phase and release it rapidly during the concentric (takeoff) phase.</p><h4>2. Plyometric Routine for Peak Vertical Power</h4><ul><li><strong>Depth Jumps:</strong> 3 sets of 5 reps (from a 30-40cm box). Focus on minimum ground contact time.</li><li><strong>Weighted Trap Bar Jumps:</strong> 4 sets of 4 reps at 30% of 1RM.</li><li><strong>Single-Leg Box Jumps:</strong> 3 sets of 6 reps per leg.</li></ul>`
    },
    {
        id: "speed-training-tips",
        title: "Velocity Mechanics: Speed Training Drills for Athletes",
        category: "performance",
        date: "June 15, 2026",
        excerpt: "Speed is a skill. Master the acceleration angles, triple extension mechanics, and sprint drills to move faster in any sport.",
        image: "images/hero_athlete.png",
        readTime: "5 min read",
        content: `<h3>Mastering Sprint Biomechanics</h3><p>Acceleration and top-end speed require distinct mechanics. Sprints are won in the first 10 meters, where horizontal force and projection angles are critical.</p><h4>1. The 45-Degree Acceleration Angle</h4><p>During initial acceleration, your body should maintain a straight line from heel to head at a 45-degree angle to the ground. This optimizes the direction of horizontal force application. Avoid popping upright too early, which reduces speed transfer.</p><h4>2. Triple Extension</h4><p>To maximize force output, focus on triple extension: full extension of the ankle, knee, and hip joints at takeoff. This guarantees complete energy transfer from the lower chain into the sprint track.</p>`
    },
    {
        id: "recovery-techniques",
        title: "The Recovery Equation: Sleep, Hydration, and Active Rest",
        category: "recovery",
        date: "June 08, 2026",
        excerpt: "Discover the science-backed recovery techniques that rebuild muscle tissue, restore hydration, and speed up athletic performance.",
        image: "images/hero_athlete.png",
        readTime: "4 min read",
        content: `<h3>Why Recovery is the True Catalyst of Strength</h3><p>Training breaks down muscle fibers; recovery builds them stronger. If your recovery routine is lacking, your performance progress will plateau.</p><h4>1. Sleep Hygiene and Growth Hormone</h4><p>Deep sleep (NREM Stage 3) is when the body releases the majority of its Human Growth Hormone (HGH). Ensure 7.5 to 9 hours of uninterrupted sleep in a cool, dark room to optimize physiological repair.</p><h4>2. Active Recovery Protocols</h4><p>Instead of complete rest, engage in light active recovery. 20-30 minutes of low-intensity cycling or swimming increases blood circulation, which flushes metabolic byproducts from muscle tissue.</p>`
    },
    {
        id: "beginner-workout-guide",
        title: "Zero to Hero: High-Performance Workout Routine for Beginners",
        category: "beginner",
        date: "May 28, 2026",
        excerpt: "Start your athletic journey with a structured full-body compound split designed to build stability, movement strength, and endurance.",
        image: "images/hero_athlete.png",
        readTime: "8 min read",
        content: `<h3>Building a Solid Athletic Foundation</h3><p>Beginners should avoid overly isolated, complex exercises. Instead, master compound movements that target multiple muscle joints simultaneously, building structural balance.</p><h4>The Fundamental Movement Patterns</h4><p>Focus on the five fundamental patterns: Squat (lower push), Hinge (lower pull), Push (upper press), Pull (upper row), and Carry (core stabilization).</p><h4>Weekly Starter Schedule</h4><ul><li><strong>Monday:</strong> Full-Body Strength (Squats, Bench Press, Dumbbell Rows, Plank)</li><li><strong>Wednesday:</strong> Low-Impact Conditioning (Rowing machine or incline walk, Kettlebell Swings)</li><li><strong>Friday:</strong> Full-Body Power (Deadlifts, Overhead Press, Pull-ups or Lat Pulldowns)</li></ul>`
    }
];

// --- Mock Database for Orders (Order Tracking Feature) ---
const MOCK_ORDERS = {
    "AG-849204": {
        id: "AG-849204",
        status: "shipped", // processing, shipped, delivery, delivered
        estDelivery: "Tomorrow by 6:00 PM",
        items: ["Apex Performance Tee", "Aero-Hydrate Bottle"]
    },
    "AG-102948": {
        id: "AG-102948",
        status: "delivered",
        estDelivery: "Delivered 2 days ago",
        items: ["Quantum Compression Shirt"]
    }
};

// --- App State Store ---
const state = {
    cart: [],
    wishlist: [],
    currentPage: "home",
    filters: {
        category: "all",
        search: "",
        sizes: [],
        maxPrice: 100,
        bestSeller: false,
        newArrival: false,
        onSale: false,
        sortBy: "featured"
    },
    voucherApplied: null, // e.g. { code: 'DEFY20', discountPercent: 20 }
    checkoutData: {
        shipping: null,
        payment: null
    }
};

// --- DOM Cache Elements ---
const DOM = {
    navLinks: document.querySelectorAll('.nav-link, .mobile-nav-link'),
    views: document.querySelectorAll('.view-section'),
    
    // Header actions
    cartToggleBtn: document.getElementById('cart-toggle-btn'),
    wishlistToggleBtn: document.getElementById('wishlist-toggle-btn'),
    menuToggleBtn: document.getElementById('menu-toggle-btn'),
    searchToggleBtn: document.getElementById('search-toggle-btn'),
    searchOverlay: document.getElementById('search-overlay'),
    globalSearchForm: document.getElementById('global-search-form'),
    globalSearchInput: document.getElementById('global-search-input'),
    mobileDrawer: document.getElementById('mobile-drawer'),
    
    // Drawers
    cartDrawerOverlay: document.getElementById('cart-drawer-overlay'),
    cartDrawerBody: document.getElementById('cart-drawer-body'),
    closeCartBtn: document.getElementById('close-cart-btn'),
    cartCount: document.getElementById('cart-count'),
    cartCountTitle: document.getElementById('cart-count-title'),
    cartTotalValue: document.getElementById('cart-total-value'),
    cartDiscountValue: document.getElementById('cart-discount-value'),
    applyVoucherBtn: document.getElementById('apply-voucher-btn'),
    voucherInput: document.getElementById('voucher-input'),
    checkoutTriggerBtn: document.getElementById('checkout-trigger-btn'),
    
    wishlistDrawerOverlay: document.getElementById('wishlist-drawer-overlay'),
    wishlistDrawerBody: document.getElementById('wishlist-drawer-body'),
    closeWishlistBtn: document.getElementById('close-wishlist-btn'),
    wishlistCount: document.getElementById('wishlist-count'),
    
    // Home components
    featuredProducts: document.getElementById('featured-products-container'),
    testimonialsContainer: document.getElementById('testimonials-container'),
    newsletterForm: document.getElementById('newsletter-form'),
    newsletterEmail: document.getElementById('newsletter-email'),
    newsletterSuccess: document.getElementById('newsletter-success'),

    // Shop components
    shopProductsGrid: document.getElementById('shop-products-grid'),
    shopSearchInput: document.getElementById('shop-search-input'),
    priceRangeSlider: document.getElementById('price-range'),
    priceDisplay: document.getElementById('price-display'),
    clearFiltersBtn: document.getElementById('clear-filters-btn'),
    categoryFilterList: document.getElementById('category-filter-list'),
    sizeFilterContainer: document.getElementById('size-filter-container'),
    checkBestSeller: document.getElementById('check-best-seller'),
    checkNewArrival: document.getElementById('check-new-arrival'),
    checkSale: document.getElementById('check-sale'),
    sortSelect: document.getElementById('sort-select'),
    activeResultsCount: document.getElementById('active-results-count'),
    noProductsMsg: document.getElementById('no-products-msg'),

    // Blog components
    blogPostsContainer: document.getElementById('blog-posts-container'),
    blogFilterBtns: document.querySelectorAll('.blog-filter-btn'),

    // Contact components
    contactForm: document.getElementById('contact-form'),
    contactSuccess: document.getElementById('contact-success'),

    // Product Detail Modal
    productDetailModal: document.getElementById('product-detail-modal'),
    closeDetailModal: document.getElementById('close-detail-modal'),
    productModalContent: document.getElementById('product-modal-content'),

    // Checkout Modal & Wizard
    checkoutModal: document.getElementById('checkout-modal'),
    closeCheckoutModal: document.getElementById('close-checkout-modal'),
    checkoutShippingForm: document.getElementById('checkout-shipping-form'),
    checkoutPaymentForm: document.getElementById('checkout-payment-form'),
    checkoutSuccessCloseBtn: document.getElementById('checkout-success-close-btn'),
    checkoutTrackingId: document.getElementById('checkout-tracking-id'),
    summarySubtotal: document.getElementById('summary-subtotal'),
    summaryTotal: document.getElementById('summary-total'),

    // Order Tracking Modal
    orderTrackingModal: document.getElementById('order-tracking-modal'),
    closeTrackingModal: document.getElementById('close-tracking-modal'),
    footerTrackBtn: document.getElementById('footer-track-btn'),
    mobileTrackBtn: document.getElementById('mobile-track-btn'),
    trackingIdInput: document.getElementById('tracking-id-input'),
    trackingSearchBtn: document.getElementById('tracking-search-btn'),
    trackingResults: document.getElementById('tracking-results'),
    trackingError: document.getElementById('tracking-error'),
    trackingResultId: document.getElementById('tracking-result-id'),
    trackingEstDate: document.getElementById('tracking-est-date'),
    stepProcessing: document.getElementById('step-processing'),
    stepShipped: document.getElementById('step-shipped'),
    stepDelivery: document.getElementById('step-delivery'),
    stepDelivered: document.getElementById('step-delivered')
};

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    loadLocalStorage();
    initRouter();
    renderFeaturedProducts();
    renderTestimonials();
    renderBlogPosts();
    renderShopProducts();
    initEventListeners();
});

// --- LOCAL STORAGE MANAGER ---
function loadLocalStorage() {
    try {
        const storedCart = localStorage.getItem("antigravity_cart");
        if (storedCart) {
            state.cart = JSON.parse(storedCart);
            updateCartUI();
        }
        const storedWishlist = localStorage.getItem("antigravity_wishlist");
        if (storedWishlist) {
            state.wishlist = JSON.parse(storedWishlist);
            updateWishlistUI();
        }
    } catch (e) {
        console.error("Local storage error:", e);
    }
}

function saveCartToStorage() {
    localStorage.setItem("antigravity_cart", JSON.stringify(state.cart));
}

function saveWishlistToStorage() {
    localStorage.setItem("antigravity_wishlist", JSON.stringify(state.wishlist));
}

// --- ROUTER ENGINE ---
function initRouter() {
    // Listen to hashchange
    window.addEventListener("hashchange", handleRouting);
    
    // First load trigger
    handleRouting();
}

function handleRouting() {
    let hash = window.location.hash || "#home";
    let route = hash.split("?")[0].replace("#", "");
    
    // Parse URL search parameters if any
    let params = {};
    if (hash.includes("?")) {
        const paramString = hash.split("?")[1];
        const urlParams = new URLSearchParams(paramString);
        for (const [key, value] of urlParams.entries()) {
            params[key] = value;
        }
    }

    // Map to valid sections
    const validRoutes = ["home", "shop", "blog", "about", "contact"];
    if (!validRoutes.includes(route)) {
        route = "home";
    }

    state.currentPage = route;

    // Toggle active view sections
    DOM.views.forEach(view => {
        if (view.id === `${route}-view`) {
            view.classList.add("active");
        } else {
            view.classList.remove("active");
        }
    });

    // Update active class on nav links
    DOM.navLinks.forEach(link => {
        if (link.getAttribute("data-route") === route) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // SEO updates
    updateSEO(route);

    // Close drawers and mobile menu on route change
    closeAllDrawers();

    // Reset scroll to top
    window.scrollTo({ top: 0, behavior: "instant" });

    // Handle filter parameters passed in URL (e.g. #shop?filter=best-sellers)
    if (route === "shop") {
        applyUrlParams(params);
    }
}

function applyUrlParams(params) {
    if (params.filter) {
        // Clear previous filters
        resetFilterState();
        
        if (params.filter === "best-sellers") {
            state.filters.bestSeller = true;
            if (DOM.checkBestSeller) DOM.checkBestSeller.checked = true;
        } else if (params.filter === "new-arrivals") {
            state.filters.newArrival = true;
            if (DOM.checkNewArrival) DOM.checkNewArrival.checked = true;
        } else if (params.filter === "sale") {
            state.filters.onSale = true;
            if (DOM.checkSale) DOM.checkSale.checked = true;
        }
        renderShopProducts();
    }
    
    if (params.search) {
        resetFilterState();
        state.filters.search = decodeURIComponent(params.search);
        if (DOM.shopSearchInput) DOM.shopSearchInput.value = state.filters.search;
        renderShopProducts();
    }
}

function updateSEO(route) {
    const seoMeta = {
        home: {
            title: "Antigravity Fitness | Defy Gravity. Move Faster.",
            description: "Engineered performance apparel and gear designed to help athletes move faster, train harder, and perform at their best."
        },
        shop: {
            title: "Shop Athletic Apparel & Gear | Antigravity Fitness",
            description: "Browse the ultimate collection of compression clothing, lightweight activewear, and heavy-duty gym gear."
        },
        blog: {
            title: "Performance Hub Blog | Antigravity Fitness",
            description: "Science-backed athletic training logs, recovery protocols, jump height development drills, and beginner fitness advice."
        },
        about: {
            title: "Our Mission & Story | Antigravity Fitness",
            description: "Discover how we engineer our sportswear for speed, comfort, and zero friction, helping athletes push limits."
        },
        contact: {
            title: "Connect with Athlete Support | Antigravity Fitness",
            description: "Contact the Antigravity Fitness team for order tracking, size advice, and product inquiries."
        }
    };

    const currentSEO = seoMeta[route] || seoMeta.home;
    document.title = currentSEO.title;
    
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
        descMeta.setAttribute("content", currentSEO.description);
    }
}

// --- EVENT LISTENERS INITIALIZATION ---
function initEventListeners() {
    // Menu Drawers Toggles
    DOM.cartToggleBtn.addEventListener("click", () => openDrawer(DOM.cartDrawerOverlay));
    DOM.closeCartBtn.addEventListener("click", () => closeDrawer(DOM.cartDrawerOverlay));
    DOM.cartDrawerOverlay.addEventListener("click", (e) => {
        if (e.target === DOM.cartDrawerOverlay) closeDrawer(DOM.cartDrawerOverlay);
    });

    DOM.wishlistToggleBtn.addEventListener("click", () => openDrawer(DOM.wishlistDrawerOverlay));
    DOM.closeWishlistBtn.addEventListener("click", () => closeDrawer(DOM.wishlistDrawerOverlay));
    DOM.wishlistDrawerOverlay.addEventListener("click", (e) => {
        if (e.target === DOM.wishlistDrawerOverlay) closeDrawer(DOM.wishlistDrawerOverlay);
    });

    // Mobile Navigation Drawer Toggle
    DOM.menuToggleBtn.addEventListener("click", () => {
        const isActive = DOM.mobileDrawer.classList.contains("active");
        if (isActive) {
            DOM.mobileDrawer.classList.remove("active");
            DOM.menuToggleBtn.setAttribute("aria-expanded", "false");
        } else {
            DOM.mobileDrawer.classList.add("active");
            DOM.menuToggleBtn.setAttribute("aria-expanded", "true");
        }
    });

    // Global Search Overlay Toggle
    DOM.searchToggleBtn.addEventListener("click", () => {
        const isActive = DOM.searchOverlay.classList.contains("active");
        if (isActive) {
            DOM.searchOverlay.classList.remove("active");
            DOM.searchToggleBtn.setAttribute("aria-expanded", "false");
        } else {
            DOM.searchOverlay.classList.add("active");
            DOM.searchToggleBtn.setAttribute("aria-expanded", "true");
            DOM.globalSearchInput.focus();
        }
    });

    // Global search submission
    DOM.globalSearchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const query = DOM.globalSearchInput.value.trim();
        if (query) {
            DOM.searchOverlay.classList.remove("active");
            DOM.searchToggleBtn.setAttribute("aria-expanded", "false");
            window.location.hash = `#shop?search=${encodeURIComponent(query)}`;
        }
    });

    // Closing drawers with Escape key for accessibility
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeAllDrawers();
            closeAllModals();
        }
    });

    // --- Shop Filters Listeners ---
    if (DOM.shopSearchInput) {
        DOM.shopSearchInput.addEventListener("input", (e) => {
            state.filters.search = e.target.value;
            renderShopProducts();
        });
    }

    if (DOM.priceRangeSlider) {
        DOM.priceRangeSlider.addEventListener("input", (e) => {
            state.filters.maxPrice = parseFloat(e.target.value);
            DOM.priceDisplay.textContent = `$${state.filters.maxPrice}`;
            renderShopProducts();
        });
    }

    if (DOM.clearFiltersBtn) {
        DOM.clearFiltersBtn.addEventListener("click", () => {
            resetFilterState();
            renderShopProducts();
        });
    }

    // Category Tags filter
    if (DOM.categoryFilterList) {
        DOM.categoryFilterList.addEventListener("click", (e) => {
            const btn = e.target.closest(".filter-tag");
            if (!btn) return;
            
            DOM.categoryFilterList.querySelectorAll(".filter-tag").forEach(tag => tag.classList.remove("active"));
            btn.classList.add("active");
            state.filters.category = btn.getAttribute("data-category");
            renderShopProducts();
        });
    }

    // Size filters
    if (DOM.sizeFilterContainer) {
        DOM.sizeFilterContainer.addEventListener("click", (e) => {
            const btn = e.target.closest(".size-btn-filter");
            if (!btn) return;

            const size = btn.getAttribute("data-size");
            if (state.filters.sizes.includes(size)) {
                state.filters.sizes = state.filters.sizes.filter(s => s !== size);
                btn.classList.remove("active");
            } else {
                state.filters.sizes.push(size);
                btn.classList.add("active");
            }
            renderShopProducts();
        });
    }

    // Collection checkboxes
    if (DOM.checkBestSeller) {
        DOM.checkBestSeller.addEventListener("change", (e) => {
            state.filters.bestSeller = e.target.checked;
            renderShopProducts();
        });
    }
    if (DOM.checkNewArrival) {
        DOM.checkNewArrival.addEventListener("change", (e) => {
            state.filters.newArrival = e.target.checked;
            renderShopProducts();
        });
    }
    if (DOM.checkSale) {
        DOM.checkSale.addEventListener("change", (e) => {
            state.filters.onSale = e.target.checked;
            renderShopProducts();
        });
    }

    // Sort listener
    if (DOM.sortSelect) {
        DOM.sortSelect.addEventListener("change", (e) => {
            state.filters.sortBy = e.target.value;
            renderShopProducts();
        });
    }

    // --- Cart Actions ---
    DOM.applyVoucherBtn.addEventListener("click", handleApplyVoucher);
    DOM.checkoutTriggerBtn.addEventListener("click", () => {
        if (state.cart.length === 0) return;
        closeAllDrawers();
        openModal(DOM.checkoutModal);
        initCheckoutSummary();
    });

    // Checkout Close
    DOM.closeCheckoutModal.addEventListener("click", () => closeModal(DOM.checkoutModal));
    DOM.checkoutModal.addEventListener("click", (e) => {
        if (e.target === DOM.checkoutModal) closeModal(DOM.checkoutModal);
    });

    // Checkout Form Submissions (Wizard steps transition)
    DOM.checkoutShippingForm.addEventListener("submit", (e) => {
        e.preventDefault();
        // Shipping validated, go to step 2 (Payment)
        document.getElementById("checkout-step-1").classList.remove("active");
        document.getElementById("checkout-step-2").classList.add("active");
    });

    DOM.checkoutPaymentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        // Payment mock validated, place order
        placeMockOrder();
    });

    DOM.checkoutSuccessCloseBtn.addEventListener("click", () => {
        closeModal(DOM.checkoutModal);
        window.location.hash = "#shop";
        resetCheckoutWizard();
    });

    // --- Order Tracking System ---
    DOM.closeTrackingModal.addEventListener("click", () => closeModal(DOM.orderTrackingModal));
    DOM.orderTrackingModal.addEventListener("click", (e) => {
        if (e.target === DOM.orderTrackingModal) closeModal(DOM.orderTrackingModal);
    });

    const openTrackingModalHandler = () => {
        closeAllDrawers();
        openModal(DOM.orderTrackingModal);
        DOM.trackingResults.style.display = "none";
        DOM.trackingError.style.display = "none";
        DOM.trackingIdInput.value = "";
    };

    DOM.footerTrackBtn.addEventListener("click", openTrackingModalHandler);
    DOM.mobileTrackBtn.addEventListener("click", openTrackingModalHandler);

    DOM.trackingSearchBtn.addEventListener("click", handleOrderTrackingSearch);
    DOM.trackingIdInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") handleOrderTrackingSearch();
    });

    // --- Blog Category Filter Links ---
    DOM.blogFilterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            DOM.blogFilterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderBlogPosts(btn.getAttribute("data-blog-category"));
        });
    });

    // --- Contact Form — EmailJS Integration ---
    DOM.contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const submitBtn = DOM.contactForm.querySelector("button[type='submit']");
        const originalText = submitBtn.textContent;
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;

        // Replace these three values with your own from emailjs.com
        const SERVICE_ID  = "service_1gu4kzk";
        const TEMPLATE_ID = "template_ls48g2s";

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, DOM.contactForm)
            .then(() => {
                DOM.contactSuccess.style.display = "block";
                DOM.contactSuccess.style.color = "#00e5ff";
                DOM.contactSuccess.textContent = "✓ Message Sent! Our support team will contact you shortly.";
                DOM.contactForm.reset();
                setTimeout(() => {
                    DOM.contactSuccess.style.display = "none";
                }, 5000);
            })
            .catch((error) => {
                DOM.contactSuccess.style.display = "block";
                DOM.contactSuccess.style.color = "#ff4d4d";
                DOM.contactSuccess.textContent = "✗ Failed to send. Please try again or email us directly.";
                console.error("EmailJS error:", error);
                setTimeout(() => {
                    DOM.contactSuccess.style.display = "none";
                }, 5000);
            })
            .finally(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
    });

    // --- Newsletter Form Validation ---
    DOM.newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        DOM.newsletterSuccess.style.display = "block";
        DOM.newsletterEmail.value = "";
        setTimeout(() => {
            DOM.newsletterSuccess.style.display = "none";
        }, 5000);
    });

    // --- FAQs Accordion Toggles ---
    document.querySelectorAll('.faq-trigger').forEach(trigger => {
        trigger.addEventListener("click", () => {
            const isExpanded = trigger.getAttribute("aria-expanded") === "true";
            const content = trigger.nextElementSibling;
            
            trigger.setAttribute("aria-expanded", !isExpanded);
            if (isExpanded) {
                content.classList.remove("active");
            } else {
                content.classList.add("active");
            }
        });
    });

    // --- Product Detail Modal Close ---
    DOM.closeDetailModal.addEventListener("click", () => closeModal(DOM.productDetailModal));
    DOM.productDetailModal.addEventListener("click", (e) => {
        if (e.target === DOM.productDetailModal) closeModal(DOM.productDetailModal);
    });
}

// --- CORE DRAWER OPERATIONS ---
function openDrawer(overlay) {
    overlay.classList.add("active");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // lock screen scroll
}

function closeDrawer(overlay) {
    overlay.classList.remove("active");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = ""; // restore scroll
}

function closeAllDrawers() {
    closeDrawer(DOM.cartDrawerOverlay);
    closeDrawer(DOM.wishlistDrawerOverlay);
    DOM.mobileDrawer.classList.remove("active");
    DOM.menuToggleBtn.setAttribute("aria-expanded", "false");
}

// --- CORE MODAL OPERATIONS ---
function openModal(overlay) {
    overlay.classList.add("active");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeModal(overlay) {
    overlay.classList.remove("active");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

function closeAllModals() {
    closeModal(DOM.productDetailModal);
    closeModal(DOM.checkoutModal);
    closeModal(DOM.orderTrackingModal);
}

// --- FILTER RESET FUNCTION ---
function resetFilterState() {
    state.filters = {
        category: "all",
        search: "",
        sizes: [],
        maxPrice: 100,
        bestSeller: false,
        newArrival: false,
        onSale: false,
        sortBy: "featured"
    };

    // Reset form elements
    if (DOM.shopSearchInput) DOM.shopSearchInput.value = "";
    if (DOM.priceRangeSlider) {
        DOM.priceRangeSlider.value = 100;
        DOM.priceDisplay.textContent = "$100";
    }
    if (DOM.checkBestSeller) DOM.checkBestSeller.checked = false;
    if (DOM.checkNewArrival) DOM.checkNewArrival.checked = false;
    if (DOM.checkSale) DOM.checkSale.checked = false;
    if (DOM.sortSelect) DOM.sortSelect.value = "featured";

    if (DOM.categoryFilterList) {
        DOM.categoryFilterList.querySelectorAll(".filter-tag").forEach(tag => {
            if (tag.getAttribute("data-category") === "all") {
                tag.classList.add("active");
            } else {
                tag.classList.remove("active");
            }
        });
    }

    if (DOM.sizeFilterContainer) {
        DOM.sizeFilterContainer.querySelectorAll(".size-btn-filter").forEach(btn => {
            btn.classList.remove("active");
        });
    }
}

// --- RENDER DYNAMIC CATALOG PAGES ---

// Render Home Page Featured Row
function renderFeaturedProducts() {
    if (!DOM.featuredProducts) return;
    
    // Filter to only featured / best sellers (up to 4)
    const featured = PRODUCTS.slice(0, 4);
    DOM.featuredProducts.innerHTML = featured.map(prod => createProductCardHTML(prod)).join('');
    bindProductCardEvents(DOM.featuredProducts);
}

// Render Shop Page Product Grid (with full filtering)
function renderShopProducts() {
    if (!DOM.shopProductsGrid) return;

    let filtered = PRODUCTS.filter(prod => {
        // Category check
        if (state.filters.category !== "all" && prod.category !== state.filters.category) {
            return false;
        }

        // Search check
        if (state.filters.search) {
            const query = state.filters.search.toLowerCase();
            const matchesName = prod.name.toLowerCase().includes(query);
            const matchesDesc = prod.description.toLowerCase().includes(query);
            if (!matchesName && !matchesDesc) return false;
        }

        // Price check
        if (prod.price > state.filters.maxPrice) {
            return false;
        }

        // Size check
        if (state.filters.sizes.length > 0) {
            const hasSize = prod.sizes.some(size => state.filters.sizes.includes(size));
            if (!hasSize) return false;
        }

        // Tags check
        if (state.filters.bestSeller && !prod.isBestSeller) return false;
        if (state.filters.newArrival && !prod.isNewArrival) return false;
        if (state.filters.onSale && !prod.onSale) return false;

        return true;
    });

    // Apply Sorting
    if (state.filters.sortBy === "price-low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (state.filters.sortBy === "price-high") {
        filtered.sort((a, b) => b.price - a.price);
    } else if (state.filters.sortBy === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    // Update result count UI
    DOM.activeResultsCount.textContent = filtered.length;

    // Render Grid or Empty state
    if (filtered.length === 0) {
        DOM.shopProductsGrid.innerHTML = "";
        DOM.noProductsMsg.style.display = "block";
    } else {
        DOM.noProductsMsg.style.display = "none";
        DOM.shopProductsGrid.innerHTML = filtered.map(prod => createProductCardHTML(prod)).join('');
        bindProductCardEvents(DOM.shopProductsGrid);
    }
}

// Product Card HTML generator
function createProductCardHTML(prod) {
    const isWishlisted = state.wishlist.includes(prod.id) ? "active" : "";
    
    // Badge generation
    let badgeHTML = "";
    if (prod.badge) {
        badgeHTML = `<span class="badge badge-${prod.badgeType}">${prod.badge}</span>`;
    }

    // Price tag generation
    let priceHTML = `<span class="product-price">$${prod.price.toFixed(2)}</span>`;
    if (prod.onSale && prod.originalPrice) {
        priceHTML = `
            <span class="product-price price-discounted">
                $${prod.price.toFixed(2)}
                <span class="price-original">$${prod.originalPrice.toFixed(2)}</span>
            </span>
        `;
    }

    return `
        <article class="product-card" data-id="${prod.id}">
            <div class="product-img-wrapper" data-action="view-details">
                <div class="product-badges">${badgeHTML}</div>
                <button class="product-wishlist-btn ${isWishlisted}" aria-label="Add to Wishlist" data-action="wishlist">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </button>
                <img src="${prod.image}" alt="${prod.name}" class="product-img" loading="lazy">
            </div>
            <div class="product-info">
                <span class="product-category">${prod.category}</span>
                <h3 class="product-title" data-action="view-details">${prod.name}</h3>
                <div class="product-ratings">
                    <span class="star-icon">&#9733;</span>
                    <span class="rating-value">${prod.rating} (${prod.reviewsCount})</span>
                </div>
                <div class="product-price-row">
                    ${priceHTML}
                    <button class="add-cart-btn" aria-label="Add to Cart" data-action="add-cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </button>
                </div>
            </div>
        </article>
    `;
}

// Bind clicks inside catalog grid (avoid raw onclick binders for security/a11y)
function bindProductCardEvents(container) {
    container.querySelectorAll('.product-card').forEach(card => {
        const id = card.getAttribute("data-id");
        
        // Wishlist button click
        card.querySelector('[data-action="wishlist"]').addEventListener("click", (e) => {
            e.stopPropagation();
            toggleWishlistItem(id);
        });

        // Add to cart button click
        card.querySelector('[data-action="add-cart"]').addEventListener("click", (e) => {
            e.stopPropagation();
            addToCart(id);
        });

        // Click wrapper / title triggers product details modal
        card.querySelectorAll('[data-action="view-details"]').forEach(el => {
            el.addEventListener("click", (e) => {
                e.stopPropagation();
                showProductDetailsModal(id);
            });
        });

        // Clicking anywhere on the card opens details
        card.addEventListener("click", (e) => {
            if (e.target.closest('[data-action="wishlist"]') || e.target.closest('[data-action="add-cart"]')) {
                return;
            }
            showProductDetailsModal(id);
        });
    });
}

// --- RENDER DYNAMIC TESTIMONIALS ---
function renderTestimonials() {
    if (!DOM.testimonialsContainer) return;
    DOM.testimonialsContainer.innerHTML = TESTIMONIALS.map(t => {
        let starsHTML = '&#9733;'.repeat(t.rating);
        return `
            <div class="testimonial-card">
                <div class="product-ratings mb-3">${starsHTML}</div>
                <p class="testimonial-text">"${t.text}"</p>
                <div class="testimonial-user">
                    <div class="avatar-placeholder">${t.avatar}</div>
                    <div>
                        <span class="user-name">${t.name}</span>
                        <span class="verified-buyer">✓ Verified Buyer</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// --- RENDER DYNAMIC BLOG HUB ---
function renderBlogPosts(category = "all") {
    if (!DOM.blogPostsContainer) return;

    let filtered = BLOG_POSTS;
    if (category !== "all") {
        filtered = BLOG_POSTS.filter(post => post.category === category);
    }

    DOM.blogPostsContainer.innerHTML = filtered.map(post => `
        <article class="blog-card" data-id="${post.id}">
            <div class="blog-img-wrapper">
                <img src="${post.image}" alt="${post.title}" class="blog-img" loading="lazy">
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span>${post.category}</span>
                    <span>&bull;</span>
                    <span>${post.date}</span>
                </div>
                <h3>${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <button class="blog-readmore" data-action="read-blog">
                    Read Guide <span>&rarr;</span>
                </button>
                <div class="blog-full-article-content" style="display: none; margin-top: 20px; border-top: 1px solid var(--border-color); padding-top: 20px;">
                    ${post.content}
                    <button class="btn btn-secondary btn-sm mt-3" data-action="collapse-blog">Close Guide</button>
                </div>
            </div>
        </article>
    `).join('');

    // Bind Blog expansion
    DOM.blogPostsContainer.querySelectorAll('.blog-card').forEach(card => {
        const readBtn = card.querySelector('[data-action="read-blog"]');
        const collapseBtn = card.querySelector('[data-action="collapse-blog"]');
        const fullContent = card.querySelector('.blog-full-article-content');
        const excerpt = card.querySelector('.blog-excerpt');

        readBtn.addEventListener("click", () => {
            fullContent.style.display = "block";
            readBtn.style.display = "none";
            excerpt.style.display = "none";
        });

        collapseBtn.addEventListener("click", () => {
            fullContent.style.display = "none";
            readBtn.style.display = "flex";
            excerpt.style.display = "block";
            card.scrollIntoView({ behavior: "smooth" });
        });
    });
}

// --- WISHLIST CORE LOGIC ---
function toggleWishlistItem(id) {
    const idx = state.wishlist.indexOf(id);
    if (idx > -1) {
        state.wishlist.splice(idx, 1);
    } else {
        state.wishlist.push(id);
    }
    
    saveWishlistToStorage();
    updateWishlistUI();
    
    // Toggle active badges on currently rendered product grid cards
    document.querySelectorAll(`.product-card[data-id="${id}"] .product-wishlist-btn`).forEach(btn => {
        btn.classList.toggle("active");
    });
}

function updateWishlistUI() {
    DOM.wishlistCount.textContent = state.wishlist.length;

    if (state.wishlist.length === 0) {
        DOM.wishlistDrawerBody.innerHTML = `
            <div class="cart-empty-message">
                <p>Your wishlist is empty.</p>
                <a href="#shop" class="btn btn-secondary btn-sm mt-3">Browse Gear</a>
            </div>
        `;
        return;
    }

    const wishlistedProds = PRODUCTS.filter(p => state.wishlist.includes(p.id));
    DOM.wishlistDrawerBody.innerHTML = wishlistedProds.map(p => `
        <div class="cart-item">
            <img src="${p.image}" alt="${p.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h4 class="cart-item-name">${p.name}</h4>
                <div class="cart-item-price">$${p.price.toFixed(2)}</div>
                <button class="btn btn-primary btn-sm mt-2" data-wish-id="${p.id}" data-action="wish-to-cart">Add to Cart</button>
            </div>
            <button class="remove-cart-item" data-wish-id="${p.id}" data-action="wish-remove">&times;</button>
        </div>
    `).join('');

    // Bind events inside drawer
    DOM.wishlistDrawerBody.querySelectorAll('[data-action="wish-remove"]').forEach(btn => {
        btn.addEventListener("click", () => {
            toggleWishlistItem(btn.getAttribute("data-wish-id"));
        });
    });

    DOM.wishlistDrawerBody.querySelectorAll('[data-action="wish-to-cart"]').forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-wish-id");
            addToCart(id);
            toggleWishlistItem(id); // remove from wishlist once moved to cart
        });
    });
}

// --- CART CORE LOGIC ---
function addToCart(id, qty = 1, size = null, color = null) {
    const prod = PRODUCTS.find(p => p.id === id);
    if (!prod) return;

    // Use first available options if not specified
    const selectedSize = size || prod.sizes[0] || "Standard";
    const selectedColor = color || prod.colors[0] || "Default";

    // Check if matching item exists in cart (same ID, size, color)
    const existing = state.cart.find(item => 
        item.id === id && 
        item.size === selectedSize && 
        item.color === selectedColor
    );

    if (existing) {
        if (existing.qty + qty <= prod.stock) {
            existing.qty += qty;
        } else {
            alert(`Sorry, maximum available stock for this item is ${prod.stock}.`);
            existing.qty = prod.stock;
        }
    } else {
        state.cart.push({
            id,
            name: prod.name,
            price: prod.price,
            image: prod.image,
            size: selectedSize,
            color: selectedColor,
            qty: qty,
            maxStock: prod.stock
        });
    }

    saveCartToStorage();
    updateCartUI();
    openDrawer(DOM.cartDrawerOverlay);
}

function updateCartQty(idx, delta) {
    const item = state.cart[idx];
    if (!item) return;

    if (item.qty + delta <= 0) {
        state.cart.splice(idx, 1);
    } else if (item.qty + delta > item.maxStock) {
        alert(`Cannot add more. Stock limit of ${item.maxStock} reached.`);
    } else {
        item.qty += delta;
    }

    saveCartToStorage();
    updateCartUI();
}

function removeCartItem(idx) {
    state.cart.splice(idx, 1);
    saveCartToStorage();
    updateCartUI();
}

function handleApplyVoucher() {
    const code = DOM.voucherInput.value.trim().toUpperCase();
    if (code === "DEFY20") {
        state.voucherApplied = { code: "DEFY20", discountPercent: 20 };
        updateCartUI();
    } else {
        alert("Invalid coupon code.");
    }
}

function updateCartUI() {
    const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
    DOM.cartCount.textContent = totalCount;
    DOM.cartCountTitle.textContent = totalCount;

    if (state.cart.length === 0) {
        DOM.cartDrawerBody.innerHTML = `
            <div class="cart-empty-message">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                <p>Your shopping cart is empty.</p>
                <a href="#shop" class="btn btn-secondary btn-sm mt-3">Browse Catalog</a>
            </div>
        `;
        DOM.cartDrawerFooter.style.display = "none";
        return;
    }

    DOM.cartDrawerFooter.style.display = "block";
    DOM.cartDrawerBody.innerHTML = state.cart.map((item, idx) => `
        <div class="cart-item" data-index="${idx}">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h4 class="cart-item-name">${item.name}</h4>
                <div class="cart-item-attr">Size: ${item.size} / Color: ${item.color}</div>
                <div class="cart-item-bottom">
                    <div class="qty-control">
                        <button class="qty-btn" data-action="qty-minus">&minus;</button>
                        <span class="qty-value">${item.qty}</span>
                        <button class="qty-btn" data-action="qty-plus">&plus;</button>
                    </div>
                    <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
                </div>
            </div>
            <button class="remove-cart-item" data-action="remove-item">&times;</button>
        </div>
    `).join('');

    // Bind clicks inside cart
    DOM.cartDrawerBody.querySelectorAll('.cart-item').forEach(itemCard => {
        const idx = parseInt(itemCard.getAttribute("data-index"));

        itemCard.querySelector('[data-action="qty-minus"]').addEventListener("click", () => updateCartQty(idx, -1));
        itemCard.querySelector('[data-action="qty-plus"]').addEventListener("click", () => updateCartQty(idx, 1));
        itemCard.querySelector('[data-action="remove-item"]').addEventListener("click", () => removeCartItem(idx));
    });

    // Subtotal math
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    let discount = 0;
    
    if (state.voucherApplied) {
        discount = subtotal * (state.voucherApplied.discountPercent / 100);
        DOM.cartDiscountValue.textContent = `-$${discount.toFixed(2)}`;
        DOM.voucherInput.placeholder = `${state.voucherApplied.code} Applied!`;
        DOM.voucherInput.value = "";
    } else {
        DOM.cartDiscountValue.textContent = `-$0.00`;
    }

    const finalTotal = subtotal - discount;
    DOM.cartTotalValue.textContent = `$${finalTotal.toFixed(2)}`;
}

// --- PRODUCT DETAILS MODAL RENDERING ---
function showProductDetailsModal(id) {
    const prod = PRODUCTS.find(p => p.id === id);
    if (!prod) return;

    let badgeHTML = prod.badge ? `<span class="badge badge-${prod.badgeType} mb-2">${prod.badge}</span>` : "";
    let originalPriceHTML = prod.originalPrice ? `<span class="price-original">$${prod.originalPrice.toFixed(2)}</span>` : "";
    let isWishlisted = state.wishlist.includes(prod.id) ? "active" : "";

    // Size triggers
    let sizeSelectorHTML = "";
    if (prod.sizes && prod.sizes.length > 0) {
        sizeSelectorHTML = `
            <div class="mb-3">
                <span class="options-title">Select Size</span>
                <div class="options-selectors-grid" id="modal-sizes-container">
                    ${prod.sizes.map((s, idx) => `<button class="opt-btn ${idx === 0 ? 'active' : ''}" data-size="${s}">${s}</button>`).join('')}
                </div>
            </div>
        `;
    }

    // Color triggers
    let colorSelectorHTML = "";
    if (prod.colors && prod.colors.length > 0) {
        colorSelectorHTML = `
            <div class="mb-3">
                <span class="options-title">Select Color</span>
                <div class="options-selectors-grid" id="modal-colors-container">
                    ${prod.colors.map((c, idx) => `<button class="opt-btn ${idx === 0 ? 'active' : ''}" data-color="${c}">${c}</button>`).join('')}
                </div>
            </div>
        `;
    }

    // Related items
    const related = PRODUCTS.filter(p => p.id !== prod.id).slice(0, 2);
    let relatedHTML = `
        <div class="mt-4 border-top pt-3">
            <span class="options-title mb-2 d-block">You May Also Like</span>
            <div style="display: flex; gap: 15px;">
                ${related.map(r => `
                    <div style="display: flex; gap: 10px; align-items: center; cursor: pointer; flex: 1;" class="modal-related-item-trigger" data-rel-id="${r.id}">
                        <img src="${r.image}" alt="${r.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px; background: #222;">
                        <div>
                            <span style="font-size: 0.8rem; font-weight: 700; display: block; line-height: 1.1;">${r.name}</span>
                            <span style="font-size: 0.75rem; color: var(--primary-blue); font-weight: 700;">$${r.price.toFixed(2)}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    DOM.productModalContent.innerHTML = `
        <!-- Gallery Column -->
        <div class="modal-gallery-container">
            <div class="modal-main-img-wrapper">
                <img src="${prod.image}" alt="${prod.name}" class="modal-main-img" id="modal-main-image">
            </div>
            ${prod.gallery.length > 1 ? `
                <div class="modal-thumbnails">
                    ${prod.gallery.map((g, idx) => `
                        <button class="thumb-btn ${idx === 0 ? 'active' : ''}" data-img="${g}">
                            <img src="${g}" alt="${prod.name} altview ${idx}">
                        </button>
                    `).join('')}
                </div>
            ` : ""}
        </div>

        <!-- Info Column -->
        <div>
            ${badgeHTML}
            <h2 class="modal-product-title">${prod.name}</h2>
            <div class="product-ratings mb-3">
                <span class="star-icon">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <span class="rating-value">${prod.rating} (${prod.reviewsCount} Customer Reviews)</span>
            </div>
            <div class="modal-product-price ${prod.onSale ? 'glow-text-orange' : 'glow-text-blue'}">
                $${prod.price.toFixed(2)} ${originalPriceHTML}
            </div>
            <p class="modal-product-desc">${prod.description}</p>
            
            ${sizeSelectorHTML}
            ${colorSelectorHTML}

            <!-- Quantity Selection -->
            <div class="qty-selector-row">
                <span class="options-title">Quantity</span>
                <div class="qty-picker">
                    <button class="qty-picker-btn" id="modal-qty-minus">&minus;</button>
                    <div class="qty-picker-value" id="modal-qty-value">1</div>
                    <button class="qty-picker-btn" id="modal-qty-plus">&plus;</button>
                </div>
                <span style="font-size: 0.8rem; color: var(--primary-orange); font-weight: 700;">
                    ${prod.stock <= 5 ? `Only ${prod.stock} left in stock!` : 'In Stock'}
                </span>
            </div>

            <!-- CTAs -->
            <div class="purchase-ctas-grid">
                <button class="btn btn-primary btn-glow" id="modal-add-to-cart-btn">Add to Cart</button>
                <button class="btn btn-secondary ${isWishlisted}" id="modal-wish-btn">Wishlist</button>
            </div>

            <ul class="product-features-list">
                ${prod.features.map(f => `<li>${f}</li>`).join('')}
            </ul>

            ${relatedHTML}
        </div>
    `;

    openModal(DOM.productDetailModal);

    // --- Bind Modal Events ---
    let selectedQty = 1;
    let selectedSize = prod.sizes[0] || null;
    let selectedColor = prod.colors[0] || null;

    // Quantity selectors
    const qtyVal = document.getElementById("modal-qty-value");
    document.getElementById("modal-qty-minus").addEventListener("click", () => {
        if (selectedQty > 1) {
            selectedQty--;
            qtyVal.textContent = selectedQty;
        }
    });
    document.getElementById("modal-qty-plus").addEventListener("click", () => {
        if (selectedQty < prod.stock) {
            selectedQty++;
            qtyVal.textContent = selectedQty;
        } else {
            alert(`Stock limit reached.`);
        }
    });

    // Size buttons
    const sizeButtons = DOM.productModalContent.querySelectorAll("#modal-sizes-container .opt-btn");
    sizeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            sizeButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            selectedSize = btn.getAttribute("data-size");
        });
    });

    // Color buttons
    const colorButtons = DOM.productModalContent.querySelectorAll("#modal-colors-container .opt-btn");
    colorButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            colorButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            selectedColor = btn.getAttribute("data-color");
        });
    });

    // Thumbnail toggle
    const mainImg = document.getElementById("modal-main-image");
    const thumbButtons = DOM.productModalContent.querySelectorAll(".thumb-btn");
    thumbButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            thumbButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            mainImg.src = btn.getAttribute("data-img");
        });
    });

    // Add to Cart modal action
    document.getElementById("modal-add-to-cart-btn").addEventListener("click", () => {
        addToCart(prod.id, selectedQty, selectedSize, selectedColor);
        closeModal(DOM.productDetailModal);
    });

    // Wishlist modal action
    document.getElementById("modal-wish-btn").addEventListener("click", (e) => {
        toggleWishlistItem(prod.id);
        e.target.classList.toggle("active");
    });

    // Related items trigger reload
    DOM.productModalContent.querySelectorAll(".modal-related-item-trigger").forEach(trig => {
        trig.addEventListener("click", () => {
            showProductDetailsModal(trig.getAttribute("data-rel-id"));
        });
    });
}

// --- CHECKOUT WIZARD FLOW ---
function initCheckoutSummary() {
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    let discount = 0;
    
    if (state.voucherApplied) {
        discount = subtotal * (state.voucherApplied.discountPercent / 100);
    }

    const finalTotal = subtotal - discount;
    DOM.summarySubtotal.textContent = `$${subtotal.toFixed(2)}`;
    DOM.summaryTotal.textContent = `$${finalTotal.toFixed(2)}`;
}

function placeMockOrder() {
    // Generate a random tracking ID
    const randomDigits = Math.floor(100000 + Math.random() * 900000);
    const trackingId = `AG-${randomDigits}`;

    // Place tracking ID in UI
    DOM.checkoutTrackingId.textContent = trackingId;

    // Save mock order to memory database for search lookup
    MOCK_ORDERS[trackingId] = {
        id: trackingId,
        status: "processing",
        estDelivery: "In 3 business days",
        items: state.cart.map(item => item.name)
    };

    // Transition wizard to Success step
    document.getElementById("checkout-step-2").classList.remove("active");
    document.getElementById("checkout-step-3").classList.add("active");

    // Empty state cart
    state.cart = [];
    state.voucherApplied = null;
    saveCartToStorage();
    updateCartUI();
}

function resetCheckoutWizard() {
    document.getElementById("checkout-step-1").classList.add("active");
    document.getElementById("checkout-step-2").classList.remove("active");
    document.getElementById("checkout-step-3").classList.remove("active");
    DOM.checkoutShippingForm.reset();
    DOM.checkoutPaymentForm.reset();
}

// --- ORDER TRACKING SEARCH ENGINE ---
function handleOrderTrackingSearch() {
    const trackingId = DOM.trackingIdInput.value.trim().toUpperCase();
    DOM.trackingError.style.display = "none";
    DOM.trackingResults.style.display = "none";

    if (!trackingId) return;

    const order = MOCK_ORDERS[trackingId];
    if (order) {
        DOM.trackingResultId.textContent = order.id;
        DOM.trackingEstDate.textContent = order.estDelivery;
        
        // Reset all visual timeline steps
        const steps = ["processing", "shipped", "delivery", "delivered"];
        const statusIdx = steps.indexOf(order.status);

        steps.forEach((step, idx) => {
            const stepEl = document.getElementById(`step-${step}`);
            stepEl.classList.remove("completed", "current");

            if (idx < statusIdx) {
                stepEl.classList.add("completed");
            } else if (idx === statusIdx) {
                stepEl.classList.add("current");
            }
        });

        DOM.trackingResults.style.display = "block";
    } else {
        DOM.trackingError.style.display = "block";
    }
}
