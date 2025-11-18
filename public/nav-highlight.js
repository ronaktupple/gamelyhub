/**
 * Navigation Highlight Script
 * Automatically highlights the active menu item based on the current page URL
 */
(function() {
    'use strict';

    /**
     * Get the current page path for matching
     */
    function getCurrentPath() {
        const path = window.location.pathname;
        const hash = window.location.hash;
        const search = window.location.search;
        
        // Remove leading/trailing slashes and normalize
        let normalizedPath = path.replace(/^\/+|\/+$/g, '');
        
        // Handle index.html or root
        if (normalizedPath === '' || normalizedPath === 'index.html' || normalizedPath.endsWith('/')) {
            return '/';
        }
        
        // Extract filename from path
        const filename = normalizedPath.split('/').pop();
        
        // Remove .html extension if present
        const pageName = filename.replace(/\.html$/, '');
        
        return pageName;
    }

    /**
     * Get the href value from a nav link and normalize it for comparison
     */
    function normalizeHref(href) {
        if (!href) return '';
        
        // Handle absolute URLs
        try {
            const url = new URL(href, window.location.origin);
            const path = url.pathname.replace(/^\/+|\/+$/g, '');
            const pageName = path.split('/').pop().replace(/\.html$/, '');
            
            // Special case for root/home
            if (path === '' || path === 'index.html' || pageName === '' || pageName === 'index') {
                return '/';
            }
            
            return pageName;
        } catch (e) {
            // Handle relative URLs
            let normalized = href;
            
            // Remove leading ../ or ./
            normalized = normalized.replace(/^\.\.\/|^\.\/|^\/+/g, '');
            
            // Remove .html extension
            normalized = normalized.replace(/\.html$/, '');
            
            // Handle paths like "pages/casino-games" -> "casino-games"
            if (normalized.includes('/')) {
                normalized = normalized.split('/').pop();
            }
            
            // Special case for root/home
            if (normalized === '' || normalized === 'index' || normalized === '/') {
                return '/';
            }
            
            return normalized;
        }
    }

    /**
     * Highlight the active navigation item
     */
    function highlightActiveNav() {
        const currentPath = getCurrentPath();
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        
        // Remove active class from all nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Find and highlight the matching nav link
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            const normalizedHref = normalizeHref(href);
            
            // Match current path with nav link (exact match)
            if (normalizedHref === currentPath) {
                link.classList.add('active');
                return;
            }
            
            // Special handling for home page
            if (currentPath === '/' && (normalizedHref === '/' || normalizedHref === '' || normalizedHref === 'index')) {
                link.classList.add('active');
                return;
            }
            
            // Special handling for casino games pages
            // If we're on casino-games or casino-game-detail, highlight Casino Games link
            if ((currentPath === 'casino-games' || currentPath === 'casino-game-detail') && 
                normalizedHref === 'casino-games') {
                link.classList.add('active');
                return;
            }
            
            // Special handling for game detail pages - highlight Games (home)
            // Game detail pages should highlight the "Games" (home) link
            if ((currentPath === 'game_detail_play' || currentPath === 'game-detail-play') && 
                (normalizedHref === '/' || normalizedHref === '' || normalizedHref === 'index')) {
                link.classList.add('active');
                return;
            }
        });
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', highlightActiveNav);
    } else {
        // DOM is already ready
        highlightActiveNav();
    }

    // Also run after a short delay to ensure all scripts are loaded
    setTimeout(highlightActiveNav, 100);
})();

