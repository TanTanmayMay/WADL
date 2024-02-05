// Define a global array to store user registration data
var userArray = [];

// Function to display registered users
function displayUsers() {
    var userListTable = document.getElementById('userListTable');
    userListTable.innerHTML = ''; // Clear the existing table

    // Create table header
    var tableHeader = userListTable.createTHead();
    var headerRow = tableHeader.insertRow(0);
    var usernameHeader = headerRow.insertCell(0);
    var emailHeader = headerRow.insertCell(1);
    var ageHeader = headerRow.insertCell(2);
    usernameHeader.textContent = 'Username';
    emailHeader.textContent = 'Email';
    ageHeader.textContent = 'Age';

    // Create table body
    var tableBody = userListTable.createTBody();

    // Add user data to the table
    userArray.forEach(function (user, index) {
        var row = tableBody.insertRow(index);
        var usernameCell = row.insertCell(0);
        var emailCell = row.insertCell(1);
        var ageCell = row.insertCell(2);
        usernameCell.textContent = user.username;
        emailCell.textContent = user.email;
        ageCell.textContent = user.age;
    });
}

// Function to update the user registration data
function updateUserData() {
    // You can fetch user data from a server or any other data source
    // For now, we'll use a sample data array
    userArray = [
        { username: 'Tanmay', email: 'tanb.kokate@gmail.com', age: '19' },
        { username: 'Darshan', email: 'darshangohad28525@gmail.com', age: '20' },
    ];

    displayUsers();
}

// Call updateUserData on page load to display initial user data
updateUserData();

// Function to submit the registration form
function submitForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;
    var password = document.getElementById('password').value;

    var userData = {
        username: username,
        email: email,
        age: age,
        password: password
    };

    // Add the user data to the local array
    userArray.push(userData);

    // Display the updated list of registered users
    displayUsers();

    // Using AJAX to send data to a local array (you can replace this with a server endpoint)
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/register', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('User registered successfully!');
        }
    };
    xhr.send(JSON.stringify(userData));
}
