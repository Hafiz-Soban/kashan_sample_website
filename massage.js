
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Form reload hone se bacha raha hai

    emailjs.init("fgy65g7hQV2iW3Pd6"); // Tumhari Public Key

    emailjs.send("service_yc0ihhu", "template_3ulzypu", {
        message: "Someone contacted you from your website!"
    })
    .then(function(response) {
        alert("Message sent successfully!");
    }, function(error) {
        alert("Error sending message. Please try again.");
    });
});

