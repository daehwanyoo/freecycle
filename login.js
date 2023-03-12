// import wixUsersBackend from 'wix-users-backend';

// export function myBackendFunction(email, password) {
//   return wixUsersBackend.login(email, password)
//     .then( (sessionToken) => {
//       return {sessionToken, "approved": true};
//     } )
//     .catch( (error) => {
//       return {"approved": false, "reason": error};
//     } );
// }

const users = [
	{email: 'user1@gmail.com', password: '123'},
	{email: 'user2@gmail.com', password: '234'},
	{email: 'user3@gmail.com', password: '345'}
];

const loginBtn = document.getElementById('login-btn');
const signupLink = document.getElementById('signup-link');

loginBtn.addEventListener('click', function(event) {
	event.preventDefault(); // Prevent form submission

	// Get user input values
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;

	// Check if user exists
	const userExists = users.some(function(user) {
		return user.email === email && user.password === password;
	});

	if (userExists) {
		//alert('Login successful!');
		window.location.href = 'zip.html';
	}

     else {
		const signup = confirm('User not found. Do you want to sign up?');
		if (signup) {
			// Redirect to sign up page
			window.location.href = 'signup.html';
		}
	}
});

signupLink.addEventListener('click', function(event) {
	event.preventDefault(); // Prevent link click behavior
	window.location.href = 'signup.html'; // Redirect to sign up page
});
