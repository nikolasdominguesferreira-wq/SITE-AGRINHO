// Função de Busca Simples
function searchFunc() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        const text = card.querySelector('p').innerText.toLowerCase();
        
        if (title.includes(input) || text.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

    if (input !== "") {
        console.log("Usuário buscou por: " + input);
        // Aqui poderia ser implementada uma chamada para API de dados agrários
    }
}

// Permitir busca ao apertar "Enter"
document.getElementById('searchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchFunc();
    }
});

// Efeito de scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
