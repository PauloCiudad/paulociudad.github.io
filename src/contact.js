document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario si hay errores
    
    let isValid = true;
    const inputs = document.querySelectorAll("input, textarea");

    inputs.forEach(input => {
        const errorMessage = input.nextElementSibling;
        if (!input.value.trim()) {
            input.classList.add("error");
            errorMessage.style.display = "block";
            isValid = false;
        } else {
            input.classList.remove("error");
            errorMessage.style.display = "none";
        }
    });

    if (isValid) {
        alert("Formulario enviado correctamente.");
    }
});
