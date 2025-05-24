// Criar estrelas aleatórias
function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        // Tamanho aleatório entre 1px e 3px
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Posição aleatória
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        // Atraso de animação aleatório
        star.style.animationDelay = `${Math.random() * 2}s`;

        starsContainer.appendChild(star);
    }
}

// Pular
document.getElementById('skip-button').addEventListener('click', function () {
    window.location.href = "index.html";
});

// Quando a animação terminar, redireciona para home.html
document.getElementById('star-wars-crawl').addEventListener('animationend', function () {
    window.location.href = "/views/index.html";
});

// Criar estrelas quando a página carregar
window.addEventListener('load', createStars);