AOS.init({
    duration: 1000,
    once: true
});

document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let msg = document.getElementById("formMessage");

    if(name === "" || email === "" || message === ""){
        msg.style.color = "red";
        msg.textContent = "Please fill all fields.";
        return;
    }

    msg.style.color = "#00f5a0";
    msg.textContent = "Message sent successfully!";
    this.reset();
});