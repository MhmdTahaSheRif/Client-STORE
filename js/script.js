function setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

let lastAssignedId = parseInt(localStorage.getItem('lastAssignedId')) || 0;
function generateNextId() {
    lastAssignedId++;
    localStorage.setItem('lastAssignedId', lastAssignedId);
    return lastAssignedId;
}

const signUp = e => {
    e.preventDefault();

    let username = document.getElementById('username').value.trim(),
        phone = document.getElementById('phone').value.trim(),
        email = document.getElementById('email').value.trim(),
        pwd = document.getElementById('pwd').value.trim();

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const pwderror = document.getElementById('pwderror');
    const usernamePattern = /^[a-zA-Z0-9_-]{4,10}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pwdpattern = /^[a-zA-Z0-9_-]{8,20}$/;
    const isValid = true;

    function isValidMobileNumber(input) {


        if (input.length !== 12 || input.charAt(3) !== '-') {
            return false;
        }

        const numberPart = input.substring(0, 3) + input.substring(4);
        if (isNaN(numberPart)) {
            return false;
        }

        const firstThree = input.substring(0, 3);
        if (firstThree !== "010" && firstThree !== "011" && firstThree !== "012" && firstThree !== "015") {
            return false;
        }
        return true;
    }

    if (!usernamePattern.test(username)) {
        usernameError.textContent = 'Username must be 4-10 characters, alphanumeric';
        isValid = false;
    } else {
        usernameError.textContent = '';
    }

    if (!emailPattern.test(email)) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    if (!isValidMobileNumber(phone)) {
        phoneError.textContent = 'Invalid phone number format xxx-xxxxxxx';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }
    if (!pwdpattern.test(pwd)) {
        pwderror.textContent = 'Password Must be at leaast 8 char or digits';
        isValid = false;
    } else {
        pwderror.textContent = '';
    }
    if (!isValid) {
        return;
    }


    let alldata = JSON.parse(localStorage.getItem('alldata'))
    if (alldata == null) {
        alldata = [];
    }

    const user = {
        id: generateNextId(),
        username: username,
        email: email,
        phone: phone,
        pwd: pwd,
        cart: []
    };
    setCurrentUser(user);

    alldata.push(user)
    localStorage.setItem('alldata', JSON.stringify(alldata));
    window.location.href = 'gallary.html';
};




// --------------------SignIN----------------------
function signIn(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.toLowerCase();
    const password = document.getElementById('pwd').value;

    const adminAcc = [
        { email: 'admin@gmail.com', password: '123123123' },
    ];
    const isAdmin = adminAcc.some(Acc => (
        Acc.email === email && Acc.password === password
    ));

    if (isAdmin) {

        window.location.href = 'admingallary.html';
    } else {
        let alldata = JSON.parse(localStorage.getItem('alldata'));


        if (alldata.length > 0) {
            let foundUser = alldata.find(user => {
                return (
                    user.email.toLowerCase() === email &&
                    user.pwd === password
                );
            });


            if (foundUser) {
                setCurrentUser(foundUser);
                window.location.href = "gallary.html";
            } else {
                alert("Invalid email, or password. Please try again.");
            }
        } else {
            alert("No user data found. Please sign up first.");
        }
    }
}