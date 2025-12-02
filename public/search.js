function openSearchModal(e) {
    if (e) e.preventDefault();
    const modal = document.getElementById('searchModal');
    if (modal) {
        modal.classList.add('active');
        setTimeout(() => {
            const input = document.getElementById('searchInput');
            if (input) input.focus();
        }, 100);
        document.body.style.overflow = 'hidden';
    }
}

function closeSearchModal() {
    const modal = document.getElementById('searchModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function setSearch(term) {
    const input = document.getElementById('searchInput');
    if (input) {
        input.value = term;
        input.dispatchEvent(new Event('input'));
        input.focus();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Close on escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeSearchModal();
    });

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function (e) {
            const query = e.target.value.toLowerCase().trim();
            const resultsContainer = document.getElementById('searchResults');

            if (!resultsContainer) return;

            if (query.length < 1) {
                resultsContainer.innerHTML = `
                    <div class="search-initial-state">
                        <i class="fas fa-gamepad fa-3x mb-3 text-muted"></i>
                        <p>Type to find your favorite games</p>
                        <div class="search-tags mt-3">
                            <!-- Categories removed -->
                        </div>
                    </div>`;
                return;
            }

            // Filter games
            let results = [];
            if (typeof gamesData !== 'undefined') {
                results = Object.values(gamesData).filter(game => {
                    if (!game || typeof game !== 'object' || Array.isArray(game)) return false;
                    if (!game.title) return false;

                    const titleMatch = game.title.toLowerCase().includes(query);
                    const descMatch = game.description && game.description.toLowerCase().includes(query);
                    const catMatch = game.categories && game.categories.some(cat => cat.toLowerCase().includes(query));

                    return titleMatch || descMatch || catMatch;
                });
            }

            if (results.length === 0) {
                resultsContainer.innerHTML = `
                    <div class="search-no-results">
                        <i class="fas fa-ghost fa-3x mb-3 text-muted"></i>
                        <p>No games found matching "${e.target.value}"</p>
                    </div>`;
                return;
            }

            // Determine paths based on location
            const isRoot = window.location.pathname === '/' || window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
            const isInPages = window.location.pathname.includes('/pages/');

            let html = '<div class="search-results-list">';
            results.forEach(game => {
                // Handle relative paths for images
                let thumb = game.thumbnail;

                // If in root, remove leading ../ if present
                if (isRoot && thumb.startsWith('../')) {
                    thumb = thumb.substring(3);
                }
                // If in pages, thumb (starting with ../) is already correct
                // If thumb doesn't start with ../ and we are in pages, we might need to add it?
                // gamesData seems to have ../ hardcoded, so it should be fine for pages.

                // Handle link paths
                let link = `pages/game_detail_play.html?game=${game.id}`;
                if (isInPages) {
                    link = `game_detail_play.html?game=${game.id}`;
                }

                html += `
                    <a href="${link}" class="search-result-item" onclick="closeSearchModal()">
                        <div class="search-result-thumb">
                            <img src="${thumb}" alt="${game.title}" onerror="this.src='${isRoot ? 'public/images/logo.png' : '../public/images/logo.png'}'">
                        </div>
                        <div class="search-result-info">
                            <div class="search-result-title">
                                ${game.title}
                                ${game.rating ? `<span class="search-result-rating"><i class="fas fa-star text-warning"></i> ${game.rating}</span>` : ''}
                            </div>
                            <div class="search-result-desc">${game.description || ''}</div>
                        </div>
                        <div class="search-result-action">
                            <i class="fas fa-play-circle"></i>
                        </div>
                    </a>
                `;
            });
            html += '</div>';
            resultsContainer.innerHTML = html;
        });
    }
});
