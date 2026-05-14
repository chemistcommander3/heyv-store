AOS.init();

const translations = {
    en: {
        brand: "HEYV",
        subtitle: "Premium Skincare & Beauty Essentials",
        explore: "Explore Collection",
        storeTitle: "HEYV STORE",
        storeDesc: "High-quality skincare and beauty essentials carefully curated for you.",
        support: "Support",
        payDelivery: "Pay on Delivery Available",
        orderBtn: "Order via WhatsApp",
        orderMsg: "Order from HEYV STORE:\n\nItem: {name}\nPrice: {price}\nPlease confirm delivery in Zakho."
    },
    ar: {
        brand: "هيڤ",
        subtitle: "أساسيات العناية بالبشرة والجمال الفاخرة",
        explore: "اكتشف المجموعة",
        storeTitle: "متجر هيڤ",
        storeDesc: "منتجات العناية بالبشرة والجمال عالية الجودة مختارة بعناية من أجلك.",
        support: "الدعم",
        payDelivery: "الدفع عند الاستلام متاح",
        orderBtn: "اطلب عبر واتساب",
        orderMsg: "طلب من متجر هيڤ:\n\nالمنتج: {name}\nالسعر: {price}\nيرجى تأكيد التوصيل في زاخو."
    },
    ku: {
        brand: "هەیڤ",
        subtitle: "کەرەستێن پێستی و جوانیێ یێن تایبەت",
        explore: "بەرهەمان ببینە",
        storeTitle: "ستۆرێ هەیڤ",
        storeDesc: "باشترین بەرهەمێن پێستی و جوانیێ یێن کو ب تایبەت بۆ تە هاتینە هەلبژارتن.",
        support: "پشتەڤانی",
        payDelivery: "پارەدان ل دەمێ وەرگرتنێ هەیە",
        orderBtn: "داخوازکرن ب ڕێکا واتساپێ",
        orderMsg: "داخوازیکرن ژ ستۆرێ هەیڤ:\n\nبەرهەم: {name}\nبها: {price}\nهیڤیە گەهاندنێ ل زاخۆ پشتڕاست بکە."
    }
};

const products = [
    {
        id: 1,
        img: 'assets/1.jpg',
        price: '30,000 IQD',
        en: { name: "Medicube Zero Foam Cleanser", desc: "A deep-cleansing foam that clears pores and reduces blackheads. Formulated with salicylic acid. Suitable for oily and acne-prone skin." },
        ar: { name: "غسول رغوي زيرو من ميديكوب", desc: "غسول رغوي للتنظيف العميق ينظف المسام ويقلل الرؤوس السوداء. يحتوي على حمض الساليسيليك. مناسب للبشرة الدهنية والمعرضة لحب الشباب." },
        ku: { name: "غەسولێ کەفێ یێ زێرۆ ژ میدیکووب", desc: "غەسولەکێ کەفێ یێ کویرە، کونیلکان پاقژ دکەت و خالێن ڕەش کێم دکەت. ترشێ سالیسیلیک تێدایە. گونجایە بۆ پێستێ چەور و زیپکدار." }
    },
    {
        id: 2,
        img: 'assets/2.jpg',
        price: '45,000 IQD',
        en: { name: "Medicube Triple Collagen Cream", desc: "A rich moisturizing cream with three types of collagen to improve skin elasticity and hydration. Perfect for anti-aging and deep moisture." },
        ar: { name: "كريم الكولاجين الثلاثي من ميديكوب", desc: "كريم ترطيب غني بثلاثة أنواع من الكولاجين لتحسين مرونة البشرة وترطيبها. مثالي لمكافحة الشيخوخة والترطيب العميق." },
        ku: { name: "کرێما سێ قولی یا کۆلاجینێ ژ میدیکووب", desc: "کرێمەکا شێدارکەر یا زەنگینە ب سێ جورێن کۆلاجینێ بۆ باشترکرنا نەرمیا پێستی. گەلەک باشە بۆ دژی پیربوونێ و شێدارکرنا کویر." }
    },
    {
        id: 3,
        img: 'assets/3.jpg',
        price: '40,000 IQD',
        en: { name: "Medicube Red Succinic Acid Peel", desc: "A wash-off peel treatment targeting acne and smoothing skin texture with succinic acid. Ideal for textured skin or breakouts." },
        ar: { name: "مقشر حمض السكسينيك الأحمر من ميديكوب", desc: "مقشر يُغسل يستهدف حب الشباب وينعم البشرة باستخدام حمض السكسينيك. مثالي للبشرة ذات الملمس الخشن." },
        ku: { name: "پیلینگێ ترشێ سوکسینیک یێ سۆر ژ میدیکووب", desc: "چارەسەریەکا پیلینگێ یە دهێتە شوشتن، چارەسەریا زیپکان دکەت و پێستی نەرم دکەت. گونجایە بۆ پێستێ زڤر." }
    },
    {
        id: 4,
        img: 'assets/4.jpg',
        price: '35,000 IQD',
        en: { name: "Medicube Zero Pore Pad 2.0", desc: "Dual-textured pre-soaked pads that help tighten pores and remove residual impurities. Great for daily pore care." },
        ar: { name: "ضمادات زيرو للمسام 2.0 من ميديكوب", desc: "ضمادات مزدوجة الملمس تساعد على تضييق المسام وإزالة الشوائب المتبقية. رائعة للعناية اليومية بالمسام." },
        ku: { name: "پادێن زێرۆ پۆر ٢.٠ ژ میدیکووب", desc: "پادێن دوو ڕوی یێن تەڕکری نە کو هاریکاریا تەسککرنا کونیلکان و لابڕنا پیسیان دکەن. گەلەک باشن بۆ چاڤدێریا ڕۆژانە." }
    },
    {
        id: 5,
        img: 'assets/5.jpg',
        price: '30,000 IQD',
        en: { name: "ELROEL Blanc Pact", desc: "A cushion foundation that changes color from white to beige to perfectly match your natural skin tone. High SPF protection." },
        ar: { name: "كريم أساس بلانك من إلرويل", desc: "كريم أساس يتغير لونه من الأبيض إلى البيج ليتناسب تمامًا مع لون بشرتك الطبيعي. حماية عالية من الشمس." },
        ku: { name: "فاوندەیشنێ کوشنێ بلانک ژ ئەلرۆیێل", desc: "فاوندەیشنەکە ڕەنگێ وێ ژ سپی دهێتە گوهۆڕین بۆ بێجی دا کو ل گەل ڕەنگێ پێستێ تە بگونجیت. پاراستنەکا باش ژ ڕۆژێ دکەت." }
    },
    {
        id: 6,
        img: 'assets/6.jpg',
        price: '25,000 IQD',
        en: { name: "ELROEL Blanc Stick", desc: "A convenient foundation stick with a built-in brush for seamless blending. Offers excellent coverage for imperfections." },
        ar: { name: "عصا بلانك من إلرويل", desc: "عصا كريم أساس مريحة مع فرشاة مدمجة لمزج سلس. يوفر تغطية ممتازة للعيوب." },
        ku: { name: "ستیکێ بلانک ژ ئەلرۆیێل", desc: "ستیکەکێ فاوندەیشنی یێ ب ساناهی یە ل گەل فرچەیەکێ بۆ تێکەلکرنەکا باش. داپۆشینەکا نایاب بۆ کێماسیێن پێستی دکەت." }
    },
    {
        id: 7,
        img: 'assets/7.jpg',
        price: '55,000 IQD',
        en: { name: "AHAVA Dead Sea Osmoter Supreme Cream", desc: "A luxury hydration cream enriched with a high concentration of Dead Sea minerals. Best for dry to normal skin types." },
        ar: { name: "كريم أوسموتر سوبريم من أهافا", desc: "كريم ترطيب فاخر غني بتركيز عالٍ من معادن البحر الميت. الأفضل لأنواع البشرة الجافة إلى العادية." },
        ku: { name: "کرێما سوپریم یا دەریایا مری ژ ئەهاڤا", desc: "کرێمەکا شێدارکەر یا نایابە زەنگینە ب کانزایێن دەریایا مری. باشترینە بۆ پێستێ هشکی هەتا ئاسایی." }
    },
    {
        id: 8,
        img: 'assets/8.jpg',
        price: '40,000 IQD',
        en: { name: "AHAVA Mineral Body Lotion", desc: "A lightweight yet deeply hydrating body lotion infused with a gentle scent and nutrient-rich Dead Sea water." },
        ar: { name: "لوشن الجسم المعدني من أهافا", desc: "لوشن للجسم خفيف الوزن ولكنه مرطب بعمق، غني برائحة لطيفة ومياه البحر الميت الغنية بالعناصر الغذائية." },
        ku: { name: "لۆشنێ لەشی یێ کانزایی ژ ئەهاڤا", desc: "لۆشنەکێ لەشی یێ سڤکە لێ گەلەک شێدارکەرە، بێهنەکا خۆش و ئاڤا دەریایا مری تێدایە." }
    },
    {
        id: 9,
        img: 'assets/9.jpg',
        price: '35,000 IQD',
        en: { name: "KAHI Wrinkle Bounce Multi Balm", desc: "A multi-purpose balm stick that instantly targets fine lines and dry patches. Perfect for convenient, portable anti-aging care." },
        ar: { name: "بلسم كاهي متعدد الاستخدامات", desc: "بلسم متعدد الأغراض يستهدف الخطوط الدقيقة والبقع الجافة على الفور. مثالي للعناية المحمولة لمكافحة الشيخوخة." },
        ku: { name: "بالمێ کاهی یێ فرە مەرەم بۆ چرچبوونا", desc: "بالمەکە ئێکسەر هێلێن هویر و جهێن هشک چارەسەر دکەت. گەلەک باشە بۆ چاڤدێریا دژی پیربوونێ." }
    },
    {
        id: 10,
        img: 'assets/10.jpg',
        price: '35,000 IQD',
        en: { name: "Medicube Red Moisture Real Sunscreen", desc: "A moisturizing sunscreen with SPF 50+ providing broad-spectrum UV protection without a white cast. Soothes sensitive skin." },
        ar: { name: "واقي شمس ريد مويستشر من ميديكوب", desc: "واقي شمس مرطب بعامل حماية 50+ يوفر حماية من الأشعة فوق البنفسجية دون ترك أثر أبيض. يلطف البشرة الحساسة." },
        ku: { name: "دژە ڕۆژا سۆر یا شێدارکەر ژ میدیکووب", desc: "دژە ڕۆژەکا شێدارکەرە ب SPF 50+ پاراستنەکا باش ژ تیشکێن ڕۆژێ دکەت بێی کو جهێن سپی بهێلیت. پێستێ هەستیار ئارام دکەت." }
    }
];

let currentLang = 'en';

function setLang(lang) {
    currentLang = lang;
    
    // Update active state of language buttons
    document.querySelectorAll('[id^="lang-"]').forEach(el => {
        el.classList.remove('opacity-100');
        el.classList.add('opacity-50');
    });
    document.getElementById('lang-' + lang).classList.remove('opacity-50');
    document.getElementById('lang-' + lang).classList.add('opacity-100');
    
    // Update direction for Arabic/Kurdish
    if (lang === 'ar' || lang === 'ku') {
        document.body.setAttribute('dir', 'rtl');
    } else {
        document.body.setAttribute('dir', 'ltr');
    }

    // Update UI Texts
    const t = translations[lang];
    document.getElementById('hero-subtitle').innerText = t.subtitle;
    document.getElementById('hero-btn').innerText = t.explore;
    document.getElementById('footer-store-title').innerText = t.storeTitle;
    document.getElementById('footer-store-desc').innerText = t.storeDesc;
    document.getElementById('footer-support').innerText = t.support;
    document.getElementById('footer-pay').innerText = t.payDelivery;

    // Render Products
    renderProducts();
}

function renderProducts() {
    const list = document.getElementById('shop-list');
    const t = translations[currentLang];
    
    list.innerHTML = products.map((p, index) => {
        const pData = p[currentLang];
        const isRtl = currentLang === 'ar' || currentLang === 'ku';
        const rtlClass = isRtl ? 'text-right' : 'text-left';
        
        return `
            <div class="product-card group" data-aos="fade-up">
                <div class="product-image-wrapper">
                    <img src="${p.img}" alt="${pData.name}">
                </div>
                <div class="product-info ${rtlClass}">
                    <h3 class="text-3xl md:text-5xl font-black mb-4">${pData.name}</h3>
                    <p class="text-xl md:text-2xl font-bold mb-6 text-yellow-600 dark:text-yellow-400">${p.price}</p>
                    <p class="text-lg md:text-xl opacity-80 mb-10 leading-relaxed max-w-2xl">${pData.desc}</p>
                    <button onclick="h_send('${pData.name}', '${p.price}')" class="buy-btn border-2 border-current px-8 py-4 uppercase font-bold tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">
                        ${t.orderBtn}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function h_send(n, p) {
    const t = translations[currentLang];
    let msg = t.orderMsg.replace('{name}', n).replace('{price}', p);
    window.open(`https://wa.me/9647502015912?text=${encodeURIComponent(msg)}`, '_blank');
}

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

document.addEventListener('DOMContentLoaded', () => {
    setLang('en');
});