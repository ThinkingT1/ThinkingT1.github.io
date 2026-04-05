// ==========================================
// 1. DICTIONARY & BILINGUAL TOGGLE
// ==========================================
const translations = {
    en: {
        subtitle: "E-Commerce & Digital Marketing Specialist",
        downloadCv: "Download CV",
        contactMe: "Contact Me",
        aboutTitle: "About Me",
        objTitle: "Objectives",
        objText: "Being a senior student majoring in E-Commerce at UIT-VNU, I've developed a strong interest in the psychological side of digital platforms. After spending time building practical projects with Flutter and Firebase, I realized I want to move beyond just technical execution to understand the \"why\" behind user actions. I am particularly interested in exploring influencer marketing and social commerce.",
        focusTitle: "Professional Focus",
        focusText: "Building on my technical background, my professional focus lies at the intersection of digital marketing, consumer psychology, and business strategy. I am eager to explore how data-driven marketing, influencer dynamics, and emerging social commerce trends impact consumer decision-making and drive sustainable business growth.",
        hobbiesTitle: "Interests & Hobbies",
        hobby1: "Video Editing (CapCut, Picsart)",
        hobby2: "MOBA Enthusiast",
        hobby3: "Anime & Manga",
        hobby4: "Digital Strategy",
        funFactTag: "Fun Fact:",
        funFactText: "I use a lot of emojis in my daily texting :3",
        eduTitle: "Education",
        uniDegree: "B.S. in E-Commerce & Information Systems",
        uniName: "University of Information Technology (UIT) - VNU HCMC",
        gpaTag: "GPA:",
        hsDegree: "High School Diploma",
        skillsTitle: "Skills & Expertise",
        skillDev: "Development",
        skillEcom: "E-Commerce",
        skillEcomText: "Website Architecture, Social Commerce, Marketing Strategy",
        skillSoft: "Soft Skills",
        skillSoftText: "Team Collaboration, Decision-Making",
        currencyTitle: "<i class=\"fas fa-exchange-alt\"></i> Live Currency Converter",
        currencyDesc: "A real-time E-Commerce utility fetching live exchange rates via API.",
        convertBtn: "Convert",
        certTitle: "Certifications",
        certEng: "English Proficiency",
        certJap: "Japanese Proficiency",
        projTitle: "Featured Projects",
        proj1Title: "Sunshade E-Commerce Website",
        proj1Text: "Acted as the Website Front-End Developer and led Keyword Planning for a team of 6. Created the website and optimized the search engine utilizing Google Search Console, Google Analytics 4, Google Keyword Planner, and Google Looker Studio.",
        proj2Title: "Social Commerce via TikTok Live",
        proj2Text: "Created and managed TikTok content for social commerce, analyzing the performance of each video and optimizing content strategy based on data insights and user engagement.",
        proj3Title: "E-Commerce Mobile App",
        proj3Text: "Developed a cross-platform mobile application with full e-commerce functionality. Implemented features like product browsing, state management, shopping cart, and secure user authentication.",
        expTitle: "Working Experience",
        jobTitle: "Technical Marketing & Web Operations Lead (Intern)",
        jobTask1Tag: "System Administration:",
        jobTask1Text: "Created and managed a website using FastPanel, Cloudflare, and WordPress from scratch.",
        jobTask2Tag: "Performance & SEO:",
        jobTask2Text: "Engineered site structures and server-side caching to ensure optimal load speeds and search visibility.",
        jobTask3Tag: "Content Strategy:",
        jobTask3Text: "Executed a short-form video strategy (60+ assets) on TikTok for ads to increase brand recognition and engagement.",
        footerText: "Built with HTML, CSS & JS.",
        apiGreeting: "👋 Hello visitor from ", 
        contactSectionTitle: "Get In Touch",
        contactSectionDesc: "Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!",
        formName: "Your Name",
        formEmail: "Your Email Address",
        formMessage: "How can I help you?",
        formSubmit: "Send Message",
        analyticsTitle: "Live Portfolio Analytics",
    },
    vn: {
        subtitle: "Chuyên viên Thương mại Điện tử & Digital Marketing",
        downloadCv: "Tải CV",
        contactMe: "Liên hệ",
        aboutTitle: "Giới thiệu",
        objTitle: "Mục tiêu Nghề nghiệp",
        objText: "Là sinh viên năm cuối chuyên ngành Thương mại Điện tử tại UIT-VNU, tôi có niềm đam mê mãnh liệt với khía cạnh tâm lý học trên các nền tảng kỹ thuật số. Sau thời gian thực hiện các dự án thực tế với Flutter và Firebase, tôi nhận ra mình muốn tiến xa hơn việc chỉ triển khai kỹ thuật thuần túy, để thực sự hiểu rõ 'lý do' đằng sau hành vi của người dùng. Tôi đặc biệt hứng thú với việc khám phá Influencer Marketing và Social Commerce.",
        focusTitle: "Trọng tâm Chuyên môn",
        focusText: "Dựa trên nền tảng kỹ thuật sẵn có, sự tập trung của tôi nằm ở điểm giao thoa giữa Digital Marketing, tâm lý học hành vi người tiêu dùng và chiến lược kinh doanh. Tôi mong muốn khám phá cách thức tiếp thị dựa trên dữ liệu (data-driven), sức ảnh hưởng của KOL/KOC và các xu hướng Social Commerce đang tác động đến quyết định mua hàng và thúc đẩy tăng trưởng kinh doanh bền vững.",
        hobbiesTitle: "Sở thích Cá nhân",
        hobby1: "Edit Video (CapCut, Picsart)",
        hobby2: "Đam mê Game MOBA",
        hobby3: "Anime & Manga",
        hobby4: "Chiến lược Digital",
        funFactTag: "Sự thật Thú vị:",
        funFactText: "Tôi dùng rất nhiều emoji khi nhắn tin mỗi ngày :3",
        eduTitle: "Học vấn",
        uniDegree: "Cử nhân Thương mại Điện tử & Hệ thống Thông tin",
        uniName: "Trường Đại học Công nghệ Thông tin (UIT) - ĐHQG TP.HCM",
        gpaTag: "Điểm trung bình:",
        hsDegree: "Bằng Tốt nghiệp THPT",
        skillsTitle: "Kỹ năng & Chuyên môn",
        skillDev: "Phát triển Web/App",
        skillEcom: "Thương mại Điện tử",
        skillEcomText: "Kiến trúc Website, Social Commerce, Chiến lược Marketing",
        skillSoft: "Kỹ năng Mềm",
        skillSoftText: "Làm việc Nhóm, Ra quyết định dựa trên dữ liệu",
        currencyTitle: "<i class=\"fas fa-exchange-alt\"></i> Chuyển đổi Tiền tệ Trực tiếp",
        currencyDesc: "Tiện ích Thương mại Điện tử xử lý tỷ giá hối đoái theo thời gian thực qua API.",
        convertBtn: "Chuyển đổi",
        certTitle: "Chứng chỉ",
        certEng: "Năng lực Tiếng Anh",
        certJap: "Năng lực Tiếng Nhật",
        projTitle: "Dự án Nổi bật",
        proj1Title: "Website Thương mại Điện tử Sunshade",
        proj1Text: "Đảm nhận vai trò Front-End Developer và dẫn dắt phần Keyword Planning cho nhóm 6 người. Xây dựng website và tối ưu hóa công cụ tìm kiếm sử dụng Google Search Console, GA4, Google Keyword Planner và Looker Studio.",
        proj2Title: "Social Commerce qua TikTok Live",
        proj2Text: "Sáng tạo và quản lý nội dung TikTok cho dự án Social Commerce, phân tích hiệu suất của từng video và tối ưu hóa chiến lược nội dung dựa trên dữ liệu (data insights) và mức độ tương tác của người dùng.",
        proj3Title: "Ứng dụng E-Commerce Di động",
        proj3Text: "Phát triển ứng dụng di động đa nền tảng với đầy đủ tính năng thương mại điện tử. Triển khai các tính năng như tìm kiếm sản phẩm, quản lý trạng thái, giỏ hàng và xác thực người dùng bảo mật.",
        expTitle: "Kinh nghiệm Làm việc",
        jobTitle: "Trưởng nhóm Technical Marketing & Vận hành Web (Thực tập sinh)",
        jobTask1Tag: "Quản trị Hệ thống:",
        jobTask1Text: "Khởi tạo và quản lý website từ con số không sử dụng FastPanel, Cloudflare và WordPress.",
        jobTask2Tag: "Hiệu suất & SEO:",
        jobTask2Text: "Thiết lập cấu trúc trang web và bộ nhớ đệm (caching) phía máy chủ để đảm bảo tốc độ tải trang và khả năng hiển thị trên công cụ tìm kiếm đạt mức tối ưu.",
        jobTask3Tag: "Chiến lược Nội dung:",
        jobTask3Text: "Triển khai chiến lược video dạng ngắn (hơn 60 video) trên TikTok để chạy quảng cáo, giúp tăng độ nhận diện thương hiệu và tương tác.",
        footerText: "Được xây dựng bằng HTML, CSS & JS.",
        apiGreeting: "👋 Chào người bạn đến từ ",
        contactSectionTitle: "Liên Hệ",
        contactSectionDesc: "Dù bạn có câu hỏi, đề xuất dự án hay chỉ muốn kết nối, mình sẽ cố gắng phản hồi bạn sớm nhất có thể!",
        formName: "Tên của bạn",
        formEmail: "Địa chỉ Email",
        formMessage: "Mình có thể giúp gì cho bạn?",
        formSubmit: "Gửi Tin Nhắn",
        analyticsTitle: "Phân tích Dữ liệu Trực tiếp",
    }
};

const langToggleBtn = document.getElementById('lang-toggle');
let currentLang = localStorage.getItem('lang') || 'en';
let userCity = ""; // Store the API city globally 

function setLanguage(lang) {
    langToggleBtn.innerText = lang === 'en' ? 'VN' : 'EN';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key]; // Must be innerHTML to render HTML icons inside strings
        }
    });

    subtitleText = translations[lang]['subtitle'];
    const typewriterElement = document.getElementById('typewriter');
    if (typeIndex >= subtitleText.length || typeIndex === 0) {
         typewriterElement.innerHTML = subtitleText;
         typeIndex = subtitleText.length;
    }

    if (userCity !== "") {
        document.getElementById('api-greeting').innerHTML = `${translations[lang]['apiGreeting']} <span style="color: var(--accent);">${userCity}</span>!`;
    }
}

langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'vn' : 'en';
    localStorage.setItem('lang', currentLang);
    setLanguage(currentLang);
    
    // Clear currency result on language switch to prevent mixed languages
    document.getElementById('currency-result').innerHTML = "---";
});

// ==========================================
// 2. LIVE CURRENCY CONVERTER API
// ==========================================
const convertBtn = document.getElementById('convert-btn');
const amountInput = document.getElementById('currency-amount');
const baseSelect = document.getElementById('currency-base');
const targetSelect = document.getElementById('currency-target');
const resultDisplay = document.getElementById('currency-result');

async function convertCurrency() {
    const amount = amountInput.value;
    const base = baseSelect.value;
    const target = targetSelect.value;

    // Validation
    if (amount === '' || amount <= 0) {
        resultDisplay.innerHTML = currentLang === 'en' ? "Please enter a valid amount." : "Vui lòng nhập số tiền hợp lệ.";
        return;
    }

    // Show Loading state
    resultDisplay.innerHTML = '<i class="fas fa-spinner fa-spin"></i>'; 

    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${base}`);
        if (!response.ok) throw new Error("API failed");
        
        const data = await response.json();
        const rate = data.rates[target];
        const convertedAmount = (amount * rate).toFixed(2);

        // Format numbers beautifully (e.g. 1,000,000)
        const locale = currentLang === 'en' ? 'en-US' : 'vi-VN';
        const formattedAmount = new Intl.NumberFormat(locale).format(amount);
        const formattedResult = new Intl.NumberFormat(locale).format(convertedAmount);

        resultDisplay.innerHTML = `${formattedAmount} ${base} = <span style="color: var(--accent);">${formattedResult} ${target}</span>`;
    } catch (error) {
        console.error("Currency API Error:", error);
        resultDisplay.innerHTML = currentLang === 'en' ? "Error fetching rates. Please try again." : "Lỗi tải tỷ giá. Vui lòng thử lại.";
    }
}

convertBtn.addEventListener('click', convertCurrency);

// ==========================================
// 3. IP GEOLOCATION API (GEOJS)
// ==========================================
async function fetchPersonalizedGreeting() {
    const greetingElement = document.getElementById('api-greeting');
    try {
        const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
        if (!response.ok) throw new Error("API request failed");
        const data = await response.json();

        if (data.city) {
            userCity = data.city; 
            greetingElement.innerHTML = `${translations[currentLang]['apiGreeting']} <span style="color: var(--accent);">${userCity}</span>!`;
        } else {
            throw new Error("City not found in data");
        }
    } catch (error) {
        console.warn("Location API blocked. Using fallback.");
        const fallbackText = currentLang === 'en' 
            ? "👋 Welcome to my digital space!" 
            : "👋 Chào mừng bạn đến với portfolio của tôi!";
        greetingElement.innerHTML = fallbackText;
    }
}

// ==========================================
// 4. PERSISTENT THEME TOGGLE
// ==========================================
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', savedTheme);
updateToggleIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleIcon(newTheme);
});

function updateToggleIcon(theme) {
    themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
}

// ==========================================
// 5. BILINGUAL TYPEWRITER EFFECT
// ==========================================
let subtitleText = ""; 
const typewriterElement = document.getElementById('typewriter');
let typeIndex = 0;

function typeWriter() {
    if (typeIndex === 0) typewriterElement.innerHTML = ''; 
    if (typeIndex < subtitleText.length) {
        typewriterElement.innerHTML += subtitleText.charAt(typeIndex);
        typeIndex++;
        setTimeout(typeWriter, 40); 
    }
}

// ==========================================
// 6. SCROLL PROGRESS & BACK TO TOP
// ==========================================
let ticking = false;
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById("scroll-progress").style.width = scrolled + "%";
            
            if (backToTopBtn) {
                if (window.scrollY > 300) {
                    backToTopBtn.style.opacity = '1';
                    backToTopBtn.style.pointerEvents = 'auto';
                } else {
                    backToTopBtn.style.opacity = '0';
                    backToTopBtn.style.pointerEvents = 'none';
                }
            }
            ticking = false;
        });
        ticking = true;
    }
});

// ==========================================
// 7. SCROLL REVEAL OBSERVER
// ==========================================
const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ==========================================
// 8. LIGHTBOX LOGIC
// ==========================================
function openLightbox(src) {
    const modal = document.getElementById("certModal");
    modal.style.display = "block";
    document.getElementById("fullCertImage").src = src;
    document.body.style.overflow = "hidden";
}
function closeLightbox() {
    const modal = document.getElementById("certModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}
document.addEventListener('keydown', (e) => { if (e.key === "Escape") closeLightbox(); });
document.getElementById('certModal').addEventListener('click', function(e) { if (e.target === this) closeLightbox(); });

// ==========================================
// 9. PROJECT SLIDER
// ==========================================
const track = document.getElementById('project-slider');
const slides = Array.from(track.children);
const dotsContainer = document.getElementById('slider-dots');
let slideCurrent = 0; let slideTimer; 

slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
});
const dotsList = Array.from(dotsContainer.children);

function updateProjSlider() {
    track.style.transform = `translateX(-${slideCurrent * 100}%)`;
    dotsList.forEach(dot => dot.classList.remove('active'));
    dotsList[slideCurrent].classList.add('active');
}

function startSlider() {
    slideTimer = setInterval(() => {
        slideCurrent = (slideCurrent + 1) % slides.length;
        updateProjSlider();
    }, 4500); 
}
function stopSlider() { clearInterval(slideTimer); }

document.getElementById('slider-next').addEventListener('click', () => {
    slideCurrent = (slideCurrent + 1) % slides.length;
    updateProjSlider(); stopSlider(); startSlider();
});
document.getElementById('slider-prev').addEventListener('click', () => {
    slideCurrent = (slideCurrent - 1 + slides.length) % slides.length;
    updateProjSlider(); stopSlider(); startSlider();
});
dotsList.forEach(dot => {
    dot.addEventListener('click', (e) => {
        slideCurrent = parseInt(e.target.dataset.index);
        updateProjSlider(); stopSlider(); startSlider();
    });
});
track.addEventListener('mouseenter', stopSlider);
track.addEventListener('mouseleave', startSlider);

// ==========================================
// INITIALIZATION ON LOAD
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    fetchPersonalizedGreeting();
    startSlider();
    setTimeout(typeWriter, 500); 
});

