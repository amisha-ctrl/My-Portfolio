const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");
menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}

// Initialize EmailJS when the DOM is ready
document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("-h_Txx3rYncWIo2OY"); // Replace with your actual EmailJS user ID
});

function sendEmail(event) {
    event.preventDefault(); // Prevent form submission to avoid page reload

    // Get values from the form
    const fullName = document.getElementById('fullName').value;
    const userEmail = document.getElementById('userEmail').value;
    const message = document.getElementById('message').value;

    // Check if all fields are filled
    if (fullName && userEmail && message) {
        // Send email using EmailJS
        emailjs.send("service_ij8jbsi", "template_6guzq9b", {
            user_name: fullName,
            user_email: userEmail,
            message: message
        })
        .then(function(response) {
            alert("Message sent successfully!");
            document.getElementById("contactForm").reset(); // Reset form after submission
        }, function(error) {
            alert("Failed to send message. Please try again later.");
        });
    } else {
        alert("Please fill in all fields.");
    }
}
