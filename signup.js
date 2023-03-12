const users = [
	{email: 'user1@gmail.com', password: '123'},
	{email: 'user2@gmail.com', password: '234'}
];

const signupBtn = document.getElementById('signup-btn');
const passwordModal = document.getElementById('password-modal');
const closeBtn = document.querySelector('.close');
const createBtn = document.getElementById('create-btn');

signupBtn.addEventListener('click', function(event) {
	event.preventDefault(); // Prevent form submission

	// Get user input value
	const email = document.getElementById('email').value;

	// Check if user exists
	const userExists = users.some(function(user) {
		return user.email === email;
	});

	if (userExists) {
		alert('User already exists. Please log in.');
		// Redirect to login page
	} else {
		// Open password prompt modal
		passwordModal.style.display = 'block';
	}
});

closeBtn.addEventListener('click', function() {
	// Close password prompt modal
	passwordModal.style.display = 'none';
});

createBtn.addEventListener('click', function(event) {
	event.preventDefault(); // Prevent form submission

	// Get user input value
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;

	// Add new user
	users.push({email, password});

	alert('Account created successfully!');
	window.location.href = 'zip.html';
});
