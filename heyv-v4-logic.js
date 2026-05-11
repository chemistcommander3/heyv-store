AOS.init();

// PRODUCT DATABASE (MEN'S IMAGES)
const inventory = [
    // Young Adult
    { cat: 'adult', name: 'Elite Performance Hoodie', price: '65,000 IQD', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800' },
    { cat: 'adult', name: 'Stealth Joggers', price: '45,000 IQD', img: 'https://images.unsplash.com/photo-1511191988486-103bc3ac80ef?q=80&w=800' },
    { cat: 'adult', name: 'Premium Cotton Tee', price: '25,000 IQD', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800' },
    { cat: 'adult', name: 'Urban Windbreaker', price: '85,000 IQD', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800' },
    
    // Kids
    { cat: 'kids', name: 'Junior Athletic Set', price: '35,000 IQD', img: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=800' },
    { cat: 'kids', name: 'Mini Street Hoodie', price: '40,000 IQD', img: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=800' },
    { cat: 'kids', name: 'Kids Cargo Pants', price: '30,000 IQD', img: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?q=80&w=800' },
    
    // Watches
    { cat: 'watches', name: 'Chrono Carbon V2', price: '240,000 IQD', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800' },
    { cat: 'watches', name: 'Silver Diver Pro', price: '350,000 IQD', img: 'https://images.unsplash.com/photo-1547996160-81dfa63595dd?q=80&w=800' },
    { cat: 'watches', name: 'Minimalist Gold', price: '180,000 IQD', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800' },
    
    // Fragrance
    { cat: 'fragrance', name: 'Kurdish Oud Noir', price: '130,000 IQD', img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800' },
    { cat: 'fragrance', name: 'Midnight Bergamot', price: '110,000 IQD', img: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800' },
    { cat: 'fragrance', name: 'Sandalwood Essence', price: '145,000 IQD', img: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800' },
    
    // Accessories
    { cat: 'acc', name: 'Street Signature Cap', price: '25,000 IQD', img: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=800' },
    { cat: 'acc', name: '3-Pack Tech Socks', price: '15,000 IQD', img: 'https://images.unsplash.com/photo-1582966232435-05803093c613?q=80&w=800' },
    { cat: 'acc', name: 'Leather Slim Wallet', price: '55,000 IQD', img: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800' }
];

// LIGHT/DARK MODE
function h_toggleMode() {
    const html = document.documentElement;
    const icon = document.getElementById('modeIcon');
    if (html.getAttribute('data-theme') === 'dark') {
        html.setAttribute('data-theme', 'light');
        icon.className = 'fas fa-sun';
    } else {
        html.setAttribute('data-theme', 'dark');
        icon.className = 'fas fa-moon';
    }
}

function h_toggleMenu(forceClose = false) {
    const menu = document.getElementById('sideMenu');
    if (forceClose) {
        menu.style.right = '-100%';
        return;
    }
    menu.style.right = (menu.style.right === '0px') ? '-100%' : '0px';
}

// CATEGORY NAVIGATION
function h_nav(category) {
    const hero = document.getElementById('hero-main');
    const header = document.getElementById('cat-header');
    const title = document.getElementById('cat-title');
    const grid = document.getElementById('shop-grid');
    const homeCats = document.getElementById('home-categories');
    
    h_toggleMenu(true); // Always ensure menu is closed when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (category === 'home') {
        hero.style.display = 'flex';
        if (homeCats) homeCats.style.display = 'grid';
        header.style.display = 'none';
        grid.innerHTML = ''; 
    } else {
        hero.style.display = 'none';
        if (homeCats) homeCats.style.display = 'none';
        header.style.display = 'block';
        title.innerText = category.toUpperCase();
        
        const items = inventory.filter(i => i.cat === category);
        grid.innerHTML = items.map(i => `
            <div class="item-card group" data-aos="fade-up">
                <img src="${i.img}" alt="${i.name}">
                <div class="item-info">
                    <div class="flex flex-col">
                        <span class="text-sm opacity-60 uppercase tracking-widest mb-1">${category}</span>
                        <span>${i.name}</span>
                    </div>
                    <span class="text-xl font-black">${i.price}</span>
                </div>
                <button onclick="h_send('${i.name}', '${i.price}')" class="order-btn">Order WhatsApp</button>
            </div>
        `).join('');
    }
}

function h_send(n, p) {
    const msg = `Order from HEYV STORE:\n\nItem: ${n}\nPrice: ${p}\nPlease confirm delivery in Zakho.`;
    window.open(`https://wa.me/9647502015912?text=${encodeURIComponent(msg)}`, '_blank');
}

// Start on Home without triggering menu
document.addEventListener('DOMContentLoaded', () => {
    // Initial state set to closed
    document.getElementById('sideMenu').style.right = '-100%';
    h_nav('home');
});