window.onload = function () {
    emailjs.init("UpXv67EZcpDK-kuKt");

    function sendMail() {
        var senderName = document.getElementById("sendername").value.trim();
        var replyTo = document.getElementById("replyto").value.trim();
        var message = document.getElementById("message").value.trim();

        if (!senderName || !replyTo || !message) {
            alert("Please fill in all required fields.");
            return;
        }
        var nameRegex = /^[a-zA-Z0-9_-]{4,10}$/;
        if (!nameRegex.test(senderName)) {
            alert("Please enter a valid name.");
            return;
        }

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(replyTo)) {
            alert("Please enter a valid email address.");
            return;
        }

        var params = {
            to: "mhmdtaha818@gmail.com",
            message: `Sender Name : ${senderName}\n\nEmail : ${replyTo}\n\n Message : ${message}`,
        };

        var serviceID = "service_79iqito";
        var templateID = "template_0k49lyf";

        emailjs.send(serviceID, templateID, params)
            .then(function (response) {
                console.log("Email sent:", response);
                alert("Email sent successfully!!");
            })
            .catch(function (error) {
                console.error("Error sending email:", error);
            });
    }

    document.getElementById("sub").addEventListener("click", sendMail);
};




document.getElementById('signOutButton').addEventListener('click', function () {
    localStorage.removeItem('currentUser');
    window.location.href = 'signup.html';
});
