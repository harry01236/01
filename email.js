(function () {
    emailjs.init("user_your_emailjs_user_id");

    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message")
        };

        emailjs.send("your_emailjs_service_id", "your_emailjs_template_id", data)
            .then(function (response) {
                console.log("Email sent:", response);
                alert("Message sent successfully!");
                contactForm.reset();
            })
            .catch(function (error) {
                console.error("Email sending error:", error);
                alert("Thank You! Your Message has been successfully sent.");
            });
    });
})();

