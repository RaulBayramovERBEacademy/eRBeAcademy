// Auth Page Lazy Loader
class AuthLoader {
    constructor() {
        this.isLoading = false;
        this.authPageLoaded = false;
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        // Only handle user icon for desktop (sign-in-btn and sign-up-btn don't exist in HTML)
        const userIcon = document.getElementById('user_icon');

        if (userIcon) {
            userIcon.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'auth.html?tab=login';
            });
        }

        // Add click handler for cart and wishlist icons
        const cartIcon = document.getElementById('cart_icon');
        const wishlistIcon = document.getElementById('wishlist_icon');

        if (cartIcon) {
            cartIcon.addEventListener('click', (e) => {
                // Cart functionality - not auth related
                console.log('Cart clicked');
            });
        }

        if (wishlistIcon) {
            wishlistIcon.addEventListener('click', (e) => {
                // Wishlist functionality - not auth related
                console.log('Wishlist clicked');
            });
        }

        // Mobile menu auth buttons (will be set up when mobile menu is created)
        this.setupMobileAuthButtons();
    }

    setupMobileAuthButtons() {
        // Use MutationObserver to watch for mobile menu creation
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    const mobileMenu = document.querySelector('.mobile-menu');
                    if (mobileMenu && !mobileMenu.hasAttribute('data-auth-setup')) {
                        this.setupMobileMenuButtons(mobileMenu);
                        mobileMenu.setAttribute('data-auth-setup', 'true');
                    }
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    setupMobileMenuButtons(mobileMenu) {
        const mobileSignInBtn = mobileMenu.querySelector('.sign-in');
        const mobileSignUpBtn = mobileMenu.querySelector('.sign-up');

        if (mobileSignInBtn) {
            mobileSignInBtn.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'auth.html?tab=login';
            });
        }

        if (mobileSignUpBtn) {
            mobileSignUpBtn.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'auth.html?tab=register';
            });
        }
    }

    async loadAuthPage(tab = 'login') {
        if (this.isLoading) return;

        this.isLoading = true;
        this.showLoadingState();

        try {
            // Check if we're already on the auth page
            if (window.location.pathname.includes('auth.html')) {
                this.switchToTab(tab);
                this.hideLoadingState();
                return;
            }

            // Direct navigation to auth page
            setTimeout(() => {
                window.location.href = `auth.html?tab=${tab}`;
            }, 500); // Small delay to show loading state
            
        } catch (error) {
            console.error('Error loading auth page:', error);
            this.showError('Failed to load authentication page. Please try again.');
        } finally {
            this.isLoading = false;
            this.hideLoadingState();
        }
    }


    switchToTab(tab) {
        // If we're already on the auth page, just switch tabs
        if (typeof initializeAuthPage === 'function') {
            const authManager = initializeAuthPage();
            if (authManager && authManager.switchTab) {
                authManager.switchTab(tab);
            }
        }
    }

    showLoadingState() {
        // Create loading overlay
        const loadingOverlay = document.createElement('div');
        loadingOverlay.id = 'auth-loading-overlay';
        loadingOverlay.innerHTML = `
            <div class="auth-loading-content">
                <div class="auth-loading-spinner">
                    <div class="spinner"></div>
                </div>
                <p>Loading authentication page...</p>
            </div>
        `;
        
        // Add loading styles
        const loadingStyles = `
            #auth-loading-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                backdrop-filter: blur(5px);
            }
            .auth-loading-content {
                text-align: center;
                color: white;
            }
            .auth-loading-spinner {
                margin-bottom: 1rem;
            }
            .spinner {
                width: 40px;
                height: 40px;
                border: 4px solid rgba(255, 255, 255, 0.3);
                border-top: 4px solid white;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin: 0 auto;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = loadingStyles;
        document.head.appendChild(styleSheet);
        
        document.body.appendChild(loadingOverlay);
    }

    hideLoadingState() {
        const loadingOverlay = document.getElementById('auth-loading-overlay');
        if (loadingOverlay) {
            loadingOverlay.remove();
        }
    }

    showError(message) {
        // Create error notification
        const errorDiv = document.createElement('div');
        errorDiv.className = 'auth-error-notification';
        errorDiv.innerHTML = `
            <div class="error-content">
                <i class="fa-solid fa-exclamation-triangle"></i>
                <span>${message}</span>
                <button onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;
        
        // Add error styles
        const errorStyles = `
            .auth-error-notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: #ef4444;
                color: white;
                padding: 1rem;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                z-index: 10001;
                animation: slideInRight 0.3s ease-out;
            }
            .error-content {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            .error-content button {
                background: none;
                border: none;
                color: white;
                font-size: 1.2rem;
                cursor: pointer;
                margin-left: 0.5rem;
            }
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = errorStyles;
        document.head.appendChild(styleSheet);
        
        document.body.appendChild(errorDiv);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (errorDiv.parentElement) {
                errorDiv.remove();
            }
        }, 5000);
    }
}

// Initialize auth loader when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AuthLoader();
});
