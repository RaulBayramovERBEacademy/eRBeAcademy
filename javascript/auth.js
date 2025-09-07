// Authorization Page JavaScript

class AuthManager {
    constructor() {
        this.currentTab = 'login';
        this.init();
    }

    init() {
        this.bindEvents();
        this.setupPasswordStrength();
        this.handleUrlParams();
    }

    bindEvents() {
        // Tab switching
        const tabs = document.querySelectorAll('.auth-tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });

        // Form submissions
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        }
        
        if (registerForm) {
            registerForm.addEventListener('submit', (e) => this.handleRegister(e));
        }

        // Password visibility toggles
        this.setupPasswordToggles();

        // Social auth buttons
        this.setupSocialAuth();

        // Modal close
        const modalClose = document.getElementById('modal-close');
        if (modalClose) {
            modalClose.addEventListener('click', () => this.closeModal());
        }

        // Close modal on outside click
        const modal = document.getElementById('success-modal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal();
                }
            });
        }
    }

    switchTab(tab) {
        if (tab === this.currentTab) return;

        // Update tab buttons
        document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
        document.querySelector(`[data-tab="${tab}"]`).classList.add('active');

        // Update forms
        document.querySelectorAll('.auth-form-container').forEach(f => f.classList.add('hidden'));
        document.getElementById(`${tab}-form`).classList.remove('hidden');

        this.currentTab = tab;
        this.clearErrors();
    }

    setupPasswordToggles() {
        const toggles = document.querySelectorAll('.password-toggle');
        toggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                const input = e.target.closest('.input-group').querySelector('input');
                const icon = e.target.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        });
    }

    setupPasswordStrength() {
        const passwordInput = document.getElementById('register-password');
        if (!passwordInput) return;

        passwordInput.addEventListener('input', (e) => {
            this.updatePasswordStrength(e.target.value);
        });
    }

    handleUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const tab = urlParams.get('tab');
        
        if (tab === 'register' || tab === 'login') {
            this.switchTab(tab);
        }
    }

    updatePasswordStrength(password) {
        const strengthFill = document.getElementById('strength-fill');
        const strengthText = document.getElementById('strength-text');
        
        if (!strengthFill || !strengthText) return;

        const strength = this.calculatePasswordStrength(password);
        
        strengthFill.className = 'strength-fill';
        strengthText.textContent = 'Password strength';
        
        if (password.length === 0) {
            strengthFill.style.width = '0%';
            strengthText.textContent = 'Password strength';
            return;
        }

        if (strength < 2) {
            strengthFill.classList.add('weak');
            strengthFill.style.width = '25%';
            strengthText.textContent = 'Weak';
        } else if (strength < 3) {
            strengthFill.classList.add('fair');
            strengthFill.style.width = '50%';
            strengthText.textContent = 'Fair';
        } else if (strength < 4) {
            strengthFill.classList.add('good');
            strengthFill.style.width = '75%';
            strengthText.textContent = 'Good';
        } else {
            strengthFill.classList.add('strong');
            strengthFill.style.width = '100%';
            strengthText.textContent = 'Strong';
        }
    }

    calculatePasswordStrength(password) {
        let strength = 0;
        
        if (password.length >= 8) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;
        
        return strength;
    }

    setupSocialAuth() {
        const socialBtns = document.querySelectorAll('.social-btn');
        socialBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const provider = e.target.closest('.social-btn').classList.contains('google') ? 'google' : 'facebook';
                this.handleSocialAuth(provider);
            });
        });
    }

    handleSocialAuth(provider) {
        // Simulate social auth
        this.showLoading();
        setTimeout(() => {
            this.hideLoading();
            this.showSuccess(`Successfully signed in with ${provider.charAt(0).toUpperCase() + provider.slice(1)}!`);
        }, 2000);
    }

    async handleLogin(e) {
        e.preventDefault();
        this.clearErrors();

        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        // Validation
        if (!this.validateEmail(email)) {
            this.showError('login-email-error', 'Please enter a valid email address');
            return;
        }

        if (!password || password.length < 6) {
            this.showError('login-password-error', 'Password must be at least 6 characters');
            return;
        }

        // Simulate API call
        this.showLoading();
        try {
            await this.simulateApiCall();
            this.hideLoading();
            this.showSuccess('Welcome back! You have been successfully logged in.');
        } catch (error) {
            this.hideLoading();
            this.showError('login-password-error', 'Invalid email or password');
        }
    }

    async handleRegister(e) {
        e.preventDefault();
        this.clearErrors();

        const formData = new FormData(e.target);
        const firstname = formData.get('firstname');
        const lastname = formData.get('lastname');
        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');
        const termsAgreement = formData.get('terms-agreement');

        // Validation
        let hasErrors = false;

        if (!firstname || firstname.length < 2) {
            this.showError('register-firstname-error', 'First name must be at least 2 characters');
            hasErrors = true;
        }

        if (!lastname || lastname.length < 2) {
            this.showError('register-lastname-error', 'Last name must be at least 2 characters');
            hasErrors = true;
        }

        if (!this.validateEmail(email)) {
            this.showError('register-email-error', 'Please enter a valid email address');
            hasErrors = true;
        }

        if (!password || password.length < 8) {
            this.showError('register-password-error', 'Password must be at least 8 characters');
            hasErrors = true;
        }

        if (password !== confirmPassword) {
            this.showError('register-confirm-password-error', 'Passwords do not match');
            hasErrors = true;
        }

        if (!termsAgreement) {
            this.showError('register-confirm-password-error', 'You must agree to the terms and conditions');
            hasErrors = true;
        }

        if (hasErrors) return;

        // Simulate API call
        this.showLoading();
        try {
            await this.simulateApiCall();
            this.hideLoading();
            this.showSuccess('Account created successfully! Welcome to SkillSprint!');
        } catch (error) {
            this.hideLoading();
            this.showError('register-email-error', 'Email already exists. Please try a different email.');
        }
    }

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    clearErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(element => {
            element.textContent = '';
        });
    }

    showLoading() {
        const activeForm = document.querySelector('.auth-form-container:not(.hidden)');
        const submitBtn = activeForm.querySelector('.auth-btn');
        if (submitBtn) {
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
        }
    }

    hideLoading() {
        const submitBtns = document.querySelectorAll('.auth-btn');
        submitBtns.forEach(btn => {
            btn.classList.remove('loading');
            btn.disabled = false;
        });
    }

    showSuccess(message) {
        const modal = document.getElementById('success-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalMessage = document.getElementById('modal-message');
        
        if (modal && modalTitle && modalMessage) {
            modalTitle.textContent = 'Success!';
            modalMessage.textContent = message;
            modal.classList.add('show');
        }
    }

    closeModal() {
        const modal = document.getElementById('success-modal');
        if (modal) {
            modal.classList.remove('show');
        }
    }

    async simulateApiCall() {
        // Simulate network delay
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate 90% success rate
                if (Math.random() > 0.1) {
                    resolve();
                } else {
                    reject(new Error('API Error'));
                }
            }, 1500);
        });
    }
}

// Global auth manager instance
let authManager = null;

// Function to initialize auth page when needed
function initializeAuthPage() {
    if (!authManager) {
        authManager = new AuthManager();
    }
    return authManager;
}

// Function to check if auth page is loaded
function isAuthPageLoaded() {
    return authManager !== null;
}

// Additional utility functions
const utils = {
    // Debounce function for input validation
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Format phone number
    formatPhoneNumber: (value) => {
        const phoneNumber = value.replace(/\D/g, '');
        const phoneNumberLength = phoneNumber.length;
        if (phoneNumberLength < 4) return phoneNumber;
        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    },

    // Generate random user ID
    generateUserId: () => {
        return 'user_' + Math.random().toString(36).substr(2, 9);
    }
};

// Export for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AuthManager, utils };
}
