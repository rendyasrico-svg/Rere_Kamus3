// ===================== SCRIPT UTAMA =====================
document.addEventListener('DOMContentLoaded', () => {
    // ===================== SPLASH SCREEN =====================
    const splashScreen = document.getElementById('splashScreen');
    const SPLASH_MIN_DURATION = 4000; // ms, samain dengan durasi animasi loading bar

    function hideSplash() {
        if (!splashScreen) return;
        splashScreen.classList.add('fade-out');
        setTimeout(() => {
            splashScreen.remove();
        }, 500); // samain dengan durasi transition CSS
    }

    setTimeout(hideSplash, SPLASH_MIN_DURATION);

    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const resultContainer = document.getElementById('resultContainer');
    const notFound = document.getElementById('notFound');
    const welcomeMessage = document.getElementById('welcomeMessage');

    // Guard: pastikan data.js sudah ter-load
    if (typeof dictionaryData === 'undefined') {
        welcomeMessage.innerHTML = '<p>Gagal memuat database kamus.</p>';
        return;
    }

    function resetToWelcome() {
        resultContainer.classList.add('hidden');
        notFound.classList.add('hidden');
        welcomeMessage.classList.remove('hidden');
    }

    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();

        if (query === '') {
            resetToWelcome();
            return;
        }

        const results = dictionaryData.filter(item =>
            item.word.toLowerCase().includes(query) ||
            item.meaning.toLowerCase().includes(query)
        );

        welcomeMessage.classList.add('hidden');
        notFound.classList.add('hidden');
        resultContainer.classList.add('hidden');

        if (results.length > 0) {
            displayResults(results);
            resultContainer.classList.remove('hidden');
        } else {
            notFound.classList.remove('hidden');
        }
    }

    function displayResults(results) {
        resultContainer.innerHTML = '';
        const query = searchInput.value.trim().toLowerCase();

        results.forEach(item => {
            const div = document.createElement('div');
            div.className = 'result-item';

            const isEnglish = item.word.toLowerCase().includes(query);
            const direction = isEnglish ? 'EN ➜ ID' : 'ID ➜ EN';

            const displayedWord = isEnglish ? item.word : item.meaning;
            const displayedMeaning = isEnglish ? item.meaning : item.word;

            div.innerHTML = `
                <div class="result-word">
                    <span>${displayedWord}</span>
                    <span class="lang-badge">${direction}</span>
                </div>
                <div class="result-meaning">
                    <strong>${isEnglish ? 'Arti' : 'Kata'}:</strong>
                    ${displayedMeaning}
                </div>
                <div class="result-example">${item.example}</div>
            `;
            resultContainer.appendChild(div);
        });
    }

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
    searchInput.addEventListener('input', performSearch);

    // ===================== HAMBURGER MENU =====================
    const menuBtn = document.getElementById('menuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const sideMenu = document.getElementById('sideMenu');
    const menuOverlay = document.getElementById('menuOverlay');

    function openMenu() {
        sideMenu.classList.add('active');
        menuOverlay.classList.add('active');
    }

    function closeMenu() {
        sideMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
    }

    menuBtn.addEventListener('click', openMenu);
    closeMenuBtn.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);

    window.addEventListener('popstate', () => {
        if (sideMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // ===================== MODE GELAP / TERANG =====================
    const themeToggle = document.getElementById('themeToggle');
    const themeIconSun = document.getElementById('themeIconSun');
    const themeIconMoon = document.getElementById('themeIconMoon');
    const STORAGE_KEY = 'rere-kamus-theme';

    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.setAttribute('aria-checked', 'true');
            themeIconSun.classList.add('hidden');
            themeIconMoon.classList.remove('hidden');
        } else {
            document.documentElement.removeAttribute('data-theme');
            themeToggle.setAttribute('aria-checked', 'false');
            themeIconSun.classList.remove('hidden');
            themeIconMoon.classList.add('hidden');
        }
    }

    let savedTheme = null;
    try {
        savedTheme = localStorage.getItem(STORAGE_KEY);
    } catch (e) {}

    if (!savedTheme) {
        savedTheme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
            ? 'dark'
            : 'light';
    }
    applyTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        applyTheme(newTheme);
        try {
            localStorage.setItem(STORAGE_KEY, newTheme);
        } catch (e) {}
    });

    // ===================== MENU LAINNYA =====================
    const menuAbout = document.getElementById('menuAbout');
    const menuShare = document.getElementById('menuShare');

    // ===================== MODAL TENTANG APLIKASI =====================
    const aboutModal = document.getElementById('aboutModal');
    const aboutOverlay = document.getElementById('aboutOverlay');
    const closeAboutBtn = document.getElementById('closeAboutBtn');

    function openAboutModal() {
        aboutModal.classList.add('active');
        aboutOverlay.classList.add('active');
    }

    function closeAboutModal() {
        aboutModal.classList.remove('active');
        aboutOverlay.classList.remove('active');
    }

    menuAbout.addEventListener('click', () => {
        closeMenu();
        openAboutModal();
    });

    closeAboutBtn.addEventListener('click', closeAboutModal);
    aboutOverlay.addEventListener('click', closeAboutModal);

    // Tombol back Android (WebView) menutup modal dulu, sebelum menu/app
    window.addEventListener('popstate', () => {
        if (aboutModal.classList.contains('active')) {
            closeAboutModal();
        }
    });

    menuShare.addEventListener('click', () => {
        closeMenu();
        if (navigator.share) {
            navigator.share({
                title: 'Rere Kamus',
                text: 'Coba aplikasi Rere Kamus, kamus Inggris-Indonesia offline!'
            }).catch(() => {});
        }
    });
});
