// Initialize EmailJS when the DOM is ready
document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("-h_Txx3rYncWIo2OY"); // Replace with your actual EmailJS user ID
});

const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
};

const btn = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_6guzq9b';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
        document.getElementById("form").reset(); // Reset form after submission
    }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
    });
});
