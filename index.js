// Collapse

// Scroll reveal Section
ScrollReveal({
    reset: false,
    distance: "2rem",
    duration: 1900,
    viewOffset: { top: -500 },
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .services-container, .projects-box", {
    origin: "bottom",
});
ScrollReveal().reveal(".bx-code, .bxl-sketch, .bxs-paint", {
    scale: 2,
    distance: 0,
});
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });
ScrollReveal().reveal(".icons", { scale: 2, distance: "0" });
ScrollReveal().reveal("#phone ,#name", {
    distance: "4rem",
    origin: "left",
});
ScrollReveal().reveal("#email ,#subject", {
    distance: "4rem",
    origin: "right",
});
ScrollReveal().reveal("#message", { origin: "bottom", distance: "5rem" });

//  Active form
function sendMail() {
    const bodyMessage =
        "<strong>Full Name:</strong> " +
        document.getElementById("name").value +
        "<br><strong>Email:</strong> " +
        document.getElementById("email").value +
        "<br><strong>Phone Number:</strong> " +
        document.getElementById("phone").value +
        "<br><strong>Message:</strong> " +
        document.getElementById("message").value;
    Email.send({
        SecureToken: "df049fb6-5228-4d18-a432-82c77d326ff6",
        To: "austinealex369@gmail.com",
        From: "austinealex369@gmail.com",
        Subject: document.getElementById("subject").value,
        Body: bodyMessage,
    }).then((message) => {
        if (message === "OK") {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Message sent successfully!",
                showConfirmButton: false,
                timer: 1500,
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        }
    });
}
