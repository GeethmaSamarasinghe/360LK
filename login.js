function showTab(tab) {
            // Update tab buttons
            const tabs = document.querySelectorAll('.tab-btn');
            tabs.forEach(t => t.classList.remove('active'));
            event.target.classList.add('active');
            
            // Update form sections
            const forms = document.querySelectorAll('.form-section');
            forms.forEach(f => f.classList.remove('active'));
            
            if (tab === 'login') {
                document.getElementById('loginForm').classList.add('active');
                document.querySelector('.form-header h2').textContent = 'Hi Traveller !';
                document.querySelector('.form-header p').textContent = 'Login to continue your virtual journey through Sri Lanka';
            } else {
                document.getElementById('signupForm').classList.add('active');
                document.querySelector('.form-header h2').textContent = 'Create Account';
                document.querySelector('.form-header p').textContent = 'Join 360°LK and start exploring Sri Lanka virtually';
            }
            
            // Hide messages
            document.getElementById('successMessage').classList.remove('show');
            document.getElementById('errorMessage').classList.remove('show');
        }
        
        function togglePassword(inputId) {
            const input = document.getElementById(inputId);
            const button = input.nextElementSibling;
            const icon = button.querySelector('i');

            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('bi-eye');
                icon.classList.add('bi-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('bi-eye-slash');
                icon.classList.add('bi-eye');
            }
        }
        
        // Form submission handling (demo)
        document.querySelector('#loginForm form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Login functionality will be connected to backend API');
        });
        
        document.querySelector('#signupForm form').addEventListener('submit', function(e) {
            e.preventDefault();
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (password !== confirmPassword) {
                document.getElementById('errorMessage').textContent = 'Passwords do not match!';
                document.getElementById('errorMessage').classList.add('show');
                return;
            }
            
            if (password.length < 8) {
                document.getElementById('errorMessage').textContent = 'Password must be at least 8 characters!';
                document.getElementById('errorMessage').classList.add('show');
                return;
            }
            
            alert('Signup functionality will be connected to backend API');
            document.getElementById('successMessage').classList.add('show');
            setTimeout(() => {
                showTab('login');
            }, 2000);
        });