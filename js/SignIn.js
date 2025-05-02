document.addEventListener('DOMContentLoaded', () => {
    const signInForm = document.getElementById('signInForm');
    const registerForm = document.getElementById('registerForm');
  
    const showSection = (id) => {
      document.querySelectorAll('.form-section').forEach(section => {
        section.classList.remove('active');
      });
      document.getElementById(id).classList.add('active');
    };
  
    // Toggle between Sign In and Register sections
    document.getElementById('showSignIn').addEventListener('click', () => showSection('signInSection'));
    document.getElementById('showRegister').addEventListener('click', () => showSection('registerSection'));
  
    // Sign In form submission
    signInForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('signInEmail').value.trim();
      const password = document.getElementById('signInPassword').value;
  
      if (email && password) {
        alert(`Signed in as ${email}`);
        signInForm.reset();
      } else {
        alert('Please fill in all fields.');
      }
    });
  
    // Register form submission
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const email = document.getElementById('regEmail').value.trim();
      const password = document.getElementById('regPassword').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
  
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
  
      alert(`Welcome, ${firstName}! Registration complete.`);
      registerForm.reset();
      showSection('signInSection');
    });
  
    // Show Sign In or Register section when clicking on the navbar link
    document.getElementById('signInNav').addEventListener('click', () => {
      showSection('signInSection');
    });
  
    // Default view
    showSection('signInSection');
  });
  
