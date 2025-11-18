/**
 * GDPR Cookie Consent Banner with Granular Controls
 * Handles cookie consent with separate categories and withdrawal mechanism
 */

(function() {
    'use strict';

    const COOKIE_CONSENT_KEY = 'gamelyhub_cookie_consent';
    const COOKIE_CONSENT_VERSION = '2.0';
    const CONSENT_EXPIRY_DAYS = 365;

    // Cookie categories
    const COOKIE_CATEGORIES = {
        necessary: {
            name: 'Necessary',
            description: 'Essential cookies required for the website to function properly. These cannot be disabled.',
            required: true,
            enabled: true
        },
        analytics: {
            name: 'Analytics',
            description: 'Help us understand how visitors interact with our website by collecting and reporting information anonymously.',
            required: false,
            enabled: false
        },
        marketing: {
            name: 'Marketing',
            description: 'Used to deliver personalized advertisements and track campaign performance.',
            required: false,
            enabled: false
        }
    };

    // Get consent data
    function getConsentData() {
        const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (!consent) return null;
        
        try {
            const consentData = JSON.parse(consent);
            // Check if consent is still valid (not expired)
            if (consentData.expiry && new Date(consentData.expiry) < new Date()) {
                return null;
            }
            return consentData;
        } catch (e) {
            return null;
        }
    }

    // Check if consent has been given for a specific category
    function hasConsent(category) {
        const consentData = getConsentData();
        if (!consentData) return false;
        
        if (category === 'necessary') return true; // Always enabled
        
        if (consentData.version === '1.0') {
            // Legacy: old consent format (all or nothing)
            return consentData.consent === true;
        }
        
        return consentData.categories && consentData.categories[category] === true;
    }

    // Save consent with granular categories
    function saveConsent(categories) {
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + CONSENT_EXPIRY_DAYS);
        
        const consentData = {
            version: COOKIE_CONSENT_VERSION,
            date: new Date().toISOString(),
            expiry: expiryDate.toISOString(),
            categories: {
                necessary: true, // Always enabled
                analytics: categories.analytics || false,
                marketing: categories.marketing || false
            }
        };
        
        localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
        
        // Trigger custom event for other scripts
        window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: consentData }));
    }

    // Withdraw all consent
    function withdrawConsent() {
        localStorage.removeItem(COOKIE_CONSENT_KEY);
        
        // Clear Google Analytics cookies
        if (window.gtag) {
            // Disable Google Analytics
            window.gtag('consent', 'update', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied'
            });
        }
        
        // Remove tracking scripts
        const gtagScript = document.querySelector('script[src*="googletagmanager"]');
        if (gtagScript) gtagScript.remove();
        
        const adsenseScript = document.querySelector('script[src*="adsbygoogle"]');
        if (adsenseScript) adsenseScript.remove();
        
        // Clear dataLayer
        if (window.dataLayer) {
            window.dataLayer = [];
        }
        
        // Trigger custom event
        window.dispatchEvent(new CustomEvent('cookieConsentWithdrawn'));
    }

    // Load Google Analytics only if analytics consent given
    function loadAnalytics() {
        if (!hasConsent('analytics')) return;
        
        if (!window.gtag) {
            const gtagScript = document.createElement('script');
            gtagScript.async = true;
            gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-BTFC9DNWHW';
            document.head.appendChild(gtagScript);
            
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Set consent mode
            gtag('consent', 'default', {
                'analytics_storage': hasConsent('analytics') ? 'granted' : 'denied',
                'ad_storage': hasConsent('marketing') ? 'granted' : 'denied'
            });
            
            gtag('config', 'G-BTFC9DNWHW');
            window.gtag = gtag;
        } else {
            // Update consent if already loaded
            window.gtag('consent', 'update', {
                'analytics_storage': hasConsent('analytics') ? 'granted' : 'denied'
            });
        }
    }

    // Load AdSense only if marketing consent given
    function loadAdSense() {
        if (!hasConsent('marketing')) return;
        
        if (!document.querySelector('script[src*="adsbygoogle"]')) {
            const adsenseScript = document.createElement('script');
            adsenseScript.async = true;
            adsenseScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1403172463870891';
            adsenseScript.crossOrigin = 'anonymous';
            document.head.appendChild(adsenseScript);
        }
    }

    // Load tracking scripts based on consent
    function loadTrackingScripts() {
        loadAnalytics();
        loadAdSense();
    }

    // Create cookie consent banner
    function createCookieBanner() {
        // Don't show if consent already given
        const consentData = getConsentData();
        if (consentData) {
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
        
        const cookiePolicyLink = window.location.pathname.includes('/pages/') 
            ? '../pages/cookie-policy.html' 
            : 'pages/cookie-policy.html';

        banner.innerHTML = `
            <div class="cookie-consent-content">
                <div class="cookie-consent-text">
                    <h4><i class="fas fa-cookie-bite me-2"></i>Cookie Consent</h4>
                    <p>
                        We use cookies to enhance your browsing experience, serve personalized content, 
                        and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. 
                        <a href="${privacyPolicyLink}" target="_blank" class="cookie-link">Privacy Policy</a> | 
                        <a href="${cookiePolicyLink}" target="_blank" class="cookie-link">Cookie Policy</a>
                    </p>
                </div>
                <div class="cookie-consent-buttons">
                    <button type="button" class="btn btn-outline-secondary btn-sm" id="cookie-consent-customize">
                        <i class="fas fa-cog me-1"></i>Customize
                    </button>
                    <button type="button" class="btn btn-outline-secondary btn-sm" id="cookie-consent-necessary">
                        <i class="fas fa-ban me-1"></i>Necessary Only
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
            saveConsent({ analytics: true, marketing: true });
            hideBanner();
            loadTrackingScripts();
        });

        // Necessary only button
        document.getElementById('cookie-consent-necessary').addEventListener('click', function() {
            saveConsent({ analytics: false, marketing: false });
            hideBanner();
        });

        // Customize button - redirect to preferences page
        document.getElementById('cookie-consent-customize').addEventListener('click', function() {
            const preferencesLink = window.location.pathname.includes('/pages/') 
                ? 'cookie-preferences.html' 
                : 'pages/cookie-preferences.html';
            window.location.href = preferencesLink;
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

    // Expose functions for other scripts
    window.hasCookieConsent = hasConsent;
    window.saveCookieConsent = saveConsent;
    window.withdrawCookieConsent = withdrawConsent;
    window.getCookieConsentData = getConsentData;
    window.COOKIE_CATEGORIES = COOKIE_CATEGORIES;
})();
