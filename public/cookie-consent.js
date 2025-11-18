/**
 * GDPR Cookie Consent Banner
 * Handles cookie consent and only loads tracking scripts after user consent
 */

(function() {
    'use strict';

    const COOKIE_CONSENT_KEY = 'gamelyhub_cookie_consent';
    const COOKIE_CONSENT_VERSION = '1.0';
    const CONSENT_EXPIRY_DAYS = 365;

    // Check if consent has been given
    function hasConsent() {
        const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (!consent) return false;
        
        try {
            const consentData = JSON.parse(consent);
            // Check if consent is still valid (not expired)
            if (consentData.expiry && new Date(consentData.expiry) < new Date()) {
                return false;
            }
            return consentData.consent === true;
        } catch (e) {
            return false;
        }
    }

    // Save consent
    function saveConsent(consent) {
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + CONSENT_EXPIRY_DAYS);
        
        const consentData = {
            consent: consent,
            version: COOKIE_CONSENT_VERSION,
            date: new Date().toISOString(),
            expiry: expiryDate.toISOString()
        };
        
        localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
    }

    // Load Google Analytics and AdSense only after consent
    function loadTrackingScripts() {
        if (hasConsent()) {
            // Load Google Analytics
            if (!window.gtag) {
                const gtagScript = document.createElement('script');
                gtagScript.async = true;
                gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-BTFC9DNWHW';
                document.head.appendChild(gtagScript);
                
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-BTFC9DNWHW');
                window.gtag = gtag;
            }

            // Load AdSense
            if (!document.querySelector('script[src*="adsbygoogle"]')) {
                const adsenseScript = document.createElement('script');
                adsenseScript.async = true;
                adsenseScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1403172463870891';
                adsenseScript.crossOrigin = 'anonymous';
                document.head.appendChild(adsenseScript);
            }
        }
    }

    // Create cookie consent banner
    function createCookieBanner() {
        // Don't show if consent already given
        if (hasConsent()) {
            loadTrackingScripts();
            return;
        }

        const banner = document.createElement('div');
        banner.id = 'cookie-consent-banner';
        banner.className = 'cookie-consent-banner';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-label', 'Cookie Consent');
        banner.setAttribute('aria-live', 'polite');

        const privacyPolicyLink = window.location.pathname.includes('/pages/') 
            ? '../pages/privacy.html' 
            : 'pages/privacy.html';

        banner.innerHTML = `
            <div class="cookie-consent-content">
                <div class="cookie-consent-text">
                    <h4><i class="fas fa-cookie-bite me-2"></i>Cookie Consent</h4>
                    <p>
                        We use cookies to enhance your browsing experience, serve personalized content, 
                        and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. 
                        <a href="${privacyPolicyLink}" target="_blank" class="cookie-link">Learn more in our Privacy Policy</a>.
                    </p>
                </div>
                <div class="cookie-consent-buttons">
                    <button type="button" class="btn btn-outline-secondary btn-sm" id="cookie-consent-necessary">
                        <i class="fas fa-cog me-1"></i>Necessary Only
                    </button>
                    <button type="button" class="btn btn-primary btn-sm" id="cookie-consent-accept">
                        <i class="fas fa-check me-1"></i>Accept All
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(banner);

        // Show banner with animation
        setTimeout(() => {
            banner.classList.add('show');
        }, 100);

        // Accept all button
        document.getElementById('cookie-consent-accept').addEventListener('click', function() {
            saveConsent(true);
            hideBanner();
            loadTrackingScripts();
        });

        // Necessary only button
        document.getElementById('cookie-consent-necessary').addEventListener('click', function() {
            saveConsent(false);
            hideBanner();
        });
    }

    // Hide banner
    function hideBanner() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.classList.remove('show');
            setTimeout(() => {
                banner.remove();
            }, 300);
        }
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            createCookieBanner();
            loadTrackingScripts();
        });
    } else {
        createCookieBanner();
        loadTrackingScripts();
    }

    // Expose function to check consent (for other scripts)
    window.hasCookieConsent = hasConsent;
    window.saveCookieConsent = saveConsent;
})();

