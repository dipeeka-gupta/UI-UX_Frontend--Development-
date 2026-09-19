document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');
  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
    siteNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const dashboardMenu = document.querySelector('[data-dashboard-menu]');
  const dashboardSidebar = document.querySelector('[data-dashboard-sidebar]');
  if (dashboardMenu && dashboardSidebar) {
    dashboardMenu.addEventListener('click', () => dashboardSidebar.classList.toggle('is-open'));
  }

  const passwordToggle = document.querySelector('[data-password-toggle]');
  const passwordInput = document.querySelector('#password');
  if (passwordToggle && passwordInput) {
    passwordToggle.addEventListener('click', () => {
      const isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password';
      passwordToggle.textContent = isPassword ? 'Hide' : 'Show';
      passwordToggle.setAttribute('aria-label', `${isPassword ? 'Hide' : 'Show'} password`);
    });
  }

  const loginForm = document.querySelector('[data-login-form]');
  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = loginForm.querySelector('#email');
      const password = loginForm.querySelector('#password');
      const status = loginForm.querySelector('[data-form-status]');
      const emailError = loginForm.querySelector('[data-error="email"]');
      const passwordError = loginForm.querySelector('[data-error="password"]');
      let valid = true;
      email.classList.remove('has-error');
      password.classList.remove('has-error');
      emailError.textContent = '';
      passwordError.textContent = '';
      status.textContent = '';
      if (!email.value.trim()) {
        emailError.textContent = 'Please enter your email address.';
        email.classList.add('has-error');
        valid = false;
      } else if (!email.validity.valid) {
        emailError.textContent = 'Please enter a valid email address.';
        email.classList.add('has-error');
        valid = false;
      }
      if (!password.value) {
        passwordError.textContent = 'Please enter your password.';
        password.classList.add('has-error');
        valid = false;
      } else if (password.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        password.classList.add('has-error');
        valid = false;
      }
      if (valid) {
        status.textContent = 'Login successful. Taking you to your dashboard...';
        window.setTimeout(() => { window.location.href = 'dashboard.html'; }, 450);
      }
    });
  }
});
