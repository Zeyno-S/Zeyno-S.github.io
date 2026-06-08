        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorDiv = document.getElementById('error');
            
            errorDiv.textContent = '';
            
            const formData = new FormData();
            formData.append('username', username);
            formData.append('password', password);
            
            if (username === 'user123' && password === 'cheesecake') {
                window.location.href = 'home.html';
            } else {
                errorDiv.textContent = 'Invalid username or password. Try user123 / cheesecake';
            }
        });