document.getElementById('signOutButton').addEventListener('click', function () {
    localStorage.removeItem('currentUser');
    window.location.href = 'signup.html';
});

