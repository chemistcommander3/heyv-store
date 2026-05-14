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
        orderMsg: "Order from HEYV STORE:\n\nItem: {name}\nPrice: {price}\nPlease confirm delivery in Zakho.",
        howToUse: "How to Use"
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
        orderMsg: "طلب من متجر هيڤ:\n\nالمنتج: {name}\nالسعر: {price}\nيرجى تأكيد التوصيل في زاخو.",
        howToUse: "طريقة الاستخدام"
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
        orderMsg: "داخوازیکرن ژ ستۆرێ هەیڤ:\n\nبەرهەم: {name}\nبها: {price}\nهیڤیە گەهاندنێ ل زاخۆ پشتڕاست بکە.",
        howToUse: "شێوازێ بکارئینانێ"
    }
};

const products = [
    {
        id: 1,
        img: 'assets/1.jpg',
        price: '30,000 IQD',
        en: { name: "Medicube Zero Foam Cleanser", desc: "A clinically formulated deep-cleansing foam targeting enlarged pores and comedones (blackheads). It effectively removes excess sebum without compromising the epidermal barrier.", how: "Use twice daily, AM and PM. Emulsify a pea-sized amount with water. Gently massage onto the face for 60 seconds focusing on the T-zone, then rinse with lukewarm water. For optimal results, follow immediately with a balancing toner." },
        ar: { name: "غسول رغوي زيرو من ميديكوب", desc: "رغوة تنظيف عميق مركبة سريريًا لاستهداف المسام الواسعة والزؤان (الرؤوس السوداء). تزيل الزهم الزائد بفعالية دون الإضرار بحاجز البشرة.", how: "يستخدم مرتين يوميًا، صباحًا ومساءً. اصنعي رغوة بكمية بحجم حبة البازلاء مع الماء. دلكي بلطف على الوجه لمدة 60 ثانية مع التركيز على منطقة T، ثم اشطفي بالماء الفاتر. للحصول على أفضل النتائج، اتبعيه مباشرة بتونر متوازن." },
        ku: { name: "غەسولێ کەفێ یێ زێرۆ ژ میدیکووب", desc: "غەسولەکێ کەفێ یێ پزیشکییە بۆ چارەسەرکرنا کونیلکێن مەزن و خالێن ڕەش. ب باشی چەوریا زێدە لادبەت بێی کو زیانێ ب بەربەستێ پێستی بگەهینیت.", how: "ڕۆژێ دوو جاران بکاربینە، سپێدە و شەڤ. بڕەکا کێم ل گەل ئاڤێ بکە کەف. ب هێمنی بۆ دەمێ ٦٠ چرکەیان ل سەر دەموچاڤان مەساج بکە و پتر ل سەر ناوچەیا T، پاشان ب ئاڤا شلەتین بشۆ. بۆ باشترین ئەنجام، ئێکسەر پشتی وێ تۆنەرەکێ بکاربینە." }
    },
    {
        id: 2,
        img: 'assets/2.jpg',
        price: '30,000 IQD',
        en: { name: "Medicube Zero Foam Cleanser", desc: "A clinically formulated deep-cleansing foam targeting enlarged pores and comedones (blackheads). It effectively removes excess sebum without compromising the epidermal barrier.", how: "Use twice daily, AM and PM. Emulsify a pea-sized amount with water. Gently massage onto the face for 60 seconds focusing on the T-zone, then rinse with lukewarm water. For optimal results, follow immediately with a balancing toner." },
        ar: { name: "غسول رغوي زيرو من ميديكوب", desc: "رغوة تنظيف عميق مركبة سريريًا لاستهداف المسام الواسعة والزؤان (الرؤوس السوداء). تزيل الزهم الزائد بفعالية دون الإضرار بحاجز البشرة.", how: "يستخدم مرتين يوميًا، صباحًا ومساءً. اصنعي رغوة بكمية بحجم حبة البازلاء مع الماء. دلكي بلطف على الوجه لمدة 60 ثانية مع التركيز على منطقة T، ثم اشطفي بالماء الفاتر. للحصول على أفضل النتائج، اتبعيه مباشرة بتونر متوازن." },
        ku: { name: "غەسولێ کەفێ یێ زێرۆ ژ میدیکووب", desc: "غەسولەکێ کەفێ یێ پزیشکییە بۆ چارەسەرکرنا کونیلکێن مەزن و خالێن ڕەش. ب باشی چەوریا زێدە لادبەت بێی کو زیانێ ب بەربەستێ پێستی بگەهینیت.", how: "ڕۆژێ دوو جاران بکاربینە، سپێدە و شەڤ. بڕەکا کێم ل گەل ئاڤێ بکە کەف. ب هێمنی بۆ دەمێ ٦٠ چرکەیان ل سەر دەموچاڤان مەساج بکە و پتر ل سەر ناوچەیا T، پاشان ب ئاڤا شلەتین بشۆ. بۆ باشترین ئەنجام، ئێکسەر پشتی وێ تۆنەرەکێ بکاربینە." }
    },
    {
        id: 3,
        img: 'assets/3.jpg',
        price: '35,000 IQD',
        en: { name: "Eqqual Berry Lush Blush & Deep Cera Serum", desc: "An advanced dermatological serum combining stabilized Vitamin C and NAD+ peptides to combat oxidative stress, promote collagen synthesis, and restore cellular vitality.", how: "Apply daily, AM and PM. Dispense 3-4 drops onto a cleansed and toned face. Gently pat until fully absorbed. For best results, use under a broad-spectrum sunscreen during the day to prevent photoaging." },
        ar: { name: "سيروم بيري لاش بلاش وديب سيرا من إكوال", desc: "سيروم جلدي متطور يجمع بين فيتامين سي المستقر وببتيدات NAD+ لمحاربة الإجهاد التأكسدي، وتعزيز إنتاج الكولاجين، واستعادة حيوية الخلايا.", how: "يستخدم يوميًا، صباحًا ومساءً. ضعي 3-4 قطرات على وجه نظيف وموحد اللون. ربتي بلطف حتى يتم امتصاصه بالكامل. للحصول على أفضل النتائج، استخدميه تحت واقي شمس واسع الطيف خلال النهار لمنع الشيخوخة الضوئية." },
        ku: { name: "سیرومێ بێری لاش بلاش و دیپ سێرا ژ ئێکوال", desc: "سیرومەکێ پێستی یێ پێشکەفتییە کو ڤیتامین C و پێپتایدێن NAD+ تێکەل دکەت بۆ دژی سترێسا ئۆکسیدی، زێدەکرنا کۆلاجینی، و زڤراندنا ساخلەمیا خانەیان.", how: "ڕۆژانە بکاربینە، سپێدە و شەڤ. ٣-٤ دلۆپەکان بکە سەر دەموچاڤێن پاقژکری. ب هێمنی لێبدە هەتا ب تەمامی دهێتە مژین. بۆ باشترین ئەنجام، ب ڕۆژ ل ژێر دژە ڕۆژێ بکاربینە بۆ ڕێگریکردن ل پیربوونا پێستی." }
    },
    {
        id: 4,
        img: 'assets/4.jpg',
        price: '35,000 IQD',
        en: { name: "Eqqual Berry NAD Peptide Serum", desc: "A potent anti-aging complex featuring NAD+ peptides designed to improve skin elasticity, stimulate cellular repair, and diminish fine lines at a structural level.", how: "Apply twice daily, AM and PM. Apply 2-3 drops to the face and neck after toning. Massage using upward strokes to stimulate lymphatic drainage. Consistent daily use yields the best firming results." },
        ar: { name: "سيروم ببتيد NAD من إكوال بيري", desc: "مركب قوي مضاد للشيخوخة يتميز بببتيدات NAD+ المصممة لتحسين مرونة البشرة، وتحفيز الإصلاح الخلوي، وتقليل الخطوط الدقيقة على المستوى الهيكلي.", how: "يستخدم مرتين يوميًا، صباحًا ومساءً. ضعي 2-3 قطرات على الوجه والرقبة بعد التونر. دلكي بحركات تصاعدية لتحفيز التصريف اللمفاوي. الاستخدام اليومي المستمر يعطي أفضل نتائج لشد البشرة." },
        ku: { name: "سیرومێ پێپتایدێ NAD ژ ئێکوال بێری", desc: "پێکهاتەیەکا بهێزە دژی پیربوونێ ب پێپتایدێن NAD+ کو هاتیە دروستکرن بۆ باشترکرنا نەرمیا پێستی، نویکرنا خانەیان، و کێمکرنا هێلێن هویر.", how: "ڕۆژێ دوو جاران بکاربینە، سپێدە و شەڤ. ٢-٣ دلۆپەکان بکە سەر دەموچاڤ و ستوی پشتی تۆنەری. بەرەڤ سەرڤە مەساج بکە. بکارئینانا بەردەوام یا ڕۆژانە باشترین ئەنجام بۆ توندکرنا پێستی ددەت." }
    },
    {
        id: 5,
        img: 'assets/5.jpg',
        price: '30,000 IQD',
        en: { name: "Elroel Product", desc: "A clinically tested cosmetic compact that provides breathable, non-comedogenic coverage while protecting the skin barrier from environmental aggressors.", how: "Use daily or as needed. Gently press the puff into the compact and apply evenly across the face using a tapping motion. For flawless results, ensure the skin is well-moisturized prior to application." },
        ar: { name: "منتج إلرويل", desc: "مستحضر تجميلي مضغوط ومختبر سريريًا يوفر تغطية تسمح بمرور الهواء ولا يسد المسام، مع حماية حاجز البشرة من العوامل البيئية الضارة.", how: "يستخدم يوميًا أو عند الحاجة. اضغطي بلطف بالإسفنجة ووزعيه بالتساوي على الوجه بحركة تربيت. للحصول على نتائج خالية من العيوب، تأكدي من ترطيب البشرة جيدًا قبل الاستخدام." },
        ku: { name: "بەرهەمێ ئەلرۆیێل", desc: "بەرهەمەکێ جوانکاریێ یێ پزیشکییە کو داپۆشینەکا باش ددەت بێی گرتنا کونیلکان، د هەمان دەم دا پێستی ژ پیسبوونا ژینگەهێ دپارێزیت.", how: "ڕۆژانە یان ل دەمێ پێدڤی بکاربینە. ب هێمنی ئسفنجێ پێدا بگرە و ب یەکسانی ل سەر دەموچاڤان بەلاڤ بکە ب شێوازێ لێدانێ. بۆ ئەنجامەکێ بێ کێماسی، پێشتر پێستێ خۆ ب باشی شێدار بکە." }
    },
    {
        id: 6,
        img: 'assets/6.jpg',
        price: '35,000 IQD',
        en: { name: "Eqqual Berry Deep Cera Serum 30ml", desc: "A high-concentration ceramide formulation engineered to repair compromised skin barriers, prevent transepidermal water loss (TEWL), and soothe inflammation.", how: "Use twice daily, AM and PM. Dispense 1-2 pumps and apply evenly to the skin. Pat gently until absorbed. For enhanced barrier repair, lock it in with a ceramide-rich moisturizer." },
        ar: { name: "سيروم ديب سيرا 30 مل من إكوال بيري", desc: "تركيبة سيراميد عالية التركيز مصممة لإصلاح حواجز البشرة المتضررة، ومنع فقدان الماء عبر البشرة (TEWL)، وتهدئة الالتهابات.", how: "يستخدم مرتين يوميًا، صباحًا ومساءً. خذي ضخة إلى ضختين وضعيه بالتساوي على البشرة. ربتي بلطف حتى يمتص. لتعزيز إصلاح الحاجز، ادمجيه مع مرطب غني بالسيراميد." },
        ku: { name: "سیرومێ دیپ سێرا ٣٠ مل ژ ئێکوال بێری", desc: "پێکهاتەیەکا سێراماید یا بهێزە کو هاتیە دروستکرن بۆ چارەسەرکرنا بەربەستێ پێستی، ڕێگریکردن ل ونداكرنا ئاڤێ، و ئارامکرنا هەودانێ.", how: "ڕۆژێ دوو جاران بکاربینە، سپێدە و شەڤ. ١-٢ پەمپان بکاربینە و ب یەکسانی ل سەر پێستی بەلاڤ بکە. ب هێمنی لێبدە هەتا دهێتە مژین. بۆ باشتر چارەسەرکرنێ، ل گەل کرێمەکا سێراماید بکاربینە." }
    },
    {
        id: 7,
        img: 'assets/7.jpg',
        price: '35,000 IQD',
        en: { name: "Eqqual Berry Glow Filter Vitamin C Serum 30ml", desc: "A potent antioxidant serum containing pure ascorbic acid. It clinically targets hyperpigmentation, neutralizes free radicals, and evens out skin tone.", how: "Apply once daily, strictly in the AM. Use 2-3 drops on clean, dry skin. Allow 2 minutes for absorption. For optimal efficacy and safety, it is imperative to follow up with an SPF 50+ sunscreen." },
        ar: { name: "سيروم فيتامين سي جلو فلتر 30 مل من إكوال بيري", desc: "سيروم قوي مضاد للأكسدة يحتوي على حمض الأسكوربيك النقي. يستهدف سريريًا فرط التصبغ، ويعادل الجذور الحرة، ويوحد لون البشرة.", how: "يستخدم مرة واحدة يوميًا، في الصباح فقط. ضعي 2-3 قطرات على بشرة نظيفة وجافة. اتركيه دقيقتين ليمتص. لتحقيق الفعالية والأمان الأمثل، من الضروري استخدام واقي شمس SPF 50+ بعده." },
        ku: { name: "سیرومێ ڤیتامین C یێ گلۆڤ فلتەر ٣٠ مل ژ ئێکوال بێری", desc: "سیرومەکێ دژە ئۆکسیدێ یێ بهێزە کو ترشێ ئەسکۆربیک یێ پاقژ تێدایە. ب شێوەیەکێ پزیشکی چارەسەرا پەقێن ڕەش دکەت و ڕەنگێ پێستی یەکسان دکەت.", how: "ڕۆژێ تەنها جارەکێ ل سپێدێ بکاربینە. ٢-٣ دلۆپەکان بکە سەر پێستەکێ پاقژ و هشک. ٢ خولەکان بهێلە هەتا دهێتە مژین. بۆ ئەمان و ئەنجامەکێ باشتر، پێویستە ئێکسەر دژە ڕۆژا SPF 50+ بکاربینی." }
    },
    {
        id: 8,
        img: 'assets/8.jpg',
        price: '35,000 IQD',
        en: { name: "KAHI Seoul Wrinkle Bounce with Jeju Origin Oil", desc: "A specialized dermatological balm infused with Jeju origin oils and collagen complexes. It provides immediate hydration to dry patches and temporarily plumps superficial rhytides (wrinkles).", how: "Use as needed throughout the day. Glide directly onto areas prone to transepidermal water loss or dynamic wrinkles, such as the periocular (eye) area and nasolabial folds. Excellent for midday barrier touch-ups." },
        ar: { name: "بلسم كاهي سيول لتقليل التجاعيد بزيت جيجو", desc: "بلسم جلدي متخصص غني بزيوت جيجو ومركبات الكولاجين. يوفر ترطيبًا فوريًا للمناطق الجافة ويملأ التجاعيد السطحية مؤقتًا.", how: "يستخدم عند الحاجة طوال اليوم. مرريه مباشرة على المناطق المعرضة لفقدان الرطوبة أو التجاعيد الحركية، مثل منطقة حول العينين وطيات الأنف. ممتاز لتجديد حاجز البشرة في منتصف النهار." },
        ku: { name: "بالمێ کاهی سیۆل بۆ کێمکرنا چرچبوونا ب زەیتێ جیجو", desc: "بالمەکێ پزیشکی یێ تایبەتە کو زەیتێن جیجو و کۆلاجین تێدایە. شێدارییەکا خێرا ددەتە جهێن هشک و ب شێوەیەکێ کاتی هێلێن هویر پڕ دکەت.", how: "ل دەمێ پێدڤی د ناڤ ڕۆژێ دا بکاربینە. ئێکسەر ل سەر وان جهان بکاربینە یێن کو زی هشک دبن یان چرچ دبن، وەکو دەردۆرێن چاڤان و هێلێن کەنیێ. گەلەک باشە بۆ نویکرنا پێستی د نیڤا ڕۆژێ دا." }
    },
    {
        id: 9,
        img: 'assets/9.jpg',
        price: '35,000 IQD',
        en: { name: "Medicube Collagen & Ascorbic Acid Suncream", desc: "A broad-spectrum dermatological photoprotector SPF 50+. It uniquely combines UV filters with active Vitamin C and collagen to defend against photoaging while inhibiting melanogenesis.", how: "Apply daily as the absolute final step of your AM routine. Apply exactly two finger-lengths worth to the face and neck 15 minutes before sun exposure. Reapply every 2 hours for sustained clinical protection." },
        ar: { name: "واقي شمس ميديكوب بالكولاجين وحمض الأسكوربيك", desc: "واقي شمس جلدي واسع الطيف SPF 50+. يجمع بين فلاتر الأشعة فوق البنفسجية وفيتامين سي النشط والكولاجين للحماية من الشيخوخة الضوئية وتثبيط إنتاج الميلانين.", how: "يستخدم يوميًا كخطوة أخيرة وضرورية في روتين الصباح. ضعي كمية تعادل طول إصبعين على الوجه والرقبة قبل 15 دقيقة من التعرض للشمس. أعيدي وضعه كل ساعتين لحماية سريرية مستمرة." },
        ku: { name: "دژە ڕۆژا میدیکووب ب کۆلاجین و ترشێ ئەسکۆربیک", desc: "دژە ڕۆژەکا پزیشکی یا پاراستنێ SPF 50+. تێکەلەیەکا تایبەتە ژ فلتەرێن ڕۆژێ ل گەل ڤیتامین C و کۆلاجین بۆ پاراستنا پێستی ژ پیربوونێ.", how: "ڕۆژانە بکاربینە وەکو پێنگاڤا دوماهیێ یا سپێدێ. بڕەکا ب قەدەر دوو تبلان ل سەر دەموچاڤ و ستوی بکاربینە ١٥ خولەکان بەری چوونە بەر ڕۆژێ. هەر دوو دەمژمێرا دوبارە بکە بۆ پاراستنەکا بەردەوام." }
    },
    {
        id: 10,
        img: 'assets/10.jpg',
        price: '35,000 IQD',
        en: { name: "Pestlo T3 Baby Collagen Glow Mask", desc: "A clinically formulated peel-off mask utilizing low-molecular-weight collagen. It works to clear pore congestion, exfoliate dead keratinocytes, and instantly firm the dermal matrix.", how: "Use 1-2 times a week, strictly in the PM. Apply an even layer on dry, cleansed skin. Allow it to set for 20-30 minutes until fully dry, then peel downwards. Follow with a hydrating ceramide serum to soothe the skin." },
        ar: { name: "ماسك بيستلو تي 3 بيبي كولاجين جلو", desc: "ماسك تقشير مركب سريريًا يستخدم كولاجين منخفض الوزن الجزيئي. يعمل على تنظيف احتقان المسام، وتقشير الخلايا الميتة، وشد نسيج البشرة على الفور.", how: "يستخدم 1-2 مرات في الأسبوع، في المساء فقط. ضعي طبقة متساوية على بشرة جافة ونظيفة. اتركيه لمدة 20-30 دقيقة حتى يجف تمامًا، ثم قشريه للأسفل. اتبعيه بسيروم سيراميد مرطب لتهدئة البشرة." },
        ku: { name: "ماسکێ پێستلۆ T3 بەیبی کۆلاجین گلۆ", desc: "ماسکەکێ پزیشکییە کو کۆلاجینەکێ کێم کێش تێدایە. کار دکەت بۆ پاقژکرنا کونیلکان، لادانا خانەیێن مری، و توندکرنا پێستی ب خێرایی.", how: "١-٢ جارا د حەفتیێ دا بکاربینە، بتنێ ب شەڤ. چینەکا یەکسان ل سەر پێستێ هشک و پاقژ بکاربینە. ٢٠-٣٠ خولەکان بهێلە هەتا ب تەمامی هشک دبیت، پاشان بەرەڤ خوارێ لێڤەکە. پشتی وێ سیرومێ سێراماید بکاربینە بۆ ئارامکرنا پێستی." }
    },
    {
        id: 11,
        img: 'assets/11.jpg',
        price: '35,000 IQD',
        en: { name: "Dr. Althea 147 Barrier Cream 50ml", desc: "An intensive skin-repair emulsion engineered for compromised or atopic skin. It mimics the lipid structure of the stratum corneum to accelerate healing and reduce erythema (redness).", how: "Use twice daily, AM and PM. Apply a moderate amount as the final moisturizing step. Gently massage into the skin. For severely compromised barriers, apply a thicker layer at night as a sleeping mask." },
        ar: { name: "كريم حاجز 147 من دكتور الثيا 50 مل", desc: "مستحلب مكثف لإصلاح البشرة المتضررة أو التأتبية. يحاكي البنية الدهنية للطبقة المتقرنة لتسريع الشفاء وتقليل الحمامي (الاحمرار).", how: "يستخدم مرتين يوميًا، صباحًا ومساءً. ضعي كمية معتدلة كخطوة ترطيب أخيرة. دلكيه بلطف على البشرة. لحواجز البشرة شديدة التضرر، ضعي طبقة أكثر سمكًا في الليل كماسك للنوم." },
        ku: { name: "کرێما بەربەستێ ١٤٧ ژ دکتۆر ئەلثیا ٥٠ مل", desc: "کرێمەکا پزیشکی یا بهێزە بۆ چارەسەرکرنا پێستێ زیانپێکەفتی و هەستیار. کار دکەت بۆ زوو ساخکرنا پێستی و کێمکرنا سۆروبوونێ.", how: "ڕۆژێ دوو جاران بکاربینە، سپێدە و شەڤ. بڕەکا گونجای وەکو پێنگاڤا دوماهیێ یا شێدارکرنێ بکاربینە. ب هێمنی مەساج بکە. ئەگەر پێست گەلەک یێ تێکچووی بیت، ب شەڤ چینەکا ستویرتر بکاربینە وەکو ماسکێ خەوێ." }
    },
    {
        id: 12,
        img: 'assets/12.jpg',
        price: '35,000 IQD',
        en: { name: "Anua 10% Niacinamide + TXA Serum 30ml", desc: "A clinical-strength depigmenting serum combining 10% Niacinamide and Tranexamic Acid (TXA). It disrupts melanin transfer and effectively treats post-inflammatory hyperpigmentation (PIH) and melasma.", how: "Use daily, AM and PM. Apply 2-3 drops directly to clean, dry skin. Wait 60 seconds before applying moisturizer. For best results in treating dark spots, consistent use over 8-12 weeks is required." },
        ar: { name: "سيروم أنوا 10% نياسيناميد وحمض الترانيكساميك 30 مل", desc: "سيروم علاجي قوي لإزالة التصبغات يجمع بين 10% نياسيناميد وحمض الترانيكساميك. يمنع انتقال الميلانين ويعالج بفعالية فرط التصبغ ما بعد الالتهاب والكلف.", how: "يستخدم يوميًا، صباحًا ومساءً. ضعي 2-3 قطرات مباشرة على بشرة نظيفة وجافة. انتظري 60 ثانية قبل وضع المرطب. للحصول على أفضل النتائج في علاج البقع الداكنة، يتطلب الاستخدام المستمر لمدة 8-12 أسبوعًا." },
        ku: { name: "سیرومێ ئانوا ١٠٪ نیاسیناماید و ترشێ TXA ٣٠ مل", desc: "سیرومەکێ پزیشکی یێ بهێزە بۆ نەهێلانا پەقێن ڕەش کو ١٠٪ نیاسیناماید و ترشێ TXA تێکەل دکەت. چارەسەرا پەقێن پشتی زیپکان دکەت.", how: "ڕۆژانە بکاربینە، سپێدە و شەڤ. ٢-٣ دلۆپەکان ئێکسەر ل سەر پێستێ پاقژ و هشک بکاربینە. ٦٠ چرکەیان چاڤەڕێ بکە بەری کرێما شێدارکەر. بۆ باشترین ئەنجام، پێویستە بۆ دەمێ ٨-١٢ حەفتیان ب بەردەوامی بهێتە بکارئینان." }
    },
    {
        id: 13,
        img: 'assets/13.jpg',
        price: '35,000 IQD',
        en: { name: "Anua 100+ PDRN + Hyaluron Serum", desc: "An advanced dermatological formula containing Polydeoxyribonucleotide (PDRN) and multi-molecular Hyaluronic Acid. It accelerates tissue regeneration and provides profound transdermal hydration.", how: "Use daily, AM and PM. Apply 3-4 drops to slightly damp skin (immediately after cleansing or toning) to bind moisture into the dermis. Always seal with an occlusive cream to maximize results." },
        ar: { name: "سيروم أنوا 100+ PDRN وهيالورون", desc: "تركيبة جلدية متطورة تحتوي على PDRN وحمض الهيالورونيك متعدد الجزيئات. يسرع تجديد الأنسجة ويوفر ترطيبًا عميقًا عبر الجلد.", how: "يستخدم يوميًا، صباحًا ومساءً. ضعي 3-4 قطرات على بشرة مبللة قليلاً (مباشرة بعد الغسول أو التونر) لحبس الرطوبة في البشرة. احكمي إغلاقه دائمًا بكريم مرطب للحصول على أقصى النتائج." },
        ku: { name: "سیرومێ ئانوا ١٠٠+ PDRN و هیالۆرۆن", desc: "پێکهاتەیەکا پزیشکی یا پێشکەفتییە کو PDRN و ترشێ هیالۆرۆنیک تێدایە. نویکرنا شانەیان زووتر دکەت و شێدارییەکا کویر ددەتە پێستی.", how: "ڕۆژانە بکاربینە، سپێدە و شەڤ. ٣-٤ دلۆپەکان ل سەر پێستەکێ کێم تەڕ (ئێکسەر پشتی پاقژکرنێ) بکاربینە بۆ هێشتنا شێداریێ. هەمیشە پشتی وێ کرێمەکا شێدارکەر بکاربینە بۆ باشترین ئەنجام." }
    },
    {
        id: 14,
        img: 'assets/14.jpg',
        price: '35,000 IQD',
        en: { name: "Dr. Althea 345 Relief Cream", desc: "A therapeutic soothing cream specifically formulated to calm reactive, sensitized, or post-procedural skin. It reduces inflammatory cytokines and rapidly restores epidermal homeostasis.", how: "Use daily, AM and PM. Apply a generous layer over the face. Gently pat to assist absorption. For acute flare-ups or rosacea-prone skin, store in the refrigerator before application for a cooling, vasoconstrictive effect." },
        ar: { name: "كريم ريليف 345 من دكتور الثيا", desc: "كريم علاجي مهدئ مركب خصيصًا لتهدئة البشرة المتفاعلة، أو الحساسة، أو ما بعد الإجراءات التجميلية. يقلل من السيتوكينات الالتهابية ويستعيد توازن البشرة بسرعة.", how: "يستخدم يوميًا، صباحًا ومساءً. ضعي طبقة سخية على الوجه. ربتي بلطف للمساعدة على الامتصاص. في حالات التهيج الحادة، احفظيه في الثلاجة قبل الاستخدام للحصول على تأثير مبرد." },
        ku: { name: "کرێما ڕیلیف ٣٤٥ ژ دکتۆر ئەلثیا", desc: "کرێمەکا پزیشکی یا ئارامکەرە کو ب تایبەتی هاتیە دروستکرن بۆ پێستێ هەستیار یان پشتی چارەسەریێن پزیشکی. هەودانێ کێم دکەت و پێستی ئارام دکەت.", how: "ڕۆژانە بکاربینە، سپێدە و شەڤ. چینەکا باش ل سەر دەموچاڤان بکاربینە. ب هێمنی لێبدە بۆ مژینێ. بۆ پێستێ گەلەک سۆر و هەستیار، بەری بکارئینانێ د ساردکەرێ دا هەلگرە بۆ کارتێکرنەکا سار و ئارامکەر." }
    },
    {
        id: 15,
        img: 'assets/15.jpg',
        price: '35,000 IQD',
        en: { name: "Anua 10% Azelaic Acid + 10% Hyaluron", desc: "A potent comedolytic and antibacterial serum targeting Acne Vulgaris and Rosacea. Azelaic acid regulates keratin production and reduces acne-causing bacteria without severe desquamation.", how: "Use once daily initially (preferably PM), increasing to twice daily as tolerated. Apply a thin layer to clean, dry skin. Mild tingling is a normal clinical response. Always use sunscreen in the AM." },
        ar: { name: "أنوا 10% حمض الأزيليك + 10% هيالورون", desc: "سيروم قوي مضاد للبكتيريا والزؤان يستهدف حب الشباب والوردية. ينظم حمض الأزيليك إنتاج الكيراتين ويقلل البكتيريا المسببة لحب الشباب دون تقشير شديد.", how: "يستخدم مرة يوميًا في البداية (يفضل مساءً)، ويزاد إلى مرتين يوميًا حسب تحمل البشرة. ضعي طبقة رقيقة على بشرة نظيفة وجافة. الوخز الخفيف هو استجابة سريرية طبيعية. استخدمي واقي الشمس دائمًا في الصباح." },
        ku: { name: "ئانوا ١٠٪ ترشێ ئازێلیک + ١٠٪ هیالۆرۆن", desc: "سیرومەکێ پزیشکی یێ دژە بەکتریا و زیپکانە. ترشێ ئازێلیک بەرهەمئینانا کێراتینێ ڕێکدئێخیت و بەکتریایێن زیپکان کێم دکەت بێی قاشرکرنەکا بهێز.", how: "د دەستپێکێ دا ڕۆژێ جارەکێ بکاربینە (باشترە ب شەڤ)، پاشان بکە دوو جاران ل دووڤ بەرگەگرتنا پێستی. چینەکا تەنک ل سەر پێستێ هشک بکاربینە. سۆتنەکا کێم تشتەکێ ئاساییە. هەمیشە ل سپێدێ دژە ڕۆژێ بکاربینە." }
    },
    {
        id: 16,
        img: 'assets/16.jpg',
        price: '35,000 IQD',
        en: { name: "Celimax Tightening Booster Cream", desc: "An advanced dermatological tightening cream formulated to enhance dermal elasticity and physically support the pore structure, preventing age-related pore enlargement.", how: "Use daily, AM and PM. Massage a moderate amount onto the face using upward, anti-gravity motions. For optimal lifting effects, combine with a facial massage roller to stimulate microcirculation." },
        ar: { name: "كريم بوستر لشد البشرة من سيليماكس", desc: "كريم جلدي متطور لشد البشرة مركب لتعزيز مرونة الجلد ودعم بنية المسام ماديًا، مما يمنع اتساع المسام المرتبط بالعمر.", how: "يستخدم يوميًا، صباحًا ومساءً. دلكي كمية معتدلة على الوجه بحركات تصاعدية عكس الجاذبية. للحصول على أفضل تأثير لشد البشرة، ادمجيه مع أسطوانة تدليك الوجه لتحفيز الدورة الدموية." },
        ku: { name: "کرێما بوستەر بۆ توندکرنا پێستی ژ سێلیماکس", desc: "کرێمەکا پزیشکی یا توندکەرە کو هاتیە دروستکرن بۆ باشترکرنا نەرمیا پێستی و ڕێگریکردن ل مەزنبوونا کونیلکان ب سەدەما چوونە تەمەنێ دا.", how: "ڕۆژانە بکاربینە، سپێدە و شەڤ. بڕەکا گونجای ل سەر دەموچاڤان بەرەڤ سەرڤە (دژی کێشکرنا زەڤیێ) مەساج بکە. بۆ باشترین ئەنجامێ توندکرنێ، ل گەل ئامێرێ مەساجا دەموچاڤان بکاربینە بۆ زێدەکرنا سوڕا خوینێ." }
    },
    {
        id: 17,
        img: 'assets/17.jpg',
        price: '35,000 IQD',
        en: { name: "Celimax Retinol Shot Tightening Serum", desc: "A clinically potent Vitamin A derivative (Retinol) serum designed to accelerate cellular turnover, stimulate collagen neogenesis, and reverse signs of photoaging and fine rhytides.", how: "Use ONLY in the PM. Apply a pea-sized amount to completely dry skin 2-3 times a week initially, gradually increasing frequency. Follow with a rich barrier cream. Daily use of SPF 50+ is strictly mandatory." },
        ar: { name: "سيروم ريتينول شوت لشد البشرة من سيليماكس", desc: "سيروم مشتق من فيتامين أ (ريتينول) قوي سريريًا مصمم لتسريع تجديد الخلايا، وتحفيز إنتاج الكولاجين، وعكس علامات الشيخوخة الضوئية والتجاعيد الدقيقة.", how: "يستخدم في المساء فقط. ضعي كمية بحجم حبة البازلاء على بشرة جافة تمامًا 2-3 مرات في الأسبوع في البداية، وزيدي التكرار تدريجيًا. اتبعيه بكريم حاجز غني. الاستخدام اليومي لـ SPF 50+ إلزامي تمامًا." },
        ku: { name: "سیرومێ ڕێتینۆل شۆت بۆ توندکرنا پێستی ژ سێلیماکس", desc: "سیرومەکێ پزیشکی یێ بهێز ژ ڤیتامین A (ڕێتینۆل) کو هاتیە دروستکرن بۆ زوو نویکرنا خانەیان، زێدەکرنا کۆلاجینی، و نەهێلانا نیشانێن پیربوونێ.", how: "بتنێ ب شەڤ بکاربینە. بڕەکا ب قەدەر دەنکەکێ نۆکێ ل سەر پێستەکێ ب تەمامی هشک بکاربینە، د دەستپێکێ دا ٢-٣ جارا د حەفتیێ دا، و هێدی هێدی زێدە بکە. پشتی وێ کرێمەکا شێدارکەر بکاربینە. بکارئینانا ڕۆژانە یا دژە ڕۆژا SPF 50+ گەلەک یا پێویستە." }
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

function wrapWordsWithAOS(text) {
    return text.split(' ').map((word, i) => {
        return `<span class="inline-block" data-aos="fade-up" data-aos-delay="${i * 50}" data-aos-offset="0">${word}</span>`;
    }).join(' ');
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
                    <h3 class="text-xl md:text-3xl font-black mb-3 flex flex-wrap gap-x-2 dark:text-white">${wrapWordsWithAOS(pData.name)}</h3>
                    
                    <button onclick="document.getElementById('howToUse-${p.id}').classList.toggle('hidden')" class="mb-4 text-xs font-semibold border border-gray-300 dark:border-gray-700 rounded-full px-3 py-1.5 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 flex items-center gap-2 w-fit">
                        <i class="fas fa-magic"></i> ${t.howToUse}
                    </button>
                    <div id="howToUse-${p.id}" class="hidden mb-4 p-3 bg-gray-100 dark:bg-cyan-950 dark:text-cyan-50 rounded-xl text-xs md:text-sm leading-relaxed border-l-4 border-black dark:border-cyan-400 shadow-inner">
                        ${pData.how}
                    </div>

                    <p class="text-base md:text-lg font-bold mb-3 md:mb-4 text-yellow-600 dark:text-yellow-400">${p.price}</p>
                    <p class="text-sm md:text-base opacity-80 mb-5 md:mb-8 leading-relaxed max-w-xl">${pData.desc}</p>
                    <button onclick="h_send('${pData.name}', '${p.price}')" class="buy-btn border-2 border-current px-5 py-2.5 md:px-6 md:py-3 text-xs md:text-sm uppercase font-bold tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">
                        ${t.orderBtn}
                    </button>
                </div>
            </div>
        `;
    }).join('');
    
    // Refresh animations for newly added elements
    setTimeout(() => {
        AOS.refresh();
    }, 100);
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