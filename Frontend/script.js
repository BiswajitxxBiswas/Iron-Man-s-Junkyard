const container = document.querySelector('.container');
const registerBtn=document.querySelector('.register-btn');
const loginBtn=document.querySelector('.login-btn');
const btnL=document.querySelector('.btnLogin-popup');


registerBtn.addEventListener('click',()=>{
    container.classList.add('active');
})
loginBtn.addEventListener('click',()=>{
    container.classList.remove('active');
})

btnL.addEventListener('click',()=>{
    container.classList.remove('active');
})
function toggleMenu() {
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active');
}

// Check if loginForm exists to avoid errors
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        // Handle login form submission with email
        loginForm.addEventListener('submit', async function(event) {
            event.preventDefault(); // Prevent default form submission

            const formData = new FormData(loginForm);
            const email = formData.get('email');
            const password = formData.get('password');

            console.log('Login Details:', { email, password });

            try {
                const response = await axios.post('http://localhost:5000/signin', { email, password });
                console.log('Login successful', response.data);

                if (response.data.success) { // Check if login was successful
                    window.location.href = 'login.html'; // Redirect to login.html
                } else {
                    console.error('Login failed:', response.data.message);
                }
            } catch (error) {
                console.error('Error while signing in:', error);
                // Optional: Display an error message to the user here
            }
        });
    }

    // Other existing functions or event listeners in script.js can go below
});
