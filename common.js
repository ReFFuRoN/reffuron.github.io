// ============================================
// REFFURON WEB SİTESİ - ORTAK JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Sayfa yolunu tespit et (ana klasör mü, alt klasör mü?)
    const isSubFolder = window.location.pathname.includes('/games/');
    const pathPrefix = isSubFolder ? '../' : '';
    
    // 1. Video Arkaplanı Otomatik Ekle
    const videoHTML = `
        <div class="video-background">
            <video autoplay muted loop playsinline>
                <source src="${pathPrefix}videos/background.mp4" type="video/mp4">
            </video>
        </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', videoHTML);
    
    // 2. Navigasyon Menüsünü Otomatik Ekle
    const navHTML = `
        <nav>
            <a href="${pathPrefix}index.html">Ana Sayfa</a>
            <a href="${pathPrefix}hakkimda.html">Hakkımda</a>
            <a href="${pathPrefix}iletisim.html">İletişim</a>
            <a href="${pathPrefix}destek.html">💝 Destek Ol</a>
        </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navHTML);
    
});
