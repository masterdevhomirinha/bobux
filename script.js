document.getElementById("login_button").addEventListener("click", function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const username = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    // Verifica as credenciais (substitua por sua lógica de autenticação real)
    if (username === "user" && password === "password") {
        window.location.href = "https://masterdevhomirinha.github.io/robux/"; // Redireciona para o GitHub Pages do site de dashboard
    } else {
        alert("Invalid username or password");
    }
});
